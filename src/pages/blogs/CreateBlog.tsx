import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { QuillToolbar } from "./quill-toolbar/QuillToolbar";
import { auth, db } from "@/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { customMessage, generateSlug } from "@/lib/funcHelper";
import LogoutBtn from "../auth/LogoutBtn";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;

      const q = query(collection(db, "blogs"), where("slug", "==", slug));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        const data = snapshot.docs[0].data();
        setTitle(data?.title || "");
        setContent(data?.content || "");
      }
    };

    fetchBlog();
  }, [slug]);

  const handlePublish = async () => {
    if (!title.trim() || !content.trim()) {
      customMessage.error("Tiêu đề với nội dung không thể để trống.");
      return;
    }

    try {
      setLoading(true);
      const user = auth.currentUser;
      if (!user)
        throw new Error(
          "Bạn chưa được cấp quyền, vui lòng liên hệ với admin hoặc IT"
        );

      if (slug) {
        const q = query(collection(db, "blogs"), where("slug", "==", slug));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          const blogDoc = snapshot.docs[0];
          const ref = doc(db, "blogs", blogDoc.id);

          await updateDoc(ref, {
            title: title.trim(),
            description: description.trim(),
            content,
            updatedAt: serverTimestamp(),
          });

          customMessage.success("Bài viết đã được cập nhật!");
          navigate("/blogs/" + slug, { replace: true });
          return;
        } else {
          customMessage.error("Không tìm thấy bài viết để cập nhật!");
          return;
        }
      }

      const newSlug = generateSlug(title);

      await addDoc(collection(db, "blogs"), {
        title: title.trim(),
        description: description.trim(),
        slug: newSlug,
        content,
        createdAt: serverTimestamp(),
        author: {
          id: user.uid,
          email: user.email,
        },
      });

      customMessage.success("Bài viết đã được xuất bản!");
      setTitle("");
      setContent("");
      navigate("/blogs/" + newSlug, { replace: true });
    } catch (err) {
      console.error(err);
      customMessage.error("Xuất bản bài viết thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <LogoutBtn />
      <h1 className="text-3xl font-bold mb-6">Tạo bài viết</h1>

      <input
        type="text"
        placeholder="Nhập tiêu đề bài viết..."
        className="w-full p-3 mb-4 text-lg border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nhập mô tả cho bài viết..."
        className="w-full p-3 mb-4 text-lg border rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <QuillToolbar openSetting={openSetting} setOpenSetting={setOpenSetting} />

      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={{
          toolbar: {
            container: "#toolbar",
          },
        }}
        className="bg-white mt-2 rounded [&_.ql-editor]:min-h-[400px]"
      />

      <div className="flex justify-end mt-6">
        <button
          onClick={handlePublish}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Đang xuất bản..." : "Xuất bản"}
        </button>
      </div>
    </div>
  );
}

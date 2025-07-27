import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "@/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Blog } from "../../types";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import TableOfContents from "./TableOfContent";
import { isAdmin } from "@/lib/funcHelper";
import { useAuth } from "../auth/hooks/useAuth";
import ConfirmModal from "./modals/ConfirmModal";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [docId, setDocId] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const user = useAuth().user;
  const canEdit = user && isAdmin(user?.email);
  const navigate = useNavigate();

  const handleEdit = () => {
    if (!blog?.slug) return;
    navigate(`/admin/blog/edit/${blog.slug}`);
  };

  const handleDeleteConfirmed = async () => {
    if (!docId) return;

    try {
      await deleteDoc(doc(db, "blogs", docId));
      navigate("/blogs");
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Đã xảy ra lỗi khi xóa.");
    }
  };

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;

      const q = query(collection(db, "blogs"), where("slug", "==", slug));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        const docRef = snapshot.docs[0];
        setBlog(docRef.data() as Blog);
        setDocId(docRef.id);
      } else {
        setBlog(null);
      }
    };

    fetchBlog();
  }, [slug]);

  if (!blog) return <LoadingSpinner />;

  return (
    <section className="bg-[#FFF9F6] py-10 relative min-h-screen">
      <div className="flex max-w-7xl mx-auto px-4 md:px-6 w-full gap-10">
        <div className="flex-1 py-12 min-h-screen">
          {canEdit && (
            <div className="flex space-x-2 mt-6">
              <button
                className="px-4 py-2 text-sm font-semibold bg-yellow-400 text-red-900 rounded hover:bg-yellow-300 transition"
                onClick={handleEdit}
              >
                Chỉnh sửa
              </button>
              <button
                className="px-4 py-2 text-sm font-semibold bg-red-600 text-white rounded hover:bg-red-500 transition"
                onClick={() => setShowConfirm(true)}
              >
                Xóa bài viết
              </button>
            </div>
          )}

          <h1 className="text-4xl font-extrabold text-red-800 mb-4 leading-tight drop-shadow-sm">
            {blog?.title}
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <p className="text-sm text-gray-500">
              Cập nhật lần cuối vào{" "}
              <span className="font-medium text-gray-700">
                {blog?.createdAt?.toDate().toLocaleDateString("vi-VN")}
              </span>
            </p>
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-600">
                Chia sẻ:
              </span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={`https://x.com/intent/tweet?url=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="w-full h-0.5 bg-yellow-400 mb-10 rounded" />

          <div
            id="blog-content"
            className="prose prose-lg max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: blog?.content }}
          />

          <div className="mt-12">
            <a
              href="/#services"
              className="inline-flex items-center px-6 py-3 rounded-full bg-red-800 text-white font-semibold hover:bg-red-700 transition shadow-md"
            >
              ← Quay lại dịch vụ
            </a>
          </div>
        </div>

        <div className="hidden xl:block sticky top-32 h-max ml-10 w-64">
          <TableOfContents content={blog?.content} />
        </div>
      </div>

      {showConfirm && (
        <ConfirmModal
          message="Bạn có chắc chắn muốn xóa bài viết này?"
          onCancel={() => setShowConfirm(false)}
          onConfirm={handleDeleteConfirmed}
        />
      )}
    </section>
  );
}

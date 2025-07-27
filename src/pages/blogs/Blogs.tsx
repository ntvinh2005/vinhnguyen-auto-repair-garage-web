import { useEffect, useState } from "react";
import { db } from "@/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Blog } from "../../types";
import { useAuth } from "../auth/hooks/useAuth";
import { isAdmin } from "@/lib/funcHelper";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const user = useAuth().user;
  const canEdit = user && isAdmin(user?.email);

  useEffect(() => {
    const fetchBlogs = async () => {
      const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const results = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        slug: doc.data().slug,
        content: doc.data().content,
        createdAt: doc.data().createdAt,
        author: doc.data().author,
      })) as Blog[];
      setBlogs(results);
    };

    fetchBlogs();
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-red-800 drop-shadow-sm">
        Tất cả các bài viết
      </h1>
      {canEdit && (
        <Link
          to="/admin/blog/create"
          className="fixed bottom-8 right-8 bg-red-700 hover:bg-red-800 text-white px-5 py-3 rounded-full shadow-lg text-sm font-medium z-50 transition flex items-center space-x-2"
        >
          <span className="text-lg">+</span>
          <span>Thêm bài viết</span>
        </Link>
      )}

      {blogs.length === 0 ? (
        <>{!blogs && <LoadingSpinner />}</>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              to={`/blogs/${blog?.slug}`}
              key={blog?.id}
              className="group block bg-white border border-gray-200 rounded-lg p-5 shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-red-700 group-hover:underline mb-2">
                {blog?.title}
              </h2>
              <span className="font-medium text-gray-400">
                {blog?.description}
              </span>
              <p className="text-sm text-gray-500 mb-1">
                Cập nhật:{" "}
                <span className="font-medium text-gray-700">
                  {blog?.createdAt?.toDate().toLocaleDateString("vi-VN", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </span>
              </p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

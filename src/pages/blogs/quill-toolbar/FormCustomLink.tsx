import { useEffect } from "react";
import { Link, ArrowLeft } from "lucide-react";

export default function FormCustomLink() {
  const handleSubmit = () => {};

  return (
    <>
      <div className="dis-flex gap-6 cursor-pointer pl-10">
        <ArrowLeft onClick={() => {}} />
        <Link />
        <p className="decoration-line-underline">Thêm link</p>
      </div>
      <form
        className="gap-16 dis-flex flex-column mx-auto py-20"
        onSubmit={handleSubmit}
      >
        <input placeholder="Enter name" />
        <input placeholder="Paste a link" />
        <input className="mt-10">
          <button className="min-w-20 px-8" onClick={() => handleSubmit()}>
            Xác nhận
          </button>
        </input>
      </form>
    </>
  );
}

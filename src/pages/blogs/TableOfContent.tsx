import { useEffect, useState } from "react";

export default function TableOfContents({ content }: { content: string }) {
  const [toc, setToc] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const headings = Array.from(doc.querySelectorAll("h1, h2")).map(
      (el) => el.textContent?.trim() || ""
    );
    setToc(headings);
  }, [content]);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("#blog-content h1, #blog-content h2")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible: { index: number; top: number }[] = [];

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = headingElements.indexOf(entry.target as HTMLElement);
            visible.push({ index, top: entry.boundingClientRect.top });
          }
        });

        if (visible.length > 0) {
          const closest = visible.reduce((a, b) => (a.top < b.top ? a : b));
          setActiveIndex(closest.index);
        }
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: 0.1,
      }
    );

    headingElements.forEach((el) => observer.observe(el));
    return () => headingElements.forEach((el) => observer.unobserve(el));
  }, [content]);

  return (
    <aside className="pl-4 border-l-2 border-red-200 space-y-4 relative">
      <h3 className="text-lg font-bold mb-3">Mục lục</h3>
      <ul className="space-y-2 items-center">
        {toc.map((title, i) => (
          <li key={i} className="relative flex items-center gap-2 pl-5">
            <span
              className={`w-3 h-3 rounded-full ${
                i === activeIndex
                  ? "bg-red-900 ring-2 ring-red-200"
                  : "bg-gray-300"
              }`}
            ></span>
            <span
              className={`transition-colors duration-200 ${
                i === activeIndex
                  ? "text-red-900 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {title}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

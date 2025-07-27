import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FFF9F6]">{children}</main>
      <Footer />
    </>
  );
}

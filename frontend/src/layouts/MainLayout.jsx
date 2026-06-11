import Navbar from "../components/layout/Navbar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      {children}
    </div>
  );
}

export default MainLayout;
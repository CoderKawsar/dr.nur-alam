import Link from "next/link";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <div className="flex justify-between items-center py-8 px-10 bg-[#0693E3]">
      <div>
        <Link
          href="/"
          className="text-white font-bold text-3xl uppercase hover:text-white/90 transition-colors"
        >
          Dr. Md. Nur Alam
        </Link>
      </div>
      <div>
        <NavMenu />
      </div>
    </div>
  );
}

export default Header;

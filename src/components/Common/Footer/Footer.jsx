import { FaFacebook, FaResearchgate } from "react-icons/fa";

import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#0693E3]">
      <div className="mt-24 px-16 py-12 grid grid-cols-12">
        <div className="col-span-6">
          <Link href="/" className="text-3xl font-bold text-white">
            Dr. Nur Alam
          </Link>
          <div className="mt-4 flex items-center gap-4">
            <Link
              href="https://www.facebook.com/nur.alam.372019"
              target="_blank"
            >
              <FaFacebook className="text-2xl text-white" />
            </Link>
            <Link
              href="https://www.researchgate.net/profile/Md_Nur_Alam2"
              target="_blank"
            >
              <FaResearchgate className="text-2xl text-white" />
            </Link>
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-2 text-white">
          <Link href="/">Home</Link>
          <Link href="/research/publications">Publications</Link>
          <Link href="/research/publications">Projects</Link>
          <Link href="/research/publications">Research Guideline</Link>
        </div>
        <div className="col-span-3 flex flex-col gap-2 text-white">
          <Link href="/research/publications">Paper Presented</Link>
          <Link href="/talks-workshops/talks">Talks/Workshops</Link>
          <Link href="/awards-fellowships/awards">Awards/Fellowships</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
      <p className="text-white text-center py-4">
        © {new Date().getFullYear()} Dr. Nur Alam. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

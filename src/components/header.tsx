"use client";

import Link from "next/link";

function Header() {
  return (
    <nav className="bg-blur flex items-center justify-between font-light rounded-b-3xl text-slate-600 fixed top-0 w-screen h-12 shadow py-2 lg:px-20 px-4 z-10">
      <Link href="/" className="text-sm p-1 ">
        {`< Sid >`}
      </Link>
      <section className="space-x-6">
        <Link href="/#work" className="text-sm p-1 hover:text-black">
          Selected Work
        </Link>

        <Link href="/#experience" className="text-sm p-1 hover:text-black ">
          Experience
        </Link>
      </section>
    </nav>
  );
}

export default Header;

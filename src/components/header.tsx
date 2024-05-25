"use client";

import Link from "next/link";

function Header() {
  return (
    <nav className="bg-blur flex items-center justify-between rounded-b-3xl text-slate-400 fixed top-0 w-screen h-12 shadow py-2 lg:px-20 px-4 z-10">
      <Link href="/" className="text-sm p-1 text-slate-700">
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

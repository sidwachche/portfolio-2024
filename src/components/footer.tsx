"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const socialList = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/siddhaling-wachche/",
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/sidwachche",
    icon: FaSquareTwitter,
  },
  { name: "Github", link: "https://github.com/sidwachche", icon: FaGithub },
];

function Footer() {
  return (
    <footer className="bg-black py-20 px-10 flex flex-col items-center justify-center grow gap-12 text-slate-300 rounded-t-3xl">
      <a
        href="mailto:sidwachche@outlook.com"
        className="underline text-xl font-semibold"
      >
        sidwachche@outlook.com
      </a>
      <section className="flex gap-6">
        {socialList?.map(({ name, link, icon: Icon }) => (
          <Link
            key={name}
            className=""
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={`link to my ${name}`}
          >
            <Icon className="text-3xl" />
          </Link>
        ))}
      </section>
    </footer>
  );
}

export default Footer;

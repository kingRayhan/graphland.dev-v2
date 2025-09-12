import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./icons";

export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/graphland-dev/",
      icon: LinkedInIcon,
    },
    { name: "X", href: "https://x.com/graphlandHQ", icon: TwitterIcon },
    {
      name: "Facebook",
      href: "https://www.facebook.com/GraphlandHQ",
      icon: FacebookIcon,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/graphland.dev",
      icon: InstagramIcon,
    },
  ];
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link href="/" className="font-bold text-xl text-neutral-100">
              Graphland
            </Link>
            <div className="hidden md:block w-px h-4 bg-neutral-700" />
            <p className="text-neutral-400 text-sm text-center md:text-left">
              Custom solutions. Crafted with precision.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-6">
              <Link
                href="/services"
                className="text-neutral-400 hover:text-neutral-100 text-sm transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="text-neutral-400 hover:text-neutral-100 text-sm transition-colors duration-200"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="text-neutral-400 hover:text-neutral-100 text-sm transition-colors duration-200"
              >
                About
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="mailto:hello@graphland.dev"
                className="text-neutral-400 hover:text-neutral-100 text-sm transition-colors duration-200"
              >
                graphland.dev@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800 text-center flex justify-between items-center">
          <p className="text-neutral-500 text-xs">
            © {new Date().getFullYear()} Graphland. All rights reserved.
          </p>

          <div id="social-links">
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="size-6 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-200"
                  title={social.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <social.icon className="size-4 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Link from "next/link";
import { SiGithub, SiTwitter } from "react-icons/si";

const sns = [
  {
    href: "https://github.com/tetsu-sh",
    icon: <SiGithub size={20} />,
    label: "Github",
  },
  {
    href: "https://twitter.com/tetsu04228",
    icon: <SiTwitter size={20} />,
    label: "Twitter",
  },
];
const Footer = () => {
  return (
    <footer>
      <div className="p-10 center bg-neutral-800">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            {sns.map(({ href, icon, label }) => (
              <Link key={href} href={href} passHref>
                <span
                  className="text-neutral-200 hover:text-neutral-500 active:text-gray-600 transition duration-100"
                  aria-label={label}
                >
                  {icon}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-neutral-200 text-sm text-center">
            © {new Date().getFullYear()} Chimu
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

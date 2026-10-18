import Link from "next/link";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link href={"/"}>
      <span
        title="platform-name"
        className={`bg-linear-to-r from-purple-500 via-cyan-400 to-orange-500 bg-clip-text text-transparent ${className} `}
      >
        <strong className="cursor-pointer select-none">Real Battle</strong>
      </span>
    </Link>
  );
};

export default Logo;

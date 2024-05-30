import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-2 hover:opacity-75">
        <Image src={"/logo.svg"} alt="" width={40} height={40} />
        <span className="text-lg font-semibold">Boardbliss</span>
      </div>
    </Link>
  );
};
export default Logo;

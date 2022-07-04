import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Link href='/'>Home</Link>
      <Link href='/about'>about</Link>
      <Link href='/posts'>posts</Link>
    </div>
  );
};

export default Header;

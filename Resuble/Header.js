import Link from "next/link";

export default function Header({ second }) {
  return (
    <>
      <h1>Header {second}</h1>
      <Link href="/about">
        Go to Section
      </Link>
    </>
  );
}

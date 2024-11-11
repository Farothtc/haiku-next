import Link from "next/link";

export default function Page() {
  return (
    <>
      <h3>Hello</h3>
      <Link href={"/login"}>Login here</Link>
    </>
  );
}

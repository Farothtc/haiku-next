import Link from "next/link";

export default function Page() {
  return (
    <>
      <p className="text-center text-2xl text-gray-600 mb-5 ">
        Don&rsquo;t have an account ? <strong>Create One</strong>
      </p>
      <form action=".">
        <div className="mb-3">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs bg-base-100"
          />
        </div>
      </form>
    </>
  );
}

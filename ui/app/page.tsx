import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="wt-title">Welcome</h1>
      <h2>
        Si vous souhaitez voir les article cliquez{" "}
        <Link href="/articles" className="Link">
          ici
        </Link>
      </h2>
    </div>
  );
}

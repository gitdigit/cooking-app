import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="wt-title">List of articles : </h1>
      <table className="text-xl">
        <tr>
          <Link href="/articles/1" className="Link">
            Article 1
          </Link>
        </tr>
        <tr>
          <Link href="/articles/2" className="Link">
            Article 2
          </Link>
        </tr>
        <tr>
          <Link href="/articles/3" className="Link">
            Article 3
          </Link>
        </tr>
      </table>
    </div>
  );
}

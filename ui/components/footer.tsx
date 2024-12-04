import Link from "next/link";

const footer = (
  <footer>
    <table>
      <td>@ 2024</td>
      <td>
        <Link href="/" className="Link">
          Home
        </Link>
      </td>
      <td>
        <Link href="/about" className="Link">
          About us
        </Link>
      </td>
      <td>
        <Link href="/contacts" className="Link">
          To contact us
        </Link>
      </td>
    </table>
  </footer>
);

export default footer;
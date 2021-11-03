import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const user: any = true;
  const username: any = true;

  return (
    <nav className="navbar">
      <ul>
        <li className="push-right">
          <Link href="/">
            <button className="btn-logo">Feed</button>
          </Link>
        </li>
        {/* user is signer in and has username */}
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>

            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed in */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

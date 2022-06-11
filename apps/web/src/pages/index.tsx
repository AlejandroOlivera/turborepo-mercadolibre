import Link from "next/link";
export default function Web() {
  return (
    <div>
      <h1>WEB</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/perfil/perfil">
        <a>Perfil</a>
      </Link>
    </div>
  );
}

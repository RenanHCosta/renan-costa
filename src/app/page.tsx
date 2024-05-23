import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <div className="rounded-full avatar relative">
        <Image
          width={126}
          height={126}
          src={"/avatar.jpg"}
          alt="Renan's avatar profile picture"
          className="rounded-full"
        />
        <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-[0px_0px_0px_3px_black_inset]"></div>
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Renan Costa</h1>
        <span className="text-base text-secondary">
          Front-end Software Engineer
        </span>
      </div>
      <nav>
        <ul className="flex gap-4 text-base font-bold">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/blog">Snippets</Link>
          </li>
          <li>
            <Link href="/blog">Uses</Link>
          </li>
          <li>
            <Link href="/blog">About</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}

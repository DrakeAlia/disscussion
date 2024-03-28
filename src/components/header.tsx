import Link from "next/link";
import { Input } from "./ui/input";
import HeaderAuth from "./header-auth";

export default function Header() {
  return (
    <header className="shadow mb-6">
      <nav className="container flex h-14 items-center justify-between">
        <div>
          <Link href="/" className="font-bold">
            Discuss
          </Link>
        </div>
        <div className="flex justify-center">
          <div>
            <Input />
          </div>
        </div>

        <div className="flex justify-end">
          <HeaderAuth />
        </div>
      </nav>
    </header>
  );
}

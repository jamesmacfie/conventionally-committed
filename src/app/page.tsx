import Logo from "./_components/logo";
import Link from "next/link";
import Check from "./_containers/check";
import { validateMessage } from "./_actions/parser";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link href="https://www.conventionalcommits.org">
          <Logo />
        </Link>
      </div>

      <section className="mt-40">
        <h1 className="text-6xl bold">Conventionally Committed</h1>
        <p className="text-base font-thin mb-10">
          Check if your commit message passes the{" "}
          <Link href="https://www.conventionalcommits.org">
            Conventional commits
          </Link>{" "}
          spec.
        </p>
        <Check parserFn={validateMessage} />
      </section>
    </main>
  );
}

"use client";
import { useState } from "react";
import Result from "../_components/result";

type Props = {
  parserFn: (message: string) => Promise<ParserResult>;
};

export default function Check({ parserFn }: Props) {
  const [result, setResult] = useState<ParserResult | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const message = formData.get("commit-message") as string;

    try {
      const res = await parserFn(message);
      setResult(res);
    } catch (e) {
      console.error("Unknown error", e);
      setResult({
        valid: false,
        error: "Nope, that didn't work.",
      });
    }
  };

  console.log(result);
  return (
    <>
      <form className="flex font-thin" onSubmit={onSubmit}>
        <input
          className="mr-4 w-5/6 text-slate-700 py-4 px-8 rounded-full shadow-lg"
          placeholder="Your commit message..."
          type="text"
          name="commit-message"
        />
        <button className="shadow-lg bg-transparent hover:bg-white hover:text-hotpink py-4 px-8 rounded-full border border-white">
          Check
        </button>
      </form>
      {result ? <Result result={result} /> : null}
    </>
  );
}

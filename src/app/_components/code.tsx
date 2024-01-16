import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Code({ children }: Props) {
  return (
    <code className="text-slate-700 bg-slate-200 rounded-sm px-1 whitespace-pre-line">
      {children}{" "}
    </code>
  );
}

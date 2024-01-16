import { table } from "console";
import Code from "./code";

type Props = {
  result: ParserResult;
};

export default function Result({ result }: Props) {
  const messageClassNames =
    "block flex-grow max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 text-slate-700 px-8 py-4";
  const labelClassNames = "w-24 align-top";
  if (result.valid) {
    return (
      <div className="mt-8 flex justify-center items-center">
        <h2 className="text-massive mr-8">🎉</h2>
        <table className={messageClassNames}>
          <tbody>
            <tr>
              <td className={labelClassNames}>Type:</td>
              <td>
                <Code>{result.type}</Code>
              </td>
            </tr>
            {result.scope && (
              <tr>
                <td className={labelClassNames}>Scope:</td>
                <td>
                  <Code>{result.scope}</Code>
                </td>
              </tr>
            )}
            <tr>
              <td className={labelClassNames}>Subject:</td>
              <td>
                <Code>{result.subject}</Code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="mt-8 flex justify-center items-center">
      <h2 className="text-massive mr-8">😢</h2>
      <table className={messageClassNames}>
        <tbody>
          <h3>{result.error}</h3>
          {result.type && (
            <tr>
              <td className={labelClassNames}>Type:</td>
              <td>
                <Code>{result.type}</Code>
              </td>
            </tr>
          )}
          {result.scope && (
            <tr>
              <td className={labelClassNames}>Scope:</td>
              <td>
                <Code>{result.scope}</Code>
              </td>
            </tr>
          )}
          {result.subject && (
            <tr>
              <td className={labelClassNames}>Subject:</td>
              <td>
                <Code>{result.subject}</Code>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

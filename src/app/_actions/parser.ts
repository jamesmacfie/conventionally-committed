"use server";
const conventionalCommitTypes = require("conventional-commit-types");
const parser = require("conventional-commits-parser").sync;

const defaultTypes = Object.keys(conventionalCommitTypes.types);

// Taken from https://github.com/conventional-changelog/conventional-changelog
const parserOpts = {
  headerPattern: /^(\w*)(?:\((.*)\))?: (.*)$/,
  headerCorrespondence: ["type", "scope", "subject"],
  noteKeywords: ["BREAKING CHANGE"],
  revertPattern:
    /^(?:Revert|revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./i,
  revertCorrespondence: ["header", "hash"],
};
export async function validateMessage(message: string) {
  const result = parser(message, parserOpts);

  console.log(result);

  const baseResult = {
    type: result.type,
    scope: result.scope,
    subject: result.subject,
  };

  if (!result.type) {
    return {
      valid: false,
      error:
        "No type found in commit message. Add a prefix, colon, then a space to indicate what kind of commit the message refers to.",
      ...baseResult,
    } as ParserResult;
  }

  if (!result.subject) {
    return {
      valid: false,
      error: "No subject found.",
      ...baseResult,
    } as ParserResult;
  }

  if (!defaultTypes.includes(result.type)) {
    return {
      valid: false,
      error: "Unknown type.",
      ...baseResult,
    } as ParserResult;
  }

  return {
    valid: true,
    error: null,
    ...baseResult,
  } as ParserResult;
}

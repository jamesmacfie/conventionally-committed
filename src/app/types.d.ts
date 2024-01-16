type ValidParserResult = {
  valid: true;
  type: string;
  scope?: string;
  subject: string;
};

type InvalidParserResult = {
  valid: false;
  error: string;
  type?: string;
  scope?: string;
  subject?: string;
};

type ParserResult = ValidParserResult | InvalidParserResult;

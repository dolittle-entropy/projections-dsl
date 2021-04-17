import { CharStream, Lexer, Parser, Token, TokenStream } from 'antlr4ts';

export interface ILanguage<TLexer extends Lexer, TParser extends Parser, TRoot> {
    getLexerFor(source: CharStream): TLexer;
    getParserFor(tokens: TokenStream): TParser;
    getAstRoot(parser: TParser): TRoot;
    getTokenScope(token: Token): string;
    getHumanTokenName(token: number): string | undefined;
}
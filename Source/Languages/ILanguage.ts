import { CharStream, Lexer, Parser, Token, TokenStream } from 'antlr4ts';
import { languages } from 'monaco-editor-core';

export interface ILanguage<TLexer extends Lexer, TParser extends Parser, TRoot> {
    readonly configuration: languages.LanguageConfiguration;
    getLexerFor(source: CharStream): TLexer;
    getParserFor(tokens: TokenStream): TParser;
    getAstRoot(parser: TParser): TRoot;
    getTokenScope(token: Token): string;
    getHumanTokenName(token: number): string | undefined;
    getQuickFixForExpectedToken(token: number): { title: string, text: string } | undefined;
}
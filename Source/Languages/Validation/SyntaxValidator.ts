import { CharStreams, CommonTokenStream, Lexer, Parser } from 'antlr4ts';
import { editor } from 'monaco-editor-core';

import { ILanguage } from '..';
import { LexerErrorListener } from './LexerErrorListener';
import { ParserErrorListener } from './ParserErrorListener';

export class SyntaxValidator<TLexer extends Lexer, TParser extends Parser, TRoot> {
    private readonly _language: ILanguage<TLexer, TParser, TRoot>;

    constructor(language: ILanguage<TLexer, TParser, TRoot>) {
        this._language = language;
    }
    
    validate(source: string): editor.IMarkerData[] {
        const lexerErrors = new LexerErrorListener(this._language);
        const parserErrors = new ParserErrorListener(this._language);

        const lexer = this._language.getLexerFor(CharStreams.fromString(source));
        lexer.removeErrorListeners();
        lexer.addErrorListener(lexerErrors);

        const parser = this._language.getParserFor(new CommonTokenStream(lexer));
        parser.removeErrorListeners();
        parser.addErrorListener(parserErrors);

        this._language.getAstRoot(parser);

        return [].concat(lexerErrors.errors, parserErrors.errors);
    }
}

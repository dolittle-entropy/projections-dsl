import { Lexer, Parser, RecognitionException, Token } from 'antlr4ts';
import { editor } from 'monaco-editor-core';

import { ILanguage } from '..';

import { ErrorListener } from './ErrorListener';
import { MarkerSeverity } from './MarkerSeverity';

export class ParserErrorListener<TLexer extends Lexer, TParser extends Parser, TRoot> extends ErrorListener<Token, TParser> {
    private readonly _language: ILanguage<TLexer, TParser, TRoot>;
    
    constructor(language: ILanguage<TLexer, TParser, TRoot>) {
        super();
        this._language = language;
    }

    error(recognizer: TParser, _line: number, column: number, _message: string, _error: RecognitionException, offending: Token): editor.IMarkerData {
        const message = `Unexpected "${offending.text}" expected ${this.getHumanExpecting(recognizer)}`;
        return {
            startLineNumber: offending.line,
            endLineNumber: offending.line,
            startColumn: column+1,
            endColumn: column+offending.text.length+1,
            message: message,
            severity: MarkerSeverity.Error,
            code: 'expected:'+recognizer.getExpectedTokens().toArray().join(','),
        };
    }

    private getHumanExpecting(parser: TParser): string {
        const mapped = parser.getExpectedTokens().toArray().map(_ => this._language.getHumanTokenName(_) ?? parser.vocabulary.getSymbolicName(_));
        if (mapped.length === 1) {
            return mapped[0];
        } else if (mapped.length === 2) {
            return mapped[0] + ' or ' + mapped[1];
        } else {
            return mapped.slice(0, -1).join(', ') + ' or ' + mapped[mapped.length-1];
        }
    }
}
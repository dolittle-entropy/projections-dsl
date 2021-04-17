import { Lexer, Parser, RecognitionException } from 'antlr4ts';
import { editor } from 'monaco-editor-core';

import { ILanguage } from '..';

import { ErrorListener } from './ErrorListener';
import { MarkerSeverity } from './MarkerSeverity';

export class LexerErrorListener<TLexer extends Lexer, TParser extends Parser, TRoot> extends ErrorListener<number, TLexer> {
    private readonly _language: ILanguage<TLexer, TParser, TRoot>;
    
    constructor(language: ILanguage<TLexer, TParser, TRoot>) {
        super();
        this._language = language;
    }

    error(recognizer: TLexer, line: number, column: number, message: string, error: RecognitionException, offending: number): editor.IMarkerData {
        console.log('LEXER', message);
        return {
            startLineNumber: line,
            endLineNumber: line,
            startColumn: column,
            endColumn: column+1,
            message: message,
            severity: MarkerSeverity.Error,
        };
    }
}
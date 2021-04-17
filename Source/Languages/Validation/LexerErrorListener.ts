import { Lexer, Parser, RecognitionException } from 'antlr4ts';
import { Interval } from 'antlr4ts/misc/Interval';
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

    error(recognizer: TLexer, line: number, column: number, _message: string, _error: RecognitionException, _offending: number): editor.IMarkerData {
        const start = recognizer._tokenStartCharIndex, end = recognizer._input.index;
        const text = recognizer.inputStream.getText(Interval.of(start, end));
        const message = `Unrecognized "${recognizer.getErrorDisplay(text)}"`;
        return {
            startLineNumber: line,
            endLineNumber: line,
            startColumn: column+1,
            endColumn: column+end-start+2,
            message: message,
            severity: MarkerSeverity.Error,
        };
    }
}
import { ANTLRErrorListener, RecognitionException, Recognizer } from 'antlr4ts';
import { editor } from 'monaco-editor-core';

import { MarkerSeverity } from './MarkerSeverity';

export abstract class ErrorListener<T, TRecognizer extends Recognizer<T,any>> implements ANTLRErrorListener<T> {
    readonly errors: editor.IMarkerData[] = [];

    syntaxError(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
        const error = this.error(recognizer as TRecognizer, line, charPositionInLine, msg, e, offendingSymbol);
        this.errors.push(error);
    }

    abstract error(recognizer: TRecognizer, line: number, column: number, message: string, error: RecognitionException, offending: T | undefined): editor.IMarkerData;
}
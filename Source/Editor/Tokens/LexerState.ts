import { Lexer } from 'antlr4ts';
import { languages } from 'monaco-editor';

export class LexerState implements languages.IState {
    clone(): languages.IState {
        return new LexerState();
    }

    equals(_other: languages.IState): boolean {
        return true;
    }

    toLexer(lexer: Lexer) {
    }

    static fromLexer(lexer: Lexer) {
        return new LexerState();
    }
}

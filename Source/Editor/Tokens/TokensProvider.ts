import { BufferedTokenStream, CharStreams, Lexer, Parser, Token } from 'antlr4ts';
import { languages } from 'monaco-editor';

import { ILanguage } from '@dolittle/projections-dsl.languages';

import { LexerState } from './LexerState';

export class TokensProvider<TLexer extends Lexer, TParser extends Parser, TRoot> implements languages.TokensProvider {
    private readonly _language: ILanguage<TLexer, TParser, TRoot>;

    constructor(language: ILanguage<TLexer, TParser, TRoot>) {
        this._language = language;
    }

    getInitialState(): languages.IState {
        return new LexerState();
    }

    tokenize(line: string, state: languages.IState): languages.ILineTokens {
        const lexer = this._language.getLexerFor(CharStreams.fromString(line));
        lexer.removeErrorListeners();

        (state as LexerState).toLexer(lexer);

        const stream = new BufferedTokenStream(lexer);
        stream.fill();

        const tokens = stream.getTokens();
        const converted: languages.IToken[] = new Array(tokens.length - 1);

        for (let n = 0; n < converted.length; n++) {
            converted[n] = this.convertToken(tokens[n]);
        }
        
        return {
            endState: LexerState.fromLexer(lexer),
            tokens: converted,
        };
    }

    private convertToken(token: Token): languages.IToken {
        return {
            startIndex: token.charPositionInLine,
            scopes: this._language.getTokenScope(token) ?? 'invalid',
        };
    }
}

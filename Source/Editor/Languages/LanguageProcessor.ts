import { Lexer, Parser } from 'antlr4ts';
import { languages } from 'monaco-editor';

import { ILanguage } from '@dolittle/projections-dsl.languages';

import { TokensProvider } from '../Tokens';
import { createWorkerFactoryFor, WorkerFactory } from '../Workers';
import { SyntaxValidator } from '../Validation';

export class LanguageProcessor<TLexer extends Lexer, TParser extends Parser, TRoot> {
    private readonly _language: ILanguage<TLexer, TParser, TRoot>;
    private readonly _workerFactory: WorkerFactory<TLexer, TParser, TRoot>;

    private readonly _tokens: TokensProvider<TLexer, TParser, TRoot>;

    private readonly _syntaxValidator: SyntaxValidator<TLexer, TParser, TRoot>;

    constructor(label: string, language: ILanguage<TLexer, TParser, TRoot>) {
        this._language = language;
        this._workerFactory = createWorkerFactoryFor(label, language);

        this._tokens = new TokensProvider(language);

        this._syntaxValidator = new SyntaxValidator(label, this._workerFactory);
    }

    get tokensProvider(): languages.TokensProvider {
        return this._tokens;
    }

    get syntaxValidator(): SyntaxValidator<TLexer, TParser, TRoot> {
        return this._syntaxValidator;
    }
}

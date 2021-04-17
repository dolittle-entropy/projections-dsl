import { Lexer, Parser } from 'antlr4ts';
import { CancellationToken, editor, languages, Range } from 'monaco-editor';

import { ILanguage } from '@dolittle/projections-dsl.languages';
import { WorkerFactory } from '../Workers';

export class CodeActionProvider<TLexer extends Lexer, TParser extends Parser, TRoot> implements languages.CodeActionProvider {
    private readonly _language: ILanguage<TLexer, TParser, TRoot>;
    private readonly _workerFactory: WorkerFactory<TLexer, TParser, TRoot>;

    constructor(language: ILanguage<TLexer, TParser, TRoot>, workerFactory: WorkerFactory<TLexer, TParser, TRoot>) {
        this._language = language;
        this._workerFactory = workerFactory;
    }

    async provideCodeActions(model: editor.ITextModel, range: Range, context: languages.CodeActionContext, token: CancellationToken): Promise<languages.CodeActionList> {
        const worker = await this._workerFactory(model.uri);
        const actions = await worker.actions(model.uri.toString(true), range, context);
        return { actions, dispose: () => {} };
    }
}
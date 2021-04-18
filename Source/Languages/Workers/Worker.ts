import { Lexer, Parser } from 'antlr4ts';
import { editor, languages, worker } from 'monaco-editor-core';

import { ILanguage } from '..';
import { CodeActionProvider } from '../Actions/CodeActionProvider';
import { Range } from '../Monaco';
import { SyntaxValidator } from '../Validation';


export class Worker<TLexer extends Lexer, TParser extends Parser, TRoot> {
    private readonly _language: ILanguage<TLexer, TParser, TRoot>;
    private readonly _context: worker.IWorkerContext;

    private readonly _syntaxValidator: SyntaxValidator<TLexer, TParser, TRoot>;
    private readonly _codeActionProvider: CodeActionProvider<TLexer, TParser, TRoot>;

    constructor(label: string, language: ILanguage<TLexer, TParser, TRoot>, context: worker.IWorkerContext) {
        this._language = language;
        this._context = context;

        this._syntaxValidator = new SyntaxValidator(language);
        this._codeActionProvider = new CodeActionProvider(label, language);
    }

    async validate(modelUri: string): Promise<editor.IMarkerData[]> {
        const source = this.getSource(modelUri);
        return this._syntaxValidator.validate(source);
    }
    
    async actions(modelUri: string, range: Range, context: languages.CodeActionContext): Promise<readonly languages.CodeAction[]> {
        const source = this.getSource(modelUri);
        return this._codeActionProvider.actionsFor(source, range, context);
    }

    private getSource(modelUri: string): string {
        for (const model of this._context.getMirrorModels()) {
            if (model.uri.toString(true) === modelUri) {
                return model.getValue();
            }
        }

        throw new Error(`Model with URI ${modelUri} was not found in worker`);
    }
}
import { Lexer, Parser } from 'antlr4ts';
import { editor, worker } from 'monaco-editor-core';

import { ILanguage } from '..';
import { SyntaxValidator } from '../Validation';


export class Worker<TLexer extends Lexer, TParser extends Parser, TRoot> {
    private readonly _language: ILanguage<TLexer, TParser, TRoot>;
    private readonly _context: worker.IWorkerContext;

    private readonly _syntaxValidator: SyntaxValidator<TLexer, TParser, TRoot>;

    constructor(language: ILanguage<TLexer, TParser, TRoot>, context: worker.IWorkerContext) {
        this._language = language;
        this._context = context;

        this._syntaxValidator = new SyntaxValidator(language);
    }

    async validate(modelUri: string): Promise<editor.IMarkerData[]> {
        const source = this.getSource(modelUri);
        return this._syntaxValidator.validate(source);
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
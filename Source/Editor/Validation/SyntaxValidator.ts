import { Lexer, Parser } from 'antlr4ts';
import { editor, IDisposable } from 'monaco-editor';

import { WorkerFactory } from '../Workers';

export class SyntaxValidator<TLexer extends Lexer, TParser extends Parser, TRoot> {
    private readonly _label: string;
    private readonly _workerFactory: WorkerFactory<TLexer, TParser, TRoot>;

    private readonly _modelContentChangedListeners: Map<editor.ITextModel, IDisposable> = new Map();

    constructor(label: string, workerFactory: WorkerFactory<TLexer, TParser, TRoot>) {
        this._label = label;
        this._workerFactory = workerFactory;
    }

    addModel(model: editor.ITextModel): void {
        if (!this._modelContentChangedListeners.has(model)) {
            let timeoutHandle: number;
            const listener = model.onDidChangeContent(() => {
                window.clearTimeout(timeoutHandle);
                timeoutHandle = window.setTimeout(() => {
                    this.validate(model);
                }, 500);
            });
            this.validate(model);
            this._modelContentChangedListeners.set(model, listener);
        }
    }

    removeModel(model: editor.ITextModel): void {
        if (this._modelContentChangedListeners.has(model)) {
            const listener = this._modelContentChangedListeners.get(model);
            listener.dispose();
        }
    }

    private async validate(model: editor.ITextModel) {
        const worker = await this._workerFactory(model.uri);
        const markers = await worker.validate(model.uri.toString(true));
        editor.setModelMarkers(model, this._label, markers);
    }
}

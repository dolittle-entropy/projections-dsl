import { Lexer, Parser } from 'antlr4ts';
import { editor, Uri } from 'monaco-editor';

import { ILanguage } from '@dolittle/projections-dsl.languages';
import { Worker } from '@dolittle/projections-dsl.languages/Workers';

import { WorkerFactory } from './WorkerFactory';

export const createWorkerFactoryFor = <TLexer extends Lexer, TParser extends Parser, TRoot>(label: string, language: ILanguage<TLexer, TParser, TRoot>): WorkerFactory<TLexer, TParser, TRoot> => {
    const worker = editor.createWebWorker<Worker<TLexer, TParser, TRoot>>({
        moduleId: 'worker',
        label: label,
        createData: {
            languageId: label,
        },
    });
    worker.getProxy();

    return (...resources: Uri[]) => {
        return worker.withSyncedResources(resources);
    }
};

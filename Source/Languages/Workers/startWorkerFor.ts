import { Lexer, Parser } from 'antlr4ts';
import * as editorworker from 'monaco-editor-core/esm/vs/editor/editor.worker';

import { ILanguage } from '@dolittle/projections-dsl.languages';
import { Worker } from '@dolittle/projections-dsl.languages/Workers';

export const startWorkerFor = <TLexer extends Lexer, TParser extends Parser, TRoot>(language: ILanguage<TLexer, TParser, TRoot>): void => {
    self.onmessage = () => {
        editorworker.initialize((context, createData) => {
            return new Worker(createData.languageId, language, context);
        });
    };
};

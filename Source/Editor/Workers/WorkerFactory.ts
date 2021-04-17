import { Lexer, Parser } from 'antlr4ts';
import { Uri } from 'monaco-editor';

import { Worker } from '@dolittle/projections-dsl.languages/Workers';

export type WorkerFactory<TLexer extends Lexer, TParser extends Parser, TRoot> = (...resources: Uri[]) => Promise<Worker<TLexer, TParser, TRoot>>;

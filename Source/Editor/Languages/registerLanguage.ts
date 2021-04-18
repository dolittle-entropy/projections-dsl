import { ILanguage } from '@dolittle/projections-dsl.languages';
import { Lexer, Parser } from 'antlr4ts';
import { languages } from 'monaco-editor';
import { LanguageProcessor } from './LanguageProcessor';
import { listenToModelAddRemove } from './listenToModelAddRemove';

export const registerLanguage = <TLexer extends Lexer, TParser extends Parser, TRoot>(label: string, language: ILanguage<TLexer, TParser, TRoot>): void => {
    const processor = new LanguageProcessor(label, language);

    languages.register({
        id: label,
    });

    languages.onLanguage(label, () => {
        languages.setLanguageConfiguration(label, language.configuration);
        languages.setTokensProvider(label, processor.tokensProvider);
        languages.registerCodeActionProvider(label, processor.codeActionProvider);

        listenToModelAddRemove((model) => {
            processor.syntaxValidator.addModel(model);
        }, (model) => {
            processor.syntaxValidator.removeModel(model);
        });
    });
};


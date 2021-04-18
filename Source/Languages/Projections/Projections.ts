import { CharStream, TokenStream, Token } from 'antlr4ts';
import { languages } from 'monaco-editor-core';
import { ILanguage } from '../ILanguage';
import { ProjectionsLexer } from './Generated/ProjectionsLexer';
import { ProjectionsContext, ProjectionsParser } from './Generated/ProjectionsParser';

export class Projections implements ILanguage<ProjectionsLexer, ProjectionsParser, ProjectionsContext> {
    readonly configuration: languages.LanguageConfiguration = {
        brackets: [
            ['{', '}'],
            ['[', ']'],
            ['(', ')'],
        ],
        autoClosingPairs: [
            { open: '\'', close: '\''},
            { open: '"', close: '"'},
            { open: '{', close: '}'},
            { open: '[', close: ']'},
            { open: '(', close: ')'},
        ],
    }

    getLexerFor(source: CharStream): ProjectionsLexer {
        return new ProjectionsLexer(source);
    }

    getParserFor(tokens: TokenStream): ProjectionsParser {
        return new ProjectionsParser(tokens);
    }

    getAstRoot(parser: ProjectionsParser): ProjectionsContext {
        return parser.projections();
    }

    getTokenScope(token: Token): string {
        switch (token.type) {
            case ProjectionsLexer.WS:
                return 'white';
            case ProjectionsLexer.L_PAREN:
            case ProjectionsLexer.R_PAREN:
                return 'delimiter.parenthesis';
            case ProjectionsLexer.L_CURLY:
            case ProjectionsLexer.R_CURLY:
                return 'delimiter.curly';
            case ProjectionsLexer.L_BRACKET:
            case ProjectionsLexer.R_BRACKET:
                return 'delimiter.bracket';
            case ProjectionsLexer.ASSIGN:
            case ProjectionsLexer.COMMA:
            case ProjectionsLexer.DOT:
            case ProjectionsLexer.SEMI:
            case ProjectionsLexer.PLUS:
            case ProjectionsLexer.MINUS:
                return 'operator';
            case ProjectionsLexer.PROJECTION:
            case ProjectionsLexer.ID:
            case ProjectionsLexer.FROM:
            case ProjectionsLexer.JOIN:
                return 'keyword';
            case ProjectionsLexer.PROPERTY:
            case ProjectionsLexer.IDENTIFIER_LIT:
            case ProjectionsLexer.GUID_LIT:
                return 'identifier';
            case ProjectionsLexer.TYPE:
                return 'type';
            default:
                return 'invalid';
        }
    }

    getHumanTokenName(token: number): string | undefined {
        switch (token) {
            case ProjectionsLexer.GUID_LIT:
                return 'a GUID';
        }
    }

    getQuickFixForExpectedToken(token: number): { title: string; text: string; } | undefined {
        switch (token) {
            case ProjectionsLexer.GUID_LIT:
                return {
                    title: 'Insert a new GUID',
                    text: `'${this.generateGUID()}'`
                };
        }
        return
    }

    private generateGUID(): string {
        const random = crypto.getRandomValues(new Uint8Array(16));
        const hex = Array.from(random).map(_ => ('0'+_.toString(16)).slice(-2)).join('');
        return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-4${hex.slice(13, 16)}-8${hex.slice(17, 20)}-${hex.slice(20, 32)}`
    }
}
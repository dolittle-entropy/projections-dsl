import { CharStream, TokenStream, Token } from 'antlr4ts';
import { ILanguage } from '../ILanguage';
import { ProjectionsLexer } from './Generated/ProjectionsLexer';
import { ProjectionsContext, ProjectionsParser } from './Generated/ProjectionsParser';

export class Projections implements ILanguage<ProjectionsLexer, ProjectionsParser, ProjectionsContext> {
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
}
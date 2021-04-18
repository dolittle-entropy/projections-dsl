import { CharStreams, CommonTokenStream, Lexer, Parser } from 'antlr4ts';
import { editor, languages } from 'monaco-editor-core';

import { ILanguage } from '..';
import { Range } from '../Monaco';

export class CodeActionProvider<TLexer extends Lexer, TParser extends Parser, TRoot> {
    private readonly _label: string;
    private readonly _language: ILanguage<TLexer, TParser, TRoot>;

    constructor(label: string, language: ILanguage<TLexer, TParser, TRoot>) {
        this._label = label;
        this._language = language;
    }

    actionsFor(source: string, range: Range, context: languages.CodeActionContext): readonly languages.CodeAction[] {
        const actions: languages.CodeAction[] = [];

        for (const marker of context.markers) {
            if ((marker as any).owner === this._label) {
                this.addActionsForMarker(actions, marker);
            }
        }

        return actions;
    }

    private addActionsForMarker(actions: languages.CodeAction[], marker: editor.IMarkerData) {
        if (typeof marker.code === 'string') {
            if (marker.code.startsWith('expected:')) {
                const expectedTokens = marker.code.slice(9).split(',').map(_ => parseInt(_));
                for (const token of expectedTokens) {
                    const quickFix = this._language.getQuickFixForExpectedToken(token);
                    if (quickFix !== undefined) {
                        actions.push({
                            title: quickFix.title,
                            kind: 'quickfix',
                            edit: {
                                edits: [
                                    {
                                        edit: {
                                            range: {
                                                startLineNumber: marker.startLineNumber,
                                                startColumn: marker.startColumn,
                                                endLineNumber: marker.endLineNumber,
                                                endColumn: marker.endColumn,
                                            },
                                            text: quickFix.text
                                        },
                                        resource: (marker as any).resource,
                                    }
                                ]
                            }
                        });
                    }
                }
            }
        }
    }
}
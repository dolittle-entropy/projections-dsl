import { editor } from 'monaco-editor'

export const listenToModelAddRemove = (add: (model: editor.ITextModel) => void, remove: (model: editor.ITextModel) => void): void => {
    editor.onDidCreateModel(add);
    editor.onWillDisposeModel(remove);

    for (const model of editor.getModels()) {
        add(model);
    }
};

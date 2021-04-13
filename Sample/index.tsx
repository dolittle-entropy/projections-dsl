import React from 'react';
import ReactDOM from 'react-dom';

import MonacoEditor from 'react-monaco-editor';

const Root = () => {
    return (
        <div style={{ height: '90vh' }}>
            <MonacoEditor
                language="ts"
                options={{
                    minimap: {
                        enabled: false,
                    },
                }}
            />
        </div>
    );
}

ReactDOM.render(<Root/>, document.getElementById('root'));

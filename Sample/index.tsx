import React from 'react';
import ReactDOM from 'react-dom';

import MonacoEditor from 'react-monaco-editor';

const Root = () => {
    return (
        <div style={{ height: '90vh' }}>
            <MonacoEditor
                language="projections"
                options={{
                    minimap: {
                        enabled: false,
                    },
                }}
                value="projection Hello id=''
    'world' from EventB.Number + EventB.OtherNumber - EventB.LastNumber;
    'something' from {
        join(EventA.String, EventB.String, EventB.OtherString)
    }
}"
            />
        </div>
    );
}

ReactDOM.render(<Root/>, document.getElementById('root'));

lexer grammar ProjectionsLexer;

// Keywords
EVENT: 'event';
PROJECTION: 'projection';
ID: 'id';
FROM: 'from';

// TYPES
BOOLEAN: 'boolean';
STRING: 'string';
TIMESTAMP: 'timestamp';
FLOAT32: 'float32';
FLOAT64: 'float64';
INT8: 'int8';
INT16: 'int16';
INT32: 'int32';
UINT8: 'uint8';
UINT16: 'uint16';
UINT32: 'uint32';

// Builtins
JOIN: 'join';

// Identifiers
TYPE: [\p{Lu}] [_\p{L}\p{N}]*;
PROPERTY: '.' [_\p{L}\p{N}]+;

// Punctuation
L_PAREN: '(';
R_PAREN: ')';
L_CURLY: '{';
R_CURLY: '}';
L_BRACKET: '[';
R_BRACKET: ']';
ASSIGN: '=';
COMMA: ',';
DOT: '.';
COLON: ':';
SEMI: ';';

// Operators
PLUS: '+';
MINUS: '-';

// Literals
GUID_LIT: '\'' HEX_SHORT HEX_SHORT '-' HEX_SHORT '-' HEX_SHORT '-' HEX_SHORT '-' HEX_SHORT HEX_SHORT HEX_SHORT '\'';
IDENTIFIER_LIT: '\'' [_\p{L}\p{N}]+ '\'';
STRING_LIT: '"' ('\\"' | ~('\n' | '\r'))*? '"';

// Hidden
WS: [ \t]+ -> channel(HIDDEN);
NL: [\r\n]+ -> channel(HIDDEN);

// Fragments
fragment HEX_DIGIT: [0-9a-fA-F];
fragment HEX_BYTE: HEX_DIGIT HEX_DIGIT;
fragment HEX_SHORT: HEX_BYTE HEX_BYTE;

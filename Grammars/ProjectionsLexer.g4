lexer grammar ProjectionsLexer;

// Keywords
PROJECTION: 'projection';
ID: 'id';
FROM: 'from';

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
SEMI: ';';

// Operators
PLUS: '+';
MINUS: '-';

// Literals
GUID_LIT: '\'' HEX_SHORT HEX_SHORT '-' HEX_SHORT '-' HEX_SHORT '-' HEX_SHORT '-' HEX_SHORT HEX_SHORT HEX_SHORT '\'';
IDENTIFIER_LIT: '\'' [_\p{L}\p{N}]+ '\'';

// Hidden
WS: [ \t]+ -> channel(HIDDEN);

// Fragments
fragment HEX_DIGIT: [0-9a-fA-F];
fragment HEX_BYTE: HEX_DIGIT HEX_DIGIT;
fragment HEX_SHORT: HEX_BYTE HEX_BYTE;

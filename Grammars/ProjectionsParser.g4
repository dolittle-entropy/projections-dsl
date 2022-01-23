parser grammar ProjectionsParser;

options {
    tokenVocab=ProjectionsLexer;
}

body
    : (event | projection)*
    ;

// COMMON
identifier
    : ID ASSIGN GUID_LIT
    ;

// Events
event
    : EVENT TYPE identifier object
    ;

type
    : (object | enumeration | BOOLEAN | STRING | TIMESTAMP | FLOAT32 | FLOAT64 | INT8 | INT16 | INT32 | UINT8 | UINT16 | UINT32) (arraySuffix)?
    ;

arraySuffix
    : L_BRACKET R_BRACKET
    ;

enumeration
    : L_BRACKET enumarationValues R_BRACKET
    ;

enumarationValues
    : STRING_LIT ( COMMA STRING_LIT )*
    ;

object
    : L_CURLY objectBody R_CURLY
    ;

objectBody
    : objectProperty*
    ;

objectProperty
    : IDENTIFIER_LIT COLON type
    ;


// Projections
projection
    : PROJECTION TYPE identifier L_CURLY projectionBody R_CURLY
    ;

projectionBody
    : projectionField*
    ;

projectionField
    : IDENTIFIER_LIT FROM L_CURLY streamExpression R_CURLY
    | IDENTIFIER_LIT FROM streamExpression SEMI
    ;

streamExpression
    : eventProperty #Property
    | joinExpression #Join
    | streamExpression PLUS streamExpression #Add
    | streamExpression MINUS streamExpression #Subtract
    ;

eventProperty
    : TYPE PROPERTY+
    ;

joinExpression
    : JOIN L_PAREN streamExpression (COMMA streamExpression)* R_PAREN
    ;

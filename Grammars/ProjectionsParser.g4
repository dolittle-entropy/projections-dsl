parser grammar ProjectionsParser;

options {
    tokenVocab=ProjectionsLexer;
}

projections
    : projection*
    ;

projection
    : PROJECTION TYPE identifier L_CURLY projectionBody R_CURLY
    ;

identifier
    : ID ASSIGN GUID_LIT
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

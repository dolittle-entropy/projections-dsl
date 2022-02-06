using Antlr4.Runtime;
using Dolittle.ProjectionsDSL.Parser;

var input = @"
    event EventA id='ba9e25bb-4930-4cb8-b058-7033a4509384' {
        'hello': timestamp
        'world': {
            'answer': int8[]
            'enum': [ ""hello"", ""world"", ""this"", ""is"" ]
        }[]
    }
";

var lexer = new ProjectionsLexer(new AntlrInputStream(input));
var parser = new ProjectionsParser(new CommonTokenStream(lexer));

var body = parser.body();

Console.WriteLine(body.ToStringTree(parser));

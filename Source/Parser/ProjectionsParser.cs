using Antlr4.Runtime;

namespace Dolittle.ProjectionsDSL.Parser;

public partial class ProjectionsParser 
{
    public static BodyContext ParseText(string text)
    {
        var input = new AntlrInputStream(text);
        var lexer = new ProjectionsLexer(input);
        var tokens = new CommonTokenStream(lexer);
        var parser = new ProjectionsParser(tokens);
        return parser.body();
    }
}

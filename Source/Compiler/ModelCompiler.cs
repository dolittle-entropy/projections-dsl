using Dolittle.ProjectionsDSL.Model;
using static Dolittle.ProjectionsDSL.Parser.ProjectionsParser;

namespace Dolittle.ProjectionsDSL.Compiler;

public static class ModelCompiler
{
    public static Body CompileFrom(BodyContext context)
    {
        var visitor = new Visitor();
        return visitor.VisitBody(context);
    }
}
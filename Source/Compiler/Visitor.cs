using Dolittle.ProjectionsDSL.Model;
using Dolittle.ProjectionsDSL.Parser;
using EventVisitor = Dolittle.ProjectionsDSL.Compiler.Events.Visitor;

namespace Dolittle.ProjectionsDSL.Compiler;

public class Visitor : ProjectionsParserBaseVisitor<Body>
{
    public override Body VisitBody(ProjectionsParser.BodyContext context)
    {
        var events = context.@event().Select(_ => new EventVisitor().VisitEvent(_));
        return new Body(events);
    }
}
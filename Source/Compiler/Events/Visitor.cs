using Dolittle.ProjectionsDSL.Compiler.Common;
using Dolittle.ProjectionsDSL.Compiler.Types;
using Dolittle.ProjectionsDSL.Model;
using Dolittle.ProjectionsDSL.Model.Identifiers;
using Dolittle.ProjectionsDSL.Parser;

namespace Dolittle.ProjectionsDSL.Compiler.Events;

public class Visitor : ProjectionsParserBaseVisitor<Event>
{
    public override Event VisitEvent(ProjectionsParser.EventContext context)
    {
        var identifier = new EventIdentifier(new IdentifierVisitor().VisitIdentifier(context.identifier()));
        var name = new EventName(context.TYPE().GetText());
        var type = new ObjectVisitor().VisitObject(context.@object());
        return new Event(identifier, name, type);
    }
}
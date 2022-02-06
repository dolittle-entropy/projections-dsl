using Dolittle.ProjectionsDSL.Model.Identifiers;
using Dolittle.ProjectionsDSL.Parser;

namespace Dolittle.ProjectionsDSL.Compiler.Common;

public class IdentifierVisitor : ProjectionsParserBaseVisitor<Guid>
{
    public override Guid VisitIdentifier(ProjectionsParser.IdentifierContext context)
    {
        var quoted = context.GUID_LIT().GetText();
        var literal = quoted.Substring(1, 36);
        return Guid.Parse(literal);
    }
}
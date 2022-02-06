using Dolittle.ProjectionsDSL.Parser;
using Dolittle.ProjectionsDSL.Types;

namespace Dolittle.ProjectionsDSL.Compiler.Types;

public class EnumVisitor : ProjectionsParserBaseVisitor<EnumType>
{
    public override EnumType VisitEnumeration(ProjectionsParser.EnumerationContext context)
    {
        var values = new List<string>();

        foreach (var value in context.enumarationValues().STRING_LIT())
        {
            values.Add(value.GetText());
        }

        return new EnumType(values);
    }
}
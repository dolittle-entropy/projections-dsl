using Dolittle.ProjectionsDSL.Parser;
using Dolittle.ProjectionsDSL.Types;
using ValueType = Dolittle.ProjectionsDSL.Types.ValueType;

namespace Dolittle.ProjectionsDSL.Compiler.Types;

public class ObjectVisitor : ProjectionsParserBaseVisitor<ObjectType>
{
    public override ObjectType VisitObject(ProjectionsParser.ObjectContext context)
    {
        var properties = new Dictionary<string, ValueType>();
        
        foreach (var property in context.objectBody().objectProperty())
        {
            var name = property.IDENTIFIER_LIT().GetText();
            var type = new Visitor().VisitType(property.type());
            
            properties.Add(name, type);
        }

        return new ObjectType(properties);
    }
}
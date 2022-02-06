using Dolittle.ProjectionsDSL.Parser;
using Dolittle.ProjectionsDSL.Types;
using Dolittle.ProjectionsDSL.Types.Primitives;
using ValueType = Dolittle.ProjectionsDSL.Types.ValueType;

namespace Dolittle.ProjectionsDSL.Compiler.Types;

public class Visitor : ProjectionsParserBaseVisitor<ValueType>
{
    public override ValueType VisitType(ProjectionsParser.TypeContext context)
    {
        var type = GetTypeFrom(context);

        return context.arraySuffix() != null
            ? new ArrayType(type)
            : type;
    }

    ValueType GetTypeFrom(ProjectionsParser.TypeContext context)
    {
        if (context.@object() != null)
        {
            return new ObjectVisitor().VisitObject(context.@object());
        }

        if (context.enumeration() != null)
        {
            return new EnumVisitor().VisitEnumeration(context.enumeration());
        }

        if (context.BOOLEAN() != null)
        {
            return BooleanType.Instance;
        }

        if (context.STRING() != null)
        {
            return StringType.Instance;
        }

        if (context.TIMESTAMP() != null)
        {
            return TimestampType.Instance;
        }

        if (context.INT8() != null)
        {
            return Int8Type.Instance;
        }
        
        return base.VisitType(context);
    }
}
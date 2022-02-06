namespace Dolittle.ProjectionsDSL.Types;

public class ArrayType : ValueType
{
    public ArrayType(ValueType elementType)
    {
        ElementType = elementType;
    }

    public ValueType ElementType { get; }
}
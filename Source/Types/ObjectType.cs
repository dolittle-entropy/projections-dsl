namespace Dolittle.ProjectionsDSL.Types;

public class ObjectType : ValueType
{
    public ObjectType(IReadOnlyDictionary<string, ValueType> properties)
    {
        Properties = properties;
    }
    
    public IReadOnlyDictionary<string, ValueType> Properties { get; }
}
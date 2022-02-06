namespace Dolittle.ProjectionsDSL.Types;

public class EnumType : ValueType
{
    public EnumType(IReadOnlyList<string> values)
    {
        Values = values;
    }

    public IReadOnlyList<string> Values { get; }
}
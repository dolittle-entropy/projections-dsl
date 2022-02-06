using Dolittle.ProjectionsDSL.Model.Identifiers;
using Dolittle.ProjectionsDSL.Types;

namespace Dolittle.ProjectionsDSL.Model;

public class Event
{
    public Event(EventIdentifier identifier, EventName name, ObjectType type)
    {
        Identifier = identifier;
        Name = name;
        Type = type;
    }
    
    public EventIdentifier Identifier { get; }
    
    public EventName Name { get; }
    
    public ObjectType Type { get; }
}
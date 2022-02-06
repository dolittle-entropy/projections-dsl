namespace Dolittle.ProjectionsDSL.Model;

public class Body
{
    public Body(IEnumerable<Event> events)
    {
        Events = events.ToList();
    }
    
    public IReadOnlyList<Event> Events { get; }
}
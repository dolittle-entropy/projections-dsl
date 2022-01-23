import { Projection } from './Projection';

export class Projections {
    private readonly _projections: Projection[] = [];
    
    get projections(): readonly Projection[] {
        return this._projections;
    }
}
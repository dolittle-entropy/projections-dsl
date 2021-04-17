
import { Projections } from '@dolittle/projections-dsl.languages/Projections'
import { startWorkerFor } from '@dolittle/projections-dsl.languages/Workers'

startWorkerFor(new Projections());

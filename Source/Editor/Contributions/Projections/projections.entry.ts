
import { Projections } from '@dolittle/projections-dsl.languages/Projections'

import { registerLanguage } from '../../Languages'

registerLanguage('projections', new Projections());

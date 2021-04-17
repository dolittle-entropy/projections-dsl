#!/bin/bash
cd ./Grammars

antlr4ts ProjectionsLexer.g4 -o ../Source/Languages/Projections/Generated

antlr4ts ProjectionsParser.g4 -visitor -lib ../Source/Languages/Projections/Generated -o ../Source/Languages/Projections/Generated

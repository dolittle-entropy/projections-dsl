#!/bin/bash
cd ./Grammars

antlr4ts ProjectionsLexer.g4 -o ../Source/Languages/Generated

antlr4ts ProjectionsParser.g4 -visitor -lib ../Source/Languages/Generated -o ../Source/Languages/Generated

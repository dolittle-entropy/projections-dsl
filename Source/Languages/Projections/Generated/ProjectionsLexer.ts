// Generated from ProjectionsLexer.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ProjectionsLexer extends Lexer {
	public static readonly PROJECTION = 1;
	public static readonly ID = 2;
	public static readonly FROM = 3;
	public static readonly JOIN = 4;
	public static readonly TYPE = 5;
	public static readonly PROPERTY = 6;
	public static readonly L_PAREN = 7;
	public static readonly R_PAREN = 8;
	public static readonly L_CURLY = 9;
	public static readonly R_CURLY = 10;
	public static readonly L_BRACKET = 11;
	public static readonly R_BRACKET = 12;
	public static readonly ASSIGN = 13;
	public static readonly COMMA = 14;
	public static readonly DOT = 15;
	public static readonly SEMI = 16;
	public static readonly PLUS = 17;
	public static readonly MINUS = 18;
	public static readonly GUID_LIT = 19;
	public static readonly IDENTIFIER_LIT = 20;
	public static readonly WS = 21;
	public static readonly NL = 22;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"PROJECTION", "ID", "FROM", "JOIN", "TYPE", "PROPERTY", "L_PAREN", "R_PAREN", 
		"L_CURLY", "R_CURLY", "L_BRACKET", "R_BRACKET", "ASSIGN", "COMMA", "DOT", 
		"SEMI", "PLUS", "MINUS", "GUID_LIT", "IDENTIFIER_LIT", "WS", "NL", "HEX_DIGIT", 
		"HEX_BYTE", "HEX_SHORT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'projection'", "'id'", "'from'", "'join'", undefined, undefined, 
		"'('", "')'", "'{'", "'}'", "'['", "']'", "'='", "','", "'.'", "';'", 
		"'+'", "'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PROJECTION", "ID", "FROM", "JOIN", "TYPE", "PROPERTY", "L_PAREN", 
		"R_PAREN", "L_CURLY", "R_CURLY", "L_BRACKET", "R_BRACKET", "ASSIGN", "COMMA", 
		"DOT", "SEMI", "PLUS", "MINUS", "GUID_LIT", "IDENTIFIER_LIT", "WS", "NL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ProjectionsLexer._LITERAL_NAMES, ProjectionsLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ProjectionsLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ProjectionsLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "ProjectionsLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return ProjectionsLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ProjectionsLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ProjectionsLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ProjectionsLexer.modeNames; }

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x18\x9F\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x07\x06P\n\x06\f\x06\x0E\x06" +
		"S\v\x06\x03\x07\x03\x07\x06\x07W\n\x07\r\x07\x0E\x07X\x03\b\x03\b\x03" +
		"\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x06\x15\x84\n\x15\r\x15\x0E\x15\x85\x03\x15\x03\x15\x03\x16\x06\x16\x8B" +
		"\n\x16\r\x16\x0E\x16\x8C\x03\x16\x03\x16\x03\x17\x06\x17\x92\n\x17\r\x17" +
		"\x0E\x17\x93\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03" +
		"\x1A\x03\x1A\x03\x1A\x02\x02\x02\x1B\x03\x02\x03\x05\x02\x04\x07\x02\x05" +
		"\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17" +
		"\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13" +
		"%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x021\x02\x023\x02" +
		"\x02\x03\x02\x05\x04\x02\v\v\"\"\x04\x02\f\f\x0F\x0F\x05\x022;CHch\x04" +
		"\u0275\x02C\x02\\\x02\xC2\x02\xD8\x02\xDA\x02\xE0\x02\u0102\x02\u0102" +
		"\x02\u0104\x02\u0104\x02\u0106\x02\u0106\x02\u0108\x02\u0108\x02\u010A" +
		"\x02\u010A\x02\u010C\x02\u010C\x02\u010E\x02\u010E\x02\u0110\x02\u0110" +
		"\x02\u0112\x02\u0112\x02\u0114\x02\u0114\x02\u0116\x02\u0116\x02\u0118" +
		"\x02\u0118\x02\u011A\x02\u011A\x02\u011C\x02\u011C\x02\u011E\x02\u011E" +
		"\x02\u0120\x02\u0120\x02\u0122\x02\u0122\x02\u0124\x02\u0124\x02\u0126" +
		"\x02\u0126\x02\u0128\x02\u0128\x02\u012A\x02\u012A\x02\u012C\x02\u012C" +
		"\x02\u012E\x02\u012E\x02\u0130\x02\u0130\x02\u0132\x02\u0132\x02\u0134" +
		"\x02\u0134\x02\u0136\x02\u0136\x02\u0138\x02\u0138\x02\u013B\x02\u013B" +
		"\x02\u013D\x02\u013D\x02\u013F\x02\u013F\x02\u0141\x02\u0141\x02\u0143" +
		"\x02\u0143\x02\u0145\x02\u0145\x02\u0147\x02\u0147\x02\u0149\x02\u0149" +
		"\x02\u014C\x02\u014C\x02\u014E\x02\u014E\x02\u0150\x02\u0150\x02\u0152" +
		"\x02\u0152\x02\u0154\x02\u0154\x02\u0156\x02\u0156\x02\u0158\x02\u0158" +
		"\x02\u015A\x02\u015A\x02\u015C\x02\u015C\x02\u015E\x02\u015E\x02\u0160" +
		"\x02\u0160\x02\u0162\x02\u0162\x02\u0164\x02\u0164\x02\u0166\x02\u0166" +
		"\x02\u0168\x02\u0168\x02\u016A\x02\u016A\x02\u016C\x02\u016C\x02\u016E" +
		"\x02\u016E\x02\u0170\x02\u0170\x02\u0172\x02\u0172\x02\u0174\x02\u0174" +
		"\x02\u0176\x02\u0176\x02\u0178\x02\u0178\x02\u017A\x02\u017B\x02\u017D" +
		"\x02\u017D\x02\u017F\x02\u017F\x02\u0183\x02\u0184\x02\u0186\x02\u0186" +
		"\x02\u0188\x02\u0189\x02\u018B\x02\u018D\x02\u0190\x02\u0193\x02\u0195" +
		"\x02\u0196\x02\u0198\x02\u019A\x02\u019E\x02\u019F\x02\u01A1\x02\u01A2" +
		"\x02\u01A4\x02\u01A4\x02\u01A6\x02\u01A6\x02\u01A8\x02\u01A9\x02\u01AB" +
		"\x02\u01AB\x02\u01AE\x02\u01AE\x02\u01B0\x02\u01B1\x02\u01B3\x02\u01B5" +
		"\x02\u01B7\x02\u01B7\x02\u01B9\x02\u01BA\x02\u01BE\x02\u01BE\x02\u01C6" +
		"\x02\u01C6\x02\u01C9\x02\u01C9\x02\u01CC\x02\u01CC\x02\u01CF\x02\u01CF" +
		"\x02\u01D1\x02\u01D1\x02\u01D3\x02\u01D3\x02\u01D5\x02\u01D5\x02\u01D7" +
		"\x02\u01D7\x02\u01D9\x02\u01D9\x02\u01DB\x02\u01DB\x02\u01DD\x02\u01DD" +
		"\x02\u01E0\x02\u01E0\x02\u01E2\x02\u01E2\x02\u01E4\x02\u01E4\x02\u01E6" +
		"\x02\u01E6\x02\u01E8\x02\u01E8\x02\u01EA\x02\u01EA\x02\u01EC\x02\u01EC" +
		"\x02\u01EE\x02\u01EE\x02\u01F0\x02\u01F0\x02\u01F3\x02\u01F3\x02\u01F6" +
		"\x02\u01F6\x02\u01F8\x02\u01FA\x02\u01FC\x02\u01FC\x02\u01FE\x02\u01FE" +
		"\x02\u0200\x02\u0200\x02\u0202\x02\u0202\x02\u0204\x02\u0204\x02\u0206" +
		"\x02\u0206\x02\u0208\x02\u0208\x02\u020A\x02\u020A\x02\u020C\x02\u020C" +
		"\x02\u020E\x02\u020E\x02\u0210\x02\u0210\x02\u0212\x02\u0212\x02\u0214" +
		"\x02\u0214\x02\u0216\x02\u0216\x02\u0218\x02\u0218\x02\u021A\x02\u021A" +
		"\x02\u021C\x02\u021C\x02\u021E\x02\u021E\x02\u0220\x02\u0220\x02\u0222" +
		"\x02\u0222\x02\u0224\x02\u0224\x02\u0226\x02\u0226\x02\u0228\x02\u0228" +
		"\x02\u022A\x02\u022A\x02\u022C\x02\u022C\x02\u022E\x02\u022E\x02\u0230" +
		"\x02\u0230\x02\u0232\x02\u0232\x02\u0234\x02\u0234\x02\u023C\x02\u023D" +
		"\x02\u023F\x02\u0240\x02\u0243\x02\u0243\x02\u0245\x02\u0248\x02\u024A" +
		"\x02\u024A\x02\u024C\x02\u024C\x02\u024E\x02\u024E\x02\u0250\x02\u0250" +
		"\x02\u0372\x02\u0372\x02\u0374\x02\u0374\x02\u0378\x02\u0378\x02\u0381" +
		"\x02\u0381\x02\u0388\x02\u0388\x02\u038A\x02\u038C\x02\u038E\x02\u038E" +
		"\x02\u0390\x02\u0391\x02\u0393\x02\u03A3\x02\u03A5\x02\u03AD\x02\u03D1" +
		"\x02\u03D1\x02\u03D4\x02\u03D6\x02\u03DA\x02\u03DA\x02\u03DC\x02\u03DC" +
		"\x02\u03DE\x02\u03DE\x02\u03E0\x02\u03E0\x02\u03E2\x02\u03E2\x02\u03E4" +
		"\x02\u03E4\x02\u03E6\x02\u03E6\x02\u03E8\x02\u03E8\x02\u03EA\x02\u03EA" +
		"\x02\u03EC\x02\u03EC\x02\u03EE\x02\u03EE\x02\u03F0\x02\u03F0\x02\u03F6" +
		"\x02\u03F6\x02\u03F9\x02\u03F9\x02\u03FB\x02\u03FC\x02\u03FF\x02\u0431" +
		"\x02\u0462\x02\u0462\x02\u0464\x02\u0464\x02\u0466\x02\u0466\x02\u0468" +
		"\x02\u0468\x02\u046A\x02\u046A\x02\u046C\x02\u046C\x02\u046E\x02\u046E" +
		"\x02\u0470\x02\u0470\x02\u0472\x02\u0472\x02\u0474\x02\u0474\x02\u0476" +
		"\x02\u0476\x02\u0478\x02\u0478\x02\u047A\x02\u047A\x02\u047C\x02\u047C" +
		"\x02\u047E\x02\u047E\x02\u0480\x02\u0480\x02\u0482\x02\u0482\x02\u048C" +
		"\x02\u048C\x02\u048E\x02\u048E\x02\u0490\x02\u0490\x02\u0492\x02\u0492" +
		"\x02\u0494\x02\u0494\x02\u0496\x02\u0496\x02\u0498\x02\u0498\x02\u049A" +
		"\x02\u049A\x02\u049C\x02\u049C\x02\u049E\x02\u049E\x02\u04A0\x02\u04A0" +
		"\x02\u04A2\x02\u04A2\x02\u04A4\x02\u04A4\x02\u04A6\x02\u04A6\x02\u04A8" +
		"\x02\u04A8\x02\u04AA\x02\u04AA\x02\u04AC\x02\u04AC\x02\u04AE\x02\u04AE" +
		"\x02\u04B0\x02\u04B0\x02\u04B2\x02\u04B2\x02\u04B4\x02\u04B4\x02\u04B6" +
		"\x02\u04B6\x02\u04B8\x02\u04B8\x02\u04BA\x02\u04BA\x02\u04BC\x02\u04BC" +
		"\x02\u04BE\x02\u04BE\x02\u04C0\x02\u04C0\x02\u04C2\x02\u04C3\x02\u04C5" +
		"\x02\u04C5\x02\u04C7\x02\u04C7\x02\u04C9\x02\u04C9\x02\u04CB\x02\u04CB" +
		"\x02\u04CD\x02\u04CD\x02\u04CF\x02\u04CF\x02\u04D2\x02\u04D2\x02\u04D4" +
		"\x02\u04D4\x02\u04D6\x02\u04D6\x02\u04D8\x02\u04D8\x02\u04DA\x02\u04DA" +
		"\x02\u04DC\x02\u04DC\x02\u04DE\x02\u04DE\x02\u04E0\x02\u04E0\x02\u04E2" +
		"\x02\u04E2\x02\u04E4\x02\u04E4\x02\u04E6\x02\u04E6\x02\u04E8\x02\u04E8" +
		"\x02\u04EA\x02\u04EA\x02\u04EC\x02\u04EC\x02\u04EE\x02\u04EE\x02\u04F0" +
		"\x02\u04F0\x02\u04F2\x02\u04F2\x02\u04F4\x02\u04F4\x02\u04F6\x02\u04F6" +
		"\x02\u04F8\x02\u04F8\x02\u04FA\x02\u04FA\x02\u04FC\x02\u04FC\x02\u04FE" +
		"\x02\u04FE\x02\u0500\x02\u0500\x02\u0502\x02\u0502\x02\u0504\x02\u0504" +
		"\x02\u0506\x02\u0506\x02\u0508\x02\u0508\x02\u050A\x02\u050A\x02\u050C" +
		"\x02\u050C\x02\u050E\x02\u050E\x02\u0510\x02\u0510\x02\u0512\x02\u0512" +
		"\x02\u0514\x02\u0514\x02\u0516\x02\u0516\x02\u0518\x02\u0518\x02\u051A" +
		"\x02\u051A\x02\u051C\x02\u051C\x02\u051E\x02\u051E\x02\u0520\x02\u0520" +
		"\x02\u0522\x02\u0522\x02\u0524\x02\u0524\x02\u0526\x02\u0526\x02\u0528" +
		"\x02\u0528\x02\u052A\x02\u052A\x02\u052C\x02\u052C\x02\u052E\x02\u052E" +
		"\x02\u0530\x02\u0530\x02\u0533\x02\u0558\x02\u10A2\x02\u10C7\x02\u10C9" +
		"\x02\u10C9\x02\u10CF\x02\u10CF\x02\u13A2\x02\u13F7\x02\u1E02\x02\u1E02" +
		"\x02\u1E04\x02\u1E04\x02\u1E06\x02\u1E06\x02\u1E08\x02\u1E08\x02\u1E0A" +
		"\x02\u1E0A\x02\u1E0C\x02\u1E0C\x02\u1E0E\x02\u1E0E\x02\u1E10\x02\u1E10" +
		"\x02\u1E12\x02\u1E12\x02\u1E14\x02\u1E14\x02\u1E16\x02\u1E16\x02\u1E18" +
		"\x02\u1E18\x02\u1E1A\x02\u1E1A\x02\u1E1C\x02\u1E1C\x02\u1E1E\x02\u1E1E" +
		"\x02\u1E20\x02\u1E20\x02\u1E22\x02\u1E22\x02\u1E24\x02\u1E24\x02\u1E26" +
		"\x02\u1E26\x02\u1E28\x02\u1E28\x02\u1E2A\x02\u1E2A\x02\u1E2C\x02\u1E2C" +
		"\x02\u1E2E\x02\u1E2E\x02\u1E30\x02\u1E30\x02\u1E32\x02\u1E32\x02\u1E34" +
		"\x02\u1E34\x02\u1E36\x02\u1E36\x02\u1E38\x02\u1E38\x02\u1E3A\x02\u1E3A" +
		"\x02\u1E3C\x02\u1E3C\x02\u1E3E\x02\u1E3E\x02\u1E40\x02\u1E40\x02\u1E42" +
		"\x02\u1E42\x02\u1E44\x02\u1E44\x02\u1E46\x02\u1E46\x02\u1E48\x02\u1E48" +
		"\x02\u1E4A\x02\u1E4A\x02\u1E4C\x02\u1E4C\x02\u1E4E\x02\u1E4E\x02\u1E50" +
		"\x02\u1E50\x02\u1E52\x02\u1E52\x02\u1E54\x02\u1E54\x02\u1E56\x02\u1E56" +
		"\x02\u1E58\x02\u1E58\x02\u1E5A\x02\u1E5A\x02\u1E5C\x02\u1E5C\x02\u1E5E" +
		"\x02\u1E5E\x02\u1E60\x02\u1E60\x02\u1E62\x02\u1E62\x02\u1E64\x02\u1E64" +
		"\x02\u1E66\x02\u1E66\x02\u1E68\x02\u1E68\x02\u1E6A\x02\u1E6A\x02\u1E6C" +
		"\x02\u1E6C\x02\u1E6E\x02\u1E6E\x02\u1E70\x02\u1E70\x02\u1E72\x02\u1E72" +
		"\x02\u1E74\x02\u1E74\x02\u1E76\x02\u1E76\x02\u1E78\x02\u1E78\x02\u1E7A" +
		"\x02\u1E7A\x02\u1E7C\x02\u1E7C\x02\u1E7E\x02\u1E7E\x02\u1E80\x02\u1E80" +
		"\x02\u1E82\x02\u1E82\x02\u1E84\x02\u1E84\x02\u1E86\x02\u1E86\x02\u1E88" +
		"\x02\u1E88\x02\u1E8A\x02\u1E8A\x02\u1E8C\x02\u1E8C\x02\u1E8E\x02\u1E8E" +
		"\x02\u1E90\x02\u1E90\x02\u1E92\x02\u1E92\x02\u1E94\x02\u1E94\x02\u1E96" +
		"\x02\u1E96\x02\u1EA0\x02\u1EA0\x02\u1EA2\x02\u1EA2\x02\u1EA4\x02\u1EA4" +
		"\x02\u1EA6\x02\u1EA6\x02\u1EA8\x02\u1EA8\x02\u1EAA\x02\u1EAA\x02\u1EAC" +
		"\x02\u1EAC\x02\u1EAE\x02\u1EAE\x02\u1EB0\x02\u1EB0\x02\u1EB2\x02\u1EB2" +
		"\x02\u1EB4\x02\u1EB4\x02\u1EB6\x02\u1EB6\x02\u1EB8\x02\u1EB8\x02\u1EBA" +
		"\x02\u1EBA\x02\u1EBC\x02\u1EBC\x02\u1EBE\x02\u1EBE\x02\u1EC0\x02\u1EC0" +
		"\x02\u1EC2\x02\u1EC2\x02\u1EC4\x02\u1EC4\x02\u1EC6\x02\u1EC6\x02\u1EC8" +
		"\x02\u1EC8\x02\u1ECA\x02\u1ECA\x02\u1ECC\x02\u1ECC\x02\u1ECE\x02\u1ECE" +
		"\x02\u1ED0\x02\u1ED0\x02\u1ED2\x02\u1ED2\x02\u1ED4\x02\u1ED4\x02\u1ED6" +
		"\x02\u1ED6\x02\u1ED8\x02\u1ED8\x02\u1EDA\x02\u1EDA\x02\u1EDC\x02\u1EDC" +
		"\x02\u1EDE\x02\u1EDE\x02\u1EE0\x02\u1EE0\x02\u1EE2\x02\u1EE2\x02\u1EE4" +
		"\x02\u1EE4\x02\u1EE6\x02\u1EE6\x02\u1EE8\x02\u1EE8\x02\u1EEA\x02\u1EEA" +
		"\x02\u1EEC\x02\u1EEC\x02\u1EEE\x02\u1EEE\x02\u1EF0\x02\u1EF0\x02\u1EF2" +
		"\x02\u1EF2\x02\u1EF4\x02\u1EF4\x02\u1EF6\x02\u1EF6\x02\u1EF8\x02\u1EF8" +
		"\x02\u1EFA\x02\u1EFA\x02\u1EFC\x02\u1EFC\x02\u1EFE\x02\u1EFE\x02\u1F00" +
		"\x02\u1F00\x02\u1F0A\x02\u1F11\x02\u1F1A\x02\u1F1F\x02\u1F2A\x02\u1F31" +
		"\x02\u1F3A\x02\u1F41\x02\u1F4A\x02\u1F4F\x02\u1F5B\x02\u1F5B\x02\u1F5D" +
		"\x02\u1F5D\x02\u1F5F\x02\u1F5F\x02\u1F61\x02\u1F61\x02\u1F6A\x02\u1F71" +
		"\x02\u1FBA\x02\u1FBD\x02\u1FCA\x02\u1FCD\x02\u1FDA\x02\u1FDD\x02\u1FEA" +
		"\x02\u1FEE\x02\u1FFA\x02\u1FFD\x02\u2104\x02\u2104\x02\u2109\x02\u2109" +
		"\x02\u210D\x02\u210F\x02\u2112\x02\u2114\x02\u2117\x02\u2117\x02\u211B" +
		"\x02\u211F\x02\u2126\x02\u2126\x02\u2128\x02\u2128\x02\u212A\x02\u212A" +
		"\x02\u212C\x02\u212F\x02\u2132\x02\u2135\x02\u2140\x02\u2141\x02\u2147" +
		"\x02\u2147\x02\u2185\x02\u2185\x02\u2C02\x02\u2C30\x02\u2C62\x02\u2C62" +
		"\x02\u2C64\x02\u2C66\x02\u2C69\x02\u2C69\x02\u2C6B\x02\u2C6B\x02\u2C6D" +
		"\x02\u2C6D\x02\u2C6F\x02\u2C72\x02\u2C74\x02\u2C74\x02\u2C77\x02\u2C77" +
		"\x02\u2C80\x02\u2C82\x02\u2C84\x02\u2C84\x02\u2C86\x02\u2C86\x02\u2C88" +
		"\x02\u2C88\x02\u2C8A\x02\u2C8A\x02\u2C8C\x02\u2C8C\x02\u2C8E\x02\u2C8E" +
		"\x02\u2C90\x02\u2C90\x02\u2C92\x02\u2C92\x02\u2C94\x02\u2C94\x02\u2C96" +
		"\x02\u2C96\x02\u2C98\x02\u2C98\x02\u2C9A\x02\u2C9A\x02\u2C9C\x02\u2C9C" +
		"\x02\u2C9E\x02\u2C9E\x02\u2CA0\x02\u2CA0\x02\u2CA2\x02\u2CA2\x02\u2CA4" +
		"\x02\u2CA4\x02\u2CA6\x02\u2CA6\x02\u2CA8\x02\u2CA8\x02\u2CAA\x02\u2CAA" +
		"\x02\u2CAC\x02\u2CAC\x02\u2CAE\x02\u2CAE\x02\u2CB0\x02\u2CB0\x02\u2CB2" +
		"\x02\u2CB2\x02\u2CB4\x02\u2CB4\x02\u2CB6\x02\u2CB6\x02\u2CB8\x02\u2CB8" +
		"\x02\u2CBA\x02\u2CBA\x02\u2CBC\x02\u2CBC\x02\u2CBE\x02\u2CBE\x02\u2CC0" +
		"\x02\u2CC0\x02\u2CC2\x02\u2CC2\x02\u2CC4\x02\u2CC4\x02\u2CC6\x02\u2CC6" +
		"\x02\u2CC8\x02\u2CC8\x02\u2CCA\x02\u2CCA\x02\u2CCC\x02\u2CCC\x02\u2CCE" +
		"\x02\u2CCE\x02\u2CD0\x02\u2CD0\x02\u2CD2\x02\u2CD2\x02\u2CD4\x02\u2CD4" +
		"\x02\u2CD6\x02\u2CD6\x02\u2CD8\x02\u2CD8\x02\u2CDA\x02\u2CDA\x02\u2CDC" +
		"\x02\u2CDC\x02\u2CDE\x02\u2CDE\x02\u2CE0\x02\u2CE0\x02\u2CE2\x02\u2CE2" +
		"\x02\u2CE4\x02\u2CE4\x02\u2CED\x02\u2CED\x02\u2CEF\x02\u2CEF\x02\u2CF4" +
		"\x02\u2CF4\x02\uA642\x02\uA642\x02\uA644\x02\uA644\x02\uA646\x02\uA646" +
		"\x02\uA648\x02\uA648\x02\uA64A\x02\uA64A\x02\uA64C\x02\uA64C\x02\uA64E" +
		"\x02\uA64E\x02\uA650\x02\uA650\x02\uA652\x02\uA652\x02\uA654\x02\uA654" +
		"\x02\uA656\x02\uA656\x02\uA658\x02\uA658\x02\uA65A\x02\uA65A\x02\uA65C" +
		"\x02\uA65C\x02\uA65E\x02\uA65E\x02\uA660\x02\uA660\x02\uA662\x02\uA662" +
		"\x02\uA664\x02\uA664\x02\uA666\x02\uA666\x02\uA668\x02\uA668\x02\uA66A" +
		"\x02\uA66A\x02\uA66C\x02\uA66C\x02\uA66E\x02\uA66E\x02\uA682\x02\uA682" +
		"\x02\uA684\x02\uA684\x02\uA686\x02\uA686\x02\uA688\x02\uA688\x02\uA68A" +
		"\x02\uA68A\x02\uA68C\x02\uA68C\x02\uA68E\x02\uA68E\x02\uA690\x02\uA690" +
		"\x02\uA692\x02\uA692\x02\uA694\x02\uA694\x02\uA696\x02\uA696\x02\uA698" +
		"\x02\uA698\x02\uA69A\x02\uA69A\x02\uA69C\x02\uA69C\x02\uA724\x02\uA724" +
		"\x02\uA726\x02\uA726\x02\uA728\x02\uA728\x02\uA72A\x02\uA72A\x02\uA72C" +
		"\x02\uA72C\x02\uA72E\x02\uA72E\x02\uA730\x02\uA730\x02\uA734\x02\uA734" +
		"\x02\uA736\x02\uA736\x02\uA738\x02\uA738\x02\uA73A\x02\uA73A\x02\uA73C" +
		"\x02\uA73C\x02\uA73E\x02\uA73E\x02\uA740\x02\uA740\x02\uA742\x02\uA742" +
		"\x02\uA744\x02\uA744\x02\uA746\x02\uA746\x02\uA748\x02\uA748\x02\uA74A" +
		"\x02\uA74A\x02\uA74C\x02\uA74C\x02\uA74E\x02\uA74E\x02\uA750\x02\uA750" +
		"\x02\uA752\x02\uA752\x02\uA754\x02\uA754\x02\uA756\x02\uA756\x02\uA758" +
		"\x02\uA758\x02\uA75A\x02\uA75A\x02\uA75C\x02\uA75C\x02\uA75E\x02\uA75E" +
		"\x02\uA760\x02\uA760\x02\uA762\x02\uA762\x02\uA764\x02\uA764\x02\uA766" +
		"\x02\uA766\x02\uA768\x02\uA768\x02\uA76A\x02\uA76A\x02\uA76C\x02\uA76C" +
		"\x02\uA76E\x02\uA76E\x02\uA770\x02\uA770\x02\uA77B\x02\uA77B\x02\uA77D" +
		"\x02\uA77D\x02\uA77F\x02\uA780\x02\uA782\x02\uA782\x02\uA784\x02\uA784" +
		"\x02\uA786\x02\uA786\x02\uA788\x02\uA788\x02\uA78D\x02\uA78D\x02\uA78F" +
		"\x02\uA78F\x02\uA792\x02\uA792\x02\uA794\x02\uA794\x02\uA798\x02\uA798" +
		"\x02\uA79A\x02\uA79A\x02\uA79C\x02\uA79C\x02\uA79E\x02\uA79E\x02\uA7A0" +
		"\x02\uA7A0\x02\uA7A2\x02\uA7A2\x02\uA7A4\x02\uA7A4\x02\uA7A6\x02\uA7A6" +
		"\x02\uA7A8\x02\uA7A8\x02\uA7AA\x02\uA7AA\x02\uA7AC\x02\uA7B0\x02\uA7B2" +
		"\x02\uA7B6\x02\uA7B8\x02\uA7B8\x02\uFF23\x02\uFF3C\x02\u0402\x03\u0429" +
		"\x03\u04B2\x03\u04D5\x03\u0C82\x03\u0CB4\x03\u18A2\x03\u18C1\x03\uD402" +
		"\x03\uD41B\x03\uD436\x03\uD44F\x03\uD46A\x03\uD483\x03\uD49E\x03\uD49E" +
		"\x03\uD4A0\x03\uD4A1\x03\uD4A4\x03\uD4A4\x03\uD4A7\x03\uD4A8\x03\uD4AB" +
		"\x03\uD4AE\x03\uD4B0\x03\uD4B7\x03\uD4D2\x03\uD4EB\x03\uD506\x03\uD507" +
		"\x03\uD509\x03\uD50C\x03\uD50F\x03\uD516\x03\uD518\x03\uD51E\x03\uD53A" +
		"\x03\uD53B\x03\uD53D\x03\uD540\x03\uD542\x03\uD546\x03\uD548\x03\uD548" +
		"\x03\uD54C\x03\uD552\x03\uD56E\x03\uD587\x03\uD5A2\x03\uD5BB\x03\uD5D6" +
		"\x03\uD5EF\x03\uD60A\x03\uD623\x03\uD63E\x03\uD657\x03\uD672\x03\uD68B" +
		"\x03\uD6AA\x03\uD6C2\x03\uD6E4\x03\uD6FC\x03\uD71E\x03\uD736\x03\uD758" +
		"\x03\uD770\x03\uD792\x03\uD7AA\x03\uD7CC\x03\uD7CC\x03\uE902\x03\uE923" +
		"\x03\u0285\x022\x02;\x02C\x02\\\x02a\x02a\x02c\x02|\x02\xAC\x02\xAC\x02" +
		"\xB4\x02\xB5\x02\xB7\x02\xB7\x02\xBB\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02" +
		"\xD8\x02\xDA\x02\xF8\x02\xFA\x02\u02C3\x02\u02C8\x02\u02D3\x02\u02E2\x02" +
		"\u02E6\x02\u02EE\x02\u02EE\x02\u02F0\x02\u02F0\x02\u0372\x02\u0376\x02" +
		"\u0378\x02\u0379\x02\u037C\x02\u037F\x02\u0381\x02\u0381\x02\u0388\x02" +
		"\u0388\x02\u038A\x02\u038C\x02\u038E\x02\u038E\x02\u0390\x02\u03A3\x02" +
		"\u03A5\x02\u03F7\x02\u03F9\x02\u0483\x02\u048C\x02\u0531\x02\u0533\x02" +
		"\u0558\x02\u055B\x02\u055B\x02\u0563\x02\u0589\x02\u05D2\x02\u05EC\x02" +
		"\u05F2\x02\u05F4\x02\u0622\x02\u064C\x02\u0662\x02\u066B\x02\u0670\x02" +
		"\u0671\x02\u0673\x02\u06D5\x02\u06D7\x02\u06D7\x02\u06E7\x02\u06E8\x02" +
		"\u06F0\x02\u06FE\x02\u0701\x02\u0701\x02\u0712\x02\u0712\x02\u0714\x02" +
		"\u0731\x02\u074F\x02\u07A7\x02\u07B3\x02\u07B3\x02\u07C2\x02\u07EC\x02" +
		"\u07F6\x02\u07F7\x02\u07FC\x02\u07FC\x02\u0802\x02\u0817\x02\u081C\x02" +
		"\u081C\x02\u0826\x02\u0826\x02\u082A\x02\u082A\x02\u0842\x02\u085A\x02" +
		"\u08A2\x02\u08B6\x02\u08B8\x02\u08BF\x02\u0906\x02\u093B\x02\u093F\x02" +
		"\u093F\x02\u0952\x02\u0952\x02\u095A\x02\u0963\x02\u0968\x02\u0971\x02" +
		"\u0973\x02\u0982\x02\u0987\x02\u098E\x02\u0991\x02\u0992\x02\u0995\x02" +
		"\u09AA\x02\u09AC\x02\u09B2\x02\u09B4\x02\u09B4\x02\u09B8\x02\u09BB\x02" +
		"\u09BF\x02\u09BF\x02\u09D0\x02\u09D0\x02\u09DE\x02\u09DF\x02\u09E1\x02" +
		"\u09E3\x02\u09E8\x02\u09F3\x02\u09F6\x02\u09FB\x02\u0A07\x02\u0A0C\x02" +
		"\u0A11\x02\u0A12\x02\u0A15\x02\u0A2A\x02\u0A2C\x02\u0A32\x02\u0A34\x02" +
		"\u0A35\x02\u0A37\x02\u0A38\x02\u0A3A\x02\u0A3B\x02\u0A5B\x02\u0A5E\x02" +
		"\u0A60\x02\u0A60\x02\u0A68\x02\u0A71\x02\u0A74\x02\u0A76\x02\u0A87\x02" +
		"\u0A8F\x02\u0A91\x02\u0A93\x02\u0A95\x02\u0AAA\x02\u0AAC\x02\u0AB2\x02" +
		"\u0AB4\x02\u0AB5\x02\u0AB7\x02\u0ABB\x02\u0ABF\x02\u0ABF\x02\u0AD2\x02" +
		"\u0AD2\x02\u0AE2\x02\u0AE3\x02\u0AE8\x02\u0AF1\x02\u0AFB\x02\u0AFB\x02" +
		"\u0B07\x02\u0B0E\x02\u0B11\x02\u0B12\x02\u0B15\x02\u0B2A\x02\u0B2C\x02" +
		"\u0B32\x02\u0B34\x02\u0B35\x02\u0B37\x02\u0B3B\x02\u0B3F\x02\u0B3F\x02" +
		"\u0B5E\x02\u0B5F\x02\u0B61\x02\u0B63\x02\u0B68\x02\u0B71\x02\u0B73\x02" +
		"\u0B79\x02\u0B85\x02\u0B85\x02\u0B87\x02\u0B8C\x02\u0B90\x02\u0B92\x02" +
		"\u0B94\x02\u0B97\x02\u0B9B\x02\u0B9C\x02\u0B9E\x02\u0B9E\x02\u0BA0\x02" +
		"\u0BA1\x02\u0BA5\x02\u0BA6\x02\u0BAA\x02\u0BAC\x02\u0BB0\x02\u0BBB\x02" +
		"\u0BD2\x02\u0BD2\x02\u0BE8\x02\u0BF4\x02\u0C07\x02\u0C0E\x02\u0C10\x02" +
		"\u0C12\x02\u0C14\x02\u0C2A\x02\u0C2C\x02\u0C3B\x02\u0C3F\x02\u0C3F\x02" +
		"\u0C5A\x02\u0C5C\x02\u0C62\x02\u0C63\x02\u0C68\x02\u0C71\x02\u0C7A\x02" +
		"\u0C80\x02\u0C82\x02\u0C82\x02\u0C87\x02\u0C8E\x02\u0C90\x02\u0C92\x02" +
		"\u0C94\x02\u0CAA\x02\u0CAC\x02\u0CB5\x02\u0CB7\x02\u0CBB\x02\u0CBF\x02" +
		"\u0CBF\x02\u0CE0\x02\u0CE0\x02\u0CE2\x02\u0CE3\x02\u0CE8\x02\u0CF1\x02" +
		"\u0CF3\x02\u0CF4\x02\u0D07\x02\u0D0E\x02\u0D10\x02\u0D12\x02\u0D14\x02" +
		"\u0D3C\x02\u0D3F\x02\u0D3F\x02\u0D50\x02\u0D50\x02\u0D56\x02\u0D58\x02" +
		"\u0D5A\x02\u0D63\x02\u0D68\x02\u0D7A\x02\u0D7C\x02\u0D81\x02\u0D87\x02" +
		"\u0D98\x02\u0D9C\x02\u0DB3\x02\u0DB5\x02\u0DBD\x02\u0DBF\x02\u0DBF\x02" +
		"\u0DC2\x02\u0DC8\x02\u0DE8\x02\u0DF1\x02\u0E03\x02\u0E32\x02\u0E34\x02" +
		"\u0E35\x02\u0E42\x02\u0E48\x02\u0E52\x02\u0E5B\x02\u0E83\x02\u0E84\x02" +
		"\u0E86\x02\u0E86\x02\u0E89\x02\u0E8A\x02\u0E8C\x02\u0E8C\x02\u0E8F\x02" +
		"\u0E8F\x02\u0E96\x02\u0E99\x02\u0E9B\x02\u0EA1\x02\u0EA3\x02\u0EA5\x02" +
		"\u0EA7\x02\u0EA7\x02\u0EA9\x02\u0EA9\x02\u0EAC\x02\u0EAD\x02\u0EAF\x02" +
		"\u0EB2\x02\u0EB4\x02\u0EB5\x02\u0EBF\x02\u0EBF\x02\u0EC2\x02\u0EC6\x02" +
		"\u0EC8\x02\u0EC8\x02\u0ED2\x02\u0EDB\x02\u0EDE\x02\u0EE1\x02\u0F02\x02" +
		"\u0F02\x02\u0F22\x02\u0F35\x02\u0F42\x02\u0F49\x02\u0F4B\x02\u0F6E\x02" +
		"\u0F8A\x02\u0F8E\x02\u1002\x02\u102C\x02\u1041\x02\u104B\x02\u1052\x02" +
		"\u1057\x02\u105C\x02\u105F\x02\u1063\x02\u1063\x02\u1067\x02\u1068\x02" +
		"\u1070\x02\u1072\x02\u1077\x02\u1083\x02\u1090\x02\u1090\x02\u1092\x02" +
		"\u109B\x02\u10A2\x02\u10C7\x02\u10C9\x02\u10C9\x02\u10CF\x02\u10CF\x02" +
		"\u10D2\x02\u10FC\x02\u10FE\x02\u124A\x02\u124C\x02\u124F\x02\u1252\x02" +
		"\u1258\x02\u125A\x02\u125A\x02\u125C\x02\u125F\x02\u1262\x02\u128A\x02" +
		"\u128C\x02\u128F\x02\u1292\x02\u12B2\x02\u12B4\x02\u12B7\x02\u12BA\x02" +
		"\u12C0\x02\u12C2\x02\u12C2\x02\u12C4\x02\u12C7\x02\u12CA\x02\u12D8\x02" +
		"\u12DA\x02\u1312\x02\u1314\x02\u1317\x02\u131A\x02\u135C\x02\u136B\x02" +
		"\u137E\x02\u1382\x02\u1391\x02\u13A2\x02\u13F7\x02\u13FA\x02\u13FF\x02" +
		"\u1403\x02\u166E\x02\u1671\x02\u1681\x02\u1683\x02\u169C\x02\u16A2\x02" +
		"\u16EC\x02\u16F0\x02\u16FA\x02\u1702\x02\u170E\x02\u1710\x02\u1713\x02" +
		"\u1722\x02\u1733\x02\u1742\x02\u1753\x02\u1762\x02\u176E\x02\u1770\x02" +
		"\u1772\x02\u1782\x02\u17B5\x02\u17D9\x02\u17D9\x02\u17DE\x02\u17DE\x02" +
		"\u17E2\x02\u17EB\x02\u17F2\x02\u17FB\x02\u1812\x02\u181B\x02\u1822\x02" +
		"\u1879\x02\u1882\x02\u1886\x02\u1889\x02\u18AA\x02\u18AC\x02\u18AC\x02" +
		"\u18B2\x02\u18F7\x02\u1902\x02\u1920\x02\u1948\x02\u196F\x02\u1972\x02" +
		"\u1976\x02\u1982\x02\u19AD\x02\u19B2\x02\u19CB\x02\u19D2\x02\u19DC\x02" +
		"\u1A02\x02\u1A18\x02\u1A22\x02\u1A56\x02\u1A82\x02\u1A8B\x02\u1A92\x02" +
		"\u1A9B\x02\u1AA9\x02\u1AA9\x02\u1B07\x02\u1B35\x02\u1B47\x02\u1B4D\x02" +
		"\u1B52\x02\u1B5B\x02\u1B85\x02\u1BA2\x02\u1BB0\x02\u1BE7\x02\u1C02\x02" +
		"\u1C25\x02\u1C42\x02\u1C4B\x02\u1C4F\x02\u1C7F\x02\u1C82\x02\u1C8A\x02" +
		"\u1CEB\x02\u1CEE\x02\u1CF0\x02\u1CF3\x02\u1CF7\x02\u1CF8\x02\u1D02\x02" +
		"\u1DC1\x02\u1E02\x02\u1F17\x02\u1F1A\x02\u1F1F\x02\u1F22\x02\u1F47\x02" +
		"\u1F4A\x02\u1F4F\x02\u1F52\x02\u1F59\x02\u1F5B\x02\u1F5B\x02\u1F5D\x02" +
		"\u1F5D\x02\u1F5F\x02\u1F5F\x02\u1F61\x02\u1F7F\x02\u1F82\x02\u1FB6\x02" +
		"\u1FB8\x02\u1FBE\x02\u1FC0\x02\u1FC0\x02\u1FC4\x02\u1FC6\x02\u1FC8\x02" +
		"\u1FCE\x02\u1FD2\x02\u1FD5\x02\u1FD8\x02\u1FDD\x02\u1FE2\x02\u1FEE\x02" +
		"\u1FF4\x02\u1FF6\x02\u1FF8\x02\u1FFE\x02\u2072\x02\u2073\x02\u2076\x02" +
		"\u207B\x02\u2081\x02\u208B\x02\u2092\x02\u209E\x02\u2104\x02\u2104\x02" +
		"\u2109\x02\u2109\x02\u210C\x02\u2115\x02\u2117\x02\u2117\x02\u211B\x02" +
		"\u211F\x02\u2126\x02\u2126\x02\u2128\x02\u2128\x02\u212A\x02\u212A\x02" +
		"\u212C\x02\u212F\x02\u2131\x02\u213B\x02\u213E\x02\u2141\x02\u2147\x02" +
		"\u214B\x02\u2150\x02\u2150\x02\u2152\x02\u218B\x02\u2462\x02\u249D\x02" +
		"\u24EC\x02\u2501\x02\u2778\x02\u2795\x02\u2C02\x02\u2C30\x02\u2C32\x02" +
		"\u2C60\x02\u2C62\x02\u2CE6\x02\u2CED\x02\u2CF0\x02\u2CF4\x02\u2CF5\x02" +
		"\u2CFF\x02\u2CFF\x02\u2D02\x02\u2D27\x02\u2D29\x02\u2D29\x02\u2D2F\x02" +
		"\u2D2F\x02\u2D32\x02\u2D69\x02\u2D71\x02\u2D71\x02\u2D82\x02\u2D98\x02" +
		"\u2DA2\x02\u2DA8\x02\u2DAA\x02\u2DB0\x02\u2DB2\x02\u2DB8\x02\u2DBA\x02" +
		"\u2DC0\x02\u2DC2\x02\u2DC8\x02\u2DCA\x02\u2DD0\x02\u2DD2\x02\u2DD8\x02" +
		"\u2DDA\x02\u2DE0\x02\u2E31\x02\u2E31\x02\u3007\x02\u3009\x02\u3023\x02" +
		"\u302B\x02\u3033\x02\u3037\x02\u303A\x02\u303E\x02\u3043\x02\u3098\x02" +
		"\u309F\x02\u30A1\x02\u30A3\x02\u30FC\x02\u30FE\x02\u3101\x02\u3107\x02" +
		"\u312F\x02\u3133\x02\u3190\x02\u3194\x02\u3197\x02\u31A2\x02\u31BC\x02" +
		"\u31F2\x02\u3201\x02\u3222\x02\u322B\x02\u324A\x02\u3251\x02\u3253\x02" +
		"\u3261\x02\u3282\x02\u328B\x02\u32B3\x02\u32C1\x02\u3402\x02\u4DB7\x02" +
		"\u4E02\x02\u9FD7\x02\uA002\x02\uA48E\x02\uA4D2\x02\uA4FF\x02\uA502\x02" +
		"\uA60E\x02\uA612\x02\uA62D\x02\uA642\x02\uA670\x02\uA681\x02\uA69F\x02" +
		"\uA6A2\x02\uA6F1\x02\uA719\x02\uA721\x02\uA724\x02\uA78A\x02\uA78D\x02" +
		"\uA7B0\x02\uA7B2\x02\uA7B9\x02\uA7F9\x02\uA803\x02\uA805\x02\uA807\x02" +
		"\uA809\x02\uA80C\x02\uA80E\x02\uA824\x02\uA832\x02\uA837\x02\uA842\x02" +
		"\uA875\x02\uA884\x02\uA8B5\x02\uA8D2\x02\uA8DB\x02\uA8F4\x02\uA8F9\x02" +
		"\uA8FD\x02\uA8FD\x02\uA8FF\x02\uA8FF\x02\uA902\x02\uA927\x02\uA932\x02" +
		"\uA948\x02\uA962\x02\uA97E\x02\uA986\x02\uA9B4\x02\uA9D1\x02\uA9DB\x02" +
		"\uA9E2\x02\uA9E6\x02\uA9E8\x02\uAA00\x02\uAA02\x02\uAA2A\x02\uAA42\x02" +
		"\uAA44\x02\uAA46\x02\uAA4D\x02\uAA52\x02\uAA5B\x02\uAA62\x02\uAA78\x02" +
		"\uAA7C\x02\uAA7C\x02\uAA80\x02\uAAB1\x02\uAAB3\x02\uAAB3\x02\uAAB7\x02" +
		"\uAAB8\x02\uAABB\x02\uAABF\x02\uAAC2\x02\uAAC2\x02\uAAC4\x02\uAAC4\x02" +
		"\uAADD\x02\uAADF\x02\uAAE2\x02\uAAEC\x02\uAAF4\x02\uAAF6\x02\uAB03\x02" +
		"\uAB08\x02\uAB0B\x02\uAB10\x02\uAB13\x02\uAB18\x02\uAB22\x02\uAB28\x02" +
		"\uAB2A\x02\uAB30\x02\uAB32\x02\uAB5C\x02\uAB5E\x02\uAB67\x02\uAB72\x02" +
		"\uABE4\x02\uABF2\x02\uABFB\x02\uAC02\x02\uD7A5\x02\uD7B2\x02\uD7C8\x02" +
		"\uD7CD\x02\uD7FD\x02\uF902\x02\uFA6F\x02\uFA72\x02\uFADB\x02\uFB02\x02" +
		"\uFB08\x02\uFB15\x02\uFB19\x02\uFB1F\x02\uFB1F\x02\uFB21\x02\uFB2A\x02" +
		"\uFB2C\x02\uFB38\x02\uFB3A\x02\uFB3E\x02\uFB40\x02\uFB40\x02\uFB42\x02" +
		"\uFB43\x02\uFB45\x02\uFB46\x02\uFB48\x02\uFBB3\x02\uFBD5\x02\uFD3F\x02" +
		"\uFD52\x02\uFD91\x02\uFD94\x02\uFDC9\x02\uFDF2\x02\uFDFD\x02\uFE72\x02" +
		"\uFE76\x02\uFE78\x02\uFEFE\x02\uFF12\x02\uFF1B\x02\uFF23\x02\uFF3C\x02" +
		"\uFF43\x02\uFF5C\x02\uFF68\x02\uFFC0\x02\uFFC4\x02\uFFC9\x02\uFFCC\x02" +
		"\uFFD1\x02\uFFD4\x02\uFFD9\x02\uFFDC\x02\uFFDE\x02\x02\x03\r\x03\x0F\x03" +
		"(\x03*\x03<\x03>\x03?\x03A\x03O\x03R\x03_\x03\x82\x03\xFC\x03\u0109\x03" +
		"\u0135\x03\u0142\x03\u017A\x03\u018C\x03\u018D\x03\u0282\x03\u029E\x03" +
		"\u02A2\x03\u02D2\x03\u02E3\x03\u02FD\x03\u0302\x03\u0325\x03\u0332\x03" +
		"\u034C\x03\u0352\x03\u0377\x03\u0382\x03\u039F\x03\u03A2\x03\u03C5\x03" +
		"\u03CA\x03\u03D1\x03\u03D3\x03\u03D7\x03\u0402\x03\u049F\x03\u04A2\x03" +
		"\u04AB\x03\u04B2\x03\u04D5\x03\u04DA\x03\u04FD\x03\u0502\x03\u0529\x03" +
		"\u0532\x03\u0565\x03\u0602\x03\u0738\x03\u0742\x03\u0757\x03\u0762\x03" +
		"\u0769\x03\u0802\x03\u0807\x03\u080A\x03\u080A\x03\u080C\x03\u0837\x03" +
		"\u0839\x03\u083A\x03\u083E\x03\u083E\x03\u0841\x03\u0857\x03\u085A\x03" +
		"\u0878\x03\u087B\x03\u08A0\x03\u08A9\x03\u08B1\x03\u08E2\x03\u08F4\x03" +
		"\u08F6\x03\u08F7\x03\u08FD\x03\u091D\x03\u0922\x03\u093B\x03\u0982\x03" +
		"\u09B9\x03\u09BE\x03\u09D1\x03\u09D4\x03\u0A02\x03\u0A12\x03\u0A15\x03" +
		"\u0A17\x03\u0A19\x03\u0A1B\x03\u0A35\x03\u0A42\x03\u0A49\x03\u0A62\x03" +
		"\u0A80\x03\u0A82\x03\u0AA1\x03\u0AC2\x03\u0AC9\x03\u0ACB\x03\u0AE6\x03" +
		"\u0AED\x03\u0AF1\x03\u0B02\x03\u0B37\x03\u0B42\x03\u0B57\x03\u0B5A\x03" +
		"\u0B74\x03\u0B7A\x03\u0B93\x03\u0BAB\x03\u0BB1\x03\u0C02\x03\u0C4A\x03" +
		"\u0C82\x03\u0CB4\x03\u0CC2\x03\u0CF4\x03\u0CFC\x03\u0D01\x03\u0E62\x03" +
		"\u0E80\x03\u1005\x03\u1039\x03\u1054\x03\u1071\x03\u1085\x03\u10B1\x03" +
		"\u10D2\x03\u10EA\x03\u10F2\x03\u10FB\x03\u1105\x03\u1128\x03\u1138\x03" +
		"\u1141\x03\u1152\x03\u1174\x03\u1178\x03\u1178\x03\u1185\x03\u11B4\x03" +
		"\u11C3\x03\u11C6\x03\u11D2\x03\u11DC\x03\u11DE\x03\u11DE\x03\u11E3\x03" +
		"\u11F6\x03\u1202\x03\u1213\x03\u1215\x03\u122D\x03\u1282\x03\u1288\x03" +
		"\u128A\x03\u128A\x03\u128C\x03\u128F\x03\u1291\x03\u129F\x03\u12A1\x03" +
		"\u12AA\x03\u12B2\x03\u12E0\x03\u12F2\x03\u12FB\x03\u1307\x03\u130E\x03" +
		"\u1311\x03\u1312\x03\u1315\x03\u132A\x03\u132C";
	private static readonly _serializedATNSegment1: string =
		"\x03\u1332\x03\u1334\x03\u1335\x03\u1337\x03\u133B\x03\u133F\x03\u133F" +
		"\x03\u1352\x03\u1352\x03\u135F\x03\u1363\x03\u1402\x03\u1436\x03\u1449" +
		"\x03\u144C\x03\u1452\x03\u145B\x03\u1482\x03\u14B1\x03\u14C6\x03\u14C7" +
		"\x03\u14C9\x03\u14C9\x03\u14D2\x03\u14DB\x03\u1582\x03\u15B0\x03\u15DA" +
		"\x03\u15DD\x03\u1602\x03\u1631\x03\u1646\x03\u1646\x03\u1652\x03\u165B" +
		"\x03\u1682\x03\u16AC\x03\u16C2\x03\u16CB\x03\u1702\x03\u171B\x03\u1732" +
		"\x03\u173D\x03\u18A2\x03\u18F4\x03\u1901\x03\u1901\x03\u1AC2\x03\u1AFA" +
		"\x03\u1C02\x03\u1C0A\x03\u1C0C\x03\u1C30\x03\u1C42\x03\u1C42\x03\u1C52" +
		"\x03\u1C6E\x03\u1C74\x03\u1C91\x03\u2002\x03\u239B\x03\u2402\x03\u2470" +
		"\x03\u2482\x03\u2545\x03\u3002\x03\u3430\x03\u4402\x03\u4648\x03\u6802" +
		"\x03\u6A3A\x03\u6A42\x03\u6A60\x03\u6A62\x03\u6A6B\x03\u6AD2\x03\u6AEF" +
		"\x03\u6B02\x03\u6B31\x03\u6B42\x03\u6B45\x03\u6B52\x03\u6B5B\x03\u6B5D" +
		"\x03\u6B63\x03\u6B65\x03\u6B79\x03\u6B7F\x03\u6B91\x03\u6F02\x03\u6F46" +
		"\x03\u6F52\x03\u6F52\x03\u6F95\x03\u6FA1\x03\u6FE2\x03\u6FE2\x03\u7002" +
		"\x03\u87EE\x03\u8802\x03\u8AF4\x03\uB002\x03\uB003\x03\uBC02\x03\uBC6C" +
		"\x03\uBC72\x03\uBC7E\x03\uBC82\x03\uBC8A\x03\uBC92\x03\uBC9B\x03\uD362" +
		"\x03\uD373\x03\uD402\x03\uD456\x03\uD458\x03\uD49E\x03\uD4A0\x03\uD4A1" +
		"\x03\uD4A4\x03\uD4A4\x03\uD4A7\x03\uD4A8\x03\uD4AB\x03\uD4AE\x03\uD4B0" +
		"\x03\uD4BB\x03\uD4BD\x03\uD4BD\x03\uD4BF\x03\uD4C5\x03\uD4C7\x03\uD507" +
		"\x03\uD509\x03\uD50C\x03\uD50F\x03\uD516\x03\uD518\x03\uD51E\x03\uD520" +
		"\x03\uD53B\x03\uD53D\x03\uD540\x03\uD542\x03\uD546\x03\uD548\x03\uD548" +
		"\x03\uD54C\x03\uD552\x03\uD554\x03\uD6A7\x03\uD6AA\x03\uD6C2\x03\uD6C4" +
		"\x03\uD6DC\x03\uD6DE\x03\uD6FC\x03\uD6FE\x03\uD716\x03\uD718\x03\uD736" +
		"\x03\uD738\x03\uD750\x03\uD752\x03\uD770\x03\uD772\x03\uD78A\x03\uD78C" +
		"\x03\uD7AA\x03\uD7AC\x03\uD7C4\x03\uD7C6\x03\uD7CD\x03\uD7D0\x03\uD801" +
		"\x03\uE802\x03\uE8C6\x03\uE8C9\x03\uE8D1\x03\uE902\x03\uE945\x03\uE952" +
		"\x03\uE95B\x03\uEE02\x03\uEE05\x03\uEE07\x03\uEE21\x03\uEE23\x03\uEE24" +
		"\x03\uEE26\x03\uEE26\x03\uEE29\x03\uEE29\x03\uEE2B\x03\uEE34\x03\uEE36" +
		"\x03\uEE39\x03\uEE3B\x03\uEE3B\x03\uEE3D\x03\uEE3D\x03\uEE44\x03\uEE44" +
		"\x03\uEE49\x03\uEE49\x03\uEE4B\x03\uEE4B\x03\uEE4D\x03\uEE4D\x03\uEE4F" +
		"\x03\uEE51\x03\uEE53\x03\uEE54\x03\uEE56\x03\uEE56\x03\uEE59\x03\uEE59" +
		"\x03\uEE5B\x03\uEE5B\x03\uEE5D\x03\uEE5D\x03\uEE5F\x03\uEE5F\x03\uEE61" +
		"\x03\uEE61\x03\uEE63\x03\uEE64\x03\uEE66\x03\uEE66\x03\uEE69\x03\uEE6C" +
		"\x03\uEE6E\x03\uEE74\x03\uEE76\x03\uEE79\x03\uEE7B\x03\uEE7E\x03\uEE80" +
		"\x03\uEE80\x03\uEE82\x03\uEE8B\x03\uEE8D\x03\uEE9D\x03\uEEA3\x03\uEEA5" +
		"\x03\uEEA7\x03\uEEAB\x03\uEEAD\x03\uEEBD\x03\uF102\x03\uF10E\x03\x02\x04" +
		"\uA6D8\x04\uA702\x04\uB736\x04\uB742\x04\uB81F\x04\uB822\x04\uCEA3\x04" +
		"\uF802\x04\uFA1F\x04\xA0\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
		"\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02" +
		"\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02" +
		"\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02" +
		"\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02" +
		"\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03" +
		"\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02" +
		"\x02\x02-\x03\x02\x02\x02\x035\x03\x02\x02\x02\x05@\x03\x02\x02\x02\x07" +
		"C\x03\x02\x02\x02\tH\x03\x02\x02\x02\vM\x03\x02\x02\x02\rT\x03\x02\x02" +
		"\x02\x0FZ\x03\x02\x02\x02\x11\\\x03\x02\x02\x02\x13^\x03\x02\x02\x02\x15" +
		"`\x03\x02\x02\x02\x17b\x03\x02\x02\x02\x19d\x03\x02\x02\x02\x1Bf\x03\x02" +
		"\x02\x02\x1Dh\x03\x02\x02\x02\x1Fj\x03\x02\x02\x02!l\x03\x02\x02\x02#" +
		"n\x03\x02\x02\x02%p\x03\x02\x02\x02\'r\x03\x02\x02\x02)\x81\x03\x02\x02" +
		"\x02+\x8A\x03\x02\x02\x02-\x91\x03\x02\x02\x02/\x97\x03\x02\x02\x021\x99" +
		"\x03\x02\x02\x023\x9C\x03\x02\x02\x0256\x07r\x02\x0267\x07t\x02\x0278" +
		"\x07q\x02\x0289\x07l\x02\x029:\x07g\x02\x02:;\x07e\x02\x02;<\x07v\x02" +
		"\x02<=\x07k\x02\x02=>\x07q\x02\x02>?\x07p\x02\x02?\x04\x03\x02\x02\x02" +
		"@A\x07k\x02\x02AB\x07f\x02\x02B\x06\x03\x02\x02\x02CD\x07h\x02\x02DE\x07" +
		"t\x02\x02EF\x07q\x02\x02FG\x07o\x02\x02G\b\x03\x02\x02\x02HI\x07l\x02" +
		"\x02IJ\x07q\x02\x02JK\x07k\x02\x02KL\x07p\x02\x02L\n\x03\x02\x02\x02M" +
		"Q\t\x05\x02\x02NP\t\x06\x02\x02ON\x03\x02\x02\x02PS\x03\x02\x02\x02QO" +
		"\x03\x02\x02\x02QR\x03\x02\x02\x02R\f\x03\x02\x02\x02SQ\x03\x02\x02\x02" +
		"TV\x070\x02\x02UW\t\x06\x02\x02VU\x03\x02\x02\x02WX\x03\x02\x02\x02XV" +
		"\x03\x02\x02\x02XY\x03\x02\x02\x02Y\x0E\x03\x02\x02\x02Z[\x07*\x02\x02" +
		"[\x10\x03\x02\x02\x02\\]\x07+\x02\x02]\x12\x03\x02\x02\x02^_\x07}\x02" +
		"\x02_\x14\x03\x02\x02\x02`a\x07\x7F\x02\x02a\x16\x03\x02\x02\x02bc\x07" +
		"]\x02\x02c\x18\x03\x02\x02\x02de\x07_\x02\x02e\x1A\x03\x02\x02\x02fg\x07" +
		"?\x02\x02g\x1C\x03\x02\x02\x02hi\x07.\x02\x02i\x1E\x03\x02\x02\x02jk\x07" +
		"0\x02\x02k \x03\x02\x02\x02lm\x07=\x02\x02m\"\x03\x02\x02\x02no\x07-\x02" +
		"\x02o$\x03\x02\x02\x02pq\x07/\x02\x02q&\x03\x02\x02\x02rs\x07)\x02\x02" +
		"st\x053\x1A\x02tu\x053\x1A\x02uv\x07/\x02\x02vw\x053\x1A\x02wx\x07/\x02" +
		"\x02xy\x053\x1A\x02yz\x07/\x02\x02z{\x053\x1A\x02{|\x07/\x02\x02|}\x05" +
		"3\x1A\x02}~\x053\x1A\x02~\x7F\x053\x1A\x02\x7F\x80\x07)\x02\x02\x80(\x03" +
		"\x02\x02\x02\x81\x83\x07)\x02\x02\x82\x84\t\x06\x02\x02\x83\x82\x03\x02" +
		"\x02\x02\x84\x85\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x85\x86\x03\x02" +
		"\x02\x02\x86\x87\x03\x02\x02\x02\x87\x88\x07)\x02\x02\x88*\x03\x02\x02" +
		"\x02\x89\x8B\t\x02\x02\x02\x8A\x89\x03\x02\x02\x02\x8B\x8C\x03\x02\x02" +
		"\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x03\x02\x02" +
		"\x02\x8E\x8F\b\x16\x02\x02\x8F,\x03\x02\x02\x02\x90\x92\t\x03\x02\x02" +
		"\x91\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02" +
		"\x93\x94\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x96\b\x17\x02\x02" +
		"\x96.\x03\x02\x02\x02\x97\x98\t\x04\x02\x02\x980\x03\x02\x02\x02\x99\x9A" +
		"\x05/\x18\x02\x9A\x9B\x05/\x18\x02\x9B2\x03\x02\x02\x02\x9C\x9D\x051\x19" +
		"\x02\x9D\x9E\x051\x19\x02\x9E4\x03\x02\x02\x02\b\x02QX\x85\x8C\x93\x03" +
		"\x02\x03\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			ProjectionsLexer._serializedATNSegment0,
			ProjectionsLexer._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ProjectionsLexer.__ATN) {
			ProjectionsLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ProjectionsLexer._serializedATN));
		}

		return ProjectionsLexer.__ATN;
	}

}


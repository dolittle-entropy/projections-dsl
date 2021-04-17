// Generated from ProjectionsParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ProjectionsParserListener } from "./ProjectionsParserListener";
import { ProjectionsParserVisitor } from "./ProjectionsParserVisitor";


export class ProjectionsParser extends Parser {
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
	public static readonly RULE_projections = 0;
	public static readonly RULE_projection = 1;
	public static readonly RULE_identifier = 2;
	public static readonly RULE_projectionBody = 3;
	public static readonly RULE_projectionField = 4;
	public static readonly RULE_streamExpression = 5;
	public static readonly RULE_eventProperty = 6;
	public static readonly RULE_joinExpression = 7;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"projections", "projection", "identifier", "projectionBody", "projectionField", 
		"streamExpression", "eventProperty", "joinExpression",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ProjectionsParser._LITERAL_NAMES, ProjectionsParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ProjectionsParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ProjectionsParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return ProjectionsParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ProjectionsParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ProjectionsParser._ATN, this);
	}
	// @RuleVersion(0)
	public projections(): ProjectionsContext {
		let _localctx: ProjectionsContext = new ProjectionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ProjectionsParser.RULE_projections);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 19;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ProjectionsParser.PROJECTION) {
				{
				{
				this.state = 16;
				this.projection();
				}
				}
				this.state = 21;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public projection(): ProjectionContext {
		let _localctx: ProjectionContext = new ProjectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ProjectionsParser.RULE_projection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this.match(ProjectionsParser.PROJECTION);
			this.state = 23;
			this.match(ProjectionsParser.TYPE);
			this.state = 24;
			this.identifier();
			this.state = 25;
			this.match(ProjectionsParser.L_CURLY);
			this.state = 26;
			this.projectionBody();
			this.state = 27;
			this.match(ProjectionsParser.R_CURLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ProjectionsParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this.match(ProjectionsParser.ID);
			this.state = 30;
			this.match(ProjectionsParser.ASSIGN);
			this.state = 31;
			this.match(ProjectionsParser.GUID_LIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public projectionBody(): ProjectionBodyContext {
		let _localctx: ProjectionBodyContext = new ProjectionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ProjectionsParser.RULE_projectionBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 36;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ProjectionsParser.IDENTIFIER_LIT) {
				{
				{
				this.state = 33;
				this.projectionField();
				}
				}
				this.state = 38;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public projectionField(): ProjectionFieldContext {
		let _localctx: ProjectionFieldContext = new ProjectionFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ProjectionsParser.RULE_projectionField);
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 39;
				this.match(ProjectionsParser.IDENTIFIER_LIT);
				this.state = 40;
				this.match(ProjectionsParser.FROM);
				this.state = 41;
				this.match(ProjectionsParser.L_CURLY);
				this.state = 42;
				this.streamExpression(0);
				this.state = 43;
				this.match(ProjectionsParser.R_CURLY);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 45;
				this.match(ProjectionsParser.IDENTIFIER_LIT);
				this.state = 46;
				this.match(ProjectionsParser.FROM);
				this.state = 47;
				this.streamExpression(0);
				this.state = 48;
				this.match(ProjectionsParser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public streamExpression(): StreamExpressionContext;
	public streamExpression(_p: number): StreamExpressionContext;
	// @RuleVersion(0)
	public streamExpression(_p?: number): StreamExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: StreamExpressionContext = new StreamExpressionContext(this._ctx, _parentState);
		let _prevctx: StreamExpressionContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, ProjectionsParser.RULE_streamExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ProjectionsParser.TYPE:
				{
				_localctx = new PropertyContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 53;
				this.eventProperty();
				}
				break;
			case ProjectionsParser.JOIN:
				{
				_localctx = new JoinContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 54;
				this.joinExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 65;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 63;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						_localctx = new AddContext(new StreamExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ProjectionsParser.RULE_streamExpression);
						this.state = 57;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 58;
						this.match(ProjectionsParser.PLUS);
						this.state = 59;
						this.streamExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new SubtractContext(new StreamExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ProjectionsParser.RULE_streamExpression);
						this.state = 60;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 61;
						this.match(ProjectionsParser.MINUS);
						this.state = 62;
						this.streamExpression(2);
						}
						break;
					}
					}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventProperty(): EventPropertyContext {
		let _localctx: EventPropertyContext = new EventPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ProjectionsParser.RULE_eventProperty);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(ProjectionsParser.TYPE);
			this.state = 70;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 69;
					this.match(ProjectionsParser.PROPERTY);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 72;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinExpression(): JoinExpressionContext {
		let _localctx: JoinExpressionContext = new JoinExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ProjectionsParser.RULE_joinExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(ProjectionsParser.JOIN);
			this.state = 75;
			this.match(ProjectionsParser.L_PAREN);
			this.state = 76;
			this.streamExpression(0);
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ProjectionsParser.COMMA) {
				{
				{
				this.state = 77;
				this.match(ProjectionsParser.COMMA);
				this.state = 78;
				this.streamExpression(0);
				}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 84;
			this.match(ProjectionsParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.streamExpression_sempred(_localctx as StreamExpressionContext, predIndex);
		}
		return true;
	}
	private streamExpression_sempred(_localctx: StreamExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x18Y\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x07\x02\x14\n\x02\f\x02\x0E\x02\x17" +
		"\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x05\x07\x05%\n\x05\f\x05\x0E\x05(\v\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x05\x065\n\x06\x03\x07\x03\x07\x03\x07\x05\x07:\n\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07B\n\x07\f\x07\x0E" +
		"\x07E\v\x07\x03\b\x03\b\x06\bI\n\b\r\b\x0E\bJ\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x07\tR\n\t\f\t\x0E\tU\v\t\x03\t\x03\t\x03\t\x02\x02\x03\f\n\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x02\x02\x02X\x02" +
		"\x15\x03\x02\x02\x02\x04\x18\x03\x02\x02\x02\x06\x1F\x03\x02\x02\x02\b" +
		"&\x03\x02\x02\x02\n4\x03\x02\x02\x02\f9\x03\x02\x02\x02\x0EF\x03\x02\x02" +
		"\x02\x10L\x03\x02\x02\x02\x12\x14\x05\x04\x03\x02\x13\x12\x03\x02\x02" +
		"\x02\x14\x17\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x15\x16\x03\x02\x02" +
		"\x02\x16\x03\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x18\x19\x07\x03\x02" +
		"\x02\x19\x1A\x07\x07\x02\x02\x1A\x1B\x05\x06\x04\x02\x1B\x1C\x07\v\x02" +
		"\x02\x1C\x1D\x05\b\x05\x02\x1D\x1E\x07\f\x02\x02\x1E\x05\x03\x02\x02\x02" +
		"\x1F \x07\x04\x02\x02 !\x07\x0F\x02\x02!\"\x07\x15\x02\x02\"\x07\x03\x02" +
		"\x02\x02#%\x05\n\x06\x02$#\x03\x02\x02\x02%(\x03\x02\x02\x02&$\x03\x02" +
		"\x02\x02&\'\x03\x02\x02\x02\'\t\x03\x02\x02\x02(&\x03\x02\x02\x02)*\x07" +
		"\x16\x02\x02*+\x07\x05\x02\x02+,\x07\v\x02\x02,-\x05\f\x07\x02-.\x07\f" +
		"\x02\x02.5\x03\x02\x02\x02/0\x07\x16\x02\x0201\x07\x05\x02\x0212\x05\f" +
		"\x07\x0223\x07\x12\x02\x0235\x03\x02\x02\x024)\x03\x02\x02\x024/\x03\x02" +
		"\x02\x025\v\x03\x02\x02\x0267\b\x07\x01\x027:\x05\x0E\b\x028:\x05\x10" +
		"\t\x0296\x03\x02\x02\x0298\x03\x02\x02\x02:C\x03\x02\x02\x02;<\f\x04\x02" +
		"\x02<=\x07\x13\x02\x02=B\x05\f\x07\x05>?\f\x03\x02\x02?@\x07\x14\x02\x02" +
		"@B\x05\f\x07\x04A;\x03\x02\x02\x02A>\x03\x02\x02\x02BE\x03\x02\x02\x02" +
		"CA\x03\x02\x02\x02CD\x03\x02\x02\x02D\r\x03\x02\x02\x02EC\x03\x02\x02" +
		"\x02FH\x07\x07\x02\x02GI\x07\b\x02\x02HG\x03\x02\x02\x02IJ\x03\x02\x02" +
		"\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02K\x0F\x03\x02\x02\x02LM\x07\x06" +
		"\x02\x02MN\x07\t\x02\x02NS\x05\f\x07\x02OP\x07\x10\x02\x02PR\x05\f\x07" +
		"\x02QO\x03\x02\x02\x02RU\x03\x02\x02\x02SQ\x03\x02\x02\x02ST\x03\x02\x02" +
		"\x02TV\x03\x02\x02\x02US\x03\x02\x02\x02VW\x07\n\x02\x02W\x11\x03\x02" +
		"\x02\x02\n\x15&49ACJS";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ProjectionsParser.__ATN) {
			ProjectionsParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ProjectionsParser._serializedATN));
		}

		return ProjectionsParser.__ATN;
	}

}

export class ProjectionsContext extends ParserRuleContext {
	public projection(): ProjectionContext[];
	public projection(i: number): ProjectionContext;
	public projection(i?: number): ProjectionContext | ProjectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProjectionContext);
		} else {
			return this.getRuleContext(i, ProjectionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProjectionsParser.RULE_projections; }
	// @Override
	public enterRule(listener: ProjectionsParserListener): void {
		if (listener.enterProjections) {
			listener.enterProjections(this);
		}
	}
	// @Override
	public exitRule(listener: ProjectionsParserListener): void {
		if (listener.exitProjections) {
			listener.exitProjections(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProjectionsParserVisitor<Result>): Result {
		if (visitor.visitProjections) {
			return visitor.visitProjections(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProjectionContext extends ParserRuleContext {
	public PROJECTION(): TerminalNode { return this.getToken(ProjectionsParser.PROJECTION, 0); }
	public TYPE(): TerminalNode { return this.getToken(ProjectionsParser.TYPE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public L_CURLY(): TerminalNode { return this.getToken(ProjectionsParser.L_CURLY, 0); }
	public projectionBody(): ProjectionBodyContext {
		return this.getRuleContext(0, ProjectionBodyContext);
	}
	public R_CURLY(): TerminalNode { return this.getToken(ProjectionsParser.R_CURLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProjectionsParser.RULE_projection; }
	// @Override
	public enterRule(listener: ProjectionsParserListener): void {
		if (listener.enterProjection) {
			listener.enterProjection(this);
		}
	}
	// @Override
	public exitRule(listener: ProjectionsParserListener): void {
		if (listener.exitProjection) {
			listener.exitProjection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProjectionsParserVisitor<Result>): Result {
		if (visitor.visitProjection) {
			return visitor.visitProjection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ProjectionsParser.ID, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(ProjectionsParser.ASSIGN, 0); }
	public GUID_LIT(): TerminalNode { return this.getToken(ProjectionsParser.GUID_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProjectionsParser.RULE_identifier; }
	// @Override
	public enterRule(listener: ProjectionsParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: ProjectionsParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProjectionsParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProjectionBodyContext extends ParserRuleContext {
	public projectionField(): ProjectionFieldContext[];
	public projectionField(i: number): ProjectionFieldContext;
	public projectionField(i?: number): ProjectionFieldContext | ProjectionFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProjectionFieldContext);
		} else {
			return this.getRuleContext(i, ProjectionFieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProjectionsParser.RULE_projectionBody; }
	// @Override
	public enterRule(listener: ProjectionsParserListener): void {
		if (listener.enterProjectionBody) {
			listener.enterProjectionBody(this);
		}
	}
	// @Override
	public exitRule(listener: ProjectionsParserListener): void {
		if (listener.exitProjectionBody) {
			listener.exitProjectionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProjectionsParserVisitor<Result>): Result {
		if (visitor.visitProjectionBody) {
			return visitor.visitProjectionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProjectionFieldContext extends ParserRuleContext {
	public IDENTIFIER_LIT(): TerminalNode { return this.getToken(ProjectionsParser.IDENTIFIER_LIT, 0); }
	public FROM(): TerminalNode { return this.getToken(ProjectionsParser.FROM, 0); }
	public L_CURLY(): TerminalNode | undefined { return this.tryGetToken(ProjectionsParser.L_CURLY, 0); }
	public streamExpression(): StreamExpressionContext {
		return this.getRuleContext(0, StreamExpressionContext);
	}
	public R_CURLY(): TerminalNode | undefined { return this.tryGetToken(ProjectionsParser.R_CURLY, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(ProjectionsParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProjectionsParser.RULE_projectionField; }
	// @Override
	public enterRule(listener: ProjectionsParserListener): void {
		if (listener.enterProjectionField) {
			listener.enterProjectionField(this);
		}
	}
	// @Override
	public exitRule(listener: ProjectionsParserListener): void {
		if (listener.exitProjectionField) {
			listener.exitProjectionField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProjectionsParserVisitor<Result>): Result {
		if (visitor.visitProjectionField) {
			return visitor.visitProjectionField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StreamExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProjectionsParser.RULE_streamExpression; }
	public copyFrom(ctx: StreamExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PropertyContext extends StreamExpressionContext {
	public eventProperty(): EventPropertyContext {
		return this.getRuleContext(0, EventPropertyContext);
	}
	constructor(ctx: StreamExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ProjectionsParserListener): void {
		if (listener.enterProperty) {
			listener.enterProperty(this);
		}
	}
	// @Override
	public exitRule(listener: ProjectionsParserListener): void {
		if (listener.exitProperty) {
			listener.exitProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProjectionsParserVisitor<Result>): Result {
		if (visitor.visitProperty) {
			return visitor.visitProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class JoinContext extends StreamExpressionContext {
	public joinExpression(): JoinExpressionContext {
		return this.getRuleContext(0, JoinExpressionContext);
	}
	constructor(ctx: StreamExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ProjectionsParserListener): void {
		if (listener.enterJoin) {
			listener.enterJoin(this);
		}
	}
	// @Override
	public exitRule(listener: ProjectionsParserListener): void {
		if (listener.exitJoin) {
			listener.exitJoin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProjectionsParserVisitor<Result>): Result {
		if (visitor.visitJoin) {
			return visitor.visitJoin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddContext extends StreamExpressionContext {
	public streamExpression(): StreamExpressionContext[];
	public streamExpression(i: number): StreamExpressionContext;
	public streamExpression(i?: number): StreamExpressionContext | StreamExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StreamExpressionContext);
		} else {
			return this.getRuleContext(i, StreamExpressionContext);
		}
	}
	public PLUS(): TerminalNode { return this.getToken(ProjectionsParser.PLUS, 0); }
	constructor(ctx: StreamExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ProjectionsParserListener): void {
		if (listener.enterAdd) {
			listener.enterAdd(this);
		}
	}
	// @Override
	public exitRule(listener: ProjectionsParserListener): void {
		if (listener.exitAdd) {
			listener.exitAdd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProjectionsParserVisitor<Result>): Result {
		if (visitor.visitAdd) {
			return visitor.visitAdd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubtractContext extends StreamExpressionContext {
	public streamExpression(): StreamExpressionContext[];
	public streamExpression(i: number): StreamExpressionContext;
	public streamExpression(i?: number): StreamExpressionContext | StreamExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StreamExpressionContext);
		} else {
			return this.getRuleContext(i, StreamExpressionContext);
		}
	}
	public MINUS(): TerminalNode { return this.getToken(ProjectionsParser.MINUS, 0); }
	constructor(ctx: StreamExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ProjectionsParserListener): void {
		if (listener.enterSubtract) {
			listener.enterSubtract(this);
		}
	}
	// @Override
	public exitRule(listener: ProjectionsParserListener): void {
		if (listener.exitSubtract) {
			listener.exitSubtract(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProjectionsParserVisitor<Result>): Result {
		if (visitor.visitSubtract) {
			return visitor.visitSubtract(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventPropertyContext extends ParserRuleContext {
	public TYPE(): TerminalNode { return this.getToken(ProjectionsParser.TYPE, 0); }
	public PROPERTY(): TerminalNode[];
	public PROPERTY(i: number): TerminalNode;
	public PROPERTY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProjectionsParser.PROPERTY);
		} else {
			return this.getToken(ProjectionsParser.PROPERTY, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProjectionsParser.RULE_eventProperty; }
	// @Override
	public enterRule(listener: ProjectionsParserListener): void {
		if (listener.enterEventProperty) {
			listener.enterEventProperty(this);
		}
	}
	// @Override
	public exitRule(listener: ProjectionsParserListener): void {
		if (listener.exitEventProperty) {
			listener.exitEventProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProjectionsParserVisitor<Result>): Result {
		if (visitor.visitEventProperty) {
			return visitor.visitEventProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinExpressionContext extends ParserRuleContext {
	public JOIN(): TerminalNode { return this.getToken(ProjectionsParser.JOIN, 0); }
	public L_PAREN(): TerminalNode { return this.getToken(ProjectionsParser.L_PAREN, 0); }
	public streamExpression(): StreamExpressionContext[];
	public streamExpression(i: number): StreamExpressionContext;
	public streamExpression(i?: number): StreamExpressionContext | StreamExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StreamExpressionContext);
		} else {
			return this.getRuleContext(i, StreamExpressionContext);
		}
	}
	public R_PAREN(): TerminalNode { return this.getToken(ProjectionsParser.R_PAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ProjectionsParser.COMMA);
		} else {
			return this.getToken(ProjectionsParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProjectionsParser.RULE_joinExpression; }
	// @Override
	public enterRule(listener: ProjectionsParserListener): void {
		if (listener.enterJoinExpression) {
			listener.enterJoinExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ProjectionsParserListener): void {
		if (listener.exitJoinExpression) {
			listener.exitJoinExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProjectionsParserVisitor<Result>): Result {
		if (visitor.visitJoinExpression) {
			return visitor.visitJoinExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}



// Generated from src/Wynnscript.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { WynnscriptListener } from "./WynnscriptListener";

export class WynnscriptParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly IGNORED = 13;
	public static readonly COMMENT = 14;
	public static readonly IGNORE_KEYWORD = 15;
	public static readonly DECL_KEYWORD = 16;
	public static readonly ASYNC_KEYWORD = 17;
	public static readonly ESCAPE_KEYWORD = 18;
	public static readonly TERM_KEYWORD = 19;
	public static readonly INCLUDE_A_KEYWORD = 20;
	public static readonly SUB_KEYWORD = 21;
	public static readonly SLEEP_KEYWORD = 22;
	public static readonly INCLUDE_S_KEYWORD = 23;
	public static readonly VERBATIM_LITERAL = 24;
	public static readonly STRING_LITERAL = 25;
	public static readonly BOOL_LITERAL = 26;
	public static readonly FLOAT_LITERAL = 27;
	public static readonly INT_LITERAL = 28;
	public static readonly IDENTIFIER = 29;
	public static readonly NEGATE_OP = 30;
	public static readonly INCREMENT_OP = 31;
	public static readonly DECREMENT_OP = 32;
	public static readonly MUTATE_OP = 33;
	public static readonly ADD_EQUALS_OP = 34;
	public static readonly ADD_OP = 35;
	public static readonly SUB_EQUALS_OP = 36;
	public static readonly SUB_OP = 37;
	public static readonly MUL_EQUALS_OP = 38;
	public static readonly MUL_OP = 39;
	public static readonly DIV_EQUALS_OP = 40;
	public static readonly DIV_OP = 41;
	public static readonly MOD_EQUALS_OP = 42;
	public static readonly MOD_OP = 43;
	public static readonly AND_EQUALS_OP = 44;
	public static readonly AND_OP = 45;
	public static readonly OR_EQUALS_OP = 46;
	public static readonly OR_OP = 47;
	public static readonly XOR_EQUALS_OP = 48;
	public static readonly XOR_OP = 49;
	public static readonly LT_OP = 50;
	public static readonly LTE_OP = 51;
	public static readonly GT_OP = 52;
	public static readonly GTE_OP = 53;
	public static readonly EQ_OP = 54;
	public static readonly NEQ_OP = 55;
	public static readonly RULE_file = 0;
	public static readonly RULE_partial = 1;
	public static readonly RULE_scoped = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_atomicStatement = 4;
	public static readonly RULE_branchStatement = 5;
	public static readonly RULE_subscript = 6;
	public static readonly RULE_function_ = 7;
	public static readonly RULE_parameters = 8;
	public static readonly RULE_parameter = 9;
	public static readonly RULE_ignore = 10;
	public static readonly RULE_declaration = 11;
	public static readonly RULE_invocation = 12;
	public static readonly RULE_syncInvocation = 13;
	public static readonly RULE_asyncInvocation = 14;
	public static readonly RULE_nsInvocation = 15;
	public static readonly RULE_opInvocation = 16;
	public static readonly RULE_opPrefix = 17;
	public static readonly RULE_opPostfix = 18;
	public static readonly RULE_opConsumer = 19;
	public static readonly RULE_ifInvocation = 20;
	public static readonly RULE_expression = 21;
	public static readonly RULE_opImmutable = 22;
	public static readonly RULE_arguments = 23;
	public static readonly RULE_argument = 24;
	public static readonly RULE_associator = 25;
	public static readonly RULE_literal = 26;
	public static readonly RULE_escape = 27;
	public static readonly RULE_terminate = 28;
	public static readonly RULE_includeAsync = 29;
	public static readonly RULE_subInvocation = 30;
	public static readonly RULE_conditional = 31;
	public static readonly RULE_ifConditional = 32;
	public static readonly RULE_elIfConditional = 33;
	public static readonly RULE_elseConditional = 34;
	public static readonly RULE_iteration = 35;
	public static readonly RULE_atomic = 36;
	public static readonly RULE_sleep = 37;
	public static readonly RULE_includeSync = 38;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "partial", "scoped", "statement", "atomicStatement", "branchStatement", 
		"subscript", "function_", "parameters", "parameter", "ignore", "declaration", 
		"invocation", "syncInvocation", "asyncInvocation", "nsInvocation", "opInvocation", 
		"opPrefix", "opPostfix", "opConsumer", "ifInvocation", "expression", "opImmutable", 
		"arguments", "argument", "associator", "literal", "escape", "terminate", 
		"includeAsync", "subInvocation", "conditional", "ifConditional", "elIfConditional", 
		"elseConditional", "iteration", "atomic", "sleep", "includeSync",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'{'", "'}'", "';'", "'name'", "'('", "')'", "','", "'.'", 
		"'if'", "'else'", "'while'", "'atomic'", undefined, undefined, "'script.nothing'", 
		"'var'", "'async'", "'break'", undefined, undefined, "'script.startSubscript'", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'!'", "'++'", "'--'", "'='", "'+='", "'+'", "'-='", "'-'", 
		"'*='", "'*'", "'/='", "'/'", "'%='", "'%'", "'&&='", "'&&'", "'||='", 
		"'||'", "'^='", "'^'", "'<'", "'<='", "'>'", "'>='", "'=='", "'!='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "IGNORED", 
		"COMMENT", "IGNORE_KEYWORD", "DECL_KEYWORD", "ASYNC_KEYWORD", "ESCAPE_KEYWORD", 
		"TERM_KEYWORD", "INCLUDE_A_KEYWORD", "SUB_KEYWORD", "SLEEP_KEYWORD", "INCLUDE_S_KEYWORD", 
		"VERBATIM_LITERAL", "STRING_LITERAL", "BOOL_LITERAL", "FLOAT_LITERAL", 
		"INT_LITERAL", "IDENTIFIER", "NEGATE_OP", "INCREMENT_OP", "DECREMENT_OP", 
		"MUTATE_OP", "ADD_EQUALS_OP", "ADD_OP", "SUB_EQUALS_OP", "SUB_OP", "MUL_EQUALS_OP", 
		"MUL_OP", "DIV_EQUALS_OP", "DIV_OP", "MOD_EQUALS_OP", "MOD_OP", "AND_EQUALS_OP", 
		"AND_OP", "OR_EQUALS_OP", "OR_OP", "XOR_EQUALS_OP", "XOR_OP", "LT_OP", 
		"LTE_OP", "GT_OP", "GTE_OP", "EQ_OP", "NEQ_OP",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(WynnscriptParser._LITERAL_NAMES, WynnscriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return WynnscriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Wynnscript.g4"; }

	// @Override
	public get ruleNames(): string[] { return WynnscriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return WynnscriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(WynnscriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, WynnscriptParser.RULE_file);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this.partial();
			this.state = 79;
			this.match(WynnscriptParser.EOF);
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
	public partial(): PartialContext {
		let _localctx: PartialContext = new PartialContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, WynnscriptParser.RULE_partial);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (WynnscriptParser.T__0 - 1)) | (1 << (WynnscriptParser.T__8 - 1)) | (1 << (WynnscriptParser.T__10 - 1)) | (1 << (WynnscriptParser.T__11 - 1)) | (1 << (WynnscriptParser.IGNORE_KEYWORD - 1)) | (1 << (WynnscriptParser.DECL_KEYWORD - 1)) | (1 << (WynnscriptParser.ASYNC_KEYWORD - 1)) | (1 << (WynnscriptParser.ESCAPE_KEYWORD - 1)) | (1 << (WynnscriptParser.TERM_KEYWORD - 1)) | (1 << (WynnscriptParser.INCLUDE_A_KEYWORD - 1)) | (1 << (WynnscriptParser.SUB_KEYWORD - 1)) | (1 << (WynnscriptParser.SLEEP_KEYWORD - 1)) | (1 << (WynnscriptParser.INCLUDE_S_KEYWORD - 1)) | (1 << (WynnscriptParser.IDENTIFIER - 1)) | (1 << (WynnscriptParser.NEGATE_OP - 1)) | (1 << (WynnscriptParser.INCREMENT_OP - 1)) | (1 << (WynnscriptParser.DECREMENT_OP - 1)))) !== 0)) {
				{
				{
				this.state = 81;
				this.statement();
				}
				}
				this.state = 86;
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
	public scoped(): ScopedContext {
		let _localctx: ScopedContext = new ScopedContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, WynnscriptParser.RULE_scoped);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.match(WynnscriptParser.T__0);
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (WynnscriptParser.T__0 - 1)) | (1 << (WynnscriptParser.T__8 - 1)) | (1 << (WynnscriptParser.T__10 - 1)) | (1 << (WynnscriptParser.T__11 - 1)) | (1 << (WynnscriptParser.IGNORE_KEYWORD - 1)) | (1 << (WynnscriptParser.DECL_KEYWORD - 1)) | (1 << (WynnscriptParser.ASYNC_KEYWORD - 1)) | (1 << (WynnscriptParser.ESCAPE_KEYWORD - 1)) | (1 << (WynnscriptParser.TERM_KEYWORD - 1)) | (1 << (WynnscriptParser.INCLUDE_A_KEYWORD - 1)) | (1 << (WynnscriptParser.SUB_KEYWORD - 1)) | (1 << (WynnscriptParser.SLEEP_KEYWORD - 1)) | (1 << (WynnscriptParser.INCLUDE_S_KEYWORD - 1)) | (1 << (WynnscriptParser.IDENTIFIER - 1)) | (1 << (WynnscriptParser.NEGATE_OP - 1)) | (1 << (WynnscriptParser.INCREMENT_OP - 1)) | (1 << (WynnscriptParser.DECREMENT_OP - 1)))) !== 0)) {
				{
				{
				this.state = 88;
				this.statement();
				}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 94;
			this.match(WynnscriptParser.T__1);
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, WynnscriptParser.RULE_statement);
		try {
			this.state = 105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 96;
				this.atomicStatement();
				this.state = 97;
				this.match(WynnscriptParser.T__2);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 99;
				this.branchStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 100;
				this.subscript();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 101;
				this.function_();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 102;
				this.ignore();
				this.state = 103;
				this.match(WynnscriptParser.T__2);
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
	// @RuleVersion(0)
	public atomicStatement(): AtomicStatementContext {
		let _localctx: AtomicStatementContext = new AtomicStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, WynnscriptParser.RULE_atomicStatement);
		try {
			this.state = 112;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WynnscriptParser.DECL_KEYWORD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 107;
				this.declaration();
				}
				break;
			case WynnscriptParser.ASYNC_KEYWORD:
			case WynnscriptParser.IDENTIFIER:
			case WynnscriptParser.NEGATE_OP:
			case WynnscriptParser.INCREMENT_OP:
			case WynnscriptParser.DECREMENT_OP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 108;
				this.invocation();
				}
				break;
			case WynnscriptParser.ESCAPE_KEYWORD:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 109;
				this.escape();
				}
				break;
			case WynnscriptParser.TERM_KEYWORD:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 110;
				this.terminate();
				}
				break;
			case WynnscriptParser.INCLUDE_A_KEYWORD:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 111;
				this.includeAsync();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public branchStatement(): BranchStatementContext {
		let _localctx: BranchStatementContext = new BranchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, WynnscriptParser.RULE_branchStatement);
		try {
			this.state = 126;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WynnscriptParser.SUB_KEYWORD:
			case WynnscriptParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 114;
				this.subInvocation();
				this.state = 115;
				this.match(WynnscriptParser.T__2);
				}
				break;
			case WynnscriptParser.T__8:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 117;
				this.conditional();
				}
				break;
			case WynnscriptParser.T__10:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 118;
				this.iteration();
				}
				break;
			case WynnscriptParser.T__11:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 119;
				this.atomic();
				}
				break;
			case WynnscriptParser.SLEEP_KEYWORD:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 120;
				this.sleep();
				this.state = 121;
				this.match(WynnscriptParser.T__2);
				}
				break;
			case WynnscriptParser.INCLUDE_S_KEYWORD:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 123;
				this.includeSync();
				this.state = 124;
				this.match(WynnscriptParser.T__2);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public subscript(): SubscriptContext {
		let _localctx: SubscriptContext = new SubscriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, WynnscriptParser.RULE_subscript);
		try {
			this.state = 144;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WynnscriptParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 128;
				this.match(WynnscriptParser.T__0);
				this.state = 129;
				this.partial();
				this.state = 130;
				this.match(WynnscriptParser.T__3);
				this.state = 131;
				this.match(WynnscriptParser.MUTATE_OP);
				this.state = 132;
				this.match(WynnscriptParser.IDENTIFIER);
				this.state = 133;
				this.match(WynnscriptParser.T__2);
				this.state = 134;
				this.partial();
				this.state = 135;
				this.match(WynnscriptParser.T__1);
				}
				break;
			case WynnscriptParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 137;
				this.match(WynnscriptParser.IDENTIFIER);
				this.state = 138;
				this.match(WynnscriptParser.T__4);
				this.state = 139;
				this.match(WynnscriptParser.T__5);
				this.state = 140;
				this.match(WynnscriptParser.T__0);
				this.state = 141;
				this.partial();
				this.state = 142;
				this.match(WynnscriptParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public function_(): Function_Context {
		let _localctx: Function_Context = new Function_Context(this._ctx, this.state);
		this.enterRule(_localctx, 14, WynnscriptParser.RULE_function_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.match(WynnscriptParser.IDENTIFIER);
			this.state = 147;
			this.match(WynnscriptParser.T__4);
			this.state = 148;
			this.parameters();
			this.state = 149;
			this.match(WynnscriptParser.T__5);
			this.state = 150;
			this.match(WynnscriptParser.T__0);
			this.state = 151;
			this.partial();
			this.state = 152;
			this.match(WynnscriptParser.T__1);
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
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, WynnscriptParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.parameter();
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WynnscriptParser.T__6) {
				{
				{
				this.state = 155;
				this.match(WynnscriptParser.T__6);
				this.state = 156;
				this.parameter();
				}
				}
				this.state = 161;
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
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, WynnscriptParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(WynnscriptParser.IDENTIFIER);
			this.state = 163;
			this.match(WynnscriptParser.IDENTIFIER);
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
	public ignore(): IgnoreContext {
		let _localctx: IgnoreContext = new IgnoreContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, WynnscriptParser.RULE_ignore);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this.match(WynnscriptParser.IGNORE_KEYWORD);
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, WynnscriptParser.RULE_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.match(WynnscriptParser.DECL_KEYWORD);
			this.state = 168;
			this.match(WynnscriptParser.IDENTIFIER);
			this.state = 169;
			this.match(WynnscriptParser.MUTATE_OP);
			this.state = 170;
			this.match(WynnscriptParser.IDENTIFIER);
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
	public invocation(): InvocationContext {
		let _localctx: InvocationContext = new InvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, WynnscriptParser.RULE_invocation);
		try {
			this.state = 174;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WynnscriptParser.IDENTIFIER:
			case WynnscriptParser.NEGATE_OP:
			case WynnscriptParser.INCREMENT_OP:
			case WynnscriptParser.DECREMENT_OP:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 172;
				this.syncInvocation();
				}
				break;
			case WynnscriptParser.ASYNC_KEYWORD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 173;
				this.asyncInvocation();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public syncInvocation(): SyncInvocationContext {
		let _localctx: SyncInvocationContext = new SyncInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, WynnscriptParser.RULE_syncInvocation);
		try {
			this.state = 178;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 176;
				this.nsInvocation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 177;
				this.opInvocation();
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
	// @RuleVersion(0)
	public asyncInvocation(): AsyncInvocationContext {
		let _localctx: AsyncInvocationContext = new AsyncInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, WynnscriptParser.RULE_asyncInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this.match(WynnscriptParser.ASYNC_KEYWORD);
			this.state = 181;
			this.match(WynnscriptParser.IDENTIFIER);
			this.state = 182;
			this.match(WynnscriptParser.T__4);
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (WynnscriptParser.VERBATIM_LITERAL - 24)) | (1 << (WynnscriptParser.STRING_LITERAL - 24)) | (1 << (WynnscriptParser.BOOL_LITERAL - 24)) | (1 << (WynnscriptParser.FLOAT_LITERAL - 24)) | (1 << (WynnscriptParser.INT_LITERAL - 24)) | (1 << (WynnscriptParser.IDENTIFIER - 24)) | (1 << (WynnscriptParser.NEGATE_OP - 24)) | (1 << (WynnscriptParser.INCREMENT_OP - 24)) | (1 << (WynnscriptParser.DECREMENT_OP - 24)))) !== 0)) {
				{
				this.state = 183;
				this.arguments();
				}
			}

			this.state = 186;
			this.match(WynnscriptParser.T__5);
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
	public nsInvocation(): NsInvocationContext {
		let _localctx: NsInvocationContext = new NsInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, WynnscriptParser.RULE_nsInvocation);
		let _la: number;
		try {
			this.state = 199;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 188;
				this.match(WynnscriptParser.IDENTIFIER);
				this.state = 189;
				this.match(WynnscriptParser.T__7);
				this.state = 190;
				this.match(WynnscriptParser.IDENTIFIER);
				this.state = 191;
				this.match(WynnscriptParser.T__4);
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (WynnscriptParser.VERBATIM_LITERAL - 24)) | (1 << (WynnscriptParser.STRING_LITERAL - 24)) | (1 << (WynnscriptParser.BOOL_LITERAL - 24)) | (1 << (WynnscriptParser.FLOAT_LITERAL - 24)) | (1 << (WynnscriptParser.INT_LITERAL - 24)) | (1 << (WynnscriptParser.IDENTIFIER - 24)) | (1 << (WynnscriptParser.NEGATE_OP - 24)) | (1 << (WynnscriptParser.INCREMENT_OP - 24)) | (1 << (WynnscriptParser.DECREMENT_OP - 24)))) !== 0)) {
					{
					this.state = 192;
					this.arguments();
					}
				}

				this.state = 195;
				this.match(WynnscriptParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 196;
				this.match(WynnscriptParser.IDENTIFIER);
				this.state = 197;
				this.match(WynnscriptParser.T__7);
				this.state = 198;
				this.match(WynnscriptParser.IDENTIFIER);
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
	// @RuleVersion(0)
	public opInvocation(): OpInvocationContext {
		let _localctx: OpInvocationContext = new OpInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, WynnscriptParser.RULE_opInvocation);
		try {
			this.state = 211;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 201;
				this.match(WynnscriptParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 202;
				this.opPrefix();
				this.state = 203;
				this.match(WynnscriptParser.IDENTIFIER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 205;
				this.match(WynnscriptParser.IDENTIFIER);
				this.state = 206;
				this.opPostfix();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 207;
				this.match(WynnscriptParser.IDENTIFIER);
				this.state = 208;
				this.opConsumer();
				this.state = 209;
				this.associator();
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
	// @RuleVersion(0)
	public opPrefix(): OpPrefixContext {
		let _localctx: OpPrefixContext = new OpPrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, WynnscriptParser.RULE_opPrefix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			_la = this._input.LA(1);
			if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (WynnscriptParser.NEGATE_OP - 30)) | (1 << (WynnscriptParser.INCREMENT_OP - 30)) | (1 << (WynnscriptParser.DECREMENT_OP - 30)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
	public opPostfix(): OpPostfixContext {
		let _localctx: OpPostfixContext = new OpPostfixContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, WynnscriptParser.RULE_opPostfix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			_la = this._input.LA(1);
			if (!(_la === WynnscriptParser.INCREMENT_OP || _la === WynnscriptParser.DECREMENT_OP)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
	public opConsumer(): OpConsumerContext {
		let _localctx: OpConsumerContext = new OpConsumerContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, WynnscriptParser.RULE_opConsumer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			_la = this._input.LA(1);
			if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (WynnscriptParser.MUTATE_OP - 33)) | (1 << (WynnscriptParser.ADD_EQUALS_OP - 33)) | (1 << (WynnscriptParser.ADD_OP - 33)) | (1 << (WynnscriptParser.SUB_EQUALS_OP - 33)) | (1 << (WynnscriptParser.SUB_OP - 33)) | (1 << (WynnscriptParser.MUL_EQUALS_OP - 33)) | (1 << (WynnscriptParser.MUL_OP - 33)) | (1 << (WynnscriptParser.DIV_EQUALS_OP - 33)) | (1 << (WynnscriptParser.DIV_OP - 33)) | (1 << (WynnscriptParser.MOD_EQUALS_OP - 33)) | (1 << (WynnscriptParser.MOD_OP - 33)) | (1 << (WynnscriptParser.AND_EQUALS_OP - 33)) | (1 << (WynnscriptParser.AND_OP - 33)) | (1 << (WynnscriptParser.OR_EQUALS_OP - 33)) | (1 << (WynnscriptParser.OR_OP - 33)) | (1 << (WynnscriptParser.XOR_EQUALS_OP - 33)) | (1 << (WynnscriptParser.XOR_OP - 33)) | (1 << (WynnscriptParser.LT_OP - 33)) | (1 << (WynnscriptParser.LTE_OP - 33)) | (1 << (WynnscriptParser.GT_OP - 33)) | (1 << (WynnscriptParser.GTE_OP - 33)) | (1 << (WynnscriptParser.EQ_OP - 33)) | (1 << (WynnscriptParser.NEQ_OP - 33)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
	public ifInvocation(): IfInvocationContext {
		let _localctx: IfInvocationContext = new IfInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, WynnscriptParser.RULE_ifInvocation);
		try {
			this.state = 222;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 219;
				this.syncInvocation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 220;
				this.expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 221;
				this.literal();
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
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, WynnscriptParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.associator();
			this.state = 225;
			this.opImmutable();
			this.state = 226;
			this.associator();
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
	public opImmutable(): OpImmutableContext {
		let _localctx: OpImmutableContext = new OpImmutableContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, WynnscriptParser.RULE_opImmutable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			_la = this._input.LA(1);
			if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (WynnscriptParser.ADD_OP - 35)) | (1 << (WynnscriptParser.SUB_OP - 35)) | (1 << (WynnscriptParser.MUL_OP - 35)) | (1 << (WynnscriptParser.DIV_OP - 35)) | (1 << (WynnscriptParser.MOD_OP - 35)) | (1 << (WynnscriptParser.AND_OP - 35)) | (1 << (WynnscriptParser.OR_OP - 35)) | (1 << (WynnscriptParser.XOR_OP - 35)) | (1 << (WynnscriptParser.LT_OP - 35)) | (1 << (WynnscriptParser.LTE_OP - 35)) | (1 << (WynnscriptParser.GT_OP - 35)) | (1 << (WynnscriptParser.GTE_OP - 35)) | (1 << (WynnscriptParser.EQ_OP - 35)) | (1 << (WynnscriptParser.NEQ_OP - 35)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, WynnscriptParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.argument();
			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WynnscriptParser.T__6) {
				{
				{
				this.state = 231;
				this.match(WynnscriptParser.T__6);
				this.state = 232;
				this.argument();
				}
				}
				this.state = 237;
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
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, WynnscriptParser.RULE_argument);
		try {
			this.state = 240;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 238;
				this.associator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 239;
				this.expression();
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
	// @RuleVersion(0)
	public associator(): AssociatorContext {
		let _localctx: AssociatorContext = new AssociatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, WynnscriptParser.RULE_associator);
		try {
			this.state = 245;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 242;
				this.nsInvocation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 243;
				this.opInvocation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 244;
				this.literal();
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
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, WynnscriptParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			_localctx._value = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WynnscriptParser.VERBATIM_LITERAL) | (1 << WynnscriptParser.STRING_LITERAL) | (1 << WynnscriptParser.BOOL_LITERAL) | (1 << WynnscriptParser.FLOAT_LITERAL) | (1 << WynnscriptParser.INT_LITERAL))) !== 0))) {
				_localctx._value = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
	public escape(): EscapeContext {
		let _localctx: EscapeContext = new EscapeContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, WynnscriptParser.RULE_escape);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.match(WynnscriptParser.ESCAPE_KEYWORD);
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
	public terminate(): TerminateContext {
		let _localctx: TerminateContext = new TerminateContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, WynnscriptParser.RULE_terminate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 251;
			this.match(WynnscriptParser.TERM_KEYWORD);
			this.state = 252;
			this.match(WynnscriptParser.T__4);
			this.state = 253;
			this.match(WynnscriptParser.T__5);
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
	public includeAsync(): IncludeAsyncContext {
		let _localctx: IncludeAsyncContext = new IncludeAsyncContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, WynnscriptParser.RULE_includeAsync);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 255;
			this.match(WynnscriptParser.INCLUDE_A_KEYWORD);
			this.state = 256;
			this.match(WynnscriptParser.T__4);
			this.state = 257;
			this.match(WynnscriptParser.STRING_LITERAL);
			this.state = 258;
			this.match(WynnscriptParser.T__5);
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
	public subInvocation(): SubInvocationContext {
		let _localctx: SubInvocationContext = new SubInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, WynnscriptParser.RULE_subInvocation);
		let _la: number;
		try {
			this.state = 270;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WynnscriptParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 260;
				_localctx._id = this.match(WynnscriptParser.IDENTIFIER);
				this.state = 261;
				this.match(WynnscriptParser.T__4);
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (WynnscriptParser.VERBATIM_LITERAL - 24)) | (1 << (WynnscriptParser.STRING_LITERAL - 24)) | (1 << (WynnscriptParser.BOOL_LITERAL - 24)) | (1 << (WynnscriptParser.FLOAT_LITERAL - 24)) | (1 << (WynnscriptParser.INT_LITERAL - 24)) | (1 << (WynnscriptParser.IDENTIFIER - 24)) | (1 << (WynnscriptParser.NEGATE_OP - 24)) | (1 << (WynnscriptParser.INCREMENT_OP - 24)) | (1 << (WynnscriptParser.DECREMENT_OP - 24)))) !== 0)) {
					{
					this.state = 262;
					this.arguments();
					}
				}

				this.state = 265;
				this.match(WynnscriptParser.T__5);
				}
				break;
			case WynnscriptParser.SUB_KEYWORD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 266;
				this.match(WynnscriptParser.SUB_KEYWORD);
				this.state = 267;
				this.match(WynnscriptParser.T__4);
				this.state = 268;
				_localctx._id = this.match(WynnscriptParser.STRING_LITERAL);
				this.state = 269;
				this.match(WynnscriptParser.T__5);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public conditional(): ConditionalContext {
		let _localctx: ConditionalContext = new ConditionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, WynnscriptParser.RULE_conditional);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this.ifConditional();
			this.state = 276;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 273;
					this.elIfConditional();
					}
					}
				}
				this.state = 278;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			this.state = 280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WynnscriptParser.T__9) {
				{
				this.state = 279;
				this.elseConditional();
				}
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
	public ifConditional(): IfConditionalContext {
		let _localctx: IfConditionalContext = new IfConditionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, WynnscriptParser.RULE_ifConditional);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 282;
			this.match(WynnscriptParser.T__8);
			this.state = 283;
			this.match(WynnscriptParser.T__4);
			this.state = 285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 284;
				this.match(WynnscriptParser.NEGATE_OP);
				}
				break;
			}
			this.state = 287;
			this.ifInvocation();
			this.state = 288;
			this.match(WynnscriptParser.T__5);
			this.state = 289;
			this.scoped();
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
	public elIfConditional(): ElIfConditionalContext {
		let _localctx: ElIfConditionalContext = new ElIfConditionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, WynnscriptParser.RULE_elIfConditional);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			this.match(WynnscriptParser.T__9);
			this.state = 292;
			this.ifConditional();
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
	public elseConditional(): ElseConditionalContext {
		let _localctx: ElseConditionalContext = new ElseConditionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, WynnscriptParser.RULE_elseConditional);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 294;
			this.match(WynnscriptParser.T__9);
			this.state = 295;
			this.scoped();
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
	public iteration(): IterationContext {
		let _localctx: IterationContext = new IterationContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, WynnscriptParser.RULE_iteration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this.match(WynnscriptParser.T__10);
			this.state = 298;
			this.match(WynnscriptParser.T__4);
			this.state = 300;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 299;
				this.match(WynnscriptParser.NEGATE_OP);
				}
				break;
			}
			this.state = 302;
			this.ifInvocation();
			this.state = 303;
			this.match(WynnscriptParser.T__5);
			this.state = 304;
			this.scoped();
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
	public atomic(): AtomicContext {
		let _localctx: AtomicContext = new AtomicContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, WynnscriptParser.RULE_atomic);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.match(WynnscriptParser.T__11);
			this.state = 307;
			this.scoped();
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
	public sleep(): SleepContext {
		let _localctx: SleepContext = new SleepContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, WynnscriptParser.RULE_sleep);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			this.match(WynnscriptParser.SLEEP_KEYWORD);
			this.state = 310;
			this.match(WynnscriptParser.T__4);
			this.state = 311;
			this.match(WynnscriptParser.INT_LITERAL);
			this.state = 312;
			this.match(WynnscriptParser.T__5);
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
	public includeSync(): IncludeSyncContext {
		let _localctx: IncludeSyncContext = new IncludeSyncContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, WynnscriptParser.RULE_includeSync);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this.match(WynnscriptParser.INCLUDE_S_KEYWORD);
			this.state = 315;
			this.match(WynnscriptParser.T__4);
			this.state = 316;
			this.match(WynnscriptParser.STRING_LITERAL);
			this.state = 317;
			this.match(WynnscriptParser.T__5);
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x039\u0142\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x03\x02\x03\x02\x03\x02" +
		"\x03\x03\x07\x03U\n\x03\f\x03\x0E\x03X\v\x03\x03\x04\x03\x04\x07\x04\\" +
		"\n\x04\f\x04\x0E\x04_\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05l\n\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x05\x06s\n\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07\x81\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x93\n\b\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x07\n\xA0\n\n\f\n\x0E" +
		"\n\xA3\v\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\x0E\x03\x0E\x05\x0E\xB1\n\x0E\x03\x0F\x03\x0F\x05\x0F\xB5\n\x0F\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x05\x10\xBB\n\x10\x03\x10\x03\x10\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xC4\n\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x05\x11\xCA\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xD6\n\x12\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x05\x16\xE1" +
		"\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19" +
		"\x03\x19\x07\x19\xEC\n\x19\f\x19\x0E\x19\xEF\v\x19\x03\x1A\x03\x1A\x05" +
		"\x1A\xF3\n\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\xF8\n\x1B\x03\x1C\x03\x1C" +
		"\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03 \x03 \x03 \x05 \u010A\n \x03 \x03 \x03 \x03 \x03" +
		" \x05 \u0111\n \x03!\x03!\x07!\u0115\n!\f!\x0E!\u0118\v!\x03!\x05!\u011B" +
		"\n!\x03\"\x03\"\x03\"\x05\"\u0120\n\"\x03\"\x03\"\x03\"\x03\"\x03#\x03" +
		"#\x03#\x03$\x03$\x03$\x03%\x03%\x03%\x05%\u012F\n%\x03%\x03%\x03%\x03" +
		"%\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x02\x02\x02)\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02\x02\x07\x03\x02 \"\x03\x02" +
		"!\"\x03\x02#9\n\x02%%\'\'))++--//1139\x03\x02\x1A\x1E\x02\u013F\x02P\x03" +
		"\x02\x02\x02\x04V\x03\x02\x02\x02\x06Y\x03\x02\x02\x02\bk\x03\x02\x02" +
		"\x02\nr\x03\x02\x02\x02\f\x80\x03\x02\x02\x02\x0E\x92\x03\x02\x02\x02" +
		"\x10\x94\x03\x02\x02\x02\x12\x9C\x03\x02\x02\x02\x14\xA4\x03\x02\x02\x02" +
		"\x16\xA7\x03\x02\x02\x02\x18\xA9\x03\x02\x02\x02\x1A\xB0\x03\x02\x02\x02" +
		"\x1C\xB4\x03\x02\x02\x02\x1E\xB6\x03\x02\x02\x02 \xC9\x03\x02\x02\x02" +
		"\"\xD5\x03\x02\x02\x02$\xD7\x03\x02\x02\x02&\xD9\x03\x02\x02\x02(\xDB" +
		"\x03\x02\x02\x02*\xE0\x03\x02\x02\x02,\xE2\x03\x02\x02\x02.\xE6\x03\x02" +
		"\x02\x020\xE8\x03\x02\x02\x022\xF2\x03\x02\x02\x024\xF7\x03\x02\x02\x02" +
		"6\xF9\x03\x02\x02\x028\xFB\x03\x02\x02\x02:\xFD\x03\x02\x02\x02<\u0101" +
		"\x03\x02\x02\x02>\u0110\x03\x02\x02\x02@\u0112\x03\x02\x02\x02B\u011C" +
		"\x03\x02\x02\x02D\u0125\x03\x02\x02\x02F\u0128\x03\x02\x02\x02H\u012B" +
		"\x03\x02\x02\x02J\u0134\x03\x02\x02\x02L\u0137\x03\x02\x02\x02N\u013C" +
		"\x03\x02\x02\x02PQ\x05\x04\x03\x02QR\x07\x02\x02\x03R\x03\x03\x02\x02" +
		"\x02SU\x05\b\x05\x02TS\x03\x02\x02\x02UX\x03\x02\x02\x02VT\x03\x02\x02" +
		"\x02VW\x03\x02\x02\x02W\x05\x03\x02\x02\x02XV\x03\x02\x02\x02Y]\x07\x03" +
		"\x02\x02Z\\\x05\b\x05\x02[Z\x03\x02\x02\x02\\_\x03\x02\x02\x02][\x03\x02" +
		"\x02\x02]^\x03\x02\x02\x02^`\x03\x02\x02\x02_]\x03\x02\x02\x02`a\x07\x04" +
		"\x02\x02a\x07\x03\x02\x02\x02bc\x05\n\x06\x02cd\x07\x05\x02\x02dl\x03" +
		"\x02\x02\x02el\x05\f\x07\x02fl\x05\x0E\b\x02gl\x05\x10\t\x02hi\x05\x16" +
		"\f\x02ij\x07\x05\x02\x02jl\x03\x02\x02\x02kb\x03\x02\x02\x02ke\x03\x02" +
		"\x02\x02kf\x03\x02\x02\x02kg\x03\x02\x02\x02kh\x03\x02\x02\x02l\t\x03" +
		"\x02\x02\x02ms\x05\x18\r\x02ns\x05\x1A\x0E\x02os\x058\x1D\x02ps\x05:\x1E" +
		"\x02qs\x05<\x1F\x02rm\x03\x02\x02\x02rn\x03\x02\x02\x02ro\x03\x02\x02" +
		"\x02rp\x03\x02\x02\x02rq\x03\x02\x02\x02s\v\x03\x02\x02\x02tu\x05> \x02" +
		"uv\x07\x05\x02\x02v\x81\x03\x02\x02\x02w\x81\x05@!\x02x\x81\x05H%\x02" +
		"y\x81\x05J&\x02z{\x05L\'\x02{|\x07\x05\x02\x02|\x81\x03\x02\x02\x02}~" +
		"\x05N(\x02~\x7F\x07\x05\x02\x02\x7F\x81\x03\x02\x02\x02\x80t\x03\x02\x02" +
		"\x02\x80w\x03\x02\x02\x02\x80x\x03\x02\x02\x02\x80y\x03\x02\x02\x02\x80" +
		"z\x03\x02\x02\x02\x80}\x03\x02\x02\x02\x81\r\x03\x02\x02\x02\x82\x83\x07" +
		"\x03\x02\x02\x83\x84\x05\x04\x03\x02\x84\x85\x07\x06\x02\x02\x85\x86\x07" +
		"#\x02\x02\x86\x87\x07\x1F\x02\x02\x87\x88\x07\x05\x02\x02\x88\x89\x05" +
		"\x04\x03\x02\x89\x8A\x07\x04\x02\x02\x8A\x93\x03\x02\x02\x02\x8B\x8C\x07" +
		"\x1F\x02\x02\x8C\x8D\x07\x07\x02\x02\x8D\x8E\x07\b\x02\x02\x8E\x8F\x07" +
		"\x03\x02\x02\x8F\x90\x05\x04\x03\x02\x90\x91\x07\x04\x02\x02\x91\x93\x03" +
		"\x02\x02\x02\x92\x82\x03\x02\x02\x02\x92\x8B\x03\x02\x02\x02\x93\x0F\x03" +
		"\x02\x02\x02\x94\x95\x07\x1F\x02\x02\x95\x96\x07\x07\x02\x02\x96\x97\x05" +
		"\x12\n\x02\x97\x98\x07\b\x02\x02\x98\x99\x07\x03\x02\x02\x99\x9A\x05\x04" +
		"\x03\x02\x9A\x9B\x07\x04\x02\x02\x9B\x11\x03\x02\x02\x02\x9C\xA1\x05\x14" +
		"\v\x02\x9D\x9E\x07\t\x02\x02\x9E\xA0\x05\x14\v\x02\x9F\x9D\x03\x02\x02" +
		"\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA1\xA2\x03\x02\x02" +
		"\x02\xA2\x13\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA4\xA5\x07\x1F\x02" +
		"\x02\xA5\xA6\x07\x1F\x02\x02\xA6\x15\x03\x02\x02\x02\xA7\xA8\x07\x11\x02" +
		"\x02\xA8\x17\x03\x02\x02\x02\xA9\xAA\x07\x12\x02\x02\xAA\xAB\x07\x1F\x02" +
		"\x02\xAB\xAC\x07#\x02\x02\xAC\xAD\x07\x1F\x02\x02\xAD\x19\x03\x02\x02" +
		"\x02\xAE\xB1\x05\x1C\x0F\x02\xAF\xB1\x05\x1E\x10\x02\xB0\xAE\x03\x02\x02" +
		"\x02\xB0\xAF\x03\x02\x02\x02\xB1\x1B\x03\x02\x02\x02\xB2\xB5\x05 \x11" +
		"\x02\xB3\xB5\x05\"\x12\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB3\x03\x02\x02" +
		"\x02\xB5\x1D\x03\x02\x02\x02\xB6\xB7\x07\x13\x02\x02\xB7\xB8\x07\x1F\x02" +
		"\x02\xB8\xBA\x07\x07\x02\x02\xB9\xBB\x050\x19\x02\xBA\xB9\x03\x02\x02" +
		"\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x07\b\x02" +
		"\x02\xBD\x1F\x03\x02\x02\x02\xBE\xBF\x07\x1F\x02\x02\xBF\xC0\x07\n\x02" +
		"\x02\xC0\xC1\x07\x1F\x02\x02\xC1\xC3\x07\x07\x02\x02\xC2\xC4\x050\x19" +
		"\x02\xC3\xC2\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x03\x02\x02" +
		"\x02\xC5\xCA\x07\b\x02\x02\xC6\xC7\x07\x1F\x02\x02\xC7\xC8\x07\n\x02\x02" +
		"\xC8\xCA\x07\x1F\x02\x02\xC9\xBE\x03\x02\x02\x02\xC9\xC6\x03\x02\x02\x02" +
		"\xCA!\x03\x02\x02\x02\xCB\xD6\x07\x1F\x02\x02\xCC\xCD\x05$\x13\x02\xCD" +
		"\xCE\x07\x1F\x02\x02\xCE\xD6\x03\x02\x02\x02\xCF\xD0\x07\x1F\x02\x02\xD0" +
		"\xD6\x05&\x14\x02\xD1\xD2\x07\x1F\x02\x02\xD2\xD3\x05(\x15\x02\xD3\xD4" +
		"\x054\x1B\x02\xD4\xD6\x03\x02\x02\x02\xD5\xCB\x03\x02\x02\x02\xD5\xCC" +
		"\x03\x02\x02\x02\xD5\xCF\x03\x02\x02\x02\xD5\xD1\x03\x02\x02\x02\xD6#" +
		"\x03\x02\x02\x02\xD7\xD8\t\x02\x02\x02\xD8%\x03\x02\x02\x02\xD9\xDA\t" +
		"\x03\x02\x02\xDA\'\x03\x02\x02\x02\xDB\xDC\t\x04\x02\x02\xDC)\x03\x02" +
		"\x02\x02\xDD\xE1\x05\x1C\x0F\x02\xDE\xE1\x05,\x17\x02\xDF\xE1\x056\x1C" +
		"\x02\xE0\xDD\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE0\xDF\x03\x02\x02" +
		"\x02\xE1+\x03\x02\x02\x02\xE2\xE3\x054\x1B\x02\xE3\xE4\x05.\x18\x02\xE4" +
		"\xE5\x054\x1B\x02\xE5-\x03\x02\x02\x02\xE6\xE7\t\x05\x02\x02\xE7/\x03" +
		"\x02\x02\x02\xE8\xED\x052\x1A\x02\xE9\xEA\x07\t\x02\x02\xEA\xEC\x052\x1A" +
		"\x02\xEB\xE9\x03\x02\x02\x02\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02" +
		"\x02\xED\xEE\x03\x02\x02\x02\xEE1\x03\x02\x02\x02\xEF\xED\x03\x02\x02" +
		"\x02\xF0\xF3\x054\x1B\x02\xF1\xF3\x05,\x17\x02\xF2\xF0\x03\x02\x02\x02" +
		"\xF2\xF1\x03\x02\x02\x02\xF33\x03\x02\x02\x02\xF4\xF8\x05 \x11\x02\xF5" +
		"\xF8\x05\"\x12\x02\xF6\xF8\x056\x1C\x02\xF7\xF4\x03\x02\x02\x02\xF7\xF5" +
		"\x03\x02\x02\x02\xF7\xF6\x03\x02\x02\x02\xF85\x03\x02\x02\x02\xF9\xFA" +
		"\t\x06\x02\x02\xFA7\x03\x02\x02\x02\xFB\xFC\x07\x14\x02\x02\xFC9\x03\x02" +
		"\x02\x02\xFD\xFE\x07\x15\x02\x02\xFE\xFF\x07\x07\x02\x02\xFF\u0100\x07" +
		"\b\x02\x02\u0100;\x03\x02\x02\x02\u0101\u0102\x07\x16\x02\x02\u0102\u0103" +
		"\x07\x07\x02\x02\u0103\u0104\x07\x1B\x02\x02\u0104\u0105\x07\b\x02\x02" +
		"\u0105=\x03\x02\x02\x02\u0106\u0107\x07\x1F\x02\x02\u0107\u0109\x07\x07" +
		"\x02\x02\u0108\u010A\x050\x19\x02\u0109\u0108\x03\x02\x02\x02\u0109\u010A" +
		"\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u0111\x07\b\x02\x02" +
		"\u010C\u010D\x07\x17\x02\x02\u010D\u010E\x07\x07\x02\x02\u010E\u010F\x07" +
		"\x1B\x02\x02\u010F\u0111\x07\b\x02\x02\u0110\u0106\x03\x02\x02\x02\u0110" +
		"\u010C\x03\x02\x02\x02\u0111?\x03\x02\x02\x02\u0112\u0116\x05B\"\x02\u0113" +
		"\u0115\x05D#\x02\u0114\u0113\x03\x02\x02\x02\u0115\u0118\x03\x02\x02\x02" +
		"\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u011A\x03" +
		"\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011B\x05F$\x02\u011A\u0119" +
		"\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011BA\x03\x02\x02\x02\u011C" +
		"\u011D\x07\v\x02\x02\u011D\u011F\x07\x07\x02\x02\u011E\u0120\x07 \x02" +
		"\x02\u011F\u011E\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0121" +
		"\x03\x02\x02\x02\u0121\u0122\x05*\x16\x02\u0122\u0123\x07\b\x02\x02\u0123" +
		"\u0124\x05\x06\x04\x02\u0124C\x03\x02\x02\x02\u0125\u0126\x07\f\x02\x02" +
		"\u0126\u0127\x05B\"\x02\u0127E\x03\x02\x02\x02\u0128\u0129\x07\f\x02\x02" +
		"\u0129\u012A\x05\x06\x04\x02\u012AG\x03\x02\x02\x02\u012B\u012C\x07\r" +
		"\x02\x02\u012C\u012E\x07\x07\x02\x02\u012D\u012F\x07 \x02\x02\u012E\u012D" +
		"\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02" +
		"\u0130\u0131\x05*\x16\x02\u0131\u0132\x07\b\x02\x02\u0132\u0133\x05\x06" +
		"\x04\x02\u0133I\x03\x02\x02\x02\u0134\u0135\x07\x0E\x02\x02\u0135\u0136" +
		"\x05\x06\x04\x02\u0136K\x03\x02\x02\x02\u0137\u0138\x07\x18\x02\x02\u0138" +
		"\u0139\x07\x07\x02\x02\u0139\u013A\x07\x1E\x02\x02\u013A\u013B\x07\b\x02" +
		"\x02\u013BM\x03\x02\x02\x02\u013C\u013D\x07\x19\x02\x02\u013D\u013E\x07" +
		"\x07\x02\x02\u013E\u013F\x07\x1B\x02\x02\u013F\u0140\x07\b\x02\x02\u0140" +
		"O\x03\x02\x02\x02\x19V]kr\x80\x92\xA1\xB0\xB4\xBA\xC3\xC9\xD5\xE0\xED" +
		"\xF2\xF7\u0109\u0110\u0116\u011A\u011F\u012E";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!WynnscriptParser.__ATN) {
			WynnscriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(WynnscriptParser._serializedATN));
		}

		return WynnscriptParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public partial(): PartialContext {
		return this.getRuleContext(0, PartialContext);
	}
	public EOF(): TerminalNode { return this.getToken(WynnscriptParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_file; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
}


export class PartialContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_partial; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterPartial) {
			listener.enterPartial(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitPartial) {
			listener.exitPartial(this);
		}
	}
}


export class ScopedContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_scoped; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterScoped) {
			listener.enterScoped(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitScoped) {
			listener.exitScoped(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public atomicStatement(): AtomicStatementContext | undefined {
		return this.tryGetRuleContext(0, AtomicStatementContext);
	}
	public branchStatement(): BranchStatementContext | undefined {
		return this.tryGetRuleContext(0, BranchStatementContext);
	}
	public subscript(): SubscriptContext | undefined {
		return this.tryGetRuleContext(0, SubscriptContext);
	}
	public function_(): Function_Context | undefined {
		return this.tryGetRuleContext(0, Function_Context);
	}
	public ignore(): IgnoreContext | undefined {
		return this.tryGetRuleContext(0, IgnoreContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_statement; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class AtomicStatementContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public invocation(): InvocationContext | undefined {
		return this.tryGetRuleContext(0, InvocationContext);
	}
	public escape(): EscapeContext | undefined {
		return this.tryGetRuleContext(0, EscapeContext);
	}
	public terminate(): TerminateContext | undefined {
		return this.tryGetRuleContext(0, TerminateContext);
	}
	public includeAsync(): IncludeAsyncContext | undefined {
		return this.tryGetRuleContext(0, IncludeAsyncContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_atomicStatement; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterAtomicStatement) {
			listener.enterAtomicStatement(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitAtomicStatement) {
			listener.exitAtomicStatement(this);
		}
	}
}


export class BranchStatementContext extends ParserRuleContext {
	public subInvocation(): SubInvocationContext | undefined {
		return this.tryGetRuleContext(0, SubInvocationContext);
	}
	public conditional(): ConditionalContext | undefined {
		return this.tryGetRuleContext(0, ConditionalContext);
	}
	public iteration(): IterationContext | undefined {
		return this.tryGetRuleContext(0, IterationContext);
	}
	public atomic(): AtomicContext | undefined {
		return this.tryGetRuleContext(0, AtomicContext);
	}
	public sleep(): SleepContext | undefined {
		return this.tryGetRuleContext(0, SleepContext);
	}
	public includeSync(): IncludeSyncContext | undefined {
		return this.tryGetRuleContext(0, IncludeSyncContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_branchStatement; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterBranchStatement) {
			listener.enterBranchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitBranchStatement) {
			listener.exitBranchStatement(this);
		}
	}
}


export class SubscriptContext extends ParserRuleContext {
	public partial(): PartialContext[];
	public partial(i: number): PartialContext;
	public partial(i?: number): PartialContext | PartialContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PartialContext);
		} else {
			return this.getRuleContext(i, PartialContext);
		}
	}
	public MUTATE_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.MUTATE_OP, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(WynnscriptParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_subscript; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterSubscript) {
			listener.enterSubscript(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitSubscript) {
			listener.exitSubscript(this);
		}
	}
}


export class Function_Context extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(WynnscriptParser.IDENTIFIER, 0); }
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public partial(): PartialContext {
		return this.getRuleContext(0, PartialContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_function_; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterFunction_) {
			listener.enterFunction_(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitFunction_) {
			listener.exitFunction_(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_parameters; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterParameters) {
			listener.enterParameters(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitParameters) {
			listener.exitParameters(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WynnscriptParser.IDENTIFIER);
		} else {
			return this.getToken(WynnscriptParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_parameter; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
}


export class IgnoreContext extends ParserRuleContext {
	public IGNORE_KEYWORD(): TerminalNode { return this.getToken(WynnscriptParser.IGNORE_KEYWORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_ignore; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterIgnore) {
			listener.enterIgnore(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitIgnore) {
			listener.exitIgnore(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public DECL_KEYWORD(): TerminalNode { return this.getToken(WynnscriptParser.DECL_KEYWORD, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WynnscriptParser.IDENTIFIER);
		} else {
			return this.getToken(WynnscriptParser.IDENTIFIER, i);
		}
	}
	public MUTATE_OP(): TerminalNode { return this.getToken(WynnscriptParser.MUTATE_OP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_declaration; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
}


export class InvocationContext extends ParserRuleContext {
	public syncInvocation(): SyncInvocationContext | undefined {
		return this.tryGetRuleContext(0, SyncInvocationContext);
	}
	public asyncInvocation(): AsyncInvocationContext | undefined {
		return this.tryGetRuleContext(0, AsyncInvocationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_invocation; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterInvocation) {
			listener.enterInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitInvocation) {
			listener.exitInvocation(this);
		}
	}
}


export class SyncInvocationContext extends ParserRuleContext {
	public nsInvocation(): NsInvocationContext | undefined {
		return this.tryGetRuleContext(0, NsInvocationContext);
	}
	public opInvocation(): OpInvocationContext | undefined {
		return this.tryGetRuleContext(0, OpInvocationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_syncInvocation; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterSyncInvocation) {
			listener.enterSyncInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitSyncInvocation) {
			listener.exitSyncInvocation(this);
		}
	}
}


export class AsyncInvocationContext extends ParserRuleContext {
	public ASYNC_KEYWORD(): TerminalNode { return this.getToken(WynnscriptParser.ASYNC_KEYWORD, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(WynnscriptParser.IDENTIFIER, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_asyncInvocation; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterAsyncInvocation) {
			listener.enterAsyncInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitAsyncInvocation) {
			listener.exitAsyncInvocation(this);
		}
	}
}


export class NsInvocationContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WynnscriptParser.IDENTIFIER);
		} else {
			return this.getToken(WynnscriptParser.IDENTIFIER, i);
		}
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_nsInvocation; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterNsInvocation) {
			listener.enterNsInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitNsInvocation) {
			listener.exitNsInvocation(this);
		}
	}
}


export class OpInvocationContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(WynnscriptParser.IDENTIFIER, 0); }
	public opPrefix(): OpPrefixContext | undefined {
		return this.tryGetRuleContext(0, OpPrefixContext);
	}
	public opPostfix(): OpPostfixContext | undefined {
		return this.tryGetRuleContext(0, OpPostfixContext);
	}
	public opConsumer(): OpConsumerContext | undefined {
		return this.tryGetRuleContext(0, OpConsumerContext);
	}
	public associator(): AssociatorContext | undefined {
		return this.tryGetRuleContext(0, AssociatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_opInvocation; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterOpInvocation) {
			listener.enterOpInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitOpInvocation) {
			listener.exitOpInvocation(this);
		}
	}
}


export class OpPrefixContext extends ParserRuleContext {
	public NEGATE_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.NEGATE_OP, 0); }
	public INCREMENT_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.INCREMENT_OP, 0); }
	public DECREMENT_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.DECREMENT_OP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_opPrefix; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterOpPrefix) {
			listener.enterOpPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitOpPrefix) {
			listener.exitOpPrefix(this);
		}
	}
}


export class OpPostfixContext extends ParserRuleContext {
	public INCREMENT_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.INCREMENT_OP, 0); }
	public DECREMENT_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.DECREMENT_OP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_opPostfix; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterOpPostfix) {
			listener.enterOpPostfix(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitOpPostfix) {
			listener.exitOpPostfix(this);
		}
	}
}


export class OpConsumerContext extends ParserRuleContext {
	public MUTATE_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.MUTATE_OP, 0); }
	public ADD_EQUALS_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.ADD_EQUALS_OP, 0); }
	public ADD_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.ADD_OP, 0); }
	public SUB_EQUALS_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.SUB_EQUALS_OP, 0); }
	public SUB_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.SUB_OP, 0); }
	public MUL_EQUALS_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.MUL_EQUALS_OP, 0); }
	public MUL_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.MUL_OP, 0); }
	public DIV_EQUALS_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.DIV_EQUALS_OP, 0); }
	public DIV_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.DIV_OP, 0); }
	public MOD_EQUALS_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.MOD_EQUALS_OP, 0); }
	public MOD_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.MOD_OP, 0); }
	public AND_EQUALS_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.AND_EQUALS_OP, 0); }
	public AND_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.AND_OP, 0); }
	public OR_EQUALS_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.OR_EQUALS_OP, 0); }
	public OR_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.OR_OP, 0); }
	public XOR_EQUALS_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.XOR_EQUALS_OP, 0); }
	public XOR_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.XOR_OP, 0); }
	public LT_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.LT_OP, 0); }
	public LTE_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.LTE_OP, 0); }
	public GT_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.GT_OP, 0); }
	public GTE_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.GTE_OP, 0); }
	public EQ_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.EQ_OP, 0); }
	public NEQ_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.NEQ_OP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_opConsumer; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterOpConsumer) {
			listener.enterOpConsumer(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitOpConsumer) {
			listener.exitOpConsumer(this);
		}
	}
}


export class IfInvocationContext extends ParserRuleContext {
	public syncInvocation(): SyncInvocationContext | undefined {
		return this.tryGetRuleContext(0, SyncInvocationContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_ifInvocation; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterIfInvocation) {
			listener.enterIfInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitIfInvocation) {
			listener.exitIfInvocation(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public associator(): AssociatorContext[];
	public associator(i: number): AssociatorContext;
	public associator(i?: number): AssociatorContext | AssociatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssociatorContext);
		} else {
			return this.getRuleContext(i, AssociatorContext);
		}
	}
	public opImmutable(): OpImmutableContext {
		return this.getRuleContext(0, OpImmutableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_expression; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class OpImmutableContext extends ParserRuleContext {
	public ADD_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.ADD_OP, 0); }
	public SUB_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.SUB_OP, 0); }
	public MUL_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.MUL_OP, 0); }
	public DIV_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.DIV_OP, 0); }
	public MOD_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.MOD_OP, 0); }
	public AND_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.AND_OP, 0); }
	public OR_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.OR_OP, 0); }
	public XOR_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.XOR_OP, 0); }
	public LT_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.LT_OP, 0); }
	public LTE_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.LTE_OP, 0); }
	public GT_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.GT_OP, 0); }
	public GTE_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.GTE_OP, 0); }
	public EQ_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.EQ_OP, 0); }
	public NEQ_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.NEQ_OP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_opImmutable; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterOpImmutable) {
			listener.enterOpImmutable(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitOpImmutable) {
			listener.exitOpImmutable(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_arguments; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public associator(): AssociatorContext | undefined {
		return this.tryGetRuleContext(0, AssociatorContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_argument; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
}


export class AssociatorContext extends ParserRuleContext {
	public nsInvocation(): NsInvocationContext | undefined {
		return this.tryGetRuleContext(0, NsInvocationContext);
	}
	public opInvocation(): OpInvocationContext | undefined {
		return this.tryGetRuleContext(0, OpInvocationContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_associator; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterAssociator) {
			listener.enterAssociator(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitAssociator) {
			listener.exitAssociator(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public _value!: Token;
	public VERBATIM_LITERAL(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.VERBATIM_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.STRING_LITERAL, 0); }
	public BOOL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.BOOL_LITERAL, 0); }
	public FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.FLOAT_LITERAL, 0); }
	public INT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.INT_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_literal; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class EscapeContext extends ParserRuleContext {
	public ESCAPE_KEYWORD(): TerminalNode { return this.getToken(WynnscriptParser.ESCAPE_KEYWORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_escape; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterEscape) {
			listener.enterEscape(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitEscape) {
			listener.exitEscape(this);
		}
	}
}


export class TerminateContext extends ParserRuleContext {
	public TERM_KEYWORD(): TerminalNode { return this.getToken(WynnscriptParser.TERM_KEYWORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_terminate; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterTerminate) {
			listener.enterTerminate(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitTerminate) {
			listener.exitTerminate(this);
		}
	}
}


export class IncludeAsyncContext extends ParserRuleContext {
	public INCLUDE_A_KEYWORD(): TerminalNode { return this.getToken(WynnscriptParser.INCLUDE_A_KEYWORD, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(WynnscriptParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_includeAsync; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterIncludeAsync) {
			listener.enterIncludeAsync(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitIncludeAsync) {
			listener.exitIncludeAsync(this);
		}
	}
}


export class SubInvocationContext extends ParserRuleContext {
	public _id!: Token;
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.IDENTIFIER, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public SUB_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.SUB_KEYWORD, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_subInvocation; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterSubInvocation) {
			listener.enterSubInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitSubInvocation) {
			listener.exitSubInvocation(this);
		}
	}
}


export class ConditionalContext extends ParserRuleContext {
	public ifConditional(): IfConditionalContext {
		return this.getRuleContext(0, IfConditionalContext);
	}
	public elIfConditional(): ElIfConditionalContext[];
	public elIfConditional(i: number): ElIfConditionalContext;
	public elIfConditional(i?: number): ElIfConditionalContext | ElIfConditionalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElIfConditionalContext);
		} else {
			return this.getRuleContext(i, ElIfConditionalContext);
		}
	}
	public elseConditional(): ElseConditionalContext | undefined {
		return this.tryGetRuleContext(0, ElseConditionalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_conditional; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterConditional) {
			listener.enterConditional(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitConditional) {
			listener.exitConditional(this);
		}
	}
}


export class IfConditionalContext extends ParserRuleContext {
	public ifInvocation(): IfInvocationContext {
		return this.getRuleContext(0, IfInvocationContext);
	}
	public scoped(): ScopedContext {
		return this.getRuleContext(0, ScopedContext);
	}
	public NEGATE_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.NEGATE_OP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_ifConditional; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterIfConditional) {
			listener.enterIfConditional(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitIfConditional) {
			listener.exitIfConditional(this);
		}
	}
}


export class ElIfConditionalContext extends ParserRuleContext {
	public ifConditional(): IfConditionalContext {
		return this.getRuleContext(0, IfConditionalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_elIfConditional; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterElIfConditional) {
			listener.enterElIfConditional(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitElIfConditional) {
			listener.exitElIfConditional(this);
		}
	}
}


export class ElseConditionalContext extends ParserRuleContext {
	public scoped(): ScopedContext {
		return this.getRuleContext(0, ScopedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_elseConditional; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterElseConditional) {
			listener.enterElseConditional(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitElseConditional) {
			listener.exitElseConditional(this);
		}
	}
}


export class IterationContext extends ParserRuleContext {
	public ifInvocation(): IfInvocationContext {
		return this.getRuleContext(0, IfInvocationContext);
	}
	public scoped(): ScopedContext {
		return this.getRuleContext(0, ScopedContext);
	}
	public NEGATE_OP(): TerminalNode | undefined { return this.tryGetToken(WynnscriptParser.NEGATE_OP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_iteration; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterIteration) {
			listener.enterIteration(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitIteration) {
			listener.exitIteration(this);
		}
	}
}


export class AtomicContext extends ParserRuleContext {
	public scoped(): ScopedContext {
		return this.getRuleContext(0, ScopedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_atomic; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterAtomic) {
			listener.enterAtomic(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitAtomic) {
			listener.exitAtomic(this);
		}
	}
}


export class SleepContext extends ParserRuleContext {
	public SLEEP_KEYWORD(): TerminalNode { return this.getToken(WynnscriptParser.SLEEP_KEYWORD, 0); }
	public INT_LITERAL(): TerminalNode { return this.getToken(WynnscriptParser.INT_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_sleep; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterSleep) {
			listener.enterSleep(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitSleep) {
			listener.exitSleep(this);
		}
	}
}


export class IncludeSyncContext extends ParserRuleContext {
	public INCLUDE_S_KEYWORD(): TerminalNode { return this.getToken(WynnscriptParser.INCLUDE_S_KEYWORD, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(WynnscriptParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WynnscriptParser.RULE_includeSync; }
	// @Override
	public enterRule(listener: WynnscriptListener): void {
		if (listener.enterIncludeSync) {
			listener.enterIncludeSync(this);
		}
	}
	// @Override
	public exitRule(listener: WynnscriptListener): void {
		if (listener.exitIncludeSync) {
			listener.exitIncludeSync(this);
		}
	}
}



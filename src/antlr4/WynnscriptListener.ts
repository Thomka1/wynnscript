// Generated from src/Wynnscript.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./WynnscriptParser";
import { PartialContext } from "./WynnscriptParser";
import { ScopedContext } from "./WynnscriptParser";
import { StatementContext } from "./WynnscriptParser";
import { AtomicStatementContext } from "./WynnscriptParser";
import { BranchStatementContext } from "./WynnscriptParser";
import { SubscriptContext } from "./WynnscriptParser";
import { Function_Context } from "./WynnscriptParser";
import { ParametersContext } from "./WynnscriptParser";
import { ParameterContext } from "./WynnscriptParser";
import { IgnoreContext } from "./WynnscriptParser";
import { DeclarationContext } from "./WynnscriptParser";
import { InvocationContext } from "./WynnscriptParser";
import { SyncInvocationContext } from "./WynnscriptParser";
import { AsyncInvocationContext } from "./WynnscriptParser";
import { NsInvocationContext } from "./WynnscriptParser";
import { OpInvocationContext } from "./WynnscriptParser";
import { OpPrefixContext } from "./WynnscriptParser";
import { OpPostfixContext } from "./WynnscriptParser";
import { OpConsumerContext } from "./WynnscriptParser";
import { IfInvocationContext } from "./WynnscriptParser";
import { ExpressionContext } from "./WynnscriptParser";
import { OpImmutableContext } from "./WynnscriptParser";
import { ArgumentsContext } from "./WynnscriptParser";
import { ArgumentContext } from "./WynnscriptParser";
import { AssociatorContext } from "./WynnscriptParser";
import { LiteralContext } from "./WynnscriptParser";
import { EscapeContext } from "./WynnscriptParser";
import { TerminateContext } from "./WynnscriptParser";
import { IncludeAsyncContext } from "./WynnscriptParser";
import { SubInvocationContext } from "./WynnscriptParser";
import { ConditionalContext } from "./WynnscriptParser";
import { IfConditionalContext } from "./WynnscriptParser";
import { ElIfConditionalContext } from "./WynnscriptParser";
import { ElseConditionalContext } from "./WynnscriptParser";
import { IterationContext } from "./WynnscriptParser";
import { AtomicContext } from "./WynnscriptParser";
import { SleepContext } from "./WynnscriptParser";
import { IncludeSyncContext } from "./WynnscriptParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `WynnscriptParser`.
 */
export interface WynnscriptListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `WynnscriptParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.partial`.
	 * @param ctx the parse tree
	 */
	enterPartial?: (ctx: PartialContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.partial`.
	 * @param ctx the parse tree
	 */
	exitPartial?: (ctx: PartialContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.scoped`.
	 * @param ctx the parse tree
	 */
	enterScoped?: (ctx: ScopedContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.scoped`.
	 * @param ctx the parse tree
	 */
	exitScoped?: (ctx: ScopedContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.atomicStatement`.
	 * @param ctx the parse tree
	 */
	enterAtomicStatement?: (ctx: AtomicStatementContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.atomicStatement`.
	 * @param ctx the parse tree
	 */
	exitAtomicStatement?: (ctx: AtomicStatementContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.branchStatement`.
	 * @param ctx the parse tree
	 */
	enterBranchStatement?: (ctx: BranchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.branchStatement`.
	 * @param ctx the parse tree
	 */
	exitBranchStatement?: (ctx: BranchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.subscript`.
	 * @param ctx the parse tree
	 */
	enterSubscript?: (ctx: SubscriptContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.subscript`.
	 * @param ctx the parse tree
	 */
	exitSubscript?: (ctx: SubscriptContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.function_`.
	 * @param ctx the parse tree
	 */
	enterFunction_?: (ctx: Function_Context) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.function_`.
	 * @param ctx the parse tree
	 */
	exitFunction_?: (ctx: Function_Context) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.parameters`.
	 * @param ctx the parse tree
	 */
	enterParameters?: (ctx: ParametersContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.parameters`.
	 * @param ctx the parse tree
	 */
	exitParameters?: (ctx: ParametersContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.ignore`.
	 * @param ctx the parse tree
	 */
	enterIgnore?: (ctx: IgnoreContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.ignore`.
	 * @param ctx the parse tree
	 */
	exitIgnore?: (ctx: IgnoreContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.invocation`.
	 * @param ctx the parse tree
	 */
	enterInvocation?: (ctx: InvocationContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.invocation`.
	 * @param ctx the parse tree
	 */
	exitInvocation?: (ctx: InvocationContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.syncInvocation`.
	 * @param ctx the parse tree
	 */
	enterSyncInvocation?: (ctx: SyncInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.syncInvocation`.
	 * @param ctx the parse tree
	 */
	exitSyncInvocation?: (ctx: SyncInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.asyncInvocation`.
	 * @param ctx the parse tree
	 */
	enterAsyncInvocation?: (ctx: AsyncInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.asyncInvocation`.
	 * @param ctx the parse tree
	 */
	exitAsyncInvocation?: (ctx: AsyncInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.nsInvocation`.
	 * @param ctx the parse tree
	 */
	enterNsInvocation?: (ctx: NsInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.nsInvocation`.
	 * @param ctx the parse tree
	 */
	exitNsInvocation?: (ctx: NsInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.opInvocation`.
	 * @param ctx the parse tree
	 */
	enterOpInvocation?: (ctx: OpInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.opInvocation`.
	 * @param ctx the parse tree
	 */
	exitOpInvocation?: (ctx: OpInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.opPrefix`.
	 * @param ctx the parse tree
	 */
	enterOpPrefix?: (ctx: OpPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.opPrefix`.
	 * @param ctx the parse tree
	 */
	exitOpPrefix?: (ctx: OpPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.opPostfix`.
	 * @param ctx the parse tree
	 */
	enterOpPostfix?: (ctx: OpPostfixContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.opPostfix`.
	 * @param ctx the parse tree
	 */
	exitOpPostfix?: (ctx: OpPostfixContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.opConsumer`.
	 * @param ctx the parse tree
	 */
	enterOpConsumer?: (ctx: OpConsumerContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.opConsumer`.
	 * @param ctx the parse tree
	 */
	exitOpConsumer?: (ctx: OpConsumerContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.ifInvocation`.
	 * @param ctx the parse tree
	 */
	enterIfInvocation?: (ctx: IfInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.ifInvocation`.
	 * @param ctx the parse tree
	 */
	exitIfInvocation?: (ctx: IfInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.opImmutable`.
	 * @param ctx the parse tree
	 */
	enterOpImmutable?: (ctx: OpImmutableContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.opImmutable`.
	 * @param ctx the parse tree
	 */
	exitOpImmutable?: (ctx: OpImmutableContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.associator`.
	 * @param ctx the parse tree
	 */
	enterAssociator?: (ctx: AssociatorContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.associator`.
	 * @param ctx the parse tree
	 */
	exitAssociator?: (ctx: AssociatorContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.escape`.
	 * @param ctx the parse tree
	 */
	enterEscape?: (ctx: EscapeContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.escape`.
	 * @param ctx the parse tree
	 */
	exitEscape?: (ctx: EscapeContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.terminate`.
	 * @param ctx the parse tree
	 */
	enterTerminate?: (ctx: TerminateContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.terminate`.
	 * @param ctx the parse tree
	 */
	exitTerminate?: (ctx: TerminateContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.includeAsync`.
	 * @param ctx the parse tree
	 */
	enterIncludeAsync?: (ctx: IncludeAsyncContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.includeAsync`.
	 * @param ctx the parse tree
	 */
	exitIncludeAsync?: (ctx: IncludeAsyncContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.subInvocation`.
	 * @param ctx the parse tree
	 */
	enterSubInvocation?: (ctx: SubInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.subInvocation`.
	 * @param ctx the parse tree
	 */
	exitSubInvocation?: (ctx: SubInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.conditional`.
	 * @param ctx the parse tree
	 */
	enterConditional?: (ctx: ConditionalContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.conditional`.
	 * @param ctx the parse tree
	 */
	exitConditional?: (ctx: ConditionalContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.ifConditional`.
	 * @param ctx the parse tree
	 */
	enterIfConditional?: (ctx: IfConditionalContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.ifConditional`.
	 * @param ctx the parse tree
	 */
	exitIfConditional?: (ctx: IfConditionalContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.elIfConditional`.
	 * @param ctx the parse tree
	 */
	enterElIfConditional?: (ctx: ElIfConditionalContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.elIfConditional`.
	 * @param ctx the parse tree
	 */
	exitElIfConditional?: (ctx: ElIfConditionalContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.elseConditional`.
	 * @param ctx the parse tree
	 */
	enterElseConditional?: (ctx: ElseConditionalContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.elseConditional`.
	 * @param ctx the parse tree
	 */
	exitElseConditional?: (ctx: ElseConditionalContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.iteration`.
	 * @param ctx the parse tree
	 */
	enterIteration?: (ctx: IterationContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.iteration`.
	 * @param ctx the parse tree
	 */
	exitIteration?: (ctx: IterationContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.atomic`.
	 * @param ctx the parse tree
	 */
	enterAtomic?: (ctx: AtomicContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.atomic`.
	 * @param ctx the parse tree
	 */
	exitAtomic?: (ctx: AtomicContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.sleep`.
	 * @param ctx the parse tree
	 */
	enterSleep?: (ctx: SleepContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.sleep`.
	 * @param ctx the parse tree
	 */
	exitSleep?: (ctx: SleepContext) => void;

	/**
	 * Enter a parse tree produced by `WynnscriptParser.includeSync`.
	 * @param ctx the parse tree
	 */
	enterIncludeSync?: (ctx: IncludeSyncContext) => void;
	/**
	 * Exit a parse tree produced by `WynnscriptParser.includeSync`.
	 * @param ctx the parse tree
	 */
	exitIncludeSync?: (ctx: IncludeSyncContext) => void;
}


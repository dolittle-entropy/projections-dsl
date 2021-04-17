// Generated from ProjectionsParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { PropertyContext } from "./ProjectionsParser";
import { JoinContext } from "./ProjectionsParser";
import { AddContext } from "./ProjectionsParser";
import { SubtractContext } from "./ProjectionsParser";
import { ProjectionsContext } from "./ProjectionsParser";
import { ProjectionContext } from "./ProjectionsParser";
import { IdentifierContext } from "./ProjectionsParser";
import { ProjectionBodyContext } from "./ProjectionsParser";
import { ProjectionFieldContext } from "./ProjectionsParser";
import { StreamExpressionContext } from "./ProjectionsParser";
import { EventPropertyContext } from "./ProjectionsParser";
import { JoinExpressionContext } from "./ProjectionsParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ProjectionsParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ProjectionsParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `Property`
	 * labeled alternative in `ProjectionsParser.streamExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty?: (ctx: PropertyContext) => Result;

	/**
	 * Visit a parse tree produced by the `Join`
	 * labeled alternative in `ProjectionsParser.streamExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoin?: (ctx: JoinContext) => Result;

	/**
	 * Visit a parse tree produced by the `Add`
	 * labeled alternative in `ProjectionsParser.streamExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd?: (ctx: AddContext) => Result;

	/**
	 * Visit a parse tree produced by the `Subtract`
	 * labeled alternative in `ProjectionsParser.streamExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtract?: (ctx: SubtractContext) => Result;

	/**
	 * Visit a parse tree produced by `ProjectionsParser.projections`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProjections?: (ctx: ProjectionsContext) => Result;

	/**
	 * Visit a parse tree produced by `ProjectionsParser.projection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProjection?: (ctx: ProjectionContext) => Result;

	/**
	 * Visit a parse tree produced by `ProjectionsParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ProjectionsParser.projectionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProjectionBody?: (ctx: ProjectionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ProjectionsParser.projectionField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProjectionField?: (ctx: ProjectionFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `ProjectionsParser.streamExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStreamExpression?: (ctx: StreamExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ProjectionsParser.eventProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventProperty?: (ctx: EventPropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `ProjectionsParser.joinExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinExpression?: (ctx: JoinExpressionContext) => Result;
}


// Generated from ProjectionsParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `ProjectionsParser`.
 */
export interface ProjectionsParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `Property`
	 * labeled alternative in `ProjectionsParser.streamExpression`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by the `Property`
	 * labeled alternative in `ProjectionsParser.streamExpression`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by the `Join`
	 * labeled alternative in `ProjectionsParser.streamExpression`.
	 * @param ctx the parse tree
	 */
	enterJoin?: (ctx: JoinContext) => void;
	/**
	 * Exit a parse tree produced by the `Join`
	 * labeled alternative in `ProjectionsParser.streamExpression`.
	 * @param ctx the parse tree
	 */
	exitJoin?: (ctx: JoinContext) => void;

	/**
	 * Enter a parse tree produced by the `Add`
	 * labeled alternative in `ProjectionsParser.streamExpression`.
	 * @param ctx the parse tree
	 */
	enterAdd?: (ctx: AddContext) => void;
	/**
	 * Exit a parse tree produced by the `Add`
	 * labeled alternative in `ProjectionsParser.streamExpression`.
	 * @param ctx the parse tree
	 */
	exitAdd?: (ctx: AddContext) => void;

	/**
	 * Enter a parse tree produced by the `Subtract`
	 * labeled alternative in `ProjectionsParser.streamExpression`.
	 * @param ctx the parse tree
	 */
	enterSubtract?: (ctx: SubtractContext) => void;
	/**
	 * Exit a parse tree produced by the `Subtract`
	 * labeled alternative in `ProjectionsParser.streamExpression`.
	 * @param ctx the parse tree
	 */
	exitSubtract?: (ctx: SubtractContext) => void;

	/**
	 * Enter a parse tree produced by `ProjectionsParser.projections`.
	 * @param ctx the parse tree
	 */
	enterProjections?: (ctx: ProjectionsContext) => void;
	/**
	 * Exit a parse tree produced by `ProjectionsParser.projections`.
	 * @param ctx the parse tree
	 */
	exitProjections?: (ctx: ProjectionsContext) => void;

	/**
	 * Enter a parse tree produced by `ProjectionsParser.projection`.
	 * @param ctx the parse tree
	 */
	enterProjection?: (ctx: ProjectionContext) => void;
	/**
	 * Exit a parse tree produced by `ProjectionsParser.projection`.
	 * @param ctx the parse tree
	 */
	exitProjection?: (ctx: ProjectionContext) => void;

	/**
	 * Enter a parse tree produced by `ProjectionsParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `ProjectionsParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `ProjectionsParser.projectionBody`.
	 * @param ctx the parse tree
	 */
	enterProjectionBody?: (ctx: ProjectionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `ProjectionsParser.projectionBody`.
	 * @param ctx the parse tree
	 */
	exitProjectionBody?: (ctx: ProjectionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `ProjectionsParser.projectionField`.
	 * @param ctx the parse tree
	 */
	enterProjectionField?: (ctx: ProjectionFieldContext) => void;
	/**
	 * Exit a parse tree produced by `ProjectionsParser.projectionField`.
	 * @param ctx the parse tree
	 */
	exitProjectionField?: (ctx: ProjectionFieldContext) => void;

	/**
	 * Enter a parse tree produced by `ProjectionsParser.streamExpression`.
	 * @param ctx the parse tree
	 */
	enterStreamExpression?: (ctx: StreamExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ProjectionsParser.streamExpression`.
	 * @param ctx the parse tree
	 */
	exitStreamExpression?: (ctx: StreamExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ProjectionsParser.eventProperty`.
	 * @param ctx the parse tree
	 */
	enterEventProperty?: (ctx: EventPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `ProjectionsParser.eventProperty`.
	 * @param ctx the parse tree
	 */
	exitEventProperty?: (ctx: EventPropertyContext) => void;

	/**
	 * Enter a parse tree produced by `ProjectionsParser.joinExpression`.
	 * @param ctx the parse tree
	 */
	enterJoinExpression?: (ctx: JoinExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ProjectionsParser.joinExpression`.
	 * @param ctx the parse tree
	 */
	exitJoinExpression?: (ctx: JoinExpressionContext) => void;
}


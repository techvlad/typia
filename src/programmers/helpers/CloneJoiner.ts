import ts from "typescript";

import { StatementFactory } from "../../factories/StatementFactory";

import { MetadataObject } from "../../metadata/MetadataObject";

import { Escaper } from "../../utils/Escaper";

import { metadata_to_pattern } from "../internal/metadata_to_pattern";
import { IExpressionEntry } from "./IExpressionEntry";

export namespace CloneJoiner {
    export const object = (
        input: ts.Expression,
        entries: IExpressionEntry<ts.Expression>[],
        _obj: MetadataObject,
    ): ts.ConciseBody => {
        const regular = entries.filter((e) => e.key.isSoleLiteral());
        const dynamic = entries.filter((e) => !e.key.isSoleLiteral());

        if (regular.length === 0 && dynamic.length === 0)
            return ts.factory.createIdentifier("{}");

        const literal = ts.factory.createObjectLiteralExpression(
            regular.map((entry) => {
                const str: string = entry.key.getSoleLiteral()!;
                return ts.factory.createPropertyAssignment(
                    Escaper.variable(str)
                        ? str
                        : ts.factory.createStringLiteral(str),
                    entry.expression,
                );
            }),
            true,
        );
        if (dynamic.length === 0) return literal;

        const key = ts.factory.createIdentifier("key");
        const value = ts.factory.createIdentifier("value");
        const output = ts.factory.createIdentifier("output");

        const statements: ts.Statement[] = dynamic.map((entry) =>
            ts.factory.createIfStatement(
                ts.factory.createCallExpression(
                    ts.factory.createIdentifier(
                        `RegExp(/${metadata_to_pattern(true)(
                            entry.key,
                        )}/).test`,
                    ),
                    undefined,
                    [key],
                ),
                ts.factory.createBlock([
                    ts.factory.createExpressionStatement(
                        ts.factory.createBinaryExpression(
                            ts.factory.createElementAccessExpression(
                                output,
                                key,
                            ),
                            ts.factory.createToken(ts.SyntaxKind.EqualsToken),
                            entry.expression,
                        ),
                    ),
                    ts.factory.createContinueStatement(),
                ]),
            ),
        );

        return ts.factory.createBlock([
            StatementFactory.constant("output", literal),
            ts.factory.createForOfStatement(
                undefined,
                ts.factory.createVariableDeclarationList(
                    [
                        ts.factory.createVariableDeclaration(
                            ts.factory.createArrayBindingPattern([
                                ts.factory.createBindingElement(
                                    undefined,
                                    undefined,
                                    key,
                                    undefined,
                                ),
                                ts.factory.createBindingElement(
                                    undefined,
                                    undefined,
                                    value,
                                    undefined,
                                ),
                            ]),
                            undefined,
                            undefined,
                            undefined,
                        ),
                    ],
                    ts.NodeFlags.Const,
                ),
                ts.factory.createCallExpression(
                    ts.factory.createIdentifier("Object.entries"),
                    undefined,
                    [input],
                ),
                ts.factory.createBlock(statements),
            ),
            ts.factory.createReturnStatement(output),
        ]);
    };

    export const tuple = (
        children: ts.Expression[],
        rest: ts.Expression | null,
    ): ts.Expression => {
        if (rest === null)
            return ts.factory.createArrayLiteralExpression(children, true);
        return ts.factory.createArrayLiteralExpression(
            [...children, ts.factory.createSpreadElement(rest)],
            true,
        );
    };

    export const array = (input: ts.Expression, arrow: ts.Expression) =>
        ts.factory.createCallExpression(
            ts.factory.createPropertyAccessExpression(input, "map"),
            undefined,
            [arrow],
        );
}

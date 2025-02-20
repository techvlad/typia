import typia from "../../../../src";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_json_assertStringify_CommentTagAtomicUnion =
    _test_json_assertStringify("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
        CommentTagAtomicUnion,
    )((input) =>
        ((input: any): string => {
            const assert = (input: any): CommentTagAtomicUnion => {
                const __is = (input: any): input is CommentTagAtomicUnion => {
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.value) &&
                        input.value.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        );
                    const $io1 = (input: any): boolean =>
                        ("string" === typeof input.value &&
                            3 <= input.value.length &&
                            input.value.length <= 7) ||
                        ("number" === typeof input.value &&
                            Number.isFinite(input.value) &&
                            3 <= input.value);
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is CommentTagAtomicUnion => {
                        const $guard = (typia.json.assertStringify as any)
                            .guard;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ((Array.isArray(input.value) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected:
                                        "Array<CommentTagAtomicUnion.Type>",
                                    value: input.value,
                                })) &&
                                input.value.every(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                expected:
                                                    "CommentTagAtomicUnion.Type",
                                                value: elem,
                                            })) &&
                                            $ao1(
                                                elem,
                                                _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".value[" +
                                                _index1 +
                                                "]",
                                            expected:
                                                "CommentTagAtomicUnion.Type",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "Array<CommentTagAtomicUnion.Type>",
                                value: input.value,
                            });
                        const $ao1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ("string" === typeof input.value &&
                                (3 <= input.value.length ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "string & MinLength<3>",
                                        value: input.value,
                                    })) &&
                                (input.value.length <= 7 ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "string & MaxLength<7>",
                                        value: input.value,
                                    }))) ||
                            ("number" === typeof input.value &&
                                (Number.isFinite(input.value) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "number",
                                        value: input.value,
                                    })) &&
                                (3 <= input.value ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "number & Minimum<3>",
                                        value: input.value,
                                    }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected:
                                    "((number & Minimum<3>) | (string & MinLength<3> & MaxLength<7>))",
                                value: input.value,
                            });
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "CommentTagAtomicUnion",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "CommentTagAtomicUnion",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify = (input: CommentTagAtomicUnion): string => {
                const $io1 = (input: any): boolean =>
                    ("string" === typeof input.value &&
                        3 <= input.value.length &&
                        input.value.length <= 7) ||
                    ("number" === typeof input.value && 3 <= input.value);
                const $string = (typia.json.assertStringify as any).string;
                const $number = (typia.json.assertStringify as any).number;
                const $throws = (typia.json.assertStringify as any).throws;
                const $so0 = (input: any): any =>
                    `{"value":${`[${input.value
                        .map((elem: any) => $so1(elem))
                        .join(",")}]`}}`;
                const $so1 = (input: any): any =>
                    `{"value":${(() => {
                        if (
                            "string" === typeof input.value &&
                            3 <= input.value.length &&
                            input.value.length <= 7
                        )
                            return $string(input.value);
                        if ("number" === typeof input.value && 3 <= input.value)
                            return $number(input.value);
                        $throws({
                            expected:
                                "((number & Minimum<3>) | (string & MinLength<3> & MaxLength<7>))",
                            value: input.value,
                        });
                    })()}}`;
                return $so0(input);
            };
            return stringify(assert(input));
        })(input),
    );

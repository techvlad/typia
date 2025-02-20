import typia from "../../../../src";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_misc_createAssertPrune_DynamicTemplate =
    _test_misc_assertPrune("DynamicTemplate")<DynamicTemplate>(DynamicTemplate)(
        (input: any): DynamicTemplate => {
            const assert = (input: any): DynamicTemplate => {
                const __is = (input: any): input is DynamicTemplate => {
                    const $io0 = (input: any): boolean =>
                        Object.keys(input).every((key: any) => {
                            const value = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/^(prefix_(.*))/).test(key))
                                return "string" === typeof value;
                            if (RegExp(/((.*)_postfix)$/).test(key))
                                return "string" === typeof value;
                            if (
                                RegExp(
                                    /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                                ).test(key)
                            )
                                return (
                                    "number" === typeof value &&
                                    Number.isFinite(value)
                                );
                            if (
                                RegExp(
                                    /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                                ).test(key)
                            )
                                return "boolean" === typeof value;
                            return true;
                        });
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        false === Array.isArray(input) &&
                        $io0(input)
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is DynamicTemplate => {
                        const $guard = (typia.misc.createAssertPrune as any)
                            .guard;
                        const $join = (typia.misc.createAssertPrune as any)
                            .join;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            false === _exceptionable ||
                            Object.keys(input).every((key: any) => {
                                const value = input[key];
                                if (undefined === value) return true;
                                if (RegExp(/^(prefix_(.*))/).test(key))
                                    return (
                                        "string" === typeof value ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "string",
                                            value: value,
                                        })
                                    );
                                if (RegExp(/((.*)_postfix)$/).test(key))
                                    return (
                                        "string" === typeof value ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "string",
                                            value: value,
                                        })
                                    );
                                if (
                                    RegExp(
                                        /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                                    ).test(key)
                                )
                                    return (
                                        ("number" === typeof value &&
                                            Number.isFinite(value)) ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "number",
                                            value: value,
                                        })
                                    );
                                if (
                                    RegExp(
                                        /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                                    ).test(key)
                                )
                                    return (
                                        "boolean" === typeof value ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "boolean",
                                            value: value,
                                        })
                                    );
                                return true;
                            });
                        return (
                            ((("object" === typeof input &&
                                null !== input &&
                                false === Array.isArray(input)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "DynamicTemplate",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "DynamicTemplate",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const prune = (input: DynamicTemplate): void => {
                const $po0 = (input: any): any => {
                    Object.entries(input).forEach(([key, value]: any) => {
                        if (undefined === value) return;
                        if (RegExp(/^(prefix_(.*))/).test(key)) {
                        }
                        if (RegExp(/((.*)_postfix)$/).test(key)) {
                        }
                        if (
                            RegExp(
                                /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                            ).test(key)
                        ) {
                        }
                        if (
                            RegExp(
                                /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                            ).test(key)
                        ) {
                        }
                    });
                    for (const key of Object.keys(input)) {
                        if (
                            RegExp(/^(prefix_(.*))/).test(key) ||
                            RegExp(/((.*)_postfix)$/).test(key) ||
                            RegExp(
                                /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                            ).test(key) ||
                            RegExp(
                                /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                            ).test(key)
                        )
                            continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            assert(input);
            prune(input);
            return input;
        },
    );

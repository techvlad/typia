import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_createIs_ObjectRequired = _test_is(
    "ObjectRequired",
)<ObjectRequired>(ObjectRequired)((input: any): input is ObjectRequired => {
    const $io0 = (input: any): boolean =>
        "boolean" === typeof input.boolean &&
        "number" === typeof input.number &&
        Number.isFinite(input.number) &&
        "string" === typeof input.string &&
        Array.isArray(input.array) &&
        input.array.every(
            (elem: any) => "number" === typeof elem && Number.isFinite(elem),
        ) &&
        (null === input.object ||
            ("object" === typeof input.object &&
                null !== input.object &&
                false === Array.isArray(input.object) &&
                $io1(input.object)));
    const $io1 = (input: any): boolean =>
        (undefined === input.boolean || "boolean" === typeof input.boolean) &&
        (undefined === input.number ||
            ("number" === typeof input.number &&
                Number.isFinite(input.number))) &&
        (undefined === input.string || "string" === typeof input.string) &&
        (undefined === input.array ||
            (Array.isArray(input.array) &&
                input.array.every(
                    (elem: any) =>
                        "number" === typeof elem && Number.isFinite(elem),
                ))) &&
        (null === input.object ||
            undefined === input.object ||
            ("object" === typeof input.object &&
                null !== input.object &&
                false === Array.isArray(input.object) &&
                $io1(input.object)));
    return "object" === typeof input && null !== input && $io0(input);
});

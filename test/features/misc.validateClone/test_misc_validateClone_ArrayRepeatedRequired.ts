import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_misc_validateClone_ArrayRepeatedRequired =
    _test_misc_validateClone("ArrayRepeatedRequired")<ArrayRepeatedRequired>(
        ArrayRepeatedRequired,
    )((input) => typia.misc.validateClone<ArrayRepeatedRequired>(input));

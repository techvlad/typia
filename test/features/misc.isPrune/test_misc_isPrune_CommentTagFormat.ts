import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_misc_isPrune_CommentTagFormat = _test_misc_isPrune(
    "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)((input) =>
    typia.misc.isPrune<CommentTagFormat>(input),
);

import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TagFormat } from "../../../structures/TagFormat";

export const test_random_TagFormat = _test_random(
    "TagFormat",
    () =>
        ((
            generator: Partial<typia.IRandomGenerator> = (typia.random as any)
                .generator,
        ): typia.Primitive<TagFormat> => {
            const $generator = (typia.random as any).generator;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                uuid: (generator.uuid ?? $generator.uuid)(),
                email: (generator.email ?? $generator.email)(),
                url: (generator.url ?? $generator.url)(),
                ipv4: (generator.ipv4 ?? $generator.ipv4)(),
                ipv6: (generator.ipv6 ?? $generator.ipv6)(),
                date: (generator.date ?? $generator.date)(),
                date_time: (generator.datetime ?? $generator.datetime)(),
                datetime: (generator.datetime ?? $generator.datetime)(),
                dateTime: (generator.datetime ?? $generator.datetime)(),
                custom: (generator.string ?? $generator.string)(),
            });
            return $ro0();
        })(),
    (input: any): TagFormat => {
        const $guard = (typia.createAssert as any).guard;
        const $is_uuid = (typia.createAssert as any).is_uuid;
        const $is_email = (typia.createAssert as any).is_email;
        const $is_url = (typia.createAssert as any).is_url;
        const $is_ipv4 = (typia.createAssert as any).is_ipv4;
        const $is_ipv6 = (typia.createAssert as any).is_ipv6;
        const $is_date = (typia.createAssert as any).is_date;
        const $is_datetime = (typia.createAssert as any).is_datetime;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagFormat => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("string" === typeof input.uuid &&
                    true === $is_uuid(input.uuid)) ||
                    $guard(_exceptionable, {
                        path: _path + ".uuid",
                        expected: "string",
                        value: input.uuid,
                    })) &&
                (("string" === typeof input.email &&
                    true === $is_email(input.email)) ||
                    $guard(_exceptionable, {
                        path: _path + ".email",
                        expected: "string",
                        value: input.email,
                    })) &&
                (("string" === typeof input.url &&
                    true === $is_url(input.url)) ||
                    $guard(_exceptionable, {
                        path: _path + ".url",
                        expected: "string",
                        value: input.url,
                    })) &&
                (("string" === typeof input.ipv4 &&
                    true === $is_ipv4(input.ipv4)) ||
                    $guard(_exceptionable, {
                        path: _path + ".ipv4",
                        expected: "string",
                        value: input.ipv4,
                    })) &&
                (("string" === typeof input.ipv6 &&
                    true === $is_ipv6(input.ipv6)) ||
                    $guard(_exceptionable, {
                        path: _path + ".ipv6",
                        expected: "string",
                        value: input.ipv6,
                    })) &&
                (("string" === typeof input.date &&
                    true === $is_date(input.date)) ||
                    $guard(_exceptionable, {
                        path: _path + ".date",
                        expected: "string",
                        value: input.date,
                    })) &&
                (("string" === typeof input.date_time &&
                    true === $is_datetime(input.date_time)) ||
                    $guard(_exceptionable, {
                        path: _path + ".date_time",
                        expected: "string",
                        value: input.date_time,
                    })) &&
                (("string" === typeof input.datetime &&
                    true === $is_datetime(input.datetime)) ||
                    $guard(_exceptionable, {
                        path: _path + ".datetime",
                        expected: "string",
                        value: input.datetime,
                    })) &&
                (("string" === typeof input.dateTime &&
                    true === $is_datetime(input.dateTime)) ||
                    $guard(_exceptionable, {
                        path: _path + ".dateTime",
                        expected: "string",
                        value: input.dateTime,
                    })) &&
                ("string" === typeof input.custom ||
                    $guard(_exceptionable, {
                        path: _path + ".custom",
                        expected: "string",
                        value: input.custom,
                    }));
            return (
                (("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<TagFormat>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
);

import { createClientPerformanceBenchmarkProgram } from "../createClientPerformanceBenchmarkProgram";

createClientPerformanceBenchmarkProgram(
    __dirname +
        "/../internal/fastify-pure/benchmark-server-performance-fastify-pure-ObjectSimple" +
        __filename.substr(-3),
);

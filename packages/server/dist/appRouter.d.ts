export declare const appRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: {
        db: any;
        tenantId: string;
        role: "admin" | "user";
    };
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, {
    system: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: {
            db: any;
            tenantId: string;
            role: "admin" | "user";
        };
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>, {
        health: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: {
                    db: any;
                    tenantId: string;
                    role: "admin" | "user";
                };
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            }>;
            _ctx_out: {
                db: any;
                tenantId: string;
                role: "admin" | "user";
            };
            _input_in: typeof import("@trpc/server").unsetMarker;
            _input_out: typeof import("@trpc/server").unsetMarker;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
            _meta: object;
        }, {
            ok: true;
        }>;
        version: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: {
                    db: any;
                    tenantId: string;
                    role: "admin" | "user";
                };
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            }>;
            _ctx_out: {
                db: any;
                tenantId: string;
                role: "admin" | "user";
            };
            _input_in: typeof import("@trpc/server").unsetMarker;
            _input_out: typeof import("@trpc/server").unsetMarker;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
            _meta: object;
        }, {
            name: string;
            env: string;
        }>;
    }>;
    onboarding: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: {
            db: any;
            tenantId: string;
            role: "admin" | "user";
        };
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>, {
        registerDev: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: {
                    db: any;
                    tenantId: string;
                    role: "admin" | "user";
                };
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            }>;
            _meta: object;
            _ctx_out: {
                db: any;
                tenantId: string;
                role: "admin" | "user";
            };
            _input_in: {
                email: string;
                company: string;
            };
            _input_out: {
                email: string;
                company: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            tenantId: string;
        }>;
        setVertical: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: {
                    db: any;
                    tenantId: string;
                    role: "admin" | "user";
                };
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            }>;
            _meta: object;
            _ctx_out: {
                db: any;
                tenantId: string;
                role: "admin" | "user";
            };
            _input_in: {
                vertical: string;
            };
            _input_out: {
                vertical: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            ok: boolean;
            tenantId: string;
        }>;
        setTemplate: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: {
                    db: any;
                    tenantId: string;
                    role: "admin" | "user";
                };
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            }>;
            _meta: object;
            _ctx_out: {
                db: any;
                tenantId: string;
                role: "admin" | "user";
            };
            _input_in: {
                template: string;
            };
            _input_out: {
                template: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            ok: boolean;
            tenantId: string;
        }>;
        setTheme: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: {
                    db: any;
                    tenantId: string;
                    role: "admin" | "user";
                };
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            }>;
            _meta: object;
            _ctx_out: {
                db: any;
                tenantId: string;
                role: "admin" | "user";
            };
            _input_in: {
                themeId: string;
            };
            _input_out: {
                themeId: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            ok: boolean;
            tenantId: string;
        }>;
        startTrial: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: {
                    db: any;
                    tenantId: string;
                    role: "admin" | "user";
                };
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            }>;
            _meta: object;
            _ctx_out: {
                db: any;
                tenantId: string;
                role: "admin" | "user";
            };
            _input_in: {
                planId: string;
            };
            _input_out: {
                planId: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            ok: boolean;
            tenantId: string;
        }>;
        finalize: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: {
                    db: any;
                    tenantId: string;
                    role: "admin" | "user";
                };
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: import("@trpc/server").DefaultDataTransformer;
            }>;
            _meta: object;
            _ctx_out: {
                db: any;
                tenantId: string;
                role: "admin" | "user";
            };
            _input_in: {
                slug: string;
            };
            _input_out: {
                slug: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            ok: boolean;
            tenantId: string;
            siteUrl: string;
        }>;
    }>;
}>;
export type AppRouter = typeof appRouter;

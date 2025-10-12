export declare const pagesRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: {
        db: any;
        tenantId: string;
        role: "admin" | "user";
    };
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, {
    list: import("@trpc/server").BuildProcedure<"query", {
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
            siteId: string;
        };
        _input_out: {
            siteId: string;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, any>;
    update: import("@trpc/server").BuildProcedure<"mutation", {
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
            id: string;
            overrides?: Record<string, any> | undefined;
            published?: boolean | undefined;
        };
        _input_out: {
            id: string;
            overrides?: Record<string, any> | undefined;
            published?: boolean | undefined;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, any>;
}>;

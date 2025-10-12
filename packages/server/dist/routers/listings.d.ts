export declare const listingsRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
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
            limit?: number | undefined;
            offset?: number | undefined;
            status?: "draft" | "published" | "archived" | undefined;
        };
        _input_out: {
            limit: number;
            offset: number;
            status?: "draft" | "published" | "archived" | undefined;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
        listings: any;
        total: any;
        hasMore: boolean;
    }>;
}>;

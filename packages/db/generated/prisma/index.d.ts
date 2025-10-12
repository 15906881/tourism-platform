
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Membership
 * 
 */
export type Membership = $Result.DefaultSelection<Prisma.$MembershipPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model accounts
 * 
 */
export type accounts = $Result.DefaultSelection<Prisma.$accountsPayload>
/**
 * Model hello
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type hello = $Result.DefaultSelection<Prisma.$helloPayload>
/**
 * Model leads
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type leads = $Result.DefaultSelection<Prisma.$leadsPayload>
/**
 * Model listing_media
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type listing_media = $Result.DefaultSelection<Prisma.$listing_mediaPayload>
/**
 * Model listings
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 * This model contains an expression index which requires additional setup for migrations. Visit https://pris.ly/d/expression-indexes for more info.
 */
export type listings = $Result.DefaultSelection<Prisma.$listingsPayload>
/**
 * Model media
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type media = $Result.DefaultSelection<Prisma.$mediaPayload>
/**
 * Model pages
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type pages = $Result.DefaultSelection<Prisma.$pagesPayload>
/**
 * Model sites
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type sites = $Result.DefaultSelection<Prisma.$sitesPayload>
/**
 * Model templates
 * 
 */
export type templates = $Result.DefaultSelection<Prisma.$templatesPayload>
/**
 * Model tenant_templates
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type tenant_templates = $Result.DefaultSelection<Prisma.$tenant_templatesPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.membership`: Exposes CRUD operations for the **Membership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memberships
    * const memberships = await prisma.membership.findMany()
    * ```
    */
  get membership(): Prisma.MembershipDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;

  /**
   * `prisma.accounts`: Exposes CRUD operations for the **accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.accountsDelegate<ExtArgs>;

  /**
   * `prisma.hello`: Exposes CRUD operations for the **hello** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hellos
    * const hellos = await prisma.hello.findMany()
    * ```
    */
  get hello(): Prisma.helloDelegate<ExtArgs>;

  /**
   * `prisma.leads`: Exposes CRUD operations for the **leads** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.leads.findMany()
    * ```
    */
  get leads(): Prisma.leadsDelegate<ExtArgs>;

  /**
   * `prisma.listing_media`: Exposes CRUD operations for the **listing_media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listing_medias
    * const listing_medias = await prisma.listing_media.findMany()
    * ```
    */
  get listing_media(): Prisma.listing_mediaDelegate<ExtArgs>;

  /**
   * `prisma.listings`: Exposes CRUD operations for the **listings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listings
    * const listings = await prisma.listings.findMany()
    * ```
    */
  get listings(): Prisma.listingsDelegate<ExtArgs>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.mediaDelegate<ExtArgs>;

  /**
   * `prisma.pages`: Exposes CRUD operations for the **pages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pages
    * const pages = await prisma.pages.findMany()
    * ```
    */
  get pages(): Prisma.pagesDelegate<ExtArgs>;

  /**
   * `prisma.sites`: Exposes CRUD operations for the **sites** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sites
    * const sites = await prisma.sites.findMany()
    * ```
    */
  get sites(): Prisma.sitesDelegate<ExtArgs>;

  /**
   * `prisma.templates`: Exposes CRUD operations for the **templates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.templates.findMany()
    * ```
    */
  get templates(): Prisma.templatesDelegate<ExtArgs>;

  /**
   * `prisma.tenant_templates`: Exposes CRUD operations for the **tenant_templates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenant_templates
    * const tenant_templates = await prisma.tenant_templates.findMany()
    * ```
    */
  get tenant_templates(): Prisma.tenant_templatesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Tenant: 'Tenant',
    User: 'User',
    Membership: 'Membership',
    AuditLog: 'AuditLog',
    accounts: 'accounts',
    hello: 'hello',
    leads: 'leads',
    listing_media: 'listing_media',
    listings: 'listings',
    media: 'media',
    pages: 'pages',
    sites: 'sites',
    templates: 'templates',
    tenant_templates: 'tenant_templates'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "tenant" | "user" | "membership" | "auditLog" | "accounts" | "hello" | "leads" | "listing_media" | "listings" | "media" | "pages" | "sites" | "templates" | "tenant_templates"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Membership: {
        payload: Prisma.$MembershipPayload<ExtArgs>
        fields: Prisma.MembershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembershipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembershipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          findFirst: {
            args: Prisma.MembershipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembershipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          findMany: {
            args: Prisma.MembershipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
          }
          create: {
            args: Prisma.MembershipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          createMany: {
            args: Prisma.MembershipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembershipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
          }
          delete: {
            args: Prisma.MembershipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          update: {
            args: Prisma.MembershipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          deleteMany: {
            args: Prisma.MembershipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembershipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MembershipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          aggregate: {
            args: Prisma.MembershipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembership>
          }
          groupBy: {
            args: Prisma.MembershipGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembershipCountArgs<ExtArgs>
            result: $Utils.Optional<MembershipCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      accounts: {
        payload: Prisma.$accountsPayload<ExtArgs>
        fields: Prisma.accountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findFirst: {
            args: Prisma.accountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findMany: {
            args: Prisma.accountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          create: {
            args: Prisma.accountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          createMany: {
            args: Prisma.accountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.accountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          delete: {
            args: Prisma.accountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          update: {
            args: Prisma.accountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          deleteMany: {
            args: Prisma.accountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.accountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          aggregate: {
            args: Prisma.AccountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccounts>
          }
          groupBy: {
            args: Prisma.accountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.accountsCountArgs<ExtArgs>
            result: $Utils.Optional<AccountsCountAggregateOutputType> | number
          }
        }
      }
      hello: {
        payload: Prisma.$helloPayload<ExtArgs>
        fields: Prisma.helloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.helloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$helloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.helloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$helloPayload>
          }
          findFirst: {
            args: Prisma.helloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$helloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.helloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$helloPayload>
          }
          findMany: {
            args: Prisma.helloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$helloPayload>[]
          }
          create: {
            args: Prisma.helloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$helloPayload>
          }
          createMany: {
            args: Prisma.helloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.helloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$helloPayload>[]
          }
          delete: {
            args: Prisma.helloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$helloPayload>
          }
          update: {
            args: Prisma.helloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$helloPayload>
          }
          deleteMany: {
            args: Prisma.helloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.helloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.helloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$helloPayload>
          }
          aggregate: {
            args: Prisma.HelloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHello>
          }
          groupBy: {
            args: Prisma.helloGroupByArgs<ExtArgs>
            result: $Utils.Optional<HelloGroupByOutputType>[]
          }
          count: {
            args: Prisma.helloCountArgs<ExtArgs>
            result: $Utils.Optional<HelloCountAggregateOutputType> | number
          }
        }
      }
      leads: {
        payload: Prisma.$leadsPayload<ExtArgs>
        fields: Prisma.leadsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.leadsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.leadsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          findFirst: {
            args: Prisma.leadsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.leadsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          findMany: {
            args: Prisma.leadsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>[]
          }
          create: {
            args: Prisma.leadsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          createMany: {
            args: Prisma.leadsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.leadsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>[]
          }
          delete: {
            args: Prisma.leadsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          update: {
            args: Prisma.leadsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          deleteMany: {
            args: Prisma.leadsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.leadsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.leadsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          aggregate: {
            args: Prisma.LeadsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeads>
          }
          groupBy: {
            args: Prisma.leadsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadsGroupByOutputType>[]
          }
          count: {
            args: Prisma.leadsCountArgs<ExtArgs>
            result: $Utils.Optional<LeadsCountAggregateOutputType> | number
          }
        }
      }
      listing_media: {
        payload: Prisma.$listing_mediaPayload<ExtArgs>
        fields: Prisma.listing_mediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.listing_mediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listing_mediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.listing_mediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listing_mediaPayload>
          }
          findFirst: {
            args: Prisma.listing_mediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listing_mediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.listing_mediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listing_mediaPayload>
          }
          findMany: {
            args: Prisma.listing_mediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listing_mediaPayload>[]
          }
          create: {
            args: Prisma.listing_mediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listing_mediaPayload>
          }
          createMany: {
            args: Prisma.listing_mediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.listing_mediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listing_mediaPayload>[]
          }
          delete: {
            args: Prisma.listing_mediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listing_mediaPayload>
          }
          update: {
            args: Prisma.listing_mediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listing_mediaPayload>
          }
          deleteMany: {
            args: Prisma.listing_mediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.listing_mediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.listing_mediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listing_mediaPayload>
          }
          aggregate: {
            args: Prisma.Listing_mediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListing_media>
          }
          groupBy: {
            args: Prisma.listing_mediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Listing_mediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.listing_mediaCountArgs<ExtArgs>
            result: $Utils.Optional<Listing_mediaCountAggregateOutputType> | number
          }
        }
      }
      listings: {
        payload: Prisma.$listingsPayload<ExtArgs>
        fields: Prisma.listingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.listingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.listingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listingsPayload>
          }
          findFirst: {
            args: Prisma.listingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.listingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listingsPayload>
          }
          findMany: {
            args: Prisma.listingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listingsPayload>[]
          }
          create: {
            args: Prisma.listingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listingsPayload>
          }
          createMany: {
            args: Prisma.listingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.listingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listingsPayload>[]
          }
          delete: {
            args: Prisma.listingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listingsPayload>
          }
          update: {
            args: Prisma.listingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listingsPayload>
          }
          deleteMany: {
            args: Prisma.listingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.listingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.listingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listingsPayload>
          }
          aggregate: {
            args: Prisma.ListingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListings>
          }
          groupBy: {
            args: Prisma.listingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.listingsCountArgs<ExtArgs>
            result: $Utils.Optional<ListingsCountAggregateOutputType> | number
          }
        }
      }
      media: {
        payload: Prisma.$mediaPayload<ExtArgs>
        fields: Prisma.mediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          findFirst: {
            args: Prisma.mediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          findMany: {
            args: Prisma.mediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>[]
          }
          create: {
            args: Prisma.mediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          createMany: {
            args: Prisma.mediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>[]
          }
          delete: {
            args: Prisma.mediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          update: {
            args: Prisma.mediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          deleteMany: {
            args: Prisma.mediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.mediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.mediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      pages: {
        payload: Prisma.$pagesPayload<ExtArgs>
        fields: Prisma.pagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagesPayload>
          }
          findFirst: {
            args: Prisma.pagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagesPayload>
          }
          findMany: {
            args: Prisma.pagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagesPayload>[]
          }
          create: {
            args: Prisma.pagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagesPayload>
          }
          createMany: {
            args: Prisma.pagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagesPayload>[]
          }
          delete: {
            args: Prisma.pagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagesPayload>
          }
          update: {
            args: Prisma.pagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagesPayload>
          }
          deleteMany: {
            args: Prisma.pagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagesPayload>
          }
          aggregate: {
            args: Prisma.PagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePages>
          }
          groupBy: {
            args: Prisma.pagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.pagesCountArgs<ExtArgs>
            result: $Utils.Optional<PagesCountAggregateOutputType> | number
          }
        }
      }
      sites: {
        payload: Prisma.$sitesPayload<ExtArgs>
        fields: Prisma.sitesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sitesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sitesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitesPayload>
          }
          findFirst: {
            args: Prisma.sitesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sitesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitesPayload>
          }
          findMany: {
            args: Prisma.sitesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitesPayload>[]
          }
          create: {
            args: Prisma.sitesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitesPayload>
          }
          createMany: {
            args: Prisma.sitesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sitesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitesPayload>[]
          }
          delete: {
            args: Prisma.sitesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitesPayload>
          }
          update: {
            args: Prisma.sitesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitesPayload>
          }
          deleteMany: {
            args: Prisma.sitesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sitesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sitesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitesPayload>
          }
          aggregate: {
            args: Prisma.SitesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSites>
          }
          groupBy: {
            args: Prisma.sitesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SitesGroupByOutputType>[]
          }
          count: {
            args: Prisma.sitesCountArgs<ExtArgs>
            result: $Utils.Optional<SitesCountAggregateOutputType> | number
          }
        }
      }
      templates: {
        payload: Prisma.$templatesPayload<ExtArgs>
        fields: Prisma.templatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.templatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.templatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>
          }
          findFirst: {
            args: Prisma.templatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.templatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>
          }
          findMany: {
            args: Prisma.templatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>[]
          }
          create: {
            args: Prisma.templatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>
          }
          createMany: {
            args: Prisma.templatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.templatesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>[]
          }
          delete: {
            args: Prisma.templatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>
          }
          update: {
            args: Prisma.templatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>
          }
          deleteMany: {
            args: Prisma.templatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.templatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.templatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>
          }
          aggregate: {
            args: Prisma.TemplatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplates>
          }
          groupBy: {
            args: Prisma.templatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.templatesCountArgs<ExtArgs>
            result: $Utils.Optional<TemplatesCountAggregateOutputType> | number
          }
        }
      }
      tenant_templates: {
        payload: Prisma.$tenant_templatesPayload<ExtArgs>
        fields: Prisma.tenant_templatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tenant_templatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenant_templatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tenant_templatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenant_templatesPayload>
          }
          findFirst: {
            args: Prisma.tenant_templatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenant_templatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tenant_templatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenant_templatesPayload>
          }
          findMany: {
            args: Prisma.tenant_templatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenant_templatesPayload>[]
          }
          create: {
            args: Prisma.tenant_templatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenant_templatesPayload>
          }
          createMany: {
            args: Prisma.tenant_templatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tenant_templatesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenant_templatesPayload>[]
          }
          delete: {
            args: Prisma.tenant_templatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenant_templatesPayload>
          }
          update: {
            args: Prisma.tenant_templatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenant_templatesPayload>
          }
          deleteMany: {
            args: Prisma.tenant_templatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tenant_templatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tenant_templatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenant_templatesPayload>
          }
          aggregate: {
            args: Prisma.Tenant_templatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant_templates>
          }
          groupBy: {
            args: Prisma.tenant_templatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tenant_templatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.tenant_templatesCountArgs<ExtArgs>
            result: $Utils.Optional<Tenant_templatesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    hello: number
    leads: number
    listings: number
    media: number
    memberships: number
    sites: number
    tenant_templates: number
    users: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hello?: boolean | TenantCountOutputTypeCountHelloArgs
    leads?: boolean | TenantCountOutputTypeCountLeadsArgs
    listings?: boolean | TenantCountOutputTypeCountListingsArgs
    media?: boolean | TenantCountOutputTypeCountMediaArgs
    memberships?: boolean | TenantCountOutputTypeCountMembershipsArgs
    sites?: boolean | TenantCountOutputTypeCountSitesArgs
    tenant_templates?: boolean | TenantCountOutputTypeCountTenant_templatesArgs
    users?: boolean | TenantCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountHelloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: helloWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leadsWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: listingsWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mediaWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountSitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sitesWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountTenant_templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tenant_templatesWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type AccountsCountOutputType
   */

  export type AccountsCountOutputType = {
    memberships: number
  }

  export type AccountsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | AccountsCountOutputTypeCountMembershipsArgs
  }

  // Custom InputTypes
  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsCountOutputType
     */
    select?: AccountsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
  }


  /**
   * Count Type ListingsCountOutputType
   */

  export type ListingsCountOutputType = {
    leads: number
    listing_media: number
  }

  export type ListingsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | ListingsCountOutputTypeCountLeadsArgs
    listing_media?: boolean | ListingsCountOutputTypeCountListing_mediaArgs
  }

  // Custom InputTypes
  /**
   * ListingsCountOutputType without action
   */
  export type ListingsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingsCountOutputType
     */
    select?: ListingsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListingsCountOutputType without action
   */
  export type ListingsCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leadsWhereInput
  }

  /**
   * ListingsCountOutputType without action
   */
  export type ListingsCountOutputTypeCountListing_mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: listing_mediaWhereInput
  }


  /**
   * Count Type MediaCountOutputType
   */

  export type MediaCountOutputType = {
    listing_media: number
    listings: number
  }

  export type MediaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing_media?: boolean | MediaCountOutputTypeCountListing_mediaArgs
    listings?: boolean | MediaCountOutputTypeCountListingsArgs
  }

  // Custom InputTypes
  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaCountOutputType
     */
    select?: MediaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountListing_mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: listing_mediaWhereInput
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: listingsWhereInput
  }


  /**
   * Count Type SitesCountOutputType
   */

  export type SitesCountOutputType = {
    pages: number
  }

  export type SitesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pages?: boolean | SitesCountOutputTypeCountPagesArgs
  }

  // Custom InputTypes
  /**
   * SitesCountOutputType without action
   */
  export type SitesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitesCountOutputType
     */
    select?: SitesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SitesCountOutputType without action
   */
  export type SitesCountOutputTypeCountPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagesWhereInput
  }


  /**
   * Count Type TemplatesCountOutputType
   */

  export type TemplatesCountOutputType = {
    pages: number
    tenant_templates: number
  }

  export type TemplatesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pages?: boolean | TemplatesCountOutputTypeCountPagesArgs
    tenant_templates?: boolean | TemplatesCountOutputTypeCountTenant_templatesArgs
  }

  // Custom InputTypes
  /**
   * TemplatesCountOutputType without action
   */
  export type TemplatesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplatesCountOutputType
     */
    select?: TemplatesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplatesCountOutputType without action
   */
  export type TemplatesCountOutputTypeCountPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagesWhereInput
  }

  /**
   * TemplatesCountOutputType without action
   */
  export type TemplatesCountOutputTypeCountTenant_templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tenant_templatesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    created_at: Date | null
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    hello?: boolean | Tenant$helloArgs<ExtArgs>
    leads?: boolean | Tenant$leadsArgs<ExtArgs>
    listings?: boolean | Tenant$listingsArgs<ExtArgs>
    media?: boolean | Tenant$mediaArgs<ExtArgs>
    memberships?: boolean | Tenant$membershipsArgs<ExtArgs>
    sites?: boolean | Tenant$sitesArgs<ExtArgs>
    tenant_templates?: boolean | Tenant$tenant_templatesArgs<ExtArgs>
    users?: boolean | Tenant$usersArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
  }

  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hello?: boolean | Tenant$helloArgs<ExtArgs>
    leads?: boolean | Tenant$leadsArgs<ExtArgs>
    listings?: boolean | Tenant$listingsArgs<ExtArgs>
    media?: boolean | Tenant$mediaArgs<ExtArgs>
    memberships?: boolean | Tenant$membershipsArgs<ExtArgs>
    sites?: boolean | Tenant$sitesArgs<ExtArgs>
    tenant_templates?: boolean | Tenant$tenant_templatesArgs<ExtArgs>
    users?: boolean | Tenant$usersArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      hello: Prisma.$helloPayload<ExtArgs>[]
      leads: Prisma.$leadsPayload<ExtArgs>[]
      listings: Prisma.$listingsPayload<ExtArgs>[]
      media: Prisma.$mediaPayload<ExtArgs>[]
      memberships: Prisma.$MembershipPayload<ExtArgs>[]
      sites: Prisma.$sitesPayload<ExtArgs>[]
      tenant_templates: Prisma.$tenant_templatesPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date | null
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hello<T extends Tenant$helloArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$helloArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$helloPayload<ExtArgs>, T, "findMany"> | Null>
    leads<T extends Tenant$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findMany"> | Null>
    listings<T extends Tenant$listingsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findMany"> | Null>
    media<T extends Tenant$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findMany"> | Null>
    memberships<T extends Tenant$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany"> | Null>
    sites<T extends Tenant$sitesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$sitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "findMany"> | Null>
    tenant_templates<T extends Tenant$tenant_templatesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$tenant_templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tenant_templatesPayload<ExtArgs>, T, "findMany"> | Null>
    users<T extends Tenant$usersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */ 
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly created_at: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
  }

  /**
   * Tenant.hello
   */
  export type Tenant$helloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hello
     */
    select?: helloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: helloInclude<ExtArgs> | null
    where?: helloWhereInput
    orderBy?: helloOrderByWithRelationInput | helloOrderByWithRelationInput[]
    cursor?: helloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HelloScalarFieldEnum | HelloScalarFieldEnum[]
  }

  /**
   * Tenant.leads
   */
  export type Tenant$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    where?: leadsWhereInput
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    cursor?: leadsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * Tenant.listings
   */
  export type Tenant$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listings
     */
    select?: listingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingsInclude<ExtArgs> | null
    where?: listingsWhereInput
    orderBy?: listingsOrderByWithRelationInput | listingsOrderByWithRelationInput[]
    cursor?: listingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingsScalarFieldEnum | ListingsScalarFieldEnum[]
  }

  /**
   * Tenant.media
   */
  export type Tenant$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    where?: mediaWhereInput
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    cursor?: mediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Tenant.memberships
   */
  export type Tenant$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    cursor?: MembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Tenant.sites
   */
  export type Tenant$sitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
    where?: sitesWhereInput
    orderBy?: sitesOrderByWithRelationInput | sitesOrderByWithRelationInput[]
    cursor?: sitesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SitesScalarFieldEnum | SitesScalarFieldEnum[]
  }

  /**
   * Tenant.tenant_templates
   */
  export type Tenant$tenant_templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_templates
     */
    select?: tenant_templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_templatesInclude<ExtArgs> | null
    where?: tenant_templatesWhereInput
    orderBy?: tenant_templatesOrderByWithRelationInput | tenant_templatesOrderByWithRelationInput[]
    cursor?: tenant_templatesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tenant_templatesScalarFieldEnum | Tenant_templatesScalarFieldEnum[]
  }

  /**
   * Tenant.users
   */
  export type Tenant$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    email: string | null
    role: string | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    email: string | null
    role: string | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    tenant_id: number
    email: number
    role: number
    created_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    tenant_id?: true
    email?: true
    role?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    email?: true
    role?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    tenant_id?: true
    email?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    tenant_id: string
    email: string
    role: string
    created_at: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    email?: boolean
    role?: boolean
    created_at?: boolean
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    email?: boolean
    role?: boolean
    created_at?: boolean
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    email?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tenants: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      email: string
      role: string
      created_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenants<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly tenant_id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Membership
   */

  export type AggregateMembership = {
    _count: MembershipCountAggregateOutputType | null
    _min: MembershipMinAggregateOutputType | null
    _max: MembershipMaxAggregateOutputType | null
  }

  export type MembershipMinAggregateOutputType = {
    account_id: string | null
    tenant_id: string | null
    role: string | null
    created_at: Date | null
  }

  export type MembershipMaxAggregateOutputType = {
    account_id: string | null
    tenant_id: string | null
    role: string | null
    created_at: Date | null
  }

  export type MembershipCountAggregateOutputType = {
    account_id: number
    tenant_id: number
    role: number
    created_at: number
    _all: number
  }


  export type MembershipMinAggregateInputType = {
    account_id?: true
    tenant_id?: true
    role?: true
    created_at?: true
  }

  export type MembershipMaxAggregateInputType = {
    account_id?: true
    tenant_id?: true
    role?: true
    created_at?: true
  }

  export type MembershipCountAggregateInputType = {
    account_id?: true
    tenant_id?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type MembershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Membership to aggregate.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Memberships
    **/
    _count?: true | MembershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembershipMaxAggregateInputType
  }

  export type GetMembershipAggregateType<T extends MembershipAggregateArgs> = {
        [P in keyof T & keyof AggregateMembership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembership[P]>
      : GetScalarType<T[P], AggregateMembership[P]>
  }




  export type MembershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithAggregationInput | MembershipOrderByWithAggregationInput[]
    by: MembershipScalarFieldEnum[] | MembershipScalarFieldEnum
    having?: MembershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembershipCountAggregateInputType | true
    _min?: MembershipMinAggregateInputType
    _max?: MembershipMaxAggregateInputType
  }

  export type MembershipGroupByOutputType = {
    account_id: string
    tenant_id: string
    role: string
    created_at: Date
    _count: MembershipCountAggregateOutputType | null
    _min: MembershipMinAggregateOutputType | null
    _max: MembershipMaxAggregateOutputType | null
  }

  type GetMembershipGroupByPayload<T extends MembershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembershipGroupByOutputType[P]>
            : GetScalarType<T[P], MembershipGroupByOutputType[P]>
        }
      >
    >


  export type MembershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    account_id?: boolean
    tenant_id?: boolean
    role?: boolean
    created_at?: boolean
    accounts?: boolean | accountsDefaultArgs<ExtArgs>
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    account_id?: boolean
    tenant_id?: boolean
    role?: boolean
    created_at?: boolean
    accounts?: boolean | accountsDefaultArgs<ExtArgs>
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectScalar = {
    account_id?: boolean
    tenant_id?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type MembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | accountsDefaultArgs<ExtArgs>
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type MembershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | accountsDefaultArgs<ExtArgs>
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $MembershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Membership"
    objects: {
      accounts: Prisma.$accountsPayload<ExtArgs>
      tenants: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      account_id: string
      tenant_id: string
      role: string
      created_at: Date
    }, ExtArgs["result"]["membership"]>
    composites: {}
  }

  type MembershipGetPayload<S extends boolean | null | undefined | MembershipDefaultArgs> = $Result.GetResult<Prisma.$MembershipPayload, S>

  type MembershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MembershipFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MembershipCountAggregateInputType | true
    }

  export interface MembershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Membership'], meta: { name: 'Membership' } }
    /**
     * Find zero or one Membership that matches the filter.
     * @param {MembershipFindUniqueArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembershipFindUniqueArgs>(args: SelectSubset<T, MembershipFindUniqueArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Membership that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MembershipFindUniqueOrThrowArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembershipFindUniqueOrThrowArgs>(args: SelectSubset<T, MembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Membership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindFirstArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembershipFindFirstArgs>(args?: SelectSubset<T, MembershipFindFirstArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Membership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindFirstOrThrowArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembershipFindFirstOrThrowArgs>(args?: SelectSubset<T, MembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Memberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memberships
     * const memberships = await prisma.membership.findMany()
     * 
     * // Get first 10 Memberships
     * const memberships = await prisma.membership.findMany({ take: 10 })
     * 
     * // Only select the `account_id`
     * const membershipWithAccount_idOnly = await prisma.membership.findMany({ select: { account_id: true } })
     * 
     */
    findMany<T extends MembershipFindManyArgs>(args?: SelectSubset<T, MembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Membership.
     * @param {MembershipCreateArgs} args - Arguments to create a Membership.
     * @example
     * // Create one Membership
     * const Membership = await prisma.membership.create({
     *   data: {
     *     // ... data to create a Membership
     *   }
     * })
     * 
     */
    create<T extends MembershipCreateArgs>(args: SelectSubset<T, MembershipCreateArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Memberships.
     * @param {MembershipCreateManyArgs} args - Arguments to create many Memberships.
     * @example
     * // Create many Memberships
     * const membership = await prisma.membership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembershipCreateManyArgs>(args?: SelectSubset<T, MembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Memberships and returns the data saved in the database.
     * @param {MembershipCreateManyAndReturnArgs} args - Arguments to create many Memberships.
     * @example
     * // Create many Memberships
     * const membership = await prisma.membership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Memberships and only return the `account_id`
     * const membershipWithAccount_idOnly = await prisma.membership.createManyAndReturn({ 
     *   select: { account_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembershipCreateManyAndReturnArgs>(args?: SelectSubset<T, MembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Membership.
     * @param {MembershipDeleteArgs} args - Arguments to delete one Membership.
     * @example
     * // Delete one Membership
     * const Membership = await prisma.membership.delete({
     *   where: {
     *     // ... filter to delete one Membership
     *   }
     * })
     * 
     */
    delete<T extends MembershipDeleteArgs>(args: SelectSubset<T, MembershipDeleteArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Membership.
     * @param {MembershipUpdateArgs} args - Arguments to update one Membership.
     * @example
     * // Update one Membership
     * const membership = await prisma.membership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembershipUpdateArgs>(args: SelectSubset<T, MembershipUpdateArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Memberships.
     * @param {MembershipDeleteManyArgs} args - Arguments to filter Memberships to delete.
     * @example
     * // Delete a few Memberships
     * const { count } = await prisma.membership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembershipDeleteManyArgs>(args?: SelectSubset<T, MembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memberships
     * const membership = await prisma.membership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembershipUpdateManyArgs>(args: SelectSubset<T, MembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Membership.
     * @param {MembershipUpsertArgs} args - Arguments to update or create a Membership.
     * @example
     * // Update or create a Membership
     * const membership = await prisma.membership.upsert({
     *   create: {
     *     // ... data to create a Membership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Membership we want to update
     *   }
     * })
     */
    upsert<T extends MembershipUpsertArgs>(args: SelectSubset<T, MembershipUpsertArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipCountArgs} args - Arguments to filter Memberships to count.
     * @example
     * // Count the number of Memberships
     * const count = await prisma.membership.count({
     *   where: {
     *     // ... the filter for the Memberships we want to count
     *   }
     * })
    **/
    count<T extends MembershipCountArgs>(
      args?: Subset<T, MembershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MembershipAggregateArgs>(args: Subset<T, MembershipAggregateArgs>): Prisma.PrismaPromise<GetMembershipAggregateType<T>>

    /**
     * Group by Membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MembershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembershipGroupByArgs['orderBy'] }
        : { orderBy?: MembershipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Membership model
   */
  readonly fields: MembershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Membership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends accountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountsDefaultArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tenants<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Membership model
   */ 
  interface MembershipFieldRefs {
    readonly account_id: FieldRef<"Membership", 'String'>
    readonly tenant_id: FieldRef<"Membership", 'String'>
    readonly role: FieldRef<"Membership", 'String'>
    readonly created_at: FieldRef<"Membership", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Membership findUnique
   */
  export type MembershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership findUniqueOrThrow
   */
  export type MembershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership findFirst
   */
  export type MembershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memberships.
     */
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership findFirstOrThrow
   */
  export type MembershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memberships.
     */
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership findMany
   */
  export type MembershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Memberships to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership create
   */
  export type MembershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The data needed to create a Membership.
     */
    data: XOR<MembershipCreateInput, MembershipUncheckedCreateInput>
  }

  /**
   * Membership createMany
   */
  export type MembershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Memberships.
     */
    data: MembershipCreateManyInput | MembershipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Membership createManyAndReturn
   */
  export type MembershipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Memberships.
     */
    data: MembershipCreateManyInput | MembershipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Membership update
   */
  export type MembershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The data needed to update a Membership.
     */
    data: XOR<MembershipUpdateInput, MembershipUncheckedUpdateInput>
    /**
     * Choose, which Membership to update.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership updateMany
   */
  export type MembershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Memberships.
     */
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyInput>
    /**
     * Filter which Memberships to update
     */
    where?: MembershipWhereInput
  }

  /**
   * Membership upsert
   */
  export type MembershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The filter to search for the Membership to update in case it exists.
     */
    where: MembershipWhereUniqueInput
    /**
     * In case the Membership found by the `where` argument doesn't exist, create a new Membership with this data.
     */
    create: XOR<MembershipCreateInput, MembershipUncheckedCreateInput>
    /**
     * In case the Membership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembershipUpdateInput, MembershipUncheckedUpdateInput>
  }

  /**
   * Membership delete
   */
  export type MembershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter which Membership to delete.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership deleteMany
   */
  export type MembershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Memberships to delete
     */
    where?: MembershipWhereInput
  }

  /**
   * Membership without action
   */
  export type MembershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    user_id: string | null
    action: string | null
    entity_type: string | null
    entity_id: string | null
    ip_address: string | null
    user_agent: string | null
    created_at: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    user_id: string | null
    action: string | null
    entity_type: string | null
    entity_id: string | null
    ip_address: string | null
    user_agent: string | null
    created_at: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    tenant_id: number
    user_id: number
    action: number
    entity_type: number
    entity_id: number
    old_values: number
    new_values: number
    ip_address: number
    user_agent: number
    metadata: number
    created_at: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    tenant_id?: true
    user_id?: true
    action?: true
    entity_type?: true
    entity_id?: true
    ip_address?: true
    user_agent?: true
    created_at?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    user_id?: true
    action?: true
    entity_type?: true
    entity_id?: true
    ip_address?: true
    user_agent?: true
    created_at?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    tenant_id?: true
    user_id?: true
    action?: true
    entity_type?: true
    entity_id?: true
    old_values?: true
    new_values?: true
    ip_address?: true
    user_agent?: true
    metadata?: true
    created_at?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    tenant_id: string | null
    user_id: string | null
    action: string
    entity_type: string | null
    entity_id: string | null
    old_values: JsonValue | null
    new_values: JsonValue | null
    ip_address: string | null
    user_agent: string | null
    metadata: JsonValue | null
    created_at: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    user_id?: boolean
    action?: boolean
    entity_type?: boolean
    entity_id?: boolean
    old_values?: boolean
    new_values?: boolean
    ip_address?: boolean
    user_agent?: boolean
    metadata?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    user_id?: boolean
    action?: boolean
    entity_type?: boolean
    entity_id?: boolean
    old_values?: boolean
    new_values?: boolean
    ip_address?: boolean
    user_agent?: boolean
    metadata?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    user_id?: boolean
    action?: boolean
    entity_type?: boolean
    entity_id?: boolean
    old_values?: boolean
    new_values?: boolean
    ip_address?: boolean
    user_agent?: boolean
    metadata?: boolean
    created_at?: boolean
  }


  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string | null
      user_id: string | null
      action: string
      entity_type: string | null
      entity_id: string | null
      old_values: Prisma.JsonValue | null
      new_values: Prisma.JsonValue | null
      ip_address: string | null
      user_agent: string | null
      metadata: Prisma.JsonValue | null
      created_at: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly tenant_id: FieldRef<"AuditLog", 'String'>
    readonly user_id: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entity_type: FieldRef<"AuditLog", 'String'>
    readonly entity_id: FieldRef<"AuditLog", 'String'>
    readonly old_values: FieldRef<"AuditLog", 'Json'>
    readonly new_values: FieldRef<"AuditLog", 'Json'>
    readonly ip_address: FieldRef<"AuditLog", 'String'>
    readonly user_agent: FieldRef<"AuditLog", 'String'>
    readonly metadata: FieldRef<"AuditLog", 'Json'>
    readonly created_at: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
  }


  /**
   * Model accounts
   */

  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsMinAggregateOutputType = {
    id: string | null
    email: string | null
    created_at: Date | null
  }

  export type AccountsMaxAggregateOutputType = {
    id: string | null
    email: string | null
    created_at: Date | null
  }

  export type AccountsCountAggregateOutputType = {
    id: number
    email: number
    created_at: number
    _all: number
  }


  export type AccountsMinAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
  }

  export type AccountsMaxAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
  }

  export type AccountsCountAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
    _all?: true
  }

  export type AccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to aggregate.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type accountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountsWhereInput
    orderBy?: accountsOrderByWithAggregationInput | accountsOrderByWithAggregationInput[]
    by: AccountsScalarFieldEnum[] | AccountsScalarFieldEnum
    having?: accountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }

  export type AccountsGroupByOutputType = {
    id: string
    email: string
    created_at: Date
    _count: AccountsCountAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends accountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type accountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    created_at?: boolean
    memberships?: boolean | accounts$membershipsArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectScalar = {
    id?: boolean
    email?: boolean
    created_at?: boolean
  }

  export type accountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | accounts$membershipsArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type accountsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $accountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "accounts"
    objects: {
      memberships: Prisma.$MembershipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      created_at: Date
    }, ExtArgs["result"]["accounts"]>
    composites: {}
  }

  type accountsGetPayload<S extends boolean | null | undefined | accountsDefaultArgs> = $Result.GetResult<Prisma.$accountsPayload, S>

  type accountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<accountsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountsCountAggregateInputType | true
    }

  export interface accountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['accounts'], meta: { name: 'accounts' } }
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {accountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accountsFindUniqueArgs>(args: SelectSubset<T, accountsFindUniqueArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Accounts that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {accountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accountsFindUniqueOrThrowArgs>(args: SelectSubset<T, accountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accountsFindFirstArgs>(args?: SelectSubset<T, accountsFindFirstArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accountsFindFirstOrThrowArgs>(args?: SelectSubset<T, accountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountsWithIdOnly = await prisma.accounts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends accountsFindManyArgs>(args?: SelectSubset<T, accountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Accounts.
     * @param {accountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
     */
    create<T extends accountsCreateArgs>(args: SelectSubset<T, accountsCreateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {accountsCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accountsCreateManyArgs>(args?: SelectSubset<T, accountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {accountsCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountsWithIdOnly = await prisma.accounts.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends accountsCreateManyAndReturnArgs>(args?: SelectSubset<T, accountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Accounts.
     * @param {accountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
     */
    delete<T extends accountsDeleteArgs>(args: SelectSubset<T, accountsDeleteArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Accounts.
     * @param {accountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accountsUpdateArgs>(args: SelectSubset<T, accountsUpdateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {accountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accountsDeleteManyArgs>(args?: SelectSubset<T, accountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accountsUpdateManyArgs>(args: SelectSubset<T, accountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Accounts.
     * @param {accountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
     */
    upsert<T extends accountsUpsertArgs>(args: SelectSubset<T, accountsUpsertArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountsCountArgs>(
      args?: Subset<T, accountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): Prisma.PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends accountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accountsGroupByArgs['orderBy'] }
        : { orderBy?: accountsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, accountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the accounts model
   */
  readonly fields: accountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memberships<T extends accounts$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, accounts$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the accounts model
   */ 
  interface accountsFieldRefs {
    readonly id: FieldRef<"accounts", 'String'>
    readonly email: FieldRef<"accounts", 'String'>
    readonly created_at: FieldRef<"accounts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * accounts findUnique
   */
  export type accountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findUniqueOrThrow
   */
  export type accountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findFirst
   */
  export type accountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findFirstOrThrow
   */
  export type accountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findMany
   */
  export type accountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts create
   */
  export type accountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The data needed to create a accounts.
     */
    data: XOR<accountsCreateInput, accountsUncheckedCreateInput>
  }

  /**
   * accounts createMany
   */
  export type accountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accounts createManyAndReturn
   */
  export type accountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accounts update
   */
  export type accountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The data needed to update a accounts.
     */
    data: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
    /**
     * Choose, which accounts to update.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts updateMany
   */
  export type accountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountsWhereInput
  }

  /**
   * accounts upsert
   */
  export type accountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The filter to search for the accounts to update in case it exists.
     */
    where: accountsWhereUniqueInput
    /**
     * In case the accounts found by the `where` argument doesn't exist, create a new accounts with this data.
     */
    create: XOR<accountsCreateInput, accountsUncheckedCreateInput>
    /**
     * In case the accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
  }

  /**
   * accounts delete
   */
  export type accountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter which accounts to delete.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts deleteMany
   */
  export type accountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to delete
     */
    where?: accountsWhereInput
  }

  /**
   * accounts.memberships
   */
  export type accounts$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    cursor?: MembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * accounts without action
   */
  export type accountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
  }


  /**
   * Model hello
   */

  export type AggregateHello = {
    _count: HelloCountAggregateOutputType | null
    _min: HelloMinAggregateOutputType | null
    _max: HelloMaxAggregateOutputType | null
  }

  export type HelloMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    msg: string | null
    created_at: Date | null
  }

  export type HelloMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    msg: string | null
    created_at: Date | null
  }

  export type HelloCountAggregateOutputType = {
    id: number
    tenant_id: number
    msg: number
    created_at: number
    _all: number
  }


  export type HelloMinAggregateInputType = {
    id?: true
    tenant_id?: true
    msg?: true
    created_at?: true
  }

  export type HelloMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    msg?: true
    created_at?: true
  }

  export type HelloCountAggregateInputType = {
    id?: true
    tenant_id?: true
    msg?: true
    created_at?: true
    _all?: true
  }

  export type HelloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hello to aggregate.
     */
    where?: helloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hellos to fetch.
     */
    orderBy?: helloOrderByWithRelationInput | helloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: helloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hellos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hellos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hellos
    **/
    _count?: true | HelloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HelloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HelloMaxAggregateInputType
  }

  export type GetHelloAggregateType<T extends HelloAggregateArgs> = {
        [P in keyof T & keyof AggregateHello]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHello[P]>
      : GetScalarType<T[P], AggregateHello[P]>
  }




  export type helloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: helloWhereInput
    orderBy?: helloOrderByWithAggregationInput | helloOrderByWithAggregationInput[]
    by: HelloScalarFieldEnum[] | HelloScalarFieldEnum
    having?: helloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HelloCountAggregateInputType | true
    _min?: HelloMinAggregateInputType
    _max?: HelloMaxAggregateInputType
  }

  export type HelloGroupByOutputType = {
    id: string
    tenant_id: string
    msg: string
    created_at: Date
    _count: HelloCountAggregateOutputType | null
    _min: HelloMinAggregateOutputType | null
    _max: HelloMaxAggregateOutputType | null
  }

  type GetHelloGroupByPayload<T extends helloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HelloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HelloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HelloGroupByOutputType[P]>
            : GetScalarType<T[P], HelloGroupByOutputType[P]>
        }
      >
    >


  export type helloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    msg?: boolean
    created_at?: boolean
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hello"]>

  export type helloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    msg?: boolean
    created_at?: boolean
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hello"]>

  export type helloSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    msg?: boolean
    created_at?: boolean
  }

  export type helloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type helloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $helloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hello"
    objects: {
      tenants: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      msg: string
      created_at: Date
    }, ExtArgs["result"]["hello"]>
    composites: {}
  }

  type helloGetPayload<S extends boolean | null | undefined | helloDefaultArgs> = $Result.GetResult<Prisma.$helloPayload, S>

  type helloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<helloFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HelloCountAggregateInputType | true
    }

  export interface helloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hello'], meta: { name: 'hello' } }
    /**
     * Find zero or one Hello that matches the filter.
     * @param {helloFindUniqueArgs} args - Arguments to find a Hello
     * @example
     * // Get one Hello
     * const hello = await prisma.hello.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends helloFindUniqueArgs>(args: SelectSubset<T, helloFindUniqueArgs<ExtArgs>>): Prisma__helloClient<$Result.GetResult<Prisma.$helloPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Hello that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {helloFindUniqueOrThrowArgs} args - Arguments to find a Hello
     * @example
     * // Get one Hello
     * const hello = await prisma.hello.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends helloFindUniqueOrThrowArgs>(args: SelectSubset<T, helloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__helloClient<$Result.GetResult<Prisma.$helloPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Hello that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {helloFindFirstArgs} args - Arguments to find a Hello
     * @example
     * // Get one Hello
     * const hello = await prisma.hello.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends helloFindFirstArgs>(args?: SelectSubset<T, helloFindFirstArgs<ExtArgs>>): Prisma__helloClient<$Result.GetResult<Prisma.$helloPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Hello that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {helloFindFirstOrThrowArgs} args - Arguments to find a Hello
     * @example
     * // Get one Hello
     * const hello = await prisma.hello.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends helloFindFirstOrThrowArgs>(args?: SelectSubset<T, helloFindFirstOrThrowArgs<ExtArgs>>): Prisma__helloClient<$Result.GetResult<Prisma.$helloPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Hellos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {helloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hellos
     * const hellos = await prisma.hello.findMany()
     * 
     * // Get first 10 Hellos
     * const hellos = await prisma.hello.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const helloWithIdOnly = await prisma.hello.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends helloFindManyArgs>(args?: SelectSubset<T, helloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$helloPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Hello.
     * @param {helloCreateArgs} args - Arguments to create a Hello.
     * @example
     * // Create one Hello
     * const Hello = await prisma.hello.create({
     *   data: {
     *     // ... data to create a Hello
     *   }
     * })
     * 
     */
    create<T extends helloCreateArgs>(args: SelectSubset<T, helloCreateArgs<ExtArgs>>): Prisma__helloClient<$Result.GetResult<Prisma.$helloPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Hellos.
     * @param {helloCreateManyArgs} args - Arguments to create many Hellos.
     * @example
     * // Create many Hellos
     * const hello = await prisma.hello.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends helloCreateManyArgs>(args?: SelectSubset<T, helloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hellos and returns the data saved in the database.
     * @param {helloCreateManyAndReturnArgs} args - Arguments to create many Hellos.
     * @example
     * // Create many Hellos
     * const hello = await prisma.hello.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hellos and only return the `id`
     * const helloWithIdOnly = await prisma.hello.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends helloCreateManyAndReturnArgs>(args?: SelectSubset<T, helloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$helloPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Hello.
     * @param {helloDeleteArgs} args - Arguments to delete one Hello.
     * @example
     * // Delete one Hello
     * const Hello = await prisma.hello.delete({
     *   where: {
     *     // ... filter to delete one Hello
     *   }
     * })
     * 
     */
    delete<T extends helloDeleteArgs>(args: SelectSubset<T, helloDeleteArgs<ExtArgs>>): Prisma__helloClient<$Result.GetResult<Prisma.$helloPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Hello.
     * @param {helloUpdateArgs} args - Arguments to update one Hello.
     * @example
     * // Update one Hello
     * const hello = await prisma.hello.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends helloUpdateArgs>(args: SelectSubset<T, helloUpdateArgs<ExtArgs>>): Prisma__helloClient<$Result.GetResult<Prisma.$helloPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Hellos.
     * @param {helloDeleteManyArgs} args - Arguments to filter Hellos to delete.
     * @example
     * // Delete a few Hellos
     * const { count } = await prisma.hello.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends helloDeleteManyArgs>(args?: SelectSubset<T, helloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hellos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {helloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hellos
     * const hello = await prisma.hello.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends helloUpdateManyArgs>(args: SelectSubset<T, helloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hello.
     * @param {helloUpsertArgs} args - Arguments to update or create a Hello.
     * @example
     * // Update or create a Hello
     * const hello = await prisma.hello.upsert({
     *   create: {
     *     // ... data to create a Hello
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hello we want to update
     *   }
     * })
     */
    upsert<T extends helloUpsertArgs>(args: SelectSubset<T, helloUpsertArgs<ExtArgs>>): Prisma__helloClient<$Result.GetResult<Prisma.$helloPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Hellos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {helloCountArgs} args - Arguments to filter Hellos to count.
     * @example
     * // Count the number of Hellos
     * const count = await prisma.hello.count({
     *   where: {
     *     // ... the filter for the Hellos we want to count
     *   }
     * })
    **/
    count<T extends helloCountArgs>(
      args?: Subset<T, helloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HelloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hello.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HelloAggregateArgs>(args: Subset<T, HelloAggregateArgs>): Prisma.PrismaPromise<GetHelloAggregateType<T>>

    /**
     * Group by Hello.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {helloGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends helloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: helloGroupByArgs['orderBy'] }
        : { orderBy?: helloGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, helloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHelloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hello model
   */
  readonly fields: helloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hello.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__helloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenants<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hello model
   */ 
  interface helloFieldRefs {
    readonly id: FieldRef<"hello", 'String'>
    readonly tenant_id: FieldRef<"hello", 'String'>
    readonly msg: FieldRef<"hello", 'String'>
    readonly created_at: FieldRef<"hello", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * hello findUnique
   */
  export type helloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hello
     */
    select?: helloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: helloInclude<ExtArgs> | null
    /**
     * Filter, which hello to fetch.
     */
    where: helloWhereUniqueInput
  }

  /**
   * hello findUniqueOrThrow
   */
  export type helloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hello
     */
    select?: helloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: helloInclude<ExtArgs> | null
    /**
     * Filter, which hello to fetch.
     */
    where: helloWhereUniqueInput
  }

  /**
   * hello findFirst
   */
  export type helloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hello
     */
    select?: helloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: helloInclude<ExtArgs> | null
    /**
     * Filter, which hello to fetch.
     */
    where?: helloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hellos to fetch.
     */
    orderBy?: helloOrderByWithRelationInput | helloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hellos.
     */
    cursor?: helloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hellos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hellos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hellos.
     */
    distinct?: HelloScalarFieldEnum | HelloScalarFieldEnum[]
  }

  /**
   * hello findFirstOrThrow
   */
  export type helloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hello
     */
    select?: helloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: helloInclude<ExtArgs> | null
    /**
     * Filter, which hello to fetch.
     */
    where?: helloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hellos to fetch.
     */
    orderBy?: helloOrderByWithRelationInput | helloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hellos.
     */
    cursor?: helloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hellos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hellos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hellos.
     */
    distinct?: HelloScalarFieldEnum | HelloScalarFieldEnum[]
  }

  /**
   * hello findMany
   */
  export type helloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hello
     */
    select?: helloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: helloInclude<ExtArgs> | null
    /**
     * Filter, which hellos to fetch.
     */
    where?: helloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hellos to fetch.
     */
    orderBy?: helloOrderByWithRelationInput | helloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hellos.
     */
    cursor?: helloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hellos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hellos.
     */
    skip?: number
    distinct?: HelloScalarFieldEnum | HelloScalarFieldEnum[]
  }

  /**
   * hello create
   */
  export type helloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hello
     */
    select?: helloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: helloInclude<ExtArgs> | null
    /**
     * The data needed to create a hello.
     */
    data: XOR<helloCreateInput, helloUncheckedCreateInput>
  }

  /**
   * hello createMany
   */
  export type helloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hellos.
     */
    data: helloCreateManyInput | helloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hello createManyAndReturn
   */
  export type helloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hello
     */
    select?: helloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many hellos.
     */
    data: helloCreateManyInput | helloCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: helloIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * hello update
   */
  export type helloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hello
     */
    select?: helloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: helloInclude<ExtArgs> | null
    /**
     * The data needed to update a hello.
     */
    data: XOR<helloUpdateInput, helloUncheckedUpdateInput>
    /**
     * Choose, which hello to update.
     */
    where: helloWhereUniqueInput
  }

  /**
   * hello updateMany
   */
  export type helloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hellos.
     */
    data: XOR<helloUpdateManyMutationInput, helloUncheckedUpdateManyInput>
    /**
     * Filter which hellos to update
     */
    where?: helloWhereInput
  }

  /**
   * hello upsert
   */
  export type helloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hello
     */
    select?: helloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: helloInclude<ExtArgs> | null
    /**
     * The filter to search for the hello to update in case it exists.
     */
    where: helloWhereUniqueInput
    /**
     * In case the hello found by the `where` argument doesn't exist, create a new hello with this data.
     */
    create: XOR<helloCreateInput, helloUncheckedCreateInput>
    /**
     * In case the hello was found with the provided `where` argument, update it with this data.
     */
    update: XOR<helloUpdateInput, helloUncheckedUpdateInput>
  }

  /**
   * hello delete
   */
  export type helloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hello
     */
    select?: helloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: helloInclude<ExtArgs> | null
    /**
     * Filter which hello to delete.
     */
    where: helloWhereUniqueInput
  }

  /**
   * hello deleteMany
   */
  export type helloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hellos to delete
     */
    where?: helloWhereInput
  }

  /**
   * hello without action
   */
  export type helloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hello
     */
    select?: helloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: helloInclude<ExtArgs> | null
  }


  /**
   * Model leads
   */

  export type AggregateLeads = {
    _count: LeadsCountAggregateOutputType | null
    _min: LeadsMinAggregateOutputType | null
    _max: LeadsMaxAggregateOutputType | null
  }

  export type LeadsMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    subject: string | null
    source: string | null
    page_url: string | null
    referrer: string | null
    listing_id: string | null
    status: string | null
    assigned_to: string | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LeadsMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    subject: string | null
    source: string | null
    page_url: string | null
    referrer: string | null
    listing_id: string | null
    status: string | null
    assigned_to: string | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LeadsCountAggregateOutputType = {
    id: number
    tenant_id: number
    name: number
    email: number
    phone: number
    message: number
    subject: number
    source: number
    page_url: number
    referrer: number
    listing_id: number
    status: number
    assigned_to: number
    notes: number
    metadata: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LeadsMinAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    subject?: true
    source?: true
    page_url?: true
    referrer?: true
    listing_id?: true
    status?: true
    assigned_to?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type LeadsMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    subject?: true
    source?: true
    page_url?: true
    referrer?: true
    listing_id?: true
    status?: true
    assigned_to?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type LeadsCountAggregateInputType = {
    id?: true
    tenant_id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    subject?: true
    source?: true
    page_url?: true
    referrer?: true
    listing_id?: true
    status?: true
    assigned_to?: true
    notes?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type LeadsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leads to aggregate.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned leads
    **/
    _count?: true | LeadsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadsMaxAggregateInputType
  }

  export type GetLeadsAggregateType<T extends LeadsAggregateArgs> = {
        [P in keyof T & keyof AggregateLeads]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeads[P]>
      : GetScalarType<T[P], AggregateLeads[P]>
  }




  export type leadsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leadsWhereInput
    orderBy?: leadsOrderByWithAggregationInput | leadsOrderByWithAggregationInput[]
    by: LeadsScalarFieldEnum[] | LeadsScalarFieldEnum
    having?: leadsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadsCountAggregateInputType | true
    _min?: LeadsMinAggregateInputType
    _max?: LeadsMaxAggregateInputType
  }

  export type LeadsGroupByOutputType = {
    id: string
    tenant_id: string
    name: string
    email: string
    phone: string | null
    message: string | null
    subject: string | null
    source: string | null
    page_url: string | null
    referrer: string | null
    listing_id: string | null
    status: string | null
    assigned_to: string | null
    notes: string | null
    metadata: JsonValue | null
    created_at: Date
    updated_at: Date
    _count: LeadsCountAggregateOutputType | null
    _min: LeadsMinAggregateOutputType | null
    _max: LeadsMaxAggregateOutputType | null
  }

  type GetLeadsGroupByPayload<T extends leadsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadsGroupByOutputType[P]>
            : GetScalarType<T[P], LeadsGroupByOutputType[P]>
        }
      >
    >


  export type leadsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    subject?: boolean
    source?: boolean
    page_url?: boolean
    referrer?: boolean
    listing_id?: boolean
    status?: boolean
    assigned_to?: boolean
    notes?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    listings?: boolean | leads$listingsArgs<ExtArgs>
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leads"]>

  export type leadsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    subject?: boolean
    source?: boolean
    page_url?: boolean
    referrer?: boolean
    listing_id?: boolean
    status?: boolean
    assigned_to?: boolean
    notes?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    listings?: boolean | leads$listingsArgs<ExtArgs>
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leads"]>

  export type leadsSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    subject?: boolean
    source?: boolean
    page_url?: boolean
    referrer?: boolean
    listing_id?: boolean
    status?: boolean
    assigned_to?: boolean
    notes?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type leadsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | leads$listingsArgs<ExtArgs>
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type leadsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | leads$listingsArgs<ExtArgs>
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $leadsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "leads"
    objects: {
      listings: Prisma.$listingsPayload<ExtArgs> | null
      tenants: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      name: string
      email: string
      phone: string | null
      message: string | null
      subject: string | null
      source: string | null
      page_url: string | null
      referrer: string | null
      listing_id: string | null
      status: string | null
      assigned_to: string | null
      notes: string | null
      metadata: Prisma.JsonValue | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["leads"]>
    composites: {}
  }

  type leadsGetPayload<S extends boolean | null | undefined | leadsDefaultArgs> = $Result.GetResult<Prisma.$leadsPayload, S>

  type leadsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<leadsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LeadsCountAggregateInputType | true
    }

  export interface leadsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['leads'], meta: { name: 'leads' } }
    /**
     * Find zero or one Leads that matches the filter.
     * @param {leadsFindUniqueArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends leadsFindUniqueArgs>(args: SelectSubset<T, leadsFindUniqueArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Leads that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {leadsFindUniqueOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends leadsFindUniqueOrThrowArgs>(args: SelectSubset<T, leadsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsFindFirstArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends leadsFindFirstArgs>(args?: SelectSubset<T, leadsFindFirstArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Leads that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsFindFirstOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends leadsFindFirstOrThrowArgs>(args?: SelectSubset<T, leadsFindFirstOrThrowArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.leads.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.leads.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadsWithIdOnly = await prisma.leads.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends leadsFindManyArgs>(args?: SelectSubset<T, leadsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Leads.
     * @param {leadsCreateArgs} args - Arguments to create a Leads.
     * @example
     * // Create one Leads
     * const Leads = await prisma.leads.create({
     *   data: {
     *     // ... data to create a Leads
     *   }
     * })
     * 
     */
    create<T extends leadsCreateArgs>(args: SelectSubset<T, leadsCreateArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Leads.
     * @param {leadsCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const leads = await prisma.leads.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends leadsCreateManyArgs>(args?: SelectSubset<T, leadsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {leadsCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const leads = await prisma.leads.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadsWithIdOnly = await prisma.leads.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends leadsCreateManyAndReturnArgs>(args?: SelectSubset<T, leadsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Leads.
     * @param {leadsDeleteArgs} args - Arguments to delete one Leads.
     * @example
     * // Delete one Leads
     * const Leads = await prisma.leads.delete({
     *   where: {
     *     // ... filter to delete one Leads
     *   }
     * })
     * 
     */
    delete<T extends leadsDeleteArgs>(args: SelectSubset<T, leadsDeleteArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Leads.
     * @param {leadsUpdateArgs} args - Arguments to update one Leads.
     * @example
     * // Update one Leads
     * const leads = await prisma.leads.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends leadsUpdateArgs>(args: SelectSubset<T, leadsUpdateArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Leads.
     * @param {leadsDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.leads.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends leadsDeleteManyArgs>(args?: SelectSubset<T, leadsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const leads = await prisma.leads.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends leadsUpdateManyArgs>(args: SelectSubset<T, leadsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Leads.
     * @param {leadsUpsertArgs} args - Arguments to update or create a Leads.
     * @example
     * // Update or create a Leads
     * const leads = await prisma.leads.upsert({
     *   create: {
     *     // ... data to create a Leads
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leads we want to update
     *   }
     * })
     */
    upsert<T extends leadsUpsertArgs>(args: SelectSubset<T, leadsUpsertArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.leads.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends leadsCountArgs>(
      args?: Subset<T, leadsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadsAggregateArgs>(args: Subset<T, LeadsAggregateArgs>): Prisma.PrismaPromise<GetLeadsAggregateType<T>>

    /**
     * Group by Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends leadsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: leadsGroupByArgs['orderBy'] }
        : { orderBy?: leadsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, leadsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the leads model
   */
  readonly fields: leadsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for leads.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__leadsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listings<T extends leads$listingsArgs<ExtArgs> = {}>(args?: Subset<T, leads$listingsArgs<ExtArgs>>): Prisma__listingsClient<$Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    tenants<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the leads model
   */ 
  interface leadsFieldRefs {
    readonly id: FieldRef<"leads", 'String'>
    readonly tenant_id: FieldRef<"leads", 'String'>
    readonly name: FieldRef<"leads", 'String'>
    readonly email: FieldRef<"leads", 'String'>
    readonly phone: FieldRef<"leads", 'String'>
    readonly message: FieldRef<"leads", 'String'>
    readonly subject: FieldRef<"leads", 'String'>
    readonly source: FieldRef<"leads", 'String'>
    readonly page_url: FieldRef<"leads", 'String'>
    readonly referrer: FieldRef<"leads", 'String'>
    readonly listing_id: FieldRef<"leads", 'String'>
    readonly status: FieldRef<"leads", 'String'>
    readonly assigned_to: FieldRef<"leads", 'String'>
    readonly notes: FieldRef<"leads", 'String'>
    readonly metadata: FieldRef<"leads", 'Json'>
    readonly created_at: FieldRef<"leads", 'DateTime'>
    readonly updated_at: FieldRef<"leads", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * leads findUnique
   */
  export type leadsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads findUniqueOrThrow
   */
  export type leadsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads findFirst
   */
  export type leadsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leads.
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * leads findFirstOrThrow
   */
  export type leadsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leads.
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * leads findMany
   */
  export type leadsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing leads.
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * leads create
   */
  export type leadsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * The data needed to create a leads.
     */
    data: XOR<leadsCreateInput, leadsUncheckedCreateInput>
  }

  /**
   * leads createMany
   */
  export type leadsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many leads.
     */
    data: leadsCreateManyInput | leadsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leads createManyAndReturn
   */
  export type leadsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many leads.
     */
    data: leadsCreateManyInput | leadsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * leads update
   */
  export type leadsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * The data needed to update a leads.
     */
    data: XOR<leadsUpdateInput, leadsUncheckedUpdateInput>
    /**
     * Choose, which leads to update.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads updateMany
   */
  export type leadsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update leads.
     */
    data: XOR<leadsUpdateManyMutationInput, leadsUncheckedUpdateManyInput>
    /**
     * Filter which leads to update
     */
    where?: leadsWhereInput
  }

  /**
   * leads upsert
   */
  export type leadsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * The filter to search for the leads to update in case it exists.
     */
    where: leadsWhereUniqueInput
    /**
     * In case the leads found by the `where` argument doesn't exist, create a new leads with this data.
     */
    create: XOR<leadsCreateInput, leadsUncheckedCreateInput>
    /**
     * In case the leads was found with the provided `where` argument, update it with this data.
     */
    update: XOR<leadsUpdateInput, leadsUncheckedUpdateInput>
  }

  /**
   * leads delete
   */
  export type leadsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    /**
     * Filter which leads to delete.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads deleteMany
   */
  export type leadsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leads to delete
     */
    where?: leadsWhereInput
  }

  /**
   * leads.listings
   */
  export type leads$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listings
     */
    select?: listingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingsInclude<ExtArgs> | null
    where?: listingsWhereInput
  }

  /**
   * leads without action
   */
  export type leadsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
  }


  /**
   * Model listing_media
   */

  export type AggregateListing_media = {
    _count: Listing_mediaCountAggregateOutputType | null
    _avg: Listing_mediaAvgAggregateOutputType | null
    _sum: Listing_mediaSumAggregateOutputType | null
    _min: Listing_mediaMinAggregateOutputType | null
    _max: Listing_mediaMaxAggregateOutputType | null
  }

  export type Listing_mediaAvgAggregateOutputType = {
    position: number | null
  }

  export type Listing_mediaSumAggregateOutputType = {
    position: number | null
  }

  export type Listing_mediaMinAggregateOutputType = {
    listing_id: string | null
    media_id: string | null
    position: number | null
  }

  export type Listing_mediaMaxAggregateOutputType = {
    listing_id: string | null
    media_id: string | null
    position: number | null
  }

  export type Listing_mediaCountAggregateOutputType = {
    listing_id: number
    media_id: number
    position: number
    _all: number
  }


  export type Listing_mediaAvgAggregateInputType = {
    position?: true
  }

  export type Listing_mediaSumAggregateInputType = {
    position?: true
  }

  export type Listing_mediaMinAggregateInputType = {
    listing_id?: true
    media_id?: true
    position?: true
  }

  export type Listing_mediaMaxAggregateInputType = {
    listing_id?: true
    media_id?: true
    position?: true
  }

  export type Listing_mediaCountAggregateInputType = {
    listing_id?: true
    media_id?: true
    position?: true
    _all?: true
  }

  export type Listing_mediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which listing_media to aggregate.
     */
    where?: listing_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listing_medias to fetch.
     */
    orderBy?: listing_mediaOrderByWithRelationInput | listing_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: listing_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listing_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listing_medias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned listing_medias
    **/
    _count?: true | Listing_mediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Listing_mediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Listing_mediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Listing_mediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Listing_mediaMaxAggregateInputType
  }

  export type GetListing_mediaAggregateType<T extends Listing_mediaAggregateArgs> = {
        [P in keyof T & keyof AggregateListing_media]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListing_media[P]>
      : GetScalarType<T[P], AggregateListing_media[P]>
  }




  export type listing_mediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: listing_mediaWhereInput
    orderBy?: listing_mediaOrderByWithAggregationInput | listing_mediaOrderByWithAggregationInput[]
    by: Listing_mediaScalarFieldEnum[] | Listing_mediaScalarFieldEnum
    having?: listing_mediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Listing_mediaCountAggregateInputType | true
    _avg?: Listing_mediaAvgAggregateInputType
    _sum?: Listing_mediaSumAggregateInputType
    _min?: Listing_mediaMinAggregateInputType
    _max?: Listing_mediaMaxAggregateInputType
  }

  export type Listing_mediaGroupByOutputType = {
    listing_id: string
    media_id: string
    position: number
    _count: Listing_mediaCountAggregateOutputType | null
    _avg: Listing_mediaAvgAggregateOutputType | null
    _sum: Listing_mediaSumAggregateOutputType | null
    _min: Listing_mediaMinAggregateOutputType | null
    _max: Listing_mediaMaxAggregateOutputType | null
  }

  type GetListing_mediaGroupByPayload<T extends listing_mediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Listing_mediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Listing_mediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Listing_mediaGroupByOutputType[P]>
            : GetScalarType<T[P], Listing_mediaGroupByOutputType[P]>
        }
      >
    >


  export type listing_mediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    listing_id?: boolean
    media_id?: boolean
    position?: boolean
    listings?: boolean | listingsDefaultArgs<ExtArgs>
    media?: boolean | mediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing_media"]>

  export type listing_mediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    listing_id?: boolean
    media_id?: boolean
    position?: boolean
    listings?: boolean | listingsDefaultArgs<ExtArgs>
    media?: boolean | mediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing_media"]>

  export type listing_mediaSelectScalar = {
    listing_id?: boolean
    media_id?: boolean
    position?: boolean
  }

  export type listing_mediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | listingsDefaultArgs<ExtArgs>
    media?: boolean | mediaDefaultArgs<ExtArgs>
  }
  export type listing_mediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | listingsDefaultArgs<ExtArgs>
    media?: boolean | mediaDefaultArgs<ExtArgs>
  }

  export type $listing_mediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "listing_media"
    objects: {
      listings: Prisma.$listingsPayload<ExtArgs>
      media: Prisma.$mediaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      listing_id: string
      media_id: string
      position: number
    }, ExtArgs["result"]["listing_media"]>
    composites: {}
  }

  type listing_mediaGetPayload<S extends boolean | null | undefined | listing_mediaDefaultArgs> = $Result.GetResult<Prisma.$listing_mediaPayload, S>

  type listing_mediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<listing_mediaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Listing_mediaCountAggregateInputType | true
    }

  export interface listing_mediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['listing_media'], meta: { name: 'listing_media' } }
    /**
     * Find zero or one Listing_media that matches the filter.
     * @param {listing_mediaFindUniqueArgs} args - Arguments to find a Listing_media
     * @example
     * // Get one Listing_media
     * const listing_media = await prisma.listing_media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends listing_mediaFindUniqueArgs>(args: SelectSubset<T, listing_mediaFindUniqueArgs<ExtArgs>>): Prisma__listing_mediaClient<$Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Listing_media that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {listing_mediaFindUniqueOrThrowArgs} args - Arguments to find a Listing_media
     * @example
     * // Get one Listing_media
     * const listing_media = await prisma.listing_media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends listing_mediaFindUniqueOrThrowArgs>(args: SelectSubset<T, listing_mediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__listing_mediaClient<$Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Listing_media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listing_mediaFindFirstArgs} args - Arguments to find a Listing_media
     * @example
     * // Get one Listing_media
     * const listing_media = await prisma.listing_media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends listing_mediaFindFirstArgs>(args?: SelectSubset<T, listing_mediaFindFirstArgs<ExtArgs>>): Prisma__listing_mediaClient<$Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Listing_media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listing_mediaFindFirstOrThrowArgs} args - Arguments to find a Listing_media
     * @example
     * // Get one Listing_media
     * const listing_media = await prisma.listing_media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends listing_mediaFindFirstOrThrowArgs>(args?: SelectSubset<T, listing_mediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__listing_mediaClient<$Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Listing_medias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listing_mediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listing_medias
     * const listing_medias = await prisma.listing_media.findMany()
     * 
     * // Get first 10 Listing_medias
     * const listing_medias = await prisma.listing_media.findMany({ take: 10 })
     * 
     * // Only select the `listing_id`
     * const listing_mediaWithListing_idOnly = await prisma.listing_media.findMany({ select: { listing_id: true } })
     * 
     */
    findMany<T extends listing_mediaFindManyArgs>(args?: SelectSubset<T, listing_mediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Listing_media.
     * @param {listing_mediaCreateArgs} args - Arguments to create a Listing_media.
     * @example
     * // Create one Listing_media
     * const Listing_media = await prisma.listing_media.create({
     *   data: {
     *     // ... data to create a Listing_media
     *   }
     * })
     * 
     */
    create<T extends listing_mediaCreateArgs>(args: SelectSubset<T, listing_mediaCreateArgs<ExtArgs>>): Prisma__listing_mediaClient<$Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Listing_medias.
     * @param {listing_mediaCreateManyArgs} args - Arguments to create many Listing_medias.
     * @example
     * // Create many Listing_medias
     * const listing_media = await prisma.listing_media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends listing_mediaCreateManyArgs>(args?: SelectSubset<T, listing_mediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Listing_medias and returns the data saved in the database.
     * @param {listing_mediaCreateManyAndReturnArgs} args - Arguments to create many Listing_medias.
     * @example
     * // Create many Listing_medias
     * const listing_media = await prisma.listing_media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Listing_medias and only return the `listing_id`
     * const listing_mediaWithListing_idOnly = await prisma.listing_media.createManyAndReturn({ 
     *   select: { listing_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends listing_mediaCreateManyAndReturnArgs>(args?: SelectSubset<T, listing_mediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Listing_media.
     * @param {listing_mediaDeleteArgs} args - Arguments to delete one Listing_media.
     * @example
     * // Delete one Listing_media
     * const Listing_media = await prisma.listing_media.delete({
     *   where: {
     *     // ... filter to delete one Listing_media
     *   }
     * })
     * 
     */
    delete<T extends listing_mediaDeleteArgs>(args: SelectSubset<T, listing_mediaDeleteArgs<ExtArgs>>): Prisma__listing_mediaClient<$Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Listing_media.
     * @param {listing_mediaUpdateArgs} args - Arguments to update one Listing_media.
     * @example
     * // Update one Listing_media
     * const listing_media = await prisma.listing_media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends listing_mediaUpdateArgs>(args: SelectSubset<T, listing_mediaUpdateArgs<ExtArgs>>): Prisma__listing_mediaClient<$Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Listing_medias.
     * @param {listing_mediaDeleteManyArgs} args - Arguments to filter Listing_medias to delete.
     * @example
     * // Delete a few Listing_medias
     * const { count } = await prisma.listing_media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends listing_mediaDeleteManyArgs>(args?: SelectSubset<T, listing_mediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listing_medias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listing_mediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listing_medias
     * const listing_media = await prisma.listing_media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends listing_mediaUpdateManyArgs>(args: SelectSubset<T, listing_mediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Listing_media.
     * @param {listing_mediaUpsertArgs} args - Arguments to update or create a Listing_media.
     * @example
     * // Update or create a Listing_media
     * const listing_media = await prisma.listing_media.upsert({
     *   create: {
     *     // ... data to create a Listing_media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listing_media we want to update
     *   }
     * })
     */
    upsert<T extends listing_mediaUpsertArgs>(args: SelectSubset<T, listing_mediaUpsertArgs<ExtArgs>>): Prisma__listing_mediaClient<$Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Listing_medias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listing_mediaCountArgs} args - Arguments to filter Listing_medias to count.
     * @example
     * // Count the number of Listing_medias
     * const count = await prisma.listing_media.count({
     *   where: {
     *     // ... the filter for the Listing_medias we want to count
     *   }
     * })
    **/
    count<T extends listing_mediaCountArgs>(
      args?: Subset<T, listing_mediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Listing_mediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listing_media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Listing_mediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Listing_mediaAggregateArgs>(args: Subset<T, Listing_mediaAggregateArgs>): Prisma.PrismaPromise<GetListing_mediaAggregateType<T>>

    /**
     * Group by Listing_media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listing_mediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends listing_mediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: listing_mediaGroupByArgs['orderBy'] }
        : { orderBy?: listing_mediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, listing_mediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListing_mediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the listing_media model
   */
  readonly fields: listing_mediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for listing_media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__listing_mediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listings<T extends listingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, listingsDefaultArgs<ExtArgs>>): Prisma__listingsClient<$Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    media<T extends mediaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mediaDefaultArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the listing_media model
   */ 
  interface listing_mediaFieldRefs {
    readonly listing_id: FieldRef<"listing_media", 'String'>
    readonly media_id: FieldRef<"listing_media", 'String'>
    readonly position: FieldRef<"listing_media", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * listing_media findUnique
   */
  export type listing_mediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_media
     */
    select?: listing_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_mediaInclude<ExtArgs> | null
    /**
     * Filter, which listing_media to fetch.
     */
    where: listing_mediaWhereUniqueInput
  }

  /**
   * listing_media findUniqueOrThrow
   */
  export type listing_mediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_media
     */
    select?: listing_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_mediaInclude<ExtArgs> | null
    /**
     * Filter, which listing_media to fetch.
     */
    where: listing_mediaWhereUniqueInput
  }

  /**
   * listing_media findFirst
   */
  export type listing_mediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_media
     */
    select?: listing_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_mediaInclude<ExtArgs> | null
    /**
     * Filter, which listing_media to fetch.
     */
    where?: listing_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listing_medias to fetch.
     */
    orderBy?: listing_mediaOrderByWithRelationInput | listing_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for listing_medias.
     */
    cursor?: listing_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listing_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listing_medias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of listing_medias.
     */
    distinct?: Listing_mediaScalarFieldEnum | Listing_mediaScalarFieldEnum[]
  }

  /**
   * listing_media findFirstOrThrow
   */
  export type listing_mediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_media
     */
    select?: listing_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_mediaInclude<ExtArgs> | null
    /**
     * Filter, which listing_media to fetch.
     */
    where?: listing_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listing_medias to fetch.
     */
    orderBy?: listing_mediaOrderByWithRelationInput | listing_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for listing_medias.
     */
    cursor?: listing_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listing_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listing_medias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of listing_medias.
     */
    distinct?: Listing_mediaScalarFieldEnum | Listing_mediaScalarFieldEnum[]
  }

  /**
   * listing_media findMany
   */
  export type listing_mediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_media
     */
    select?: listing_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_mediaInclude<ExtArgs> | null
    /**
     * Filter, which listing_medias to fetch.
     */
    where?: listing_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listing_medias to fetch.
     */
    orderBy?: listing_mediaOrderByWithRelationInput | listing_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing listing_medias.
     */
    cursor?: listing_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listing_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listing_medias.
     */
    skip?: number
    distinct?: Listing_mediaScalarFieldEnum | Listing_mediaScalarFieldEnum[]
  }

  /**
   * listing_media create
   */
  export type listing_mediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_media
     */
    select?: listing_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_mediaInclude<ExtArgs> | null
    /**
     * The data needed to create a listing_media.
     */
    data: XOR<listing_mediaCreateInput, listing_mediaUncheckedCreateInput>
  }

  /**
   * listing_media createMany
   */
  export type listing_mediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many listing_medias.
     */
    data: listing_mediaCreateManyInput | listing_mediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * listing_media createManyAndReturn
   */
  export type listing_mediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_media
     */
    select?: listing_mediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many listing_medias.
     */
    data: listing_mediaCreateManyInput | listing_mediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_mediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * listing_media update
   */
  export type listing_mediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_media
     */
    select?: listing_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_mediaInclude<ExtArgs> | null
    /**
     * The data needed to update a listing_media.
     */
    data: XOR<listing_mediaUpdateInput, listing_mediaUncheckedUpdateInput>
    /**
     * Choose, which listing_media to update.
     */
    where: listing_mediaWhereUniqueInput
  }

  /**
   * listing_media updateMany
   */
  export type listing_mediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update listing_medias.
     */
    data: XOR<listing_mediaUpdateManyMutationInput, listing_mediaUncheckedUpdateManyInput>
    /**
     * Filter which listing_medias to update
     */
    where?: listing_mediaWhereInput
  }

  /**
   * listing_media upsert
   */
  export type listing_mediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_media
     */
    select?: listing_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_mediaInclude<ExtArgs> | null
    /**
     * The filter to search for the listing_media to update in case it exists.
     */
    where: listing_mediaWhereUniqueInput
    /**
     * In case the listing_media found by the `where` argument doesn't exist, create a new listing_media with this data.
     */
    create: XOR<listing_mediaCreateInput, listing_mediaUncheckedCreateInput>
    /**
     * In case the listing_media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<listing_mediaUpdateInput, listing_mediaUncheckedUpdateInput>
  }

  /**
   * listing_media delete
   */
  export type listing_mediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_media
     */
    select?: listing_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_mediaInclude<ExtArgs> | null
    /**
     * Filter which listing_media to delete.
     */
    where: listing_mediaWhereUniqueInput
  }

  /**
   * listing_media deleteMany
   */
  export type listing_mediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which listing_medias to delete
     */
    where?: listing_mediaWhereInput
  }

  /**
   * listing_media without action
   */
  export type listing_mediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_media
     */
    select?: listing_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_mediaInclude<ExtArgs> | null
  }


  /**
   * Model listings
   */

  export type AggregateListings = {
    _count: ListingsCountAggregateOutputType | null
    _avg: ListingsAvgAggregateOutputType | null
    _sum: ListingsSumAggregateOutputType | null
    _min: ListingsMinAggregateOutputType | null
    _max: ListingsMaxAggregateOutputType | null
  }

  export type ListingsAvgAggregateOutputType = {
    price: Decimal | null
    duration_minutes: number | null
    capacity: number | null
  }

  export type ListingsSumAggregateOutputType = {
    price: Decimal | null
    duration_minutes: number | null
    capacity: number | null
  }

  export type ListingsMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    title: string | null
    slug: string | null
    description: string | null
    type: string | null
    category: string | null
    price: Decimal | null
    currency: string | null
    duration_minutes: number | null
    capacity: number | null
    is_bookable: boolean | null
    featured_image_id: string | null
    status: string | null
    published_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ListingsMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    title: string | null
    slug: string | null
    description: string | null
    type: string | null
    category: string | null
    price: Decimal | null
    currency: string | null
    duration_minutes: number | null
    capacity: number | null
    is_bookable: boolean | null
    featured_image_id: string | null
    status: string | null
    published_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ListingsCountAggregateOutputType = {
    id: number
    tenant_id: number
    title: number
    slug: number
    description: number
    type: number
    category: number
    price: number
    currency: number
    duration_minutes: number
    capacity: number
    is_bookable: number
    featured_image_id: number
    metadata: number
    status: number
    published_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ListingsAvgAggregateInputType = {
    price?: true
    duration_minutes?: true
    capacity?: true
  }

  export type ListingsSumAggregateInputType = {
    price?: true
    duration_minutes?: true
    capacity?: true
  }

  export type ListingsMinAggregateInputType = {
    id?: true
    tenant_id?: true
    title?: true
    slug?: true
    description?: true
    type?: true
    category?: true
    price?: true
    currency?: true
    duration_minutes?: true
    capacity?: true
    is_bookable?: true
    featured_image_id?: true
    status?: true
    published_at?: true
    created_at?: true
    updated_at?: true
  }

  export type ListingsMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    title?: true
    slug?: true
    description?: true
    type?: true
    category?: true
    price?: true
    currency?: true
    duration_minutes?: true
    capacity?: true
    is_bookable?: true
    featured_image_id?: true
    status?: true
    published_at?: true
    created_at?: true
    updated_at?: true
  }

  export type ListingsCountAggregateInputType = {
    id?: true
    tenant_id?: true
    title?: true
    slug?: true
    description?: true
    type?: true
    category?: true
    price?: true
    currency?: true
    duration_minutes?: true
    capacity?: true
    is_bookable?: true
    featured_image_id?: true
    metadata?: true
    status?: true
    published_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ListingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which listings to aggregate.
     */
    where?: listingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listings to fetch.
     */
    orderBy?: listingsOrderByWithRelationInput | listingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: listingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned listings
    **/
    _count?: true | ListingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingsMaxAggregateInputType
  }

  export type GetListingsAggregateType<T extends ListingsAggregateArgs> = {
        [P in keyof T & keyof AggregateListings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListings[P]>
      : GetScalarType<T[P], AggregateListings[P]>
  }




  export type listingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: listingsWhereInput
    orderBy?: listingsOrderByWithAggregationInput | listingsOrderByWithAggregationInput[]
    by: ListingsScalarFieldEnum[] | ListingsScalarFieldEnum
    having?: listingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingsCountAggregateInputType | true
    _avg?: ListingsAvgAggregateInputType
    _sum?: ListingsSumAggregateInputType
    _min?: ListingsMinAggregateInputType
    _max?: ListingsMaxAggregateInputType
  }

  export type ListingsGroupByOutputType = {
    id: string
    tenant_id: string
    title: string
    slug: string
    description: string | null
    type: string
    category: string | null
    price: Decimal | null
    currency: string | null
    duration_minutes: number | null
    capacity: number | null
    is_bookable: boolean | null
    featured_image_id: string | null
    metadata: JsonValue | null
    status: string | null
    published_at: Date | null
    created_at: Date
    updated_at: Date
    _count: ListingsCountAggregateOutputType | null
    _avg: ListingsAvgAggregateOutputType | null
    _sum: ListingsSumAggregateOutputType | null
    _min: ListingsMinAggregateOutputType | null
    _max: ListingsMaxAggregateOutputType | null
  }

  type GetListingsGroupByPayload<T extends listingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingsGroupByOutputType[P]>
            : GetScalarType<T[P], ListingsGroupByOutputType[P]>
        }
      >
    >


  export type listingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    type?: boolean
    category?: boolean
    price?: boolean
    currency?: boolean
    duration_minutes?: boolean
    capacity?: boolean
    is_bookable?: boolean
    featured_image_id?: boolean
    metadata?: boolean
    status?: boolean
    published_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    leads?: boolean | listings$leadsArgs<ExtArgs>
    listing_media?: boolean | listings$listing_mediaArgs<ExtArgs>
    media?: boolean | listings$mediaArgs<ExtArgs>
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
    _count?: boolean | ListingsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listings"]>

  export type listingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    type?: boolean
    category?: boolean
    price?: boolean
    currency?: boolean
    duration_minutes?: boolean
    capacity?: boolean
    is_bookable?: boolean
    featured_image_id?: boolean
    metadata?: boolean
    status?: boolean
    published_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    media?: boolean | listings$mediaArgs<ExtArgs>
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listings"]>

  export type listingsSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    type?: boolean
    category?: boolean
    price?: boolean
    currency?: boolean
    duration_minutes?: boolean
    capacity?: boolean
    is_bookable?: boolean
    featured_image_id?: boolean
    metadata?: boolean
    status?: boolean
    published_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type listingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | listings$leadsArgs<ExtArgs>
    listing_media?: boolean | listings$listing_mediaArgs<ExtArgs>
    media?: boolean | listings$mediaArgs<ExtArgs>
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
    _count?: boolean | ListingsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type listingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | listings$mediaArgs<ExtArgs>
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $listingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "listings"
    objects: {
      leads: Prisma.$leadsPayload<ExtArgs>[]
      listing_media: Prisma.$listing_mediaPayload<ExtArgs>[]
      media: Prisma.$mediaPayload<ExtArgs> | null
      tenants: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      title: string
      slug: string
      description: string | null
      type: string
      category: string | null
      price: Prisma.Decimal | null
      currency: string | null
      duration_minutes: number | null
      capacity: number | null
      is_bookable: boolean | null
      featured_image_id: string | null
      metadata: Prisma.JsonValue | null
      status: string | null
      published_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["listings"]>
    composites: {}
  }

  type listingsGetPayload<S extends boolean | null | undefined | listingsDefaultArgs> = $Result.GetResult<Prisma.$listingsPayload, S>

  type listingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<listingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ListingsCountAggregateInputType | true
    }

  export interface listingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['listings'], meta: { name: 'listings' } }
    /**
     * Find zero or one Listings that matches the filter.
     * @param {listingsFindUniqueArgs} args - Arguments to find a Listings
     * @example
     * // Get one Listings
     * const listings = await prisma.listings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends listingsFindUniqueArgs>(args: SelectSubset<T, listingsFindUniqueArgs<ExtArgs>>): Prisma__listingsClient<$Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Listings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {listingsFindUniqueOrThrowArgs} args - Arguments to find a Listings
     * @example
     * // Get one Listings
     * const listings = await prisma.listings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends listingsFindUniqueOrThrowArgs>(args: SelectSubset<T, listingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__listingsClient<$Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Listings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listingsFindFirstArgs} args - Arguments to find a Listings
     * @example
     * // Get one Listings
     * const listings = await prisma.listings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends listingsFindFirstArgs>(args?: SelectSubset<T, listingsFindFirstArgs<ExtArgs>>): Prisma__listingsClient<$Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Listings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listingsFindFirstOrThrowArgs} args - Arguments to find a Listings
     * @example
     * // Get one Listings
     * const listings = await prisma.listings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends listingsFindFirstOrThrowArgs>(args?: SelectSubset<T, listingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__listingsClient<$Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Listings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listings
     * const listings = await prisma.listings.findMany()
     * 
     * // Get first 10 Listings
     * const listings = await prisma.listings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingsWithIdOnly = await prisma.listings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends listingsFindManyArgs>(args?: SelectSubset<T, listingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Listings.
     * @param {listingsCreateArgs} args - Arguments to create a Listings.
     * @example
     * // Create one Listings
     * const Listings = await prisma.listings.create({
     *   data: {
     *     // ... data to create a Listings
     *   }
     * })
     * 
     */
    create<T extends listingsCreateArgs>(args: SelectSubset<T, listingsCreateArgs<ExtArgs>>): Prisma__listingsClient<$Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Listings.
     * @param {listingsCreateManyArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listings = await prisma.listings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends listingsCreateManyArgs>(args?: SelectSubset<T, listingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Listings and returns the data saved in the database.
     * @param {listingsCreateManyAndReturnArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listings = await prisma.listings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Listings and only return the `id`
     * const listingsWithIdOnly = await prisma.listings.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends listingsCreateManyAndReturnArgs>(args?: SelectSubset<T, listingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Listings.
     * @param {listingsDeleteArgs} args - Arguments to delete one Listings.
     * @example
     * // Delete one Listings
     * const Listings = await prisma.listings.delete({
     *   where: {
     *     // ... filter to delete one Listings
     *   }
     * })
     * 
     */
    delete<T extends listingsDeleteArgs>(args: SelectSubset<T, listingsDeleteArgs<ExtArgs>>): Prisma__listingsClient<$Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Listings.
     * @param {listingsUpdateArgs} args - Arguments to update one Listings.
     * @example
     * // Update one Listings
     * const listings = await prisma.listings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends listingsUpdateArgs>(args: SelectSubset<T, listingsUpdateArgs<ExtArgs>>): Prisma__listingsClient<$Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Listings.
     * @param {listingsDeleteManyArgs} args - Arguments to filter Listings to delete.
     * @example
     * // Delete a few Listings
     * const { count } = await prisma.listings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends listingsDeleteManyArgs>(args?: SelectSubset<T, listingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listings
     * const listings = await prisma.listings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends listingsUpdateManyArgs>(args: SelectSubset<T, listingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Listings.
     * @param {listingsUpsertArgs} args - Arguments to update or create a Listings.
     * @example
     * // Update or create a Listings
     * const listings = await prisma.listings.upsert({
     *   create: {
     *     // ... data to create a Listings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listings we want to update
     *   }
     * })
     */
    upsert<T extends listingsUpsertArgs>(args: SelectSubset<T, listingsUpsertArgs<ExtArgs>>): Prisma__listingsClient<$Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listingsCountArgs} args - Arguments to filter Listings to count.
     * @example
     * // Count the number of Listings
     * const count = await prisma.listings.count({
     *   where: {
     *     // ... the filter for the Listings we want to count
     *   }
     * })
    **/
    count<T extends listingsCountArgs>(
      args?: Subset<T, listingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListingsAggregateArgs>(args: Subset<T, ListingsAggregateArgs>): Prisma.PrismaPromise<GetListingsAggregateType<T>>

    /**
     * Group by Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends listingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: listingsGroupByArgs['orderBy'] }
        : { orderBy?: listingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, listingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the listings model
   */
  readonly fields: listingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for listings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__listingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leads<T extends listings$leadsArgs<ExtArgs> = {}>(args?: Subset<T, listings$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findMany"> | Null>
    listing_media<T extends listings$listing_mediaArgs<ExtArgs> = {}>(args?: Subset<T, listings$listing_mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "findMany"> | Null>
    media<T extends listings$mediaArgs<ExtArgs> = {}>(args?: Subset<T, listings$mediaArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    tenants<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the listings model
   */ 
  interface listingsFieldRefs {
    readonly id: FieldRef<"listings", 'String'>
    readonly tenant_id: FieldRef<"listings", 'String'>
    readonly title: FieldRef<"listings", 'String'>
    readonly slug: FieldRef<"listings", 'String'>
    readonly description: FieldRef<"listings", 'String'>
    readonly type: FieldRef<"listings", 'String'>
    readonly category: FieldRef<"listings", 'String'>
    readonly price: FieldRef<"listings", 'Decimal'>
    readonly currency: FieldRef<"listings", 'String'>
    readonly duration_minutes: FieldRef<"listings", 'Int'>
    readonly capacity: FieldRef<"listings", 'Int'>
    readonly is_bookable: FieldRef<"listings", 'Boolean'>
    readonly featured_image_id: FieldRef<"listings", 'String'>
    readonly metadata: FieldRef<"listings", 'Json'>
    readonly status: FieldRef<"listings", 'String'>
    readonly published_at: FieldRef<"listings", 'DateTime'>
    readonly created_at: FieldRef<"listings", 'DateTime'>
    readonly updated_at: FieldRef<"listings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * listings findUnique
   */
  export type listingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listings
     */
    select?: listingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingsInclude<ExtArgs> | null
    /**
     * Filter, which listings to fetch.
     */
    where: listingsWhereUniqueInput
  }

  /**
   * listings findUniqueOrThrow
   */
  export type listingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listings
     */
    select?: listingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingsInclude<ExtArgs> | null
    /**
     * Filter, which listings to fetch.
     */
    where: listingsWhereUniqueInput
  }

  /**
   * listings findFirst
   */
  export type listingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listings
     */
    select?: listingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingsInclude<ExtArgs> | null
    /**
     * Filter, which listings to fetch.
     */
    where?: listingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listings to fetch.
     */
    orderBy?: listingsOrderByWithRelationInput | listingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for listings.
     */
    cursor?: listingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of listings.
     */
    distinct?: ListingsScalarFieldEnum | ListingsScalarFieldEnum[]
  }

  /**
   * listings findFirstOrThrow
   */
  export type listingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listings
     */
    select?: listingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingsInclude<ExtArgs> | null
    /**
     * Filter, which listings to fetch.
     */
    where?: listingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listings to fetch.
     */
    orderBy?: listingsOrderByWithRelationInput | listingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for listings.
     */
    cursor?: listingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of listings.
     */
    distinct?: ListingsScalarFieldEnum | ListingsScalarFieldEnum[]
  }

  /**
   * listings findMany
   */
  export type listingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listings
     */
    select?: listingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingsInclude<ExtArgs> | null
    /**
     * Filter, which listings to fetch.
     */
    where?: listingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listings to fetch.
     */
    orderBy?: listingsOrderByWithRelationInput | listingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing listings.
     */
    cursor?: listingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listings.
     */
    skip?: number
    distinct?: ListingsScalarFieldEnum | ListingsScalarFieldEnum[]
  }

  /**
   * listings create
   */
  export type listingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listings
     */
    select?: listingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingsInclude<ExtArgs> | null
    /**
     * The data needed to create a listings.
     */
    data: XOR<listingsCreateInput, listingsUncheckedCreateInput>
  }

  /**
   * listings createMany
   */
  export type listingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many listings.
     */
    data: listingsCreateManyInput | listingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * listings createManyAndReturn
   */
  export type listingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listings
     */
    select?: listingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many listings.
     */
    data: listingsCreateManyInput | listingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * listings update
   */
  export type listingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listings
     */
    select?: listingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingsInclude<ExtArgs> | null
    /**
     * The data needed to update a listings.
     */
    data: XOR<listingsUpdateInput, listingsUncheckedUpdateInput>
    /**
     * Choose, which listings to update.
     */
    where: listingsWhereUniqueInput
  }

  /**
   * listings updateMany
   */
  export type listingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update listings.
     */
    data: XOR<listingsUpdateManyMutationInput, listingsUncheckedUpdateManyInput>
    /**
     * Filter which listings to update
     */
    where?: listingsWhereInput
  }

  /**
   * listings upsert
   */
  export type listingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listings
     */
    select?: listingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingsInclude<ExtArgs> | null
    /**
     * The filter to search for the listings to update in case it exists.
     */
    where: listingsWhereUniqueInput
    /**
     * In case the listings found by the `where` argument doesn't exist, create a new listings with this data.
     */
    create: XOR<listingsCreateInput, listingsUncheckedCreateInput>
    /**
     * In case the listings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<listingsUpdateInput, listingsUncheckedUpdateInput>
  }

  /**
   * listings delete
   */
  export type listingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listings
     */
    select?: listingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingsInclude<ExtArgs> | null
    /**
     * Filter which listings to delete.
     */
    where: listingsWhereUniqueInput
  }

  /**
   * listings deleteMany
   */
  export type listingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which listings to delete
     */
    where?: listingsWhereInput
  }

  /**
   * listings.leads
   */
  export type listings$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leadsInclude<ExtArgs> | null
    where?: leadsWhereInput
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    cursor?: leadsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * listings.listing_media
   */
  export type listings$listing_mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_media
     */
    select?: listing_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_mediaInclude<ExtArgs> | null
    where?: listing_mediaWhereInput
    orderBy?: listing_mediaOrderByWithRelationInput | listing_mediaOrderByWithRelationInput[]
    cursor?: listing_mediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Listing_mediaScalarFieldEnum | Listing_mediaScalarFieldEnum[]
  }

  /**
   * listings.media
   */
  export type listings$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    where?: mediaWhereInput
  }

  /**
   * listings without action
   */
  export type listingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listings
     */
    select?: listingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingsInclude<ExtArgs> | null
  }


  /**
   * Model media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaAvgAggregateOutputType = {
    size_bytes: number | null
    width: number | null
    height: number | null
  }

  export type MediaSumAggregateOutputType = {
    size_bytes: number | null
    width: number | null
    height: number | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    filename: string | null
    original_filename: string | null
    mime_type: string | null
    size_bytes: number | null
    s3_key: string | null
    s3_bucket: string | null
    cloudfront_url: string | null
    width: number | null
    height: number | null
    alt_text: string | null
    caption: string | null
    uploaded_by: string | null
    created_at: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    filename: string | null
    original_filename: string | null
    mime_type: string | null
    size_bytes: number | null
    s3_key: string | null
    s3_bucket: string | null
    cloudfront_url: string | null
    width: number | null
    height: number | null
    alt_text: string | null
    caption: string | null
    uploaded_by: string | null
    created_at: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    tenant_id: number
    filename: number
    original_filename: number
    mime_type: number
    size_bytes: number
    s3_key: number
    s3_bucket: number
    cloudfront_url: number
    width: number
    height: number
    alt_text: number
    caption: number
    metadata: number
    uploaded_by: number
    created_at: number
    _all: number
  }


  export type MediaAvgAggregateInputType = {
    size_bytes?: true
    width?: true
    height?: true
  }

  export type MediaSumAggregateInputType = {
    size_bytes?: true
    width?: true
    height?: true
  }

  export type MediaMinAggregateInputType = {
    id?: true
    tenant_id?: true
    filename?: true
    original_filename?: true
    mime_type?: true
    size_bytes?: true
    s3_key?: true
    s3_bucket?: true
    cloudfront_url?: true
    width?: true
    height?: true
    alt_text?: true
    caption?: true
    uploaded_by?: true
    created_at?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    filename?: true
    original_filename?: true
    mime_type?: true
    size_bytes?: true
    s3_key?: true
    s3_bucket?: true
    cloudfront_url?: true
    width?: true
    height?: true
    alt_text?: true
    caption?: true
    uploaded_by?: true
    created_at?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    tenant_id?: true
    filename?: true
    original_filename?: true
    mime_type?: true
    size_bytes?: true
    s3_key?: true
    s3_bucket?: true
    cloudfront_url?: true
    width?: true
    height?: true
    alt_text?: true
    caption?: true
    metadata?: true
    uploaded_by?: true
    created_at?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which media to aggregate.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type mediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mediaWhereInput
    orderBy?: mediaOrderByWithAggregationInput | mediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: mediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _avg?: MediaAvgAggregateInputType
    _sum?: MediaSumAggregateInputType
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    tenant_id: string
    filename: string
    original_filename: string
    mime_type: string
    size_bytes: number
    s3_key: string
    s3_bucket: string
    cloudfront_url: string | null
    width: number | null
    height: number | null
    alt_text: string | null
    caption: string | null
    metadata: JsonValue | null
    uploaded_by: string | null
    created_at: Date
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends mediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type mediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    filename?: boolean
    original_filename?: boolean
    mime_type?: boolean
    size_bytes?: boolean
    s3_key?: boolean
    s3_bucket?: boolean
    cloudfront_url?: boolean
    width?: boolean
    height?: boolean
    alt_text?: boolean
    caption?: boolean
    metadata?: boolean
    uploaded_by?: boolean
    created_at?: boolean
    listing_media?: boolean | media$listing_mediaArgs<ExtArgs>
    listings?: boolean | media$listingsArgs<ExtArgs>
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type mediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    filename?: boolean
    original_filename?: boolean
    mime_type?: boolean
    size_bytes?: boolean
    s3_key?: boolean
    s3_bucket?: boolean
    cloudfront_url?: boolean
    width?: boolean
    height?: boolean
    alt_text?: boolean
    caption?: boolean
    metadata?: boolean
    uploaded_by?: boolean
    created_at?: boolean
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type mediaSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    filename?: boolean
    original_filename?: boolean
    mime_type?: boolean
    size_bytes?: boolean
    s3_key?: boolean
    s3_bucket?: boolean
    cloudfront_url?: boolean
    width?: boolean
    height?: boolean
    alt_text?: boolean
    caption?: boolean
    metadata?: boolean
    uploaded_by?: boolean
    created_at?: boolean
  }

  export type mediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing_media?: boolean | media$listing_mediaArgs<ExtArgs>
    listings?: boolean | media$listingsArgs<ExtArgs>
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type mediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $mediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "media"
    objects: {
      listing_media: Prisma.$listing_mediaPayload<ExtArgs>[]
      listings: Prisma.$listingsPayload<ExtArgs>[]
      tenants: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      filename: string
      original_filename: string
      mime_type: string
      size_bytes: number
      s3_key: string
      s3_bucket: string
      cloudfront_url: string | null
      width: number | null
      height: number | null
      alt_text: string | null
      caption: string | null
      metadata: Prisma.JsonValue | null
      uploaded_by: string | null
      created_at: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type mediaGetPayload<S extends boolean | null | undefined | mediaDefaultArgs> = $Result.GetResult<Prisma.$mediaPayload, S>

  type mediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mediaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface mediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['media'], meta: { name: 'media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {mediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mediaFindUniqueArgs>(args: SelectSubset<T, mediaFindUniqueArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {mediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mediaFindUniqueOrThrowArgs>(args: SelectSubset<T, mediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mediaFindFirstArgs>(args?: SelectSubset<T, mediaFindFirstArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mediaFindFirstOrThrowArgs>(args?: SelectSubset<T, mediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mediaFindManyArgs>(args?: SelectSubset<T, mediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Media.
     * @param {mediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends mediaCreateArgs>(args: SelectSubset<T, mediaCreateArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Media.
     * @param {mediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mediaCreateManyArgs>(args?: SelectSubset<T, mediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {mediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mediaCreateManyAndReturnArgs>(args?: SelectSubset<T, mediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Media.
     * @param {mediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends mediaDeleteArgs>(args: SelectSubset<T, mediaDeleteArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Media.
     * @param {mediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mediaUpdateArgs>(args: SelectSubset<T, mediaUpdateArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Media.
     * @param {mediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mediaDeleteManyArgs>(args?: SelectSubset<T, mediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mediaUpdateManyArgs>(args: SelectSubset<T, mediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Media.
     * @param {mediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends mediaUpsertArgs>(args: SelectSubset<T, mediaUpsertArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends mediaCountArgs>(
      args?: Subset<T, mediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mediaGroupByArgs['orderBy'] }
        : { orderBy?: mediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the media model
   */
  readonly fields: mediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listing_media<T extends media$listing_mediaArgs<ExtArgs> = {}>(args?: Subset<T, media$listing_mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "findMany"> | Null>
    listings<T extends media$listingsArgs<ExtArgs> = {}>(args?: Subset<T, media$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findMany"> | Null>
    tenants<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the media model
   */ 
  interface mediaFieldRefs {
    readonly id: FieldRef<"media", 'String'>
    readonly tenant_id: FieldRef<"media", 'String'>
    readonly filename: FieldRef<"media", 'String'>
    readonly original_filename: FieldRef<"media", 'String'>
    readonly mime_type: FieldRef<"media", 'String'>
    readonly size_bytes: FieldRef<"media", 'Int'>
    readonly s3_key: FieldRef<"media", 'String'>
    readonly s3_bucket: FieldRef<"media", 'String'>
    readonly cloudfront_url: FieldRef<"media", 'String'>
    readonly width: FieldRef<"media", 'Int'>
    readonly height: FieldRef<"media", 'Int'>
    readonly alt_text: FieldRef<"media", 'String'>
    readonly caption: FieldRef<"media", 'String'>
    readonly metadata: FieldRef<"media", 'Json'>
    readonly uploaded_by: FieldRef<"media", 'String'>
    readonly created_at: FieldRef<"media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * media findUnique
   */
  export type mediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media findUniqueOrThrow
   */
  export type mediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media findFirst
   */
  export type mediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for media.
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * media findFirstOrThrow
   */
  export type mediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for media.
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * media findMany
   */
  export type mediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing media.
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * media create
   */
  export type mediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * The data needed to create a media.
     */
    data: XOR<mediaCreateInput, mediaUncheckedCreateInput>
  }

  /**
   * media createMany
   */
  export type mediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many media.
     */
    data: mediaCreateManyInput | mediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * media createManyAndReturn
   */
  export type mediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many media.
     */
    data: mediaCreateManyInput | mediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * media update
   */
  export type mediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * The data needed to update a media.
     */
    data: XOR<mediaUpdateInput, mediaUncheckedUpdateInput>
    /**
     * Choose, which media to update.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media updateMany
   */
  export type mediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update media.
     */
    data: XOR<mediaUpdateManyMutationInput, mediaUncheckedUpdateManyInput>
    /**
     * Filter which media to update
     */
    where?: mediaWhereInput
  }

  /**
   * media upsert
   */
  export type mediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * The filter to search for the media to update in case it exists.
     */
    where: mediaWhereUniqueInput
    /**
     * In case the media found by the `where` argument doesn't exist, create a new media with this data.
     */
    create: XOR<mediaCreateInput, mediaUncheckedCreateInput>
    /**
     * In case the media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mediaUpdateInput, mediaUncheckedUpdateInput>
  }

  /**
   * media delete
   */
  export type mediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter which media to delete.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media deleteMany
   */
  export type mediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which media to delete
     */
    where?: mediaWhereInput
  }

  /**
   * media.listing_media
   */
  export type media$listing_mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_media
     */
    select?: listing_mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_mediaInclude<ExtArgs> | null
    where?: listing_mediaWhereInput
    orderBy?: listing_mediaOrderByWithRelationInput | listing_mediaOrderByWithRelationInput[]
    cursor?: listing_mediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Listing_mediaScalarFieldEnum | Listing_mediaScalarFieldEnum[]
  }

  /**
   * media.listings
   */
  export type media$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listings
     */
    select?: listingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingsInclude<ExtArgs> | null
    where?: listingsWhereInput
    orderBy?: listingsOrderByWithRelationInput | listingsOrderByWithRelationInput[]
    cursor?: listingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingsScalarFieldEnum | ListingsScalarFieldEnum[]
  }

  /**
   * media without action
   */
  export type mediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
  }


  /**
   * Model pages
   */

  export type AggregatePages = {
    _count: PagesCountAggregateOutputType | null
    _min: PagesMinAggregateOutputType | null
    _max: PagesMaxAggregateOutputType | null
  }

  export type PagesMinAggregateOutputType = {
    id: string | null
    site_id: string | null
    template_id: string | null
    slug: string | null
    published: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PagesMaxAggregateOutputType = {
    id: string | null
    site_id: string | null
    template_id: string | null
    slug: string | null
    published: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PagesCountAggregateOutputType = {
    id: number
    site_id: number
    template_id: number
    slug: number
    overrides: number
    published: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PagesMinAggregateInputType = {
    id?: true
    site_id?: true
    template_id?: true
    slug?: true
    published?: true
    created_at?: true
    updated_at?: true
  }

  export type PagesMaxAggregateInputType = {
    id?: true
    site_id?: true
    template_id?: true
    slug?: true
    published?: true
    created_at?: true
    updated_at?: true
  }

  export type PagesCountAggregateInputType = {
    id?: true
    site_id?: true
    template_id?: true
    slug?: true
    overrides?: true
    published?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pages to aggregate.
     */
    where?: pagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pages to fetch.
     */
    orderBy?: pagesOrderByWithRelationInput | pagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pages
    **/
    _count?: true | PagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagesMaxAggregateInputType
  }

  export type GetPagesAggregateType<T extends PagesAggregateArgs> = {
        [P in keyof T & keyof AggregatePages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePages[P]>
      : GetScalarType<T[P], AggregatePages[P]>
  }




  export type pagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagesWhereInput
    orderBy?: pagesOrderByWithAggregationInput | pagesOrderByWithAggregationInput[]
    by: PagesScalarFieldEnum[] | PagesScalarFieldEnum
    having?: pagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagesCountAggregateInputType | true
    _min?: PagesMinAggregateInputType
    _max?: PagesMaxAggregateInputType
  }

  export type PagesGroupByOutputType = {
    id: string
    site_id: string
    template_id: string
    slug: string
    overrides: JsonValue
    published: boolean
    created_at: Date
    updated_at: Date
    _count: PagesCountAggregateOutputType | null
    _min: PagesMinAggregateOutputType | null
    _max: PagesMaxAggregateOutputType | null
  }

  type GetPagesGroupByPayload<T extends pagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagesGroupByOutputType[P]>
            : GetScalarType<T[P], PagesGroupByOutputType[P]>
        }
      >
    >


  export type pagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    site_id?: boolean
    template_id?: boolean
    slug?: boolean
    overrides?: boolean
    published?: boolean
    created_at?: boolean
    updated_at?: boolean
    sites?: boolean | sitesDefaultArgs<ExtArgs>
    templates?: boolean | templatesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pages"]>

  export type pagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    site_id?: boolean
    template_id?: boolean
    slug?: boolean
    overrides?: boolean
    published?: boolean
    created_at?: boolean
    updated_at?: boolean
    sites?: boolean | sitesDefaultArgs<ExtArgs>
    templates?: boolean | templatesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pages"]>

  export type pagesSelectScalar = {
    id?: boolean
    site_id?: boolean
    template_id?: boolean
    slug?: boolean
    overrides?: boolean
    published?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type pagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sites?: boolean | sitesDefaultArgs<ExtArgs>
    templates?: boolean | templatesDefaultArgs<ExtArgs>
  }
  export type pagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sites?: boolean | sitesDefaultArgs<ExtArgs>
    templates?: boolean | templatesDefaultArgs<ExtArgs>
  }

  export type $pagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pages"
    objects: {
      sites: Prisma.$sitesPayload<ExtArgs>
      templates: Prisma.$templatesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      site_id: string
      template_id: string
      slug: string
      overrides: Prisma.JsonValue
      published: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["pages"]>
    composites: {}
  }

  type pagesGetPayload<S extends boolean | null | undefined | pagesDefaultArgs> = $Result.GetResult<Prisma.$pagesPayload, S>

  type pagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<pagesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PagesCountAggregateInputType | true
    }

  export interface pagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pages'], meta: { name: 'pages' } }
    /**
     * Find zero or one Pages that matches the filter.
     * @param {pagesFindUniqueArgs} args - Arguments to find a Pages
     * @example
     * // Get one Pages
     * const pages = await prisma.pages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pagesFindUniqueArgs>(args: SelectSubset<T, pagesFindUniqueArgs<ExtArgs>>): Prisma__pagesClient<$Result.GetResult<Prisma.$pagesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pages that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {pagesFindUniqueOrThrowArgs} args - Arguments to find a Pages
     * @example
     * // Get one Pages
     * const pages = await prisma.pages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pagesFindUniqueOrThrowArgs>(args: SelectSubset<T, pagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pagesClient<$Result.GetResult<Prisma.$pagesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagesFindFirstArgs} args - Arguments to find a Pages
     * @example
     * // Get one Pages
     * const pages = await prisma.pages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pagesFindFirstArgs>(args?: SelectSubset<T, pagesFindFirstArgs<ExtArgs>>): Prisma__pagesClient<$Result.GetResult<Prisma.$pagesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagesFindFirstOrThrowArgs} args - Arguments to find a Pages
     * @example
     * // Get one Pages
     * const pages = await prisma.pages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pagesFindFirstOrThrowArgs>(args?: SelectSubset<T, pagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__pagesClient<$Result.GetResult<Prisma.$pagesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pages
     * const pages = await prisma.pages.findMany()
     * 
     * // Get first 10 Pages
     * const pages = await prisma.pages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagesWithIdOnly = await prisma.pages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pagesFindManyArgs>(args?: SelectSubset<T, pagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pages.
     * @param {pagesCreateArgs} args - Arguments to create a Pages.
     * @example
     * // Create one Pages
     * const Pages = await prisma.pages.create({
     *   data: {
     *     // ... data to create a Pages
     *   }
     * })
     * 
     */
    create<T extends pagesCreateArgs>(args: SelectSubset<T, pagesCreateArgs<ExtArgs>>): Prisma__pagesClient<$Result.GetResult<Prisma.$pagesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pages.
     * @param {pagesCreateManyArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const pages = await prisma.pages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pagesCreateManyArgs>(args?: SelectSubset<T, pagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pages and returns the data saved in the database.
     * @param {pagesCreateManyAndReturnArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const pages = await prisma.pages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pages and only return the `id`
     * const pagesWithIdOnly = await prisma.pages.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pagesCreateManyAndReturnArgs>(args?: SelectSubset<T, pagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Pages.
     * @param {pagesDeleteArgs} args - Arguments to delete one Pages.
     * @example
     * // Delete one Pages
     * const Pages = await prisma.pages.delete({
     *   where: {
     *     // ... filter to delete one Pages
     *   }
     * })
     * 
     */
    delete<T extends pagesDeleteArgs>(args: SelectSubset<T, pagesDeleteArgs<ExtArgs>>): Prisma__pagesClient<$Result.GetResult<Prisma.$pagesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pages.
     * @param {pagesUpdateArgs} args - Arguments to update one Pages.
     * @example
     * // Update one Pages
     * const pages = await prisma.pages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pagesUpdateArgs>(args: SelectSubset<T, pagesUpdateArgs<ExtArgs>>): Prisma__pagesClient<$Result.GetResult<Prisma.$pagesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pages.
     * @param {pagesDeleteManyArgs} args - Arguments to filter Pages to delete.
     * @example
     * // Delete a few Pages
     * const { count } = await prisma.pages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pagesDeleteManyArgs>(args?: SelectSubset<T, pagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pages
     * const pages = await prisma.pages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pagesUpdateManyArgs>(args: SelectSubset<T, pagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pages.
     * @param {pagesUpsertArgs} args - Arguments to update or create a Pages.
     * @example
     * // Update or create a Pages
     * const pages = await prisma.pages.upsert({
     *   create: {
     *     // ... data to create a Pages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pages we want to update
     *   }
     * })
     */
    upsert<T extends pagesUpsertArgs>(args: SelectSubset<T, pagesUpsertArgs<ExtArgs>>): Prisma__pagesClient<$Result.GetResult<Prisma.$pagesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagesCountArgs} args - Arguments to filter Pages to count.
     * @example
     * // Count the number of Pages
     * const count = await prisma.pages.count({
     *   where: {
     *     // ... the filter for the Pages we want to count
     *   }
     * })
    **/
    count<T extends pagesCountArgs>(
      args?: Subset<T, pagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PagesAggregateArgs>(args: Subset<T, PagesAggregateArgs>): Prisma.PrismaPromise<GetPagesAggregateType<T>>

    /**
     * Group by Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pagesGroupByArgs['orderBy'] }
        : { orderBy?: pagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pages model
   */
  readonly fields: pagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sites<T extends sitesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sitesDefaultArgs<ExtArgs>>): Prisma__sitesClient<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    templates<T extends templatesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, templatesDefaultArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pages model
   */ 
  interface pagesFieldRefs {
    readonly id: FieldRef<"pages", 'String'>
    readonly site_id: FieldRef<"pages", 'String'>
    readonly template_id: FieldRef<"pages", 'String'>
    readonly slug: FieldRef<"pages", 'String'>
    readonly overrides: FieldRef<"pages", 'Json'>
    readonly published: FieldRef<"pages", 'Boolean'>
    readonly created_at: FieldRef<"pages", 'DateTime'>
    readonly updated_at: FieldRef<"pages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pages findUnique
   */
  export type pagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pages
     */
    select?: pagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagesInclude<ExtArgs> | null
    /**
     * Filter, which pages to fetch.
     */
    where: pagesWhereUniqueInput
  }

  /**
   * pages findUniqueOrThrow
   */
  export type pagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pages
     */
    select?: pagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagesInclude<ExtArgs> | null
    /**
     * Filter, which pages to fetch.
     */
    where: pagesWhereUniqueInput
  }

  /**
   * pages findFirst
   */
  export type pagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pages
     */
    select?: pagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagesInclude<ExtArgs> | null
    /**
     * Filter, which pages to fetch.
     */
    where?: pagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pages to fetch.
     */
    orderBy?: pagesOrderByWithRelationInput | pagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pages.
     */
    cursor?: pagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pages.
     */
    distinct?: PagesScalarFieldEnum | PagesScalarFieldEnum[]
  }

  /**
   * pages findFirstOrThrow
   */
  export type pagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pages
     */
    select?: pagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagesInclude<ExtArgs> | null
    /**
     * Filter, which pages to fetch.
     */
    where?: pagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pages to fetch.
     */
    orderBy?: pagesOrderByWithRelationInput | pagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pages.
     */
    cursor?: pagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pages.
     */
    distinct?: PagesScalarFieldEnum | PagesScalarFieldEnum[]
  }

  /**
   * pages findMany
   */
  export type pagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pages
     */
    select?: pagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagesInclude<ExtArgs> | null
    /**
     * Filter, which pages to fetch.
     */
    where?: pagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pages to fetch.
     */
    orderBy?: pagesOrderByWithRelationInput | pagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pages.
     */
    cursor?: pagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pages.
     */
    skip?: number
    distinct?: PagesScalarFieldEnum | PagesScalarFieldEnum[]
  }

  /**
   * pages create
   */
  export type pagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pages
     */
    select?: pagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagesInclude<ExtArgs> | null
    /**
     * The data needed to create a pages.
     */
    data: XOR<pagesCreateInput, pagesUncheckedCreateInput>
  }

  /**
   * pages createMany
   */
  export type pagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pages.
     */
    data: pagesCreateManyInput | pagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pages createManyAndReturn
   */
  export type pagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pages
     */
    select?: pagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many pages.
     */
    data: pagesCreateManyInput | pagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pages update
   */
  export type pagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pages
     */
    select?: pagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagesInclude<ExtArgs> | null
    /**
     * The data needed to update a pages.
     */
    data: XOR<pagesUpdateInput, pagesUncheckedUpdateInput>
    /**
     * Choose, which pages to update.
     */
    where: pagesWhereUniqueInput
  }

  /**
   * pages updateMany
   */
  export type pagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pages.
     */
    data: XOR<pagesUpdateManyMutationInput, pagesUncheckedUpdateManyInput>
    /**
     * Filter which pages to update
     */
    where?: pagesWhereInput
  }

  /**
   * pages upsert
   */
  export type pagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pages
     */
    select?: pagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagesInclude<ExtArgs> | null
    /**
     * The filter to search for the pages to update in case it exists.
     */
    where: pagesWhereUniqueInput
    /**
     * In case the pages found by the `where` argument doesn't exist, create a new pages with this data.
     */
    create: XOR<pagesCreateInput, pagesUncheckedCreateInput>
    /**
     * In case the pages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pagesUpdateInput, pagesUncheckedUpdateInput>
  }

  /**
   * pages delete
   */
  export type pagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pages
     */
    select?: pagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagesInclude<ExtArgs> | null
    /**
     * Filter which pages to delete.
     */
    where: pagesWhereUniqueInput
  }

  /**
   * pages deleteMany
   */
  export type pagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pages to delete
     */
    where?: pagesWhereInput
  }

  /**
   * pages without action
   */
  export type pagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pages
     */
    select?: pagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagesInclude<ExtArgs> | null
  }


  /**
   * Model sites
   */

  export type AggregateSites = {
    _count: SitesCountAggregateOutputType | null
    _min: SitesMinAggregateOutputType | null
    _max: SitesMaxAggregateOutputType | null
  }

  export type SitesMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    key: string | null
    name: string | null
    domain: string | null
    created_at: Date | null
  }

  export type SitesMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    key: string | null
    name: string | null
    domain: string | null
    created_at: Date | null
  }

  export type SitesCountAggregateOutputType = {
    id: number
    tenant_id: number
    key: number
    name: number
    domain: number
    created_at: number
    _all: number
  }


  export type SitesMinAggregateInputType = {
    id?: true
    tenant_id?: true
    key?: true
    name?: true
    domain?: true
    created_at?: true
  }

  export type SitesMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    key?: true
    name?: true
    domain?: true
    created_at?: true
  }

  export type SitesCountAggregateInputType = {
    id?: true
    tenant_id?: true
    key?: true
    name?: true
    domain?: true
    created_at?: true
    _all?: true
  }

  export type SitesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sites to aggregate.
     */
    where?: sitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sites to fetch.
     */
    orderBy?: sitesOrderByWithRelationInput | sitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sites
    **/
    _count?: true | SitesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SitesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SitesMaxAggregateInputType
  }

  export type GetSitesAggregateType<T extends SitesAggregateArgs> = {
        [P in keyof T & keyof AggregateSites]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSites[P]>
      : GetScalarType<T[P], AggregateSites[P]>
  }




  export type sitesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sitesWhereInput
    orderBy?: sitesOrderByWithAggregationInput | sitesOrderByWithAggregationInput[]
    by: SitesScalarFieldEnum[] | SitesScalarFieldEnum
    having?: sitesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SitesCountAggregateInputType | true
    _min?: SitesMinAggregateInputType
    _max?: SitesMaxAggregateInputType
  }

  export type SitesGroupByOutputType = {
    id: string
    tenant_id: string
    key: string
    name: string
    domain: string | null
    created_at: Date
    _count: SitesCountAggregateOutputType | null
    _min: SitesMinAggregateOutputType | null
    _max: SitesMaxAggregateOutputType | null
  }

  type GetSitesGroupByPayload<T extends sitesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SitesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SitesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SitesGroupByOutputType[P]>
            : GetScalarType<T[P], SitesGroupByOutputType[P]>
        }
      >
    >


  export type sitesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    key?: boolean
    name?: boolean
    domain?: boolean
    created_at?: boolean
    pages?: boolean | sites$pagesArgs<ExtArgs>
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
    _count?: boolean | SitesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sites"]>

  export type sitesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    key?: boolean
    name?: boolean
    domain?: boolean
    created_at?: boolean
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sites"]>

  export type sitesSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    key?: boolean
    name?: boolean
    domain?: boolean
    created_at?: boolean
  }

  export type sitesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pages?: boolean | sites$pagesArgs<ExtArgs>
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
    _count?: boolean | SitesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type sitesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $sitesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sites"
    objects: {
      pages: Prisma.$pagesPayload<ExtArgs>[]
      tenants: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      key: string
      name: string
      domain: string | null
      created_at: Date
    }, ExtArgs["result"]["sites"]>
    composites: {}
  }

  type sitesGetPayload<S extends boolean | null | undefined | sitesDefaultArgs> = $Result.GetResult<Prisma.$sitesPayload, S>

  type sitesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<sitesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SitesCountAggregateInputType | true
    }

  export interface sitesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sites'], meta: { name: 'sites' } }
    /**
     * Find zero or one Sites that matches the filter.
     * @param {sitesFindUniqueArgs} args - Arguments to find a Sites
     * @example
     * // Get one Sites
     * const sites = await prisma.sites.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sitesFindUniqueArgs>(args: SelectSubset<T, sitesFindUniqueArgs<ExtArgs>>): Prisma__sitesClient<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sites that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {sitesFindUniqueOrThrowArgs} args - Arguments to find a Sites
     * @example
     * // Get one Sites
     * const sites = await prisma.sites.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sitesFindUniqueOrThrowArgs>(args: SelectSubset<T, sitesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sitesClient<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitesFindFirstArgs} args - Arguments to find a Sites
     * @example
     * // Get one Sites
     * const sites = await prisma.sites.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sitesFindFirstArgs>(args?: SelectSubset<T, sitesFindFirstArgs<ExtArgs>>): Prisma__sitesClient<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sites that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitesFindFirstOrThrowArgs} args - Arguments to find a Sites
     * @example
     * // Get one Sites
     * const sites = await prisma.sites.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sitesFindFirstOrThrowArgs>(args?: SelectSubset<T, sitesFindFirstOrThrowArgs<ExtArgs>>): Prisma__sitesClient<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sites
     * const sites = await prisma.sites.findMany()
     * 
     * // Get first 10 Sites
     * const sites = await prisma.sites.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sitesWithIdOnly = await prisma.sites.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sitesFindManyArgs>(args?: SelectSubset<T, sitesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sites.
     * @param {sitesCreateArgs} args - Arguments to create a Sites.
     * @example
     * // Create one Sites
     * const Sites = await prisma.sites.create({
     *   data: {
     *     // ... data to create a Sites
     *   }
     * })
     * 
     */
    create<T extends sitesCreateArgs>(args: SelectSubset<T, sitesCreateArgs<ExtArgs>>): Prisma__sitesClient<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sites.
     * @param {sitesCreateManyArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const sites = await prisma.sites.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sitesCreateManyArgs>(args?: SelectSubset<T, sitesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sites and returns the data saved in the database.
     * @param {sitesCreateManyAndReturnArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const sites = await prisma.sites.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sites and only return the `id`
     * const sitesWithIdOnly = await prisma.sites.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sitesCreateManyAndReturnArgs>(args?: SelectSubset<T, sitesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Sites.
     * @param {sitesDeleteArgs} args - Arguments to delete one Sites.
     * @example
     * // Delete one Sites
     * const Sites = await prisma.sites.delete({
     *   where: {
     *     // ... filter to delete one Sites
     *   }
     * })
     * 
     */
    delete<T extends sitesDeleteArgs>(args: SelectSubset<T, sitesDeleteArgs<ExtArgs>>): Prisma__sitesClient<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sites.
     * @param {sitesUpdateArgs} args - Arguments to update one Sites.
     * @example
     * // Update one Sites
     * const sites = await prisma.sites.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sitesUpdateArgs>(args: SelectSubset<T, sitesUpdateArgs<ExtArgs>>): Prisma__sitesClient<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sites.
     * @param {sitesDeleteManyArgs} args - Arguments to filter Sites to delete.
     * @example
     * // Delete a few Sites
     * const { count } = await prisma.sites.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sitesDeleteManyArgs>(args?: SelectSubset<T, sitesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sites
     * const sites = await prisma.sites.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sitesUpdateManyArgs>(args: SelectSubset<T, sitesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sites.
     * @param {sitesUpsertArgs} args - Arguments to update or create a Sites.
     * @example
     * // Update or create a Sites
     * const sites = await prisma.sites.upsert({
     *   create: {
     *     // ... data to create a Sites
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sites we want to update
     *   }
     * })
     */
    upsert<T extends sitesUpsertArgs>(args: SelectSubset<T, sitesUpsertArgs<ExtArgs>>): Prisma__sitesClient<$Result.GetResult<Prisma.$sitesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitesCountArgs} args - Arguments to filter Sites to count.
     * @example
     * // Count the number of Sites
     * const count = await prisma.sites.count({
     *   where: {
     *     // ... the filter for the Sites we want to count
     *   }
     * })
    **/
    count<T extends sitesCountArgs>(
      args?: Subset<T, sitesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SitesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SitesAggregateArgs>(args: Subset<T, SitesAggregateArgs>): Prisma.PrismaPromise<GetSitesAggregateType<T>>

    /**
     * Group by Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sitesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sitesGroupByArgs['orderBy'] }
        : { orderBy?: sitesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sitesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSitesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sites model
   */
  readonly fields: sitesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sites.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sitesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pages<T extends sites$pagesArgs<ExtArgs> = {}>(args?: Subset<T, sites$pagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagesPayload<ExtArgs>, T, "findMany"> | Null>
    tenants<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sites model
   */ 
  interface sitesFieldRefs {
    readonly id: FieldRef<"sites", 'String'>
    readonly tenant_id: FieldRef<"sites", 'String'>
    readonly key: FieldRef<"sites", 'String'>
    readonly name: FieldRef<"sites", 'String'>
    readonly domain: FieldRef<"sites", 'String'>
    readonly created_at: FieldRef<"sites", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sites findUnique
   */
  export type sitesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
    /**
     * Filter, which sites to fetch.
     */
    where: sitesWhereUniqueInput
  }

  /**
   * sites findUniqueOrThrow
   */
  export type sitesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
    /**
     * Filter, which sites to fetch.
     */
    where: sitesWhereUniqueInput
  }

  /**
   * sites findFirst
   */
  export type sitesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
    /**
     * Filter, which sites to fetch.
     */
    where?: sitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sites to fetch.
     */
    orderBy?: sitesOrderByWithRelationInput | sitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sites.
     */
    cursor?: sitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sites.
     */
    distinct?: SitesScalarFieldEnum | SitesScalarFieldEnum[]
  }

  /**
   * sites findFirstOrThrow
   */
  export type sitesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
    /**
     * Filter, which sites to fetch.
     */
    where?: sitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sites to fetch.
     */
    orderBy?: sitesOrderByWithRelationInput | sitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sites.
     */
    cursor?: sitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sites.
     */
    distinct?: SitesScalarFieldEnum | SitesScalarFieldEnum[]
  }

  /**
   * sites findMany
   */
  export type sitesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
    /**
     * Filter, which sites to fetch.
     */
    where?: sitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sites to fetch.
     */
    orderBy?: sitesOrderByWithRelationInput | sitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sites.
     */
    cursor?: sitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sites.
     */
    skip?: number
    distinct?: SitesScalarFieldEnum | SitesScalarFieldEnum[]
  }

  /**
   * sites create
   */
  export type sitesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
    /**
     * The data needed to create a sites.
     */
    data: XOR<sitesCreateInput, sitesUncheckedCreateInput>
  }

  /**
   * sites createMany
   */
  export type sitesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sites.
     */
    data: sitesCreateManyInput | sitesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sites createManyAndReturn
   */
  export type sitesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many sites.
     */
    data: sitesCreateManyInput | sitesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sites update
   */
  export type sitesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
    /**
     * The data needed to update a sites.
     */
    data: XOR<sitesUpdateInput, sitesUncheckedUpdateInput>
    /**
     * Choose, which sites to update.
     */
    where: sitesWhereUniqueInput
  }

  /**
   * sites updateMany
   */
  export type sitesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sites.
     */
    data: XOR<sitesUpdateManyMutationInput, sitesUncheckedUpdateManyInput>
    /**
     * Filter which sites to update
     */
    where?: sitesWhereInput
  }

  /**
   * sites upsert
   */
  export type sitesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
    /**
     * The filter to search for the sites to update in case it exists.
     */
    where: sitesWhereUniqueInput
    /**
     * In case the sites found by the `where` argument doesn't exist, create a new sites with this data.
     */
    create: XOR<sitesCreateInput, sitesUncheckedCreateInput>
    /**
     * In case the sites was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sitesUpdateInput, sitesUncheckedUpdateInput>
  }

  /**
   * sites delete
   */
  export type sitesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
    /**
     * Filter which sites to delete.
     */
    where: sitesWhereUniqueInput
  }

  /**
   * sites deleteMany
   */
  export type sitesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sites to delete
     */
    where?: sitesWhereInput
  }

  /**
   * sites.pages
   */
  export type sites$pagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pages
     */
    select?: pagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagesInclude<ExtArgs> | null
    where?: pagesWhereInput
    orderBy?: pagesOrderByWithRelationInput | pagesOrderByWithRelationInput[]
    cursor?: pagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagesScalarFieldEnum | PagesScalarFieldEnum[]
  }

  /**
   * sites without action
   */
  export type sitesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sites
     */
    select?: sitesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitesInclude<ExtArgs> | null
  }


  /**
   * Model templates
   */

  export type AggregateTemplates = {
    _count: TemplatesCountAggregateOutputType | null
    _avg: TemplatesAvgAggregateOutputType | null
    _sum: TemplatesSumAggregateOutputType | null
    _min: TemplatesMinAggregateOutputType | null
    _max: TemplatesMaxAggregateOutputType | null
  }

  export type TemplatesAvgAggregateOutputType = {
    version: number | null
  }

  export type TemplatesSumAggregateOutputType = {
    version: number | null
  }

  export type TemplatesMinAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    category: string | null
    version: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TemplatesMaxAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    category: string | null
    version: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TemplatesCountAggregateOutputType = {
    id: number
    key: number
    name: number
    category: number
    version: number
    content: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TemplatesAvgAggregateInputType = {
    version?: true
  }

  export type TemplatesSumAggregateInputType = {
    version?: true
  }

  export type TemplatesMinAggregateInputType = {
    id?: true
    key?: true
    name?: true
    category?: true
    version?: true
    created_at?: true
    updated_at?: true
  }

  export type TemplatesMaxAggregateInputType = {
    id?: true
    key?: true
    name?: true
    category?: true
    version?: true
    created_at?: true
    updated_at?: true
  }

  export type TemplatesCountAggregateInputType = {
    id?: true
    key?: true
    name?: true
    category?: true
    version?: true
    content?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TemplatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which templates to aggregate.
     */
    where?: templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of templates to fetch.
     */
    orderBy?: templatesOrderByWithRelationInput | templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned templates
    **/
    _count?: true | TemplatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplatesMaxAggregateInputType
  }

  export type GetTemplatesAggregateType<T extends TemplatesAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplates[P]>
      : GetScalarType<T[P], AggregateTemplates[P]>
  }




  export type templatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: templatesWhereInput
    orderBy?: templatesOrderByWithAggregationInput | templatesOrderByWithAggregationInput[]
    by: TemplatesScalarFieldEnum[] | TemplatesScalarFieldEnum
    having?: templatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplatesCountAggregateInputType | true
    _avg?: TemplatesAvgAggregateInputType
    _sum?: TemplatesSumAggregateInputType
    _min?: TemplatesMinAggregateInputType
    _max?: TemplatesMaxAggregateInputType
  }

  export type TemplatesGroupByOutputType = {
    id: string
    key: string
    name: string
    category: string | null
    version: number
    content: JsonValue
    created_at: Date
    updated_at: Date
    _count: TemplatesCountAggregateOutputType | null
    _avg: TemplatesAvgAggregateOutputType | null
    _sum: TemplatesSumAggregateOutputType | null
    _min: TemplatesMinAggregateOutputType | null
    _max: TemplatesMaxAggregateOutputType | null
  }

  type GetTemplatesGroupByPayload<T extends templatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplatesGroupByOutputType[P]>
            : GetScalarType<T[P], TemplatesGroupByOutputType[P]>
        }
      >
    >


  export type templatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    category?: boolean
    version?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    pages?: boolean | templates$pagesArgs<ExtArgs>
    tenant_templates?: boolean | templates$tenant_templatesArgs<ExtArgs>
    _count?: boolean | TemplatesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templates"]>

  export type templatesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    category?: boolean
    version?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["templates"]>

  export type templatesSelectScalar = {
    id?: boolean
    key?: boolean
    name?: boolean
    category?: boolean
    version?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type templatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pages?: boolean | templates$pagesArgs<ExtArgs>
    tenant_templates?: boolean | templates$tenant_templatesArgs<ExtArgs>
    _count?: boolean | TemplatesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type templatesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $templatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "templates"
    objects: {
      pages: Prisma.$pagesPayload<ExtArgs>[]
      tenant_templates: Prisma.$tenant_templatesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      name: string
      category: string | null
      version: number
      content: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["templates"]>
    composites: {}
  }

  type templatesGetPayload<S extends boolean | null | undefined | templatesDefaultArgs> = $Result.GetResult<Prisma.$templatesPayload, S>

  type templatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<templatesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TemplatesCountAggregateInputType | true
    }

  export interface templatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['templates'], meta: { name: 'templates' } }
    /**
     * Find zero or one Templates that matches the filter.
     * @param {templatesFindUniqueArgs} args - Arguments to find a Templates
     * @example
     * // Get one Templates
     * const templates = await prisma.templates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends templatesFindUniqueArgs>(args: SelectSubset<T, templatesFindUniqueArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Templates that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {templatesFindUniqueOrThrowArgs} args - Arguments to find a Templates
     * @example
     * // Get one Templates
     * const templates = await prisma.templates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends templatesFindUniqueOrThrowArgs>(args: SelectSubset<T, templatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templatesFindFirstArgs} args - Arguments to find a Templates
     * @example
     * // Get one Templates
     * const templates = await prisma.templates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends templatesFindFirstArgs>(args?: SelectSubset<T, templatesFindFirstArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Templates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templatesFindFirstOrThrowArgs} args - Arguments to find a Templates
     * @example
     * // Get one Templates
     * const templates = await prisma.templates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends templatesFindFirstOrThrowArgs>(args?: SelectSubset<T, templatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.templates.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.templates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templatesWithIdOnly = await prisma.templates.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends templatesFindManyArgs>(args?: SelectSubset<T, templatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Templates.
     * @param {templatesCreateArgs} args - Arguments to create a Templates.
     * @example
     * // Create one Templates
     * const Templates = await prisma.templates.create({
     *   data: {
     *     // ... data to create a Templates
     *   }
     * })
     * 
     */
    create<T extends templatesCreateArgs>(args: SelectSubset<T, templatesCreateArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Templates.
     * @param {templatesCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const templates = await prisma.templates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends templatesCreateManyArgs>(args?: SelectSubset<T, templatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {templatesCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const templates = await prisma.templates.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templatesWithIdOnly = await prisma.templates.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends templatesCreateManyAndReturnArgs>(args?: SelectSubset<T, templatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Templates.
     * @param {templatesDeleteArgs} args - Arguments to delete one Templates.
     * @example
     * // Delete one Templates
     * const Templates = await prisma.templates.delete({
     *   where: {
     *     // ... filter to delete one Templates
     *   }
     * })
     * 
     */
    delete<T extends templatesDeleteArgs>(args: SelectSubset<T, templatesDeleteArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Templates.
     * @param {templatesUpdateArgs} args - Arguments to update one Templates.
     * @example
     * // Update one Templates
     * const templates = await prisma.templates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends templatesUpdateArgs>(args: SelectSubset<T, templatesUpdateArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Templates.
     * @param {templatesDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.templates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends templatesDeleteManyArgs>(args?: SelectSubset<T, templatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const templates = await prisma.templates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends templatesUpdateManyArgs>(args: SelectSubset<T, templatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Templates.
     * @param {templatesUpsertArgs} args - Arguments to update or create a Templates.
     * @example
     * // Update or create a Templates
     * const templates = await prisma.templates.upsert({
     *   create: {
     *     // ... data to create a Templates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Templates we want to update
     *   }
     * })
     */
    upsert<T extends templatesUpsertArgs>(args: SelectSubset<T, templatesUpsertArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templatesCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.templates.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends templatesCountArgs>(
      args?: Subset<T, templatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplatesAggregateArgs>(args: Subset<T, TemplatesAggregateArgs>): Prisma.PrismaPromise<GetTemplatesAggregateType<T>>

    /**
     * Group by Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templatesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends templatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: templatesGroupByArgs['orderBy'] }
        : { orderBy?: templatesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, templatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the templates model
   */
  readonly fields: templatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for templates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__templatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pages<T extends templates$pagesArgs<ExtArgs> = {}>(args?: Subset<T, templates$pagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagesPayload<ExtArgs>, T, "findMany"> | Null>
    tenant_templates<T extends templates$tenant_templatesArgs<ExtArgs> = {}>(args?: Subset<T, templates$tenant_templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tenant_templatesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the templates model
   */ 
  interface templatesFieldRefs {
    readonly id: FieldRef<"templates", 'String'>
    readonly key: FieldRef<"templates", 'String'>
    readonly name: FieldRef<"templates", 'String'>
    readonly category: FieldRef<"templates", 'String'>
    readonly version: FieldRef<"templates", 'Int'>
    readonly content: FieldRef<"templates", 'Json'>
    readonly created_at: FieldRef<"templates", 'DateTime'>
    readonly updated_at: FieldRef<"templates", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * templates findUnique
   */
  export type templatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * Filter, which templates to fetch.
     */
    where: templatesWhereUniqueInput
  }

  /**
   * templates findUniqueOrThrow
   */
  export type templatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * Filter, which templates to fetch.
     */
    where: templatesWhereUniqueInput
  }

  /**
   * templates findFirst
   */
  export type templatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * Filter, which templates to fetch.
     */
    where?: templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of templates to fetch.
     */
    orderBy?: templatesOrderByWithRelationInput | templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for templates.
     */
    cursor?: templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of templates.
     */
    distinct?: TemplatesScalarFieldEnum | TemplatesScalarFieldEnum[]
  }

  /**
   * templates findFirstOrThrow
   */
  export type templatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * Filter, which templates to fetch.
     */
    where?: templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of templates to fetch.
     */
    orderBy?: templatesOrderByWithRelationInput | templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for templates.
     */
    cursor?: templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of templates.
     */
    distinct?: TemplatesScalarFieldEnum | TemplatesScalarFieldEnum[]
  }

  /**
   * templates findMany
   */
  export type templatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * Filter, which templates to fetch.
     */
    where?: templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of templates to fetch.
     */
    orderBy?: templatesOrderByWithRelationInput | templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing templates.
     */
    cursor?: templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` templates.
     */
    skip?: number
    distinct?: TemplatesScalarFieldEnum | TemplatesScalarFieldEnum[]
  }

  /**
   * templates create
   */
  export type templatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * The data needed to create a templates.
     */
    data: XOR<templatesCreateInput, templatesUncheckedCreateInput>
  }

  /**
   * templates createMany
   */
  export type templatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many templates.
     */
    data: templatesCreateManyInput | templatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * templates createManyAndReturn
   */
  export type templatesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many templates.
     */
    data: templatesCreateManyInput | templatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * templates update
   */
  export type templatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * The data needed to update a templates.
     */
    data: XOR<templatesUpdateInput, templatesUncheckedUpdateInput>
    /**
     * Choose, which templates to update.
     */
    where: templatesWhereUniqueInput
  }

  /**
   * templates updateMany
   */
  export type templatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update templates.
     */
    data: XOR<templatesUpdateManyMutationInput, templatesUncheckedUpdateManyInput>
    /**
     * Filter which templates to update
     */
    where?: templatesWhereInput
  }

  /**
   * templates upsert
   */
  export type templatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * The filter to search for the templates to update in case it exists.
     */
    where: templatesWhereUniqueInput
    /**
     * In case the templates found by the `where` argument doesn't exist, create a new templates with this data.
     */
    create: XOR<templatesCreateInput, templatesUncheckedCreateInput>
    /**
     * In case the templates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<templatesUpdateInput, templatesUncheckedUpdateInput>
  }

  /**
   * templates delete
   */
  export type templatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * Filter which templates to delete.
     */
    where: templatesWhereUniqueInput
  }

  /**
   * templates deleteMany
   */
  export type templatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which templates to delete
     */
    where?: templatesWhereInput
  }

  /**
   * templates.pages
   */
  export type templates$pagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pages
     */
    select?: pagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagesInclude<ExtArgs> | null
    where?: pagesWhereInput
    orderBy?: pagesOrderByWithRelationInput | pagesOrderByWithRelationInput[]
    cursor?: pagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagesScalarFieldEnum | PagesScalarFieldEnum[]
  }

  /**
   * templates.tenant_templates
   */
  export type templates$tenant_templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_templates
     */
    select?: tenant_templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_templatesInclude<ExtArgs> | null
    where?: tenant_templatesWhereInput
    orderBy?: tenant_templatesOrderByWithRelationInput | tenant_templatesOrderByWithRelationInput[]
    cursor?: tenant_templatesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tenant_templatesScalarFieldEnum | Tenant_templatesScalarFieldEnum[]
  }

  /**
   * templates without action
   */
  export type templatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
  }


  /**
   * Model tenant_templates
   */

  export type AggregateTenant_templates = {
    _count: Tenant_templatesCountAggregateOutputType | null
    _min: Tenant_templatesMinAggregateOutputType | null
    _max: Tenant_templatesMaxAggregateOutputType | null
  }

  export type Tenant_templatesMinAggregateOutputType = {
    tenant_id: string | null
    template_id: string | null
    enabled: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Tenant_templatesMaxAggregateOutputType = {
    tenant_id: string | null
    template_id: string | null
    enabled: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Tenant_templatesCountAggregateOutputType = {
    tenant_id: number
    template_id: number
    enabled: number
    overrides: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Tenant_templatesMinAggregateInputType = {
    tenant_id?: true
    template_id?: true
    enabled?: true
    created_at?: true
    updated_at?: true
  }

  export type Tenant_templatesMaxAggregateInputType = {
    tenant_id?: true
    template_id?: true
    enabled?: true
    created_at?: true
    updated_at?: true
  }

  export type Tenant_templatesCountAggregateInputType = {
    tenant_id?: true
    template_id?: true
    enabled?: true
    overrides?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Tenant_templatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tenant_templates to aggregate.
     */
    where?: tenant_templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenant_templates to fetch.
     */
    orderBy?: tenant_templatesOrderByWithRelationInput | tenant_templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tenant_templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenant_templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenant_templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tenant_templates
    **/
    _count?: true | Tenant_templatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tenant_templatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tenant_templatesMaxAggregateInputType
  }

  export type GetTenant_templatesAggregateType<T extends Tenant_templatesAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant_templates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant_templates[P]>
      : GetScalarType<T[P], AggregateTenant_templates[P]>
  }




  export type tenant_templatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tenant_templatesWhereInput
    orderBy?: tenant_templatesOrderByWithAggregationInput | tenant_templatesOrderByWithAggregationInput[]
    by: Tenant_templatesScalarFieldEnum[] | Tenant_templatesScalarFieldEnum
    having?: tenant_templatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tenant_templatesCountAggregateInputType | true
    _min?: Tenant_templatesMinAggregateInputType
    _max?: Tenant_templatesMaxAggregateInputType
  }

  export type Tenant_templatesGroupByOutputType = {
    tenant_id: string
    template_id: string
    enabled: boolean
    overrides: JsonValue
    created_at: Date
    updated_at: Date
    _count: Tenant_templatesCountAggregateOutputType | null
    _min: Tenant_templatesMinAggregateOutputType | null
    _max: Tenant_templatesMaxAggregateOutputType | null
  }

  type GetTenant_templatesGroupByPayload<T extends tenant_templatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tenant_templatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tenant_templatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tenant_templatesGroupByOutputType[P]>
            : GetScalarType<T[P], Tenant_templatesGroupByOutputType[P]>
        }
      >
    >


  export type tenant_templatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tenant_id?: boolean
    template_id?: boolean
    enabled?: boolean
    overrides?: boolean
    created_at?: boolean
    updated_at?: boolean
    templates?: boolean | templatesDefaultArgs<ExtArgs>
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant_templates"]>

  export type tenant_templatesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tenant_id?: boolean
    template_id?: boolean
    enabled?: boolean
    overrides?: boolean
    created_at?: boolean
    updated_at?: boolean
    templates?: boolean | templatesDefaultArgs<ExtArgs>
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant_templates"]>

  export type tenant_templatesSelectScalar = {
    tenant_id?: boolean
    template_id?: boolean
    enabled?: boolean
    overrides?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type tenant_templatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templates?: boolean | templatesDefaultArgs<ExtArgs>
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type tenant_templatesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templates?: boolean | templatesDefaultArgs<ExtArgs>
    tenants?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $tenant_templatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tenant_templates"
    objects: {
      templates: Prisma.$templatesPayload<ExtArgs>
      tenants: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tenant_id: string
      template_id: string
      enabled: boolean
      overrides: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["tenant_templates"]>
    composites: {}
  }

  type tenant_templatesGetPayload<S extends boolean | null | undefined | tenant_templatesDefaultArgs> = $Result.GetResult<Prisma.$tenant_templatesPayload, S>

  type tenant_templatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tenant_templatesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tenant_templatesCountAggregateInputType | true
    }

  export interface tenant_templatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tenant_templates'], meta: { name: 'tenant_templates' } }
    /**
     * Find zero or one Tenant_templates that matches the filter.
     * @param {tenant_templatesFindUniqueArgs} args - Arguments to find a Tenant_templates
     * @example
     * // Get one Tenant_templates
     * const tenant_templates = await prisma.tenant_templates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tenant_templatesFindUniqueArgs>(args: SelectSubset<T, tenant_templatesFindUniqueArgs<ExtArgs>>): Prisma__tenant_templatesClient<$Result.GetResult<Prisma.$tenant_templatesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tenant_templates that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tenant_templatesFindUniqueOrThrowArgs} args - Arguments to find a Tenant_templates
     * @example
     * // Get one Tenant_templates
     * const tenant_templates = await prisma.tenant_templates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tenant_templatesFindUniqueOrThrowArgs>(args: SelectSubset<T, tenant_templatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tenant_templatesClient<$Result.GetResult<Prisma.$tenant_templatesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tenant_templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenant_templatesFindFirstArgs} args - Arguments to find a Tenant_templates
     * @example
     * // Get one Tenant_templates
     * const tenant_templates = await prisma.tenant_templates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tenant_templatesFindFirstArgs>(args?: SelectSubset<T, tenant_templatesFindFirstArgs<ExtArgs>>): Prisma__tenant_templatesClient<$Result.GetResult<Prisma.$tenant_templatesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tenant_templates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenant_templatesFindFirstOrThrowArgs} args - Arguments to find a Tenant_templates
     * @example
     * // Get one Tenant_templates
     * const tenant_templates = await prisma.tenant_templates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tenant_templatesFindFirstOrThrowArgs>(args?: SelectSubset<T, tenant_templatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__tenant_templatesClient<$Result.GetResult<Prisma.$tenant_templatesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tenant_templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenant_templatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenant_templates
     * const tenant_templates = await prisma.tenant_templates.findMany()
     * 
     * // Get first 10 Tenant_templates
     * const tenant_templates = await prisma.tenant_templates.findMany({ take: 10 })
     * 
     * // Only select the `tenant_id`
     * const tenant_templatesWithTenant_idOnly = await prisma.tenant_templates.findMany({ select: { tenant_id: true } })
     * 
     */
    findMany<T extends tenant_templatesFindManyArgs>(args?: SelectSubset<T, tenant_templatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tenant_templatesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tenant_templates.
     * @param {tenant_templatesCreateArgs} args - Arguments to create a Tenant_templates.
     * @example
     * // Create one Tenant_templates
     * const Tenant_templates = await prisma.tenant_templates.create({
     *   data: {
     *     // ... data to create a Tenant_templates
     *   }
     * })
     * 
     */
    create<T extends tenant_templatesCreateArgs>(args: SelectSubset<T, tenant_templatesCreateArgs<ExtArgs>>): Prisma__tenant_templatesClient<$Result.GetResult<Prisma.$tenant_templatesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tenant_templates.
     * @param {tenant_templatesCreateManyArgs} args - Arguments to create many Tenant_templates.
     * @example
     * // Create many Tenant_templates
     * const tenant_templates = await prisma.tenant_templates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tenant_templatesCreateManyArgs>(args?: SelectSubset<T, tenant_templatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenant_templates and returns the data saved in the database.
     * @param {tenant_templatesCreateManyAndReturnArgs} args - Arguments to create many Tenant_templates.
     * @example
     * // Create many Tenant_templates
     * const tenant_templates = await prisma.tenant_templates.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenant_templates and only return the `tenant_id`
     * const tenant_templatesWithTenant_idOnly = await prisma.tenant_templates.createManyAndReturn({ 
     *   select: { tenant_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tenant_templatesCreateManyAndReturnArgs>(args?: SelectSubset<T, tenant_templatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tenant_templatesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tenant_templates.
     * @param {tenant_templatesDeleteArgs} args - Arguments to delete one Tenant_templates.
     * @example
     * // Delete one Tenant_templates
     * const Tenant_templates = await prisma.tenant_templates.delete({
     *   where: {
     *     // ... filter to delete one Tenant_templates
     *   }
     * })
     * 
     */
    delete<T extends tenant_templatesDeleteArgs>(args: SelectSubset<T, tenant_templatesDeleteArgs<ExtArgs>>): Prisma__tenant_templatesClient<$Result.GetResult<Prisma.$tenant_templatesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tenant_templates.
     * @param {tenant_templatesUpdateArgs} args - Arguments to update one Tenant_templates.
     * @example
     * // Update one Tenant_templates
     * const tenant_templates = await prisma.tenant_templates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tenant_templatesUpdateArgs>(args: SelectSubset<T, tenant_templatesUpdateArgs<ExtArgs>>): Prisma__tenant_templatesClient<$Result.GetResult<Prisma.$tenant_templatesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tenant_templates.
     * @param {tenant_templatesDeleteManyArgs} args - Arguments to filter Tenant_templates to delete.
     * @example
     * // Delete a few Tenant_templates
     * const { count } = await prisma.tenant_templates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tenant_templatesDeleteManyArgs>(args?: SelectSubset<T, tenant_templatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenant_templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenant_templatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenant_templates
     * const tenant_templates = await prisma.tenant_templates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tenant_templatesUpdateManyArgs>(args: SelectSubset<T, tenant_templatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tenant_templates.
     * @param {tenant_templatesUpsertArgs} args - Arguments to update or create a Tenant_templates.
     * @example
     * // Update or create a Tenant_templates
     * const tenant_templates = await prisma.tenant_templates.upsert({
     *   create: {
     *     // ... data to create a Tenant_templates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant_templates we want to update
     *   }
     * })
     */
    upsert<T extends tenant_templatesUpsertArgs>(args: SelectSubset<T, tenant_templatesUpsertArgs<ExtArgs>>): Prisma__tenant_templatesClient<$Result.GetResult<Prisma.$tenant_templatesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tenant_templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenant_templatesCountArgs} args - Arguments to filter Tenant_templates to count.
     * @example
     * // Count the number of Tenant_templates
     * const count = await prisma.tenant_templates.count({
     *   where: {
     *     // ... the filter for the Tenant_templates we want to count
     *   }
     * })
    **/
    count<T extends tenant_templatesCountArgs>(
      args?: Subset<T, tenant_templatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tenant_templatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant_templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tenant_templatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tenant_templatesAggregateArgs>(args: Subset<T, Tenant_templatesAggregateArgs>): Prisma.PrismaPromise<GetTenant_templatesAggregateType<T>>

    /**
     * Group by Tenant_templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenant_templatesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tenant_templatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tenant_templatesGroupByArgs['orderBy'] }
        : { orderBy?: tenant_templatesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tenant_templatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenant_templatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tenant_templates model
   */
  readonly fields: tenant_templatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tenant_templates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tenant_templatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    templates<T extends templatesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, templatesDefaultArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tenants<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tenant_templates model
   */ 
  interface tenant_templatesFieldRefs {
    readonly tenant_id: FieldRef<"tenant_templates", 'String'>
    readonly template_id: FieldRef<"tenant_templates", 'String'>
    readonly enabled: FieldRef<"tenant_templates", 'Boolean'>
    readonly overrides: FieldRef<"tenant_templates", 'Json'>
    readonly created_at: FieldRef<"tenant_templates", 'DateTime'>
    readonly updated_at: FieldRef<"tenant_templates", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tenant_templates findUnique
   */
  export type tenant_templatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_templates
     */
    select?: tenant_templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_templatesInclude<ExtArgs> | null
    /**
     * Filter, which tenant_templates to fetch.
     */
    where: tenant_templatesWhereUniqueInput
  }

  /**
   * tenant_templates findUniqueOrThrow
   */
  export type tenant_templatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_templates
     */
    select?: tenant_templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_templatesInclude<ExtArgs> | null
    /**
     * Filter, which tenant_templates to fetch.
     */
    where: tenant_templatesWhereUniqueInput
  }

  /**
   * tenant_templates findFirst
   */
  export type tenant_templatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_templates
     */
    select?: tenant_templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_templatesInclude<ExtArgs> | null
    /**
     * Filter, which tenant_templates to fetch.
     */
    where?: tenant_templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenant_templates to fetch.
     */
    orderBy?: tenant_templatesOrderByWithRelationInput | tenant_templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tenant_templates.
     */
    cursor?: tenant_templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenant_templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenant_templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tenant_templates.
     */
    distinct?: Tenant_templatesScalarFieldEnum | Tenant_templatesScalarFieldEnum[]
  }

  /**
   * tenant_templates findFirstOrThrow
   */
  export type tenant_templatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_templates
     */
    select?: tenant_templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_templatesInclude<ExtArgs> | null
    /**
     * Filter, which tenant_templates to fetch.
     */
    where?: tenant_templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenant_templates to fetch.
     */
    orderBy?: tenant_templatesOrderByWithRelationInput | tenant_templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tenant_templates.
     */
    cursor?: tenant_templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenant_templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenant_templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tenant_templates.
     */
    distinct?: Tenant_templatesScalarFieldEnum | Tenant_templatesScalarFieldEnum[]
  }

  /**
   * tenant_templates findMany
   */
  export type tenant_templatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_templates
     */
    select?: tenant_templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_templatesInclude<ExtArgs> | null
    /**
     * Filter, which tenant_templates to fetch.
     */
    where?: tenant_templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenant_templates to fetch.
     */
    orderBy?: tenant_templatesOrderByWithRelationInput | tenant_templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tenant_templates.
     */
    cursor?: tenant_templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenant_templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenant_templates.
     */
    skip?: number
    distinct?: Tenant_templatesScalarFieldEnum | Tenant_templatesScalarFieldEnum[]
  }

  /**
   * tenant_templates create
   */
  export type tenant_templatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_templates
     */
    select?: tenant_templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_templatesInclude<ExtArgs> | null
    /**
     * The data needed to create a tenant_templates.
     */
    data: XOR<tenant_templatesCreateInput, tenant_templatesUncheckedCreateInput>
  }

  /**
   * tenant_templates createMany
   */
  export type tenant_templatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tenant_templates.
     */
    data: tenant_templatesCreateManyInput | tenant_templatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tenant_templates createManyAndReturn
   */
  export type tenant_templatesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_templates
     */
    select?: tenant_templatesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many tenant_templates.
     */
    data: tenant_templatesCreateManyInput | tenant_templatesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_templatesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tenant_templates update
   */
  export type tenant_templatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_templates
     */
    select?: tenant_templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_templatesInclude<ExtArgs> | null
    /**
     * The data needed to update a tenant_templates.
     */
    data: XOR<tenant_templatesUpdateInput, tenant_templatesUncheckedUpdateInput>
    /**
     * Choose, which tenant_templates to update.
     */
    where: tenant_templatesWhereUniqueInput
  }

  /**
   * tenant_templates updateMany
   */
  export type tenant_templatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tenant_templates.
     */
    data: XOR<tenant_templatesUpdateManyMutationInput, tenant_templatesUncheckedUpdateManyInput>
    /**
     * Filter which tenant_templates to update
     */
    where?: tenant_templatesWhereInput
  }

  /**
   * tenant_templates upsert
   */
  export type tenant_templatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_templates
     */
    select?: tenant_templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_templatesInclude<ExtArgs> | null
    /**
     * The filter to search for the tenant_templates to update in case it exists.
     */
    where: tenant_templatesWhereUniqueInput
    /**
     * In case the tenant_templates found by the `where` argument doesn't exist, create a new tenant_templates with this data.
     */
    create: XOR<tenant_templatesCreateInput, tenant_templatesUncheckedCreateInput>
    /**
     * In case the tenant_templates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tenant_templatesUpdateInput, tenant_templatesUncheckedUpdateInput>
  }

  /**
   * tenant_templates delete
   */
  export type tenant_templatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_templates
     */
    select?: tenant_templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_templatesInclude<ExtArgs> | null
    /**
     * Filter which tenant_templates to delete.
     */
    where: tenant_templatesWhereUniqueInput
  }

  /**
   * tenant_templates deleteMany
   */
  export type tenant_templatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tenant_templates to delete
     */
    where?: tenant_templatesWhereInput
  }

  /**
   * tenant_templates without action
   */
  export type tenant_templatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_templates
     */
    select?: tenant_templatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_templatesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    email: 'email',
    role: 'role',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MembershipScalarFieldEnum: {
    account_id: 'account_id',
    tenant_id: 'tenant_id',
    role: 'role',
    created_at: 'created_at'
  };

  export type MembershipScalarFieldEnum = (typeof MembershipScalarFieldEnum)[keyof typeof MembershipScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    user_id: 'user_id',
    action: 'action',
    entity_type: 'entity_type',
    entity_id: 'entity_id',
    old_values: 'old_values',
    new_values: 'new_values',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    metadata: 'metadata',
    created_at: 'created_at'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const AccountsScalarFieldEnum: {
    id: 'id',
    email: 'email',
    created_at: 'created_at'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const HelloScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    msg: 'msg',
    created_at: 'created_at'
  };

  export type HelloScalarFieldEnum = (typeof HelloScalarFieldEnum)[keyof typeof HelloScalarFieldEnum]


  export const LeadsScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    message: 'message',
    subject: 'subject',
    source: 'source',
    page_url: 'page_url',
    referrer: 'referrer',
    listing_id: 'listing_id',
    status: 'status',
    assigned_to: 'assigned_to',
    notes: 'notes',
    metadata: 'metadata',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type LeadsScalarFieldEnum = (typeof LeadsScalarFieldEnum)[keyof typeof LeadsScalarFieldEnum]


  export const Listing_mediaScalarFieldEnum: {
    listing_id: 'listing_id',
    media_id: 'media_id',
    position: 'position'
  };

  export type Listing_mediaScalarFieldEnum = (typeof Listing_mediaScalarFieldEnum)[keyof typeof Listing_mediaScalarFieldEnum]


  export const ListingsScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    type: 'type',
    category: 'category',
    price: 'price',
    currency: 'currency',
    duration_minutes: 'duration_minutes',
    capacity: 'capacity',
    is_bookable: 'is_bookable',
    featured_image_id: 'featured_image_id',
    metadata: 'metadata',
    status: 'status',
    published_at: 'published_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ListingsScalarFieldEnum = (typeof ListingsScalarFieldEnum)[keyof typeof ListingsScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    filename: 'filename',
    original_filename: 'original_filename',
    mime_type: 'mime_type',
    size_bytes: 'size_bytes',
    s3_key: 's3_key',
    s3_bucket: 's3_bucket',
    cloudfront_url: 'cloudfront_url',
    width: 'width',
    height: 'height',
    alt_text: 'alt_text',
    caption: 'caption',
    metadata: 'metadata',
    uploaded_by: 'uploaded_by',
    created_at: 'created_at'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const PagesScalarFieldEnum: {
    id: 'id',
    site_id: 'site_id',
    template_id: 'template_id',
    slug: 'slug',
    overrides: 'overrides',
    published: 'published',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PagesScalarFieldEnum = (typeof PagesScalarFieldEnum)[keyof typeof PagesScalarFieldEnum]


  export const SitesScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    key: 'key',
    name: 'name',
    domain: 'domain',
    created_at: 'created_at'
  };

  export type SitesScalarFieldEnum = (typeof SitesScalarFieldEnum)[keyof typeof SitesScalarFieldEnum]


  export const TemplatesScalarFieldEnum: {
    id: 'id',
    key: 'key',
    name: 'name',
    category: 'category',
    version: 'version',
    content: 'content',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TemplatesScalarFieldEnum = (typeof TemplatesScalarFieldEnum)[keyof typeof TemplatesScalarFieldEnum]


  export const Tenant_templatesScalarFieldEnum: {
    tenant_id: 'tenant_id',
    template_id: 'template_id',
    enabled: 'enabled',
    overrides: 'overrides',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Tenant_templatesScalarFieldEnum = (typeof Tenant_templatesScalarFieldEnum)[keyof typeof Tenant_templatesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: UuidFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    created_at?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    hello?: HelloListRelationFilter
    leads?: LeadsListRelationFilter
    listings?: ListingsListRelationFilter
    media?: MediaListRelationFilter
    memberships?: MembershipListRelationFilter
    sites?: SitesListRelationFilter
    tenant_templates?: Tenant_templatesListRelationFilter
    users?: UserListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    hello?: helloOrderByRelationAggregateInput
    leads?: leadsOrderByRelationAggregateInput
    listings?: listingsOrderByRelationAggregateInput
    media?: mediaOrderByRelationAggregateInput
    memberships?: MembershipOrderByRelationAggregateInput
    sites?: sitesOrderByRelationAggregateInput
    tenant_templates?: tenant_templatesOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    created_at?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    hello?: HelloListRelationFilter
    leads?: LeadsListRelationFilter
    listings?: ListingsListRelationFilter
    media?: MediaListRelationFilter
    memberships?: MembershipListRelationFilter
    sites?: SitesListRelationFilter
    tenant_templates?: Tenant_templatesListRelationFilter
    users?: UserListRelationFilter
  }, "id" | "name">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"Tenant"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    tenant_id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    created_at?: DateTimeNullableFilter<"User"> | Date | string | null
    tenants?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    created_at?: SortOrderInput | SortOrder
    tenants?: TenantOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    tenant_id?: UuidFilter<"User"> | string
    role?: StringFilter<"User"> | string
    created_at?: DateTimeNullableFilter<"User"> | Date | string | null
    tenants?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    tenant_id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type MembershipWhereInput = {
    AND?: MembershipWhereInput | MembershipWhereInput[]
    OR?: MembershipWhereInput[]
    NOT?: MembershipWhereInput | MembershipWhereInput[]
    account_id?: UuidFilter<"Membership"> | string
    tenant_id?: UuidFilter<"Membership"> | string
    role?: StringFilter<"Membership"> | string
    created_at?: DateTimeFilter<"Membership"> | Date | string
    accounts?: XOR<AccountsRelationFilter, accountsWhereInput>
    tenants?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type MembershipOrderByWithRelationInput = {
    account_id?: SortOrder
    tenant_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    accounts?: accountsOrderByWithRelationInput
    tenants?: TenantOrderByWithRelationInput
  }

  export type MembershipWhereUniqueInput = Prisma.AtLeast<{
    account_id_tenant_id?: MembershipAccount_idTenant_idCompoundUniqueInput
    AND?: MembershipWhereInput | MembershipWhereInput[]
    OR?: MembershipWhereInput[]
    NOT?: MembershipWhereInput | MembershipWhereInput[]
    account_id?: UuidFilter<"Membership"> | string
    tenant_id?: UuidFilter<"Membership"> | string
    role?: StringFilter<"Membership"> | string
    created_at?: DateTimeFilter<"Membership"> | Date | string
    accounts?: XOR<AccountsRelationFilter, accountsWhereInput>
    tenants?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "account_id_tenant_id">

  export type MembershipOrderByWithAggregationInput = {
    account_id?: SortOrder
    tenant_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    _count?: MembershipCountOrderByAggregateInput
    _max?: MembershipMaxOrderByAggregateInput
    _min?: MembershipMinOrderByAggregateInput
  }

  export type MembershipScalarWhereWithAggregatesInput = {
    AND?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
    OR?: MembershipScalarWhereWithAggregatesInput[]
    NOT?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
    account_id?: UuidWithAggregatesFilter<"Membership"> | string
    tenant_id?: UuidWithAggregatesFilter<"Membership"> | string
    role?: StringWithAggregatesFilter<"Membership"> | string
    created_at?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: UuidFilter<"AuditLog"> | string
    tenant_id?: UuidNullableFilter<"AuditLog"> | string | null
    user_id?: UuidNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entity_type?: StringNullableFilter<"AuditLog"> | string | null
    entity_id?: UuidNullableFilter<"AuditLog"> | string | null
    old_values?: JsonNullableFilter<"AuditLog">
    new_values?: JsonNullableFilter<"AuditLog">
    ip_address?: StringNullableFilter<"AuditLog"> | string | null
    user_agent?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    created_at?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    action?: SortOrder
    entity_type?: SortOrderInput | SortOrder
    entity_id?: SortOrderInput | SortOrder
    old_values?: SortOrderInput | SortOrder
    new_values?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    tenant_id?: UuidNullableFilter<"AuditLog"> | string | null
    user_id?: UuidNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entity_type?: StringNullableFilter<"AuditLog"> | string | null
    entity_id?: UuidNullableFilter<"AuditLog"> | string | null
    old_values?: JsonNullableFilter<"AuditLog">
    new_values?: JsonNullableFilter<"AuditLog">
    ip_address?: StringNullableFilter<"AuditLog"> | string | null
    user_agent?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    created_at?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    action?: SortOrder
    entity_type?: SortOrderInput | SortOrder
    entity_id?: SortOrderInput | SortOrder
    old_values?: SortOrderInput | SortOrder
    new_values?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AuditLog"> | string
    tenant_id?: UuidNullableWithAggregatesFilter<"AuditLog"> | string | null
    user_id?: UuidNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entity_type?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    entity_id?: UuidNullableWithAggregatesFilter<"AuditLog"> | string | null
    old_values?: JsonNullableWithAggregatesFilter<"AuditLog">
    new_values?: JsonNullableWithAggregatesFilter<"AuditLog">
    ip_address?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"AuditLog">
    created_at?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type accountsWhereInput = {
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    id?: UuidFilter<"accounts"> | string
    email?: StringFilter<"accounts"> | string
    created_at?: DateTimeFilter<"accounts"> | Date | string
    memberships?: MembershipListRelationFilter
  }

  export type accountsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    memberships?: MembershipOrderByRelationAggregateInput
  }

  export type accountsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    created_at?: DateTimeFilter<"accounts"> | Date | string
    memberships?: MembershipListRelationFilter
  }, "id" | "email">

  export type accountsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    _count?: accountsCountOrderByAggregateInput
    _max?: accountsMaxOrderByAggregateInput
    _min?: accountsMinOrderByAggregateInput
  }

  export type accountsScalarWhereWithAggregatesInput = {
    AND?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    OR?: accountsScalarWhereWithAggregatesInput[]
    NOT?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"accounts"> | string
    email?: StringWithAggregatesFilter<"accounts"> | string
    created_at?: DateTimeWithAggregatesFilter<"accounts"> | Date | string
  }

  export type helloWhereInput = {
    AND?: helloWhereInput | helloWhereInput[]
    OR?: helloWhereInput[]
    NOT?: helloWhereInput | helloWhereInput[]
    id?: UuidFilter<"hello"> | string
    tenant_id?: UuidFilter<"hello"> | string
    msg?: StringFilter<"hello"> | string
    created_at?: DateTimeFilter<"hello"> | Date | string
    tenants?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type helloOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    msg?: SortOrder
    created_at?: SortOrder
    tenants?: TenantOrderByWithRelationInput
  }

  export type helloWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: helloWhereInput | helloWhereInput[]
    OR?: helloWhereInput[]
    NOT?: helloWhereInput | helloWhereInput[]
    tenant_id?: UuidFilter<"hello"> | string
    msg?: StringFilter<"hello"> | string
    created_at?: DateTimeFilter<"hello"> | Date | string
    tenants?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "id">

  export type helloOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    msg?: SortOrder
    created_at?: SortOrder
    _count?: helloCountOrderByAggregateInput
    _max?: helloMaxOrderByAggregateInput
    _min?: helloMinOrderByAggregateInput
  }

  export type helloScalarWhereWithAggregatesInput = {
    AND?: helloScalarWhereWithAggregatesInput | helloScalarWhereWithAggregatesInput[]
    OR?: helloScalarWhereWithAggregatesInput[]
    NOT?: helloScalarWhereWithAggregatesInput | helloScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"hello"> | string
    tenant_id?: UuidWithAggregatesFilter<"hello"> | string
    msg?: StringWithAggregatesFilter<"hello"> | string
    created_at?: DateTimeWithAggregatesFilter<"hello"> | Date | string
  }

  export type leadsWhereInput = {
    AND?: leadsWhereInput | leadsWhereInput[]
    OR?: leadsWhereInput[]
    NOT?: leadsWhereInput | leadsWhereInput[]
    id?: UuidFilter<"leads"> | string
    tenant_id?: UuidFilter<"leads"> | string
    name?: StringFilter<"leads"> | string
    email?: StringFilter<"leads"> | string
    phone?: StringNullableFilter<"leads"> | string | null
    message?: StringNullableFilter<"leads"> | string | null
    subject?: StringNullableFilter<"leads"> | string | null
    source?: StringNullableFilter<"leads"> | string | null
    page_url?: StringNullableFilter<"leads"> | string | null
    referrer?: StringNullableFilter<"leads"> | string | null
    listing_id?: UuidNullableFilter<"leads"> | string | null
    status?: StringNullableFilter<"leads"> | string | null
    assigned_to?: UuidNullableFilter<"leads"> | string | null
    notes?: StringNullableFilter<"leads"> | string | null
    metadata?: JsonNullableFilter<"leads">
    created_at?: DateTimeFilter<"leads"> | Date | string
    updated_at?: DateTimeFilter<"leads"> | Date | string
    listings?: XOR<ListingsNullableRelationFilter, listingsWhereInput> | null
    tenants?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type leadsOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    page_url?: SortOrderInput | SortOrder
    referrer?: SortOrderInput | SortOrder
    listing_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    assigned_to?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    listings?: listingsOrderByWithRelationInput
    tenants?: TenantOrderByWithRelationInput
  }

  export type leadsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: leadsWhereInput | leadsWhereInput[]
    OR?: leadsWhereInput[]
    NOT?: leadsWhereInput | leadsWhereInput[]
    tenant_id?: UuidFilter<"leads"> | string
    name?: StringFilter<"leads"> | string
    email?: StringFilter<"leads"> | string
    phone?: StringNullableFilter<"leads"> | string | null
    message?: StringNullableFilter<"leads"> | string | null
    subject?: StringNullableFilter<"leads"> | string | null
    source?: StringNullableFilter<"leads"> | string | null
    page_url?: StringNullableFilter<"leads"> | string | null
    referrer?: StringNullableFilter<"leads"> | string | null
    listing_id?: UuidNullableFilter<"leads"> | string | null
    status?: StringNullableFilter<"leads"> | string | null
    assigned_to?: UuidNullableFilter<"leads"> | string | null
    notes?: StringNullableFilter<"leads"> | string | null
    metadata?: JsonNullableFilter<"leads">
    created_at?: DateTimeFilter<"leads"> | Date | string
    updated_at?: DateTimeFilter<"leads"> | Date | string
    listings?: XOR<ListingsNullableRelationFilter, listingsWhereInput> | null
    tenants?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "id">

  export type leadsOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    page_url?: SortOrderInput | SortOrder
    referrer?: SortOrderInput | SortOrder
    listing_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    assigned_to?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: leadsCountOrderByAggregateInput
    _max?: leadsMaxOrderByAggregateInput
    _min?: leadsMinOrderByAggregateInput
  }

  export type leadsScalarWhereWithAggregatesInput = {
    AND?: leadsScalarWhereWithAggregatesInput | leadsScalarWhereWithAggregatesInput[]
    OR?: leadsScalarWhereWithAggregatesInput[]
    NOT?: leadsScalarWhereWithAggregatesInput | leadsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"leads"> | string
    tenant_id?: UuidWithAggregatesFilter<"leads"> | string
    name?: StringWithAggregatesFilter<"leads"> | string
    email?: StringWithAggregatesFilter<"leads"> | string
    phone?: StringNullableWithAggregatesFilter<"leads"> | string | null
    message?: StringNullableWithAggregatesFilter<"leads"> | string | null
    subject?: StringNullableWithAggregatesFilter<"leads"> | string | null
    source?: StringNullableWithAggregatesFilter<"leads"> | string | null
    page_url?: StringNullableWithAggregatesFilter<"leads"> | string | null
    referrer?: StringNullableWithAggregatesFilter<"leads"> | string | null
    listing_id?: UuidNullableWithAggregatesFilter<"leads"> | string | null
    status?: StringNullableWithAggregatesFilter<"leads"> | string | null
    assigned_to?: UuidNullableWithAggregatesFilter<"leads"> | string | null
    notes?: StringNullableWithAggregatesFilter<"leads"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"leads">
    created_at?: DateTimeWithAggregatesFilter<"leads"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"leads"> | Date | string
  }

  export type listing_mediaWhereInput = {
    AND?: listing_mediaWhereInput | listing_mediaWhereInput[]
    OR?: listing_mediaWhereInput[]
    NOT?: listing_mediaWhereInput | listing_mediaWhereInput[]
    listing_id?: UuidFilter<"listing_media"> | string
    media_id?: UuidFilter<"listing_media"> | string
    position?: IntFilter<"listing_media"> | number
    listings?: XOR<ListingsRelationFilter, listingsWhereInput>
    media?: XOR<MediaRelationFilter, mediaWhereInput>
  }

  export type listing_mediaOrderByWithRelationInput = {
    listing_id?: SortOrder
    media_id?: SortOrder
    position?: SortOrder
    listings?: listingsOrderByWithRelationInput
    media?: mediaOrderByWithRelationInput
  }

  export type listing_mediaWhereUniqueInput = Prisma.AtLeast<{
    listing_id_media_id?: listing_mediaListing_idMedia_idCompoundUniqueInput
    AND?: listing_mediaWhereInput | listing_mediaWhereInput[]
    OR?: listing_mediaWhereInput[]
    NOT?: listing_mediaWhereInput | listing_mediaWhereInput[]
    listing_id?: UuidFilter<"listing_media"> | string
    media_id?: UuidFilter<"listing_media"> | string
    position?: IntFilter<"listing_media"> | number
    listings?: XOR<ListingsRelationFilter, listingsWhereInput>
    media?: XOR<MediaRelationFilter, mediaWhereInput>
  }, "listing_id_media_id">

  export type listing_mediaOrderByWithAggregationInput = {
    listing_id?: SortOrder
    media_id?: SortOrder
    position?: SortOrder
    _count?: listing_mediaCountOrderByAggregateInput
    _avg?: listing_mediaAvgOrderByAggregateInput
    _max?: listing_mediaMaxOrderByAggregateInput
    _min?: listing_mediaMinOrderByAggregateInput
    _sum?: listing_mediaSumOrderByAggregateInput
  }

  export type listing_mediaScalarWhereWithAggregatesInput = {
    AND?: listing_mediaScalarWhereWithAggregatesInput | listing_mediaScalarWhereWithAggregatesInput[]
    OR?: listing_mediaScalarWhereWithAggregatesInput[]
    NOT?: listing_mediaScalarWhereWithAggregatesInput | listing_mediaScalarWhereWithAggregatesInput[]
    listing_id?: UuidWithAggregatesFilter<"listing_media"> | string
    media_id?: UuidWithAggregatesFilter<"listing_media"> | string
    position?: IntWithAggregatesFilter<"listing_media"> | number
  }

  export type listingsWhereInput = {
    AND?: listingsWhereInput | listingsWhereInput[]
    OR?: listingsWhereInput[]
    NOT?: listingsWhereInput | listingsWhereInput[]
    id?: UuidFilter<"listings"> | string
    tenant_id?: UuidFilter<"listings"> | string
    title?: StringFilter<"listings"> | string
    slug?: StringFilter<"listings"> | string
    description?: StringNullableFilter<"listings"> | string | null
    type?: StringFilter<"listings"> | string
    category?: StringNullableFilter<"listings"> | string | null
    price?: DecimalNullableFilter<"listings"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringNullableFilter<"listings"> | string | null
    duration_minutes?: IntNullableFilter<"listings"> | number | null
    capacity?: IntNullableFilter<"listings"> | number | null
    is_bookable?: BoolNullableFilter<"listings"> | boolean | null
    featured_image_id?: UuidNullableFilter<"listings"> | string | null
    metadata?: JsonNullableFilter<"listings">
    status?: StringNullableFilter<"listings"> | string | null
    published_at?: DateTimeNullableFilter<"listings"> | Date | string | null
    created_at?: DateTimeFilter<"listings"> | Date | string
    updated_at?: DateTimeFilter<"listings"> | Date | string
    leads?: LeadsListRelationFilter
    listing_media?: Listing_mediaListRelationFilter
    media?: XOR<MediaNullableRelationFilter, mediaWhereInput> | null
    tenants?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type listingsOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    category?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    duration_minutes?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    is_bookable?: SortOrderInput | SortOrder
    featured_image_id?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    published_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    leads?: leadsOrderByRelationAggregateInput
    listing_media?: listing_mediaOrderByRelationAggregateInput
    media?: mediaOrderByWithRelationInput
    tenants?: TenantOrderByWithRelationInput
  }

  export type listingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenant_id_slug?: listingsTenant_idSlugCompoundUniqueInput
    AND?: listingsWhereInput | listingsWhereInput[]
    OR?: listingsWhereInput[]
    NOT?: listingsWhereInput | listingsWhereInput[]
    tenant_id?: UuidFilter<"listings"> | string
    title?: StringFilter<"listings"> | string
    slug?: StringFilter<"listings"> | string
    description?: StringNullableFilter<"listings"> | string | null
    type?: StringFilter<"listings"> | string
    category?: StringNullableFilter<"listings"> | string | null
    price?: DecimalNullableFilter<"listings"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringNullableFilter<"listings"> | string | null
    duration_minutes?: IntNullableFilter<"listings"> | number | null
    capacity?: IntNullableFilter<"listings"> | number | null
    is_bookable?: BoolNullableFilter<"listings"> | boolean | null
    featured_image_id?: UuidNullableFilter<"listings"> | string | null
    metadata?: JsonNullableFilter<"listings">
    status?: StringNullableFilter<"listings"> | string | null
    published_at?: DateTimeNullableFilter<"listings"> | Date | string | null
    created_at?: DateTimeFilter<"listings"> | Date | string
    updated_at?: DateTimeFilter<"listings"> | Date | string
    leads?: LeadsListRelationFilter
    listing_media?: Listing_mediaListRelationFilter
    media?: XOR<MediaNullableRelationFilter, mediaWhereInput> | null
    tenants?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "id" | "tenant_id_slug">

  export type listingsOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    category?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    duration_minutes?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    is_bookable?: SortOrderInput | SortOrder
    featured_image_id?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    published_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: listingsCountOrderByAggregateInput
    _avg?: listingsAvgOrderByAggregateInput
    _max?: listingsMaxOrderByAggregateInput
    _min?: listingsMinOrderByAggregateInput
    _sum?: listingsSumOrderByAggregateInput
  }

  export type listingsScalarWhereWithAggregatesInput = {
    AND?: listingsScalarWhereWithAggregatesInput | listingsScalarWhereWithAggregatesInput[]
    OR?: listingsScalarWhereWithAggregatesInput[]
    NOT?: listingsScalarWhereWithAggregatesInput | listingsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"listings"> | string
    tenant_id?: UuidWithAggregatesFilter<"listings"> | string
    title?: StringWithAggregatesFilter<"listings"> | string
    slug?: StringWithAggregatesFilter<"listings"> | string
    description?: StringNullableWithAggregatesFilter<"listings"> | string | null
    type?: StringWithAggregatesFilter<"listings"> | string
    category?: StringNullableWithAggregatesFilter<"listings"> | string | null
    price?: DecimalNullableWithAggregatesFilter<"listings"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringNullableWithAggregatesFilter<"listings"> | string | null
    duration_minutes?: IntNullableWithAggregatesFilter<"listings"> | number | null
    capacity?: IntNullableWithAggregatesFilter<"listings"> | number | null
    is_bookable?: BoolNullableWithAggregatesFilter<"listings"> | boolean | null
    featured_image_id?: UuidNullableWithAggregatesFilter<"listings"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"listings">
    status?: StringNullableWithAggregatesFilter<"listings"> | string | null
    published_at?: DateTimeNullableWithAggregatesFilter<"listings"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"listings"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"listings"> | Date | string
  }

  export type mediaWhereInput = {
    AND?: mediaWhereInput | mediaWhereInput[]
    OR?: mediaWhereInput[]
    NOT?: mediaWhereInput | mediaWhereInput[]
    id?: UuidFilter<"media"> | string
    tenant_id?: UuidFilter<"media"> | string
    filename?: StringFilter<"media"> | string
    original_filename?: StringFilter<"media"> | string
    mime_type?: StringFilter<"media"> | string
    size_bytes?: IntFilter<"media"> | number
    s3_key?: StringFilter<"media"> | string
    s3_bucket?: StringFilter<"media"> | string
    cloudfront_url?: StringNullableFilter<"media"> | string | null
    width?: IntNullableFilter<"media"> | number | null
    height?: IntNullableFilter<"media"> | number | null
    alt_text?: StringNullableFilter<"media"> | string | null
    caption?: StringNullableFilter<"media"> | string | null
    metadata?: JsonNullableFilter<"media">
    uploaded_by?: UuidNullableFilter<"media"> | string | null
    created_at?: DateTimeFilter<"media"> | Date | string
    listing_media?: Listing_mediaListRelationFilter
    listings?: ListingsListRelationFilter
    tenants?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type mediaOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    filename?: SortOrder
    original_filename?: SortOrder
    mime_type?: SortOrder
    size_bytes?: SortOrder
    s3_key?: SortOrder
    s3_bucket?: SortOrder
    cloudfront_url?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    alt_text?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    uploaded_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    listing_media?: listing_mediaOrderByRelationAggregateInput
    listings?: listingsOrderByRelationAggregateInput
    tenants?: TenantOrderByWithRelationInput
  }

  export type mediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenant_id_s3_key?: mediaTenant_idS3_keyCompoundUniqueInput
    AND?: mediaWhereInput | mediaWhereInput[]
    OR?: mediaWhereInput[]
    NOT?: mediaWhereInput | mediaWhereInput[]
    tenant_id?: UuidFilter<"media"> | string
    filename?: StringFilter<"media"> | string
    original_filename?: StringFilter<"media"> | string
    mime_type?: StringFilter<"media"> | string
    size_bytes?: IntFilter<"media"> | number
    s3_key?: StringFilter<"media"> | string
    s3_bucket?: StringFilter<"media"> | string
    cloudfront_url?: StringNullableFilter<"media"> | string | null
    width?: IntNullableFilter<"media"> | number | null
    height?: IntNullableFilter<"media"> | number | null
    alt_text?: StringNullableFilter<"media"> | string | null
    caption?: StringNullableFilter<"media"> | string | null
    metadata?: JsonNullableFilter<"media">
    uploaded_by?: UuidNullableFilter<"media"> | string | null
    created_at?: DateTimeFilter<"media"> | Date | string
    listing_media?: Listing_mediaListRelationFilter
    listings?: ListingsListRelationFilter
    tenants?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "id" | "tenant_id_s3_key">

  export type mediaOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    filename?: SortOrder
    original_filename?: SortOrder
    mime_type?: SortOrder
    size_bytes?: SortOrder
    s3_key?: SortOrder
    s3_bucket?: SortOrder
    cloudfront_url?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    alt_text?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    uploaded_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: mediaCountOrderByAggregateInput
    _avg?: mediaAvgOrderByAggregateInput
    _max?: mediaMaxOrderByAggregateInput
    _min?: mediaMinOrderByAggregateInput
    _sum?: mediaSumOrderByAggregateInput
  }

  export type mediaScalarWhereWithAggregatesInput = {
    AND?: mediaScalarWhereWithAggregatesInput | mediaScalarWhereWithAggregatesInput[]
    OR?: mediaScalarWhereWithAggregatesInput[]
    NOT?: mediaScalarWhereWithAggregatesInput | mediaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"media"> | string
    tenant_id?: UuidWithAggregatesFilter<"media"> | string
    filename?: StringWithAggregatesFilter<"media"> | string
    original_filename?: StringWithAggregatesFilter<"media"> | string
    mime_type?: StringWithAggregatesFilter<"media"> | string
    size_bytes?: IntWithAggregatesFilter<"media"> | number
    s3_key?: StringWithAggregatesFilter<"media"> | string
    s3_bucket?: StringWithAggregatesFilter<"media"> | string
    cloudfront_url?: StringNullableWithAggregatesFilter<"media"> | string | null
    width?: IntNullableWithAggregatesFilter<"media"> | number | null
    height?: IntNullableWithAggregatesFilter<"media"> | number | null
    alt_text?: StringNullableWithAggregatesFilter<"media"> | string | null
    caption?: StringNullableWithAggregatesFilter<"media"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"media">
    uploaded_by?: UuidNullableWithAggregatesFilter<"media"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"media"> | Date | string
  }

  export type pagesWhereInput = {
    AND?: pagesWhereInput | pagesWhereInput[]
    OR?: pagesWhereInput[]
    NOT?: pagesWhereInput | pagesWhereInput[]
    id?: UuidFilter<"pages"> | string
    site_id?: UuidFilter<"pages"> | string
    template_id?: UuidFilter<"pages"> | string
    slug?: StringFilter<"pages"> | string
    overrides?: JsonFilter<"pages">
    published?: BoolFilter<"pages"> | boolean
    created_at?: DateTimeFilter<"pages"> | Date | string
    updated_at?: DateTimeFilter<"pages"> | Date | string
    sites?: XOR<SitesRelationFilter, sitesWhereInput>
    templates?: XOR<TemplatesRelationFilter, templatesWhereInput>
  }

  export type pagesOrderByWithRelationInput = {
    id?: SortOrder
    site_id?: SortOrder
    template_id?: SortOrder
    slug?: SortOrder
    overrides?: SortOrder
    published?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sites?: sitesOrderByWithRelationInput
    templates?: templatesOrderByWithRelationInput
  }

  export type pagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    site_id_slug?: pagesSite_idSlugCompoundUniqueInput
    AND?: pagesWhereInput | pagesWhereInput[]
    OR?: pagesWhereInput[]
    NOT?: pagesWhereInput | pagesWhereInput[]
    site_id?: UuidFilter<"pages"> | string
    template_id?: UuidFilter<"pages"> | string
    slug?: StringFilter<"pages"> | string
    overrides?: JsonFilter<"pages">
    published?: BoolFilter<"pages"> | boolean
    created_at?: DateTimeFilter<"pages"> | Date | string
    updated_at?: DateTimeFilter<"pages"> | Date | string
    sites?: XOR<SitesRelationFilter, sitesWhereInput>
    templates?: XOR<TemplatesRelationFilter, templatesWhereInput>
  }, "id" | "site_id_slug">

  export type pagesOrderByWithAggregationInput = {
    id?: SortOrder
    site_id?: SortOrder
    template_id?: SortOrder
    slug?: SortOrder
    overrides?: SortOrder
    published?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: pagesCountOrderByAggregateInput
    _max?: pagesMaxOrderByAggregateInput
    _min?: pagesMinOrderByAggregateInput
  }

  export type pagesScalarWhereWithAggregatesInput = {
    AND?: pagesScalarWhereWithAggregatesInput | pagesScalarWhereWithAggregatesInput[]
    OR?: pagesScalarWhereWithAggregatesInput[]
    NOT?: pagesScalarWhereWithAggregatesInput | pagesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"pages"> | string
    site_id?: UuidWithAggregatesFilter<"pages"> | string
    template_id?: UuidWithAggregatesFilter<"pages"> | string
    slug?: StringWithAggregatesFilter<"pages"> | string
    overrides?: JsonWithAggregatesFilter<"pages">
    published?: BoolWithAggregatesFilter<"pages"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"pages"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"pages"> | Date | string
  }

  export type sitesWhereInput = {
    AND?: sitesWhereInput | sitesWhereInput[]
    OR?: sitesWhereInput[]
    NOT?: sitesWhereInput | sitesWhereInput[]
    id?: UuidFilter<"sites"> | string
    tenant_id?: UuidFilter<"sites"> | string
    key?: StringFilter<"sites"> | string
    name?: StringFilter<"sites"> | string
    domain?: StringNullableFilter<"sites"> | string | null
    created_at?: DateTimeFilter<"sites"> | Date | string
    pages?: PagesListRelationFilter
    tenants?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type sitesOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    domain?: SortOrderInput | SortOrder
    created_at?: SortOrder
    pages?: pagesOrderByRelationAggregateInput
    tenants?: TenantOrderByWithRelationInput
  }

  export type sitesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenant_id_key?: sitesTenant_idKeyCompoundUniqueInput
    AND?: sitesWhereInput | sitesWhereInput[]
    OR?: sitesWhereInput[]
    NOT?: sitesWhereInput | sitesWhereInput[]
    tenant_id?: UuidFilter<"sites"> | string
    key?: StringFilter<"sites"> | string
    name?: StringFilter<"sites"> | string
    domain?: StringNullableFilter<"sites"> | string | null
    created_at?: DateTimeFilter<"sites"> | Date | string
    pages?: PagesListRelationFilter
    tenants?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "id" | "tenant_id_key">

  export type sitesOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    domain?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: sitesCountOrderByAggregateInput
    _max?: sitesMaxOrderByAggregateInput
    _min?: sitesMinOrderByAggregateInput
  }

  export type sitesScalarWhereWithAggregatesInput = {
    AND?: sitesScalarWhereWithAggregatesInput | sitesScalarWhereWithAggregatesInput[]
    OR?: sitesScalarWhereWithAggregatesInput[]
    NOT?: sitesScalarWhereWithAggregatesInput | sitesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"sites"> | string
    tenant_id?: UuidWithAggregatesFilter<"sites"> | string
    key?: StringWithAggregatesFilter<"sites"> | string
    name?: StringWithAggregatesFilter<"sites"> | string
    domain?: StringNullableWithAggregatesFilter<"sites"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"sites"> | Date | string
  }

  export type templatesWhereInput = {
    AND?: templatesWhereInput | templatesWhereInput[]
    OR?: templatesWhereInput[]
    NOT?: templatesWhereInput | templatesWhereInput[]
    id?: UuidFilter<"templates"> | string
    key?: StringFilter<"templates"> | string
    name?: StringFilter<"templates"> | string
    category?: StringNullableFilter<"templates"> | string | null
    version?: IntFilter<"templates"> | number
    content?: JsonFilter<"templates">
    created_at?: DateTimeFilter<"templates"> | Date | string
    updated_at?: DateTimeFilter<"templates"> | Date | string
    pages?: PagesListRelationFilter
    tenant_templates?: Tenant_templatesListRelationFilter
  }

  export type templatesOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    version?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    pages?: pagesOrderByRelationAggregateInput
    tenant_templates?: tenant_templatesOrderByRelationAggregateInput
  }

  export type templatesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: templatesWhereInput | templatesWhereInput[]
    OR?: templatesWhereInput[]
    NOT?: templatesWhereInput | templatesWhereInput[]
    name?: StringFilter<"templates"> | string
    category?: StringNullableFilter<"templates"> | string | null
    version?: IntFilter<"templates"> | number
    content?: JsonFilter<"templates">
    created_at?: DateTimeFilter<"templates"> | Date | string
    updated_at?: DateTimeFilter<"templates"> | Date | string
    pages?: PagesListRelationFilter
    tenant_templates?: Tenant_templatesListRelationFilter
  }, "id" | "key">

  export type templatesOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    version?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: templatesCountOrderByAggregateInput
    _avg?: templatesAvgOrderByAggregateInput
    _max?: templatesMaxOrderByAggregateInput
    _min?: templatesMinOrderByAggregateInput
    _sum?: templatesSumOrderByAggregateInput
  }

  export type templatesScalarWhereWithAggregatesInput = {
    AND?: templatesScalarWhereWithAggregatesInput | templatesScalarWhereWithAggregatesInput[]
    OR?: templatesScalarWhereWithAggregatesInput[]
    NOT?: templatesScalarWhereWithAggregatesInput | templatesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"templates"> | string
    key?: StringWithAggregatesFilter<"templates"> | string
    name?: StringWithAggregatesFilter<"templates"> | string
    category?: StringNullableWithAggregatesFilter<"templates"> | string | null
    version?: IntWithAggregatesFilter<"templates"> | number
    content?: JsonWithAggregatesFilter<"templates">
    created_at?: DateTimeWithAggregatesFilter<"templates"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"templates"> | Date | string
  }

  export type tenant_templatesWhereInput = {
    AND?: tenant_templatesWhereInput | tenant_templatesWhereInput[]
    OR?: tenant_templatesWhereInput[]
    NOT?: tenant_templatesWhereInput | tenant_templatesWhereInput[]
    tenant_id?: UuidFilter<"tenant_templates"> | string
    template_id?: UuidFilter<"tenant_templates"> | string
    enabled?: BoolFilter<"tenant_templates"> | boolean
    overrides?: JsonFilter<"tenant_templates">
    created_at?: DateTimeFilter<"tenant_templates"> | Date | string
    updated_at?: DateTimeFilter<"tenant_templates"> | Date | string
    templates?: XOR<TemplatesRelationFilter, templatesWhereInput>
    tenants?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type tenant_templatesOrderByWithRelationInput = {
    tenant_id?: SortOrder
    template_id?: SortOrder
    enabled?: SortOrder
    overrides?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    templates?: templatesOrderByWithRelationInput
    tenants?: TenantOrderByWithRelationInput
  }

  export type tenant_templatesWhereUniqueInput = Prisma.AtLeast<{
    tenant_id_template_id?: tenant_templatesTenant_idTemplate_idCompoundUniqueInput
    AND?: tenant_templatesWhereInput | tenant_templatesWhereInput[]
    OR?: tenant_templatesWhereInput[]
    NOT?: tenant_templatesWhereInput | tenant_templatesWhereInput[]
    tenant_id?: UuidFilter<"tenant_templates"> | string
    template_id?: UuidFilter<"tenant_templates"> | string
    enabled?: BoolFilter<"tenant_templates"> | boolean
    overrides?: JsonFilter<"tenant_templates">
    created_at?: DateTimeFilter<"tenant_templates"> | Date | string
    updated_at?: DateTimeFilter<"tenant_templates"> | Date | string
    templates?: XOR<TemplatesRelationFilter, templatesWhereInput>
    tenants?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "tenant_id_template_id">

  export type tenant_templatesOrderByWithAggregationInput = {
    tenant_id?: SortOrder
    template_id?: SortOrder
    enabled?: SortOrder
    overrides?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: tenant_templatesCountOrderByAggregateInput
    _max?: tenant_templatesMaxOrderByAggregateInput
    _min?: tenant_templatesMinOrderByAggregateInput
  }

  export type tenant_templatesScalarWhereWithAggregatesInput = {
    AND?: tenant_templatesScalarWhereWithAggregatesInput | tenant_templatesScalarWhereWithAggregatesInput[]
    OR?: tenant_templatesScalarWhereWithAggregatesInput[]
    NOT?: tenant_templatesScalarWhereWithAggregatesInput | tenant_templatesScalarWhereWithAggregatesInput[]
    tenant_id?: UuidWithAggregatesFilter<"tenant_templates"> | string
    template_id?: UuidWithAggregatesFilter<"tenant_templates"> | string
    enabled?: BoolWithAggregatesFilter<"tenant_templates"> | boolean
    overrides?: JsonWithAggregatesFilter<"tenant_templates">
    created_at?: DateTimeWithAggregatesFilter<"tenant_templates"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"tenant_templates"> | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    hello?: helloCreateNestedManyWithoutTenantsInput
    leads?: leadsCreateNestedManyWithoutTenantsInput
    listings?: listingsCreateNestedManyWithoutTenantsInput
    media?: mediaCreateNestedManyWithoutTenantsInput
    memberships?: MembershipCreateNestedManyWithoutTenantsInput
    sites?: sitesCreateNestedManyWithoutTenantsInput
    tenant_templates?: tenant_templatesCreateNestedManyWithoutTenantsInput
    users?: UserCreateNestedManyWithoutTenantsInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    hello?: helloUncheckedCreateNestedManyWithoutTenantsInput
    leads?: leadsUncheckedCreateNestedManyWithoutTenantsInput
    listings?: listingsUncheckedCreateNestedManyWithoutTenantsInput
    media?: mediaUncheckedCreateNestedManyWithoutTenantsInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutTenantsInput
    sites?: sitesUncheckedCreateNestedManyWithoutTenantsInput
    tenant_templates?: tenant_templatesUncheckedCreateNestedManyWithoutTenantsInput
    users?: UserUncheckedCreateNestedManyWithoutTenantsInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hello?: helloUpdateManyWithoutTenantsNestedInput
    leads?: leadsUpdateManyWithoutTenantsNestedInput
    listings?: listingsUpdateManyWithoutTenantsNestedInput
    media?: mediaUpdateManyWithoutTenantsNestedInput
    memberships?: MembershipUpdateManyWithoutTenantsNestedInput
    sites?: sitesUpdateManyWithoutTenantsNestedInput
    tenant_templates?: tenant_templatesUpdateManyWithoutTenantsNestedInput
    users?: UserUpdateManyWithoutTenantsNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hello?: helloUncheckedUpdateManyWithoutTenantsNestedInput
    leads?: leadsUncheckedUpdateManyWithoutTenantsNestedInput
    listings?: listingsUncheckedUpdateManyWithoutTenantsNestedInput
    media?: mediaUncheckedUpdateManyWithoutTenantsNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutTenantsNestedInput
    sites?: sitesUncheckedUpdateManyWithoutTenantsNestedInput
    tenant_templates?: tenant_templatesUncheckedUpdateManyWithoutTenantsNestedInput
    users?: UserUncheckedUpdateManyWithoutTenantsNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string | null
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    role?: string
    created_at?: Date | string | null
    tenants: TenantCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    tenant_id: string
    email: string
    role?: string
    created_at?: Date | string | null
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenants?: TenantUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyInput = {
    id?: string
    tenant_id: string
    email: string
    role?: string
    created_at?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MembershipCreateInput = {
    role?: string
    created_at?: Date | string
    accounts: accountsCreateNestedOneWithoutMembershipsInput
    tenants: TenantCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipUncheckedCreateInput = {
    account_id: string
    tenant_id: string
    role?: string
    created_at?: Date | string
  }

  export type MembershipUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: accountsUpdateOneRequiredWithoutMembershipsNestedInput
    tenants?: TenantUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipUncheckedUpdateInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCreateManyInput = {
    account_id: string
    tenant_id: string
    role?: string
    created_at?: Date | string
  }

  export type MembershipUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUncheckedUpdateManyInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    tenant_id?: string | null
    user_id?: string | null
    action: string
    entity_type?: string | null
    entity_id?: string | null
    old_values?: NullableJsonNullValueInput | InputJsonValue
    new_values?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    user_agent?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    tenant_id?: string | null
    user_id?: string | null
    action: string
    entity_type?: string | null
    entity_id?: string | null
    old_values?: NullableJsonNullValueInput | InputJsonValue
    new_values?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    user_agent?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity_type?: NullableStringFieldUpdateOperationsInput | string | null
    entity_id?: NullableStringFieldUpdateOperationsInput | string | null
    old_values?: NullableJsonNullValueInput | InputJsonValue
    new_values?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity_type?: NullableStringFieldUpdateOperationsInput | string | null
    entity_id?: NullableStringFieldUpdateOperationsInput | string | null
    old_values?: NullableJsonNullValueInput | InputJsonValue
    new_values?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    tenant_id?: string | null
    user_id?: string | null
    action: string
    entity_type?: string | null
    entity_id?: string | null
    old_values?: NullableJsonNullValueInput | InputJsonValue
    new_values?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    user_agent?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity_type?: NullableStringFieldUpdateOperationsInput | string | null
    entity_id?: NullableStringFieldUpdateOperationsInput | string | null
    old_values?: NullableJsonNullValueInput | InputJsonValue
    new_values?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity_type?: NullableStringFieldUpdateOperationsInput | string | null
    entity_id?: NullableStringFieldUpdateOperationsInput | string | null
    old_values?: NullableJsonNullValueInput | InputJsonValue
    new_values?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountsCreateInput = {
    id?: string
    email: string
    created_at?: Date | string
    memberships?: MembershipCreateNestedManyWithoutAccountsInput
  }

  export type accountsUncheckedCreateInput = {
    id?: string
    email: string
    created_at?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type accountsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutAccountsNestedInput
  }

  export type accountsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutAccountsNestedInput
  }

  export type accountsCreateManyInput = {
    id?: string
    email: string
    created_at?: Date | string
  }

  export type accountsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type helloCreateInput = {
    id?: string
    msg: string
    created_at?: Date | string
    tenants: TenantCreateNestedOneWithoutHelloInput
  }

  export type helloUncheckedCreateInput = {
    id?: string
    tenant_id: string
    msg: string
    created_at?: Date | string
  }

  export type helloUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    msg?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUpdateOneRequiredWithoutHelloNestedInput
  }

  export type helloUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    msg?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type helloCreateManyInput = {
    id?: string
    tenant_id: string
    msg: string
    created_at?: Date | string
  }

  export type helloUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    msg?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type helloUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    msg?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leadsCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    message?: string | null
    subject?: string | null
    source?: string | null
    page_url?: string | null
    referrer?: string | null
    status?: string | null
    assigned_to?: string | null
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    listings?: listingsCreateNestedOneWithoutLeadsInput
    tenants: TenantCreateNestedOneWithoutLeadsInput
  }

  export type leadsUncheckedCreateInput = {
    id?: string
    tenant_id: string
    name: string
    email: string
    phone?: string | null
    message?: string | null
    subject?: string | null
    source?: string | null
    page_url?: string | null
    referrer?: string | null
    listing_id?: string | null
    status?: string | null
    assigned_to?: string | null
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type leadsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    page_url?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: listingsUpdateOneWithoutLeadsNestedInput
    tenants?: TenantUpdateOneRequiredWithoutLeadsNestedInput
  }

  export type leadsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    page_url?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    listing_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leadsCreateManyInput = {
    id?: string
    tenant_id: string
    name: string
    email: string
    phone?: string | null
    message?: string | null
    subject?: string | null
    source?: string | null
    page_url?: string | null
    referrer?: string | null
    listing_id?: string | null
    status?: string | null
    assigned_to?: string | null
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type leadsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    page_url?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leadsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    page_url?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    listing_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type listing_mediaCreateInput = {
    position?: number
    listings: listingsCreateNestedOneWithoutListing_mediaInput
    media: mediaCreateNestedOneWithoutListing_mediaInput
  }

  export type listing_mediaUncheckedCreateInput = {
    listing_id: string
    media_id: string
    position?: number
  }

  export type listing_mediaUpdateInput = {
    position?: IntFieldUpdateOperationsInput | number
    listings?: listingsUpdateOneRequiredWithoutListing_mediaNestedInput
    media?: mediaUpdateOneRequiredWithoutListing_mediaNestedInput
  }

  export type listing_mediaUncheckedUpdateInput = {
    listing_id?: StringFieldUpdateOperationsInput | string
    media_id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type listing_mediaCreateManyInput = {
    listing_id: string
    media_id: string
    position?: number
  }

  export type listing_mediaUpdateManyMutationInput = {
    position?: IntFieldUpdateOperationsInput | number
  }

  export type listing_mediaUncheckedUpdateManyInput = {
    listing_id?: StringFieldUpdateOperationsInput | string
    media_id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type listingsCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    type?: string
    category?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    duration_minutes?: number | null
    capacity?: number | null
    is_bookable?: boolean | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    leads?: leadsCreateNestedManyWithoutListingsInput
    listing_media?: listing_mediaCreateNestedManyWithoutListingsInput
    media?: mediaCreateNestedOneWithoutListingsInput
    tenants: TenantCreateNestedOneWithoutListingsInput
  }

  export type listingsUncheckedCreateInput = {
    id?: string
    tenant_id: string
    title: string
    slug: string
    description?: string | null
    type?: string
    category?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    duration_minutes?: number | null
    capacity?: number | null
    is_bookable?: boolean | null
    featured_image_id?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    leads?: leadsUncheckedCreateNestedManyWithoutListingsInput
    listing_media?: listing_mediaUncheckedCreateNestedManyWithoutListingsInput
  }

  export type listingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    is_bookable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: leadsUpdateManyWithoutListingsNestedInput
    listing_media?: listing_mediaUpdateManyWithoutListingsNestedInput
    media?: mediaUpdateOneWithoutListingsNestedInput
    tenants?: TenantUpdateOneRequiredWithoutListingsNestedInput
  }

  export type listingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    is_bookable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    featured_image_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: leadsUncheckedUpdateManyWithoutListingsNestedInput
    listing_media?: listing_mediaUncheckedUpdateManyWithoutListingsNestedInput
  }

  export type listingsCreateManyInput = {
    id?: string
    tenant_id: string
    title: string
    slug: string
    description?: string | null
    type?: string
    category?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    duration_minutes?: number | null
    capacity?: number | null
    is_bookable?: boolean | null
    featured_image_id?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type listingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    is_bookable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type listingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    is_bookable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    featured_image_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mediaCreateInput = {
    id?: string
    filename: string
    original_filename: string
    mime_type: string
    size_bytes: number
    s3_key: string
    s3_bucket: string
    cloudfront_url?: string | null
    width?: number | null
    height?: number | null
    alt_text?: string | null
    caption?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    uploaded_by?: string | null
    created_at?: Date | string
    listing_media?: listing_mediaCreateNestedManyWithoutMediaInput
    listings?: listingsCreateNestedManyWithoutMediaInput
    tenants: TenantCreateNestedOneWithoutMediaInput
  }

  export type mediaUncheckedCreateInput = {
    id?: string
    tenant_id: string
    filename: string
    original_filename: string
    mime_type: string
    size_bytes: number
    s3_key: string
    s3_bucket: string
    cloudfront_url?: string | null
    width?: number | null
    height?: number | null
    alt_text?: string | null
    caption?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    uploaded_by?: string | null
    created_at?: Date | string
    listing_media?: listing_mediaUncheckedCreateNestedManyWithoutMediaInput
    listings?: listingsUncheckedCreateNestedManyWithoutMediaInput
  }

  export type mediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    original_filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    size_bytes?: IntFieldUpdateOperationsInput | number
    s3_key?: StringFieldUpdateOperationsInput | string
    s3_bucket?: StringFieldUpdateOperationsInput | string
    cloudfront_url?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    uploaded_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    listing_media?: listing_mediaUpdateManyWithoutMediaNestedInput
    listings?: listingsUpdateManyWithoutMediaNestedInput
    tenants?: TenantUpdateOneRequiredWithoutMediaNestedInput
  }

  export type mediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    original_filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    size_bytes?: IntFieldUpdateOperationsInput | number
    s3_key?: StringFieldUpdateOperationsInput | string
    s3_bucket?: StringFieldUpdateOperationsInput | string
    cloudfront_url?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    uploaded_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    listing_media?: listing_mediaUncheckedUpdateManyWithoutMediaNestedInput
    listings?: listingsUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type mediaCreateManyInput = {
    id?: string
    tenant_id: string
    filename: string
    original_filename: string
    mime_type: string
    size_bytes: number
    s3_key: string
    s3_bucket: string
    cloudfront_url?: string | null
    width?: number | null
    height?: number | null
    alt_text?: string | null
    caption?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    uploaded_by?: string | null
    created_at?: Date | string
  }

  export type mediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    original_filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    size_bytes?: IntFieldUpdateOperationsInput | number
    s3_key?: StringFieldUpdateOperationsInput | string
    s3_bucket?: StringFieldUpdateOperationsInput | string
    cloudfront_url?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    uploaded_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    original_filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    size_bytes?: IntFieldUpdateOperationsInput | number
    s3_key?: StringFieldUpdateOperationsInput | string
    s3_bucket?: StringFieldUpdateOperationsInput | string
    cloudfront_url?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    uploaded_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagesCreateInput = {
    id?: string
    slug: string
    overrides?: JsonNullValueInput | InputJsonValue
    published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    sites: sitesCreateNestedOneWithoutPagesInput
    templates: templatesCreateNestedOneWithoutPagesInput
  }

  export type pagesUncheckedCreateInput = {
    id?: string
    site_id: string
    template_id: string
    slug: string
    overrides?: JsonNullValueInput | InputJsonValue
    published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type pagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    overrides?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sites?: sitesUpdateOneRequiredWithoutPagesNestedInput
    templates?: templatesUpdateOneRequiredWithoutPagesNestedInput
  }

  export type pagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    site_id?: StringFieldUpdateOperationsInput | string
    template_id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    overrides?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagesCreateManyInput = {
    id?: string
    site_id: string
    template_id: string
    slug: string
    overrides?: JsonNullValueInput | InputJsonValue
    published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type pagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    overrides?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    site_id?: StringFieldUpdateOperationsInput | string
    template_id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    overrides?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sitesCreateInput = {
    id?: string
    key: string
    name: string
    domain?: string | null
    created_at?: Date | string
    pages?: pagesCreateNestedManyWithoutSitesInput
    tenants: TenantCreateNestedOneWithoutSitesInput
  }

  export type sitesUncheckedCreateInput = {
    id?: string
    tenant_id: string
    key: string
    name: string
    domain?: string | null
    created_at?: Date | string
    pages?: pagesUncheckedCreateNestedManyWithoutSitesInput
  }

  export type sitesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: pagesUpdateManyWithoutSitesNestedInput
    tenants?: TenantUpdateOneRequiredWithoutSitesNestedInput
  }

  export type sitesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: pagesUncheckedUpdateManyWithoutSitesNestedInput
  }

  export type sitesCreateManyInput = {
    id?: string
    tenant_id: string
    key: string
    name: string
    domain?: string | null
    created_at?: Date | string
  }

  export type sitesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sitesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type templatesCreateInput = {
    id?: string
    key: string
    name: string
    category?: string | null
    version?: number
    content?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    pages?: pagesCreateNestedManyWithoutTemplatesInput
    tenant_templates?: tenant_templatesCreateNestedManyWithoutTemplatesInput
  }

  export type templatesUncheckedCreateInput = {
    id?: string
    key: string
    name: string
    category?: string | null
    version?: number
    content?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    pages?: pagesUncheckedCreateNestedManyWithoutTemplatesInput
    tenant_templates?: tenant_templatesUncheckedCreateNestedManyWithoutTemplatesInput
  }

  export type templatesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: pagesUpdateManyWithoutTemplatesNestedInput
    tenant_templates?: tenant_templatesUpdateManyWithoutTemplatesNestedInput
  }

  export type templatesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: pagesUncheckedUpdateManyWithoutTemplatesNestedInput
    tenant_templates?: tenant_templatesUncheckedUpdateManyWithoutTemplatesNestedInput
  }

  export type templatesCreateManyInput = {
    id?: string
    key: string
    name: string
    category?: string | null
    version?: number
    content?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type templatesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type templatesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tenant_templatesCreateInput = {
    enabled?: boolean
    overrides?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    templates: templatesCreateNestedOneWithoutTenant_templatesInput
    tenants: TenantCreateNestedOneWithoutTenant_templatesInput
  }

  export type tenant_templatesUncheckedCreateInput = {
    tenant_id: string
    template_id: string
    enabled?: boolean
    overrides?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type tenant_templatesUpdateInput = {
    enabled?: BoolFieldUpdateOperationsInput | boolean
    overrides?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: templatesUpdateOneRequiredWithoutTenant_templatesNestedInput
    tenants?: TenantUpdateOneRequiredWithoutTenant_templatesNestedInput
  }

  export type tenant_templatesUncheckedUpdateInput = {
    tenant_id?: StringFieldUpdateOperationsInput | string
    template_id?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    overrides?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tenant_templatesCreateManyInput = {
    tenant_id: string
    template_id: string
    enabled?: boolean
    overrides?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type tenant_templatesUpdateManyMutationInput = {
    enabled?: BoolFieldUpdateOperationsInput | boolean
    overrides?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tenant_templatesUncheckedUpdateManyInput = {
    tenant_id?: StringFieldUpdateOperationsInput | string
    template_id?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    overrides?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type HelloListRelationFilter = {
    every?: helloWhereInput
    some?: helloWhereInput
    none?: helloWhereInput
  }

  export type LeadsListRelationFilter = {
    every?: leadsWhereInput
    some?: leadsWhereInput
    none?: leadsWhereInput
  }

  export type ListingsListRelationFilter = {
    every?: listingsWhereInput
    some?: listingsWhereInput
    none?: listingsWhereInput
  }

  export type MediaListRelationFilter = {
    every?: mediaWhereInput
    some?: mediaWhereInput
    none?: mediaWhereInput
  }

  export type MembershipListRelationFilter = {
    every?: MembershipWhereInput
    some?: MembershipWhereInput
    none?: MembershipWhereInput
  }

  export type SitesListRelationFilter = {
    every?: sitesWhereInput
    some?: sitesWhereInput
    none?: sitesWhereInput
  }

  export type Tenant_templatesListRelationFilter = {
    every?: tenant_templatesWhereInput
    some?: tenant_templatesWhereInput
    none?: tenant_templatesWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type helloOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type leadsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type listingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MembershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sitesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tenant_templatesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TenantRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountsRelationFilter = {
    is?: accountsWhereInput
    isNot?: accountsWhereInput
  }

  export type MembershipAccount_idTenant_idCompoundUniqueInput = {
    account_id: string
    tenant_id: string
  }

  export type MembershipCountOrderByAggregateInput = {
    account_id?: SortOrder
    tenant_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type MembershipMaxOrderByAggregateInput = {
    account_id?: SortOrder
    tenant_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type MembershipMinOrderByAggregateInput = {
    account_id?: SortOrder
    tenant_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    old_values?: SortOrder
    new_values?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    created_at?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    created_at?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type accountsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type accountsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type accountsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type helloCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    msg?: SortOrder
    created_at?: SortOrder
  }

  export type helloMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    msg?: SortOrder
    created_at?: SortOrder
  }

  export type helloMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    msg?: SortOrder
    created_at?: SortOrder
  }

  export type ListingsNullableRelationFilter = {
    is?: listingsWhereInput | null
    isNot?: listingsWhereInput | null
  }

  export type leadsCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    subject?: SortOrder
    source?: SortOrder
    page_url?: SortOrder
    referrer?: SortOrder
    listing_id?: SortOrder
    status?: SortOrder
    assigned_to?: SortOrder
    notes?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type leadsMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    subject?: SortOrder
    source?: SortOrder
    page_url?: SortOrder
    referrer?: SortOrder
    listing_id?: SortOrder
    status?: SortOrder
    assigned_to?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type leadsMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    subject?: SortOrder
    source?: SortOrder
    page_url?: SortOrder
    referrer?: SortOrder
    listing_id?: SortOrder
    status?: SortOrder
    assigned_to?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ListingsRelationFilter = {
    is?: listingsWhereInput
    isNot?: listingsWhereInput
  }

  export type MediaRelationFilter = {
    is?: mediaWhereInput
    isNot?: mediaWhereInput
  }

  export type listing_mediaListing_idMedia_idCompoundUniqueInput = {
    listing_id: string
    media_id: string
  }

  export type listing_mediaCountOrderByAggregateInput = {
    listing_id?: SortOrder
    media_id?: SortOrder
    position?: SortOrder
  }

  export type listing_mediaAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type listing_mediaMaxOrderByAggregateInput = {
    listing_id?: SortOrder
    media_id?: SortOrder
    position?: SortOrder
  }

  export type listing_mediaMinOrderByAggregateInput = {
    listing_id?: SortOrder
    media_id?: SortOrder
    position?: SortOrder
  }

  export type listing_mediaSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Listing_mediaListRelationFilter = {
    every?: listing_mediaWhereInput
    some?: listing_mediaWhereInput
    none?: listing_mediaWhereInput
  }

  export type MediaNullableRelationFilter = {
    is?: mediaWhereInput | null
    isNot?: mediaWhereInput | null
  }

  export type listing_mediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type listingsTenant_idSlugCompoundUniqueInput = {
    tenant_id: string
    slug: string
  }

  export type listingsCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    type?: SortOrder
    category?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    duration_minutes?: SortOrder
    capacity?: SortOrder
    is_bookable?: SortOrder
    featured_image_id?: SortOrder
    metadata?: SortOrder
    status?: SortOrder
    published_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type listingsAvgOrderByAggregateInput = {
    price?: SortOrder
    duration_minutes?: SortOrder
    capacity?: SortOrder
  }

  export type listingsMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    type?: SortOrder
    category?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    duration_minutes?: SortOrder
    capacity?: SortOrder
    is_bookable?: SortOrder
    featured_image_id?: SortOrder
    status?: SortOrder
    published_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type listingsMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    type?: SortOrder
    category?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    duration_minutes?: SortOrder
    capacity?: SortOrder
    is_bookable?: SortOrder
    featured_image_id?: SortOrder
    status?: SortOrder
    published_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type listingsSumOrderByAggregateInput = {
    price?: SortOrder
    duration_minutes?: SortOrder
    capacity?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type mediaTenant_idS3_keyCompoundUniqueInput = {
    tenant_id: string
    s3_key: string
  }

  export type mediaCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    filename?: SortOrder
    original_filename?: SortOrder
    mime_type?: SortOrder
    size_bytes?: SortOrder
    s3_key?: SortOrder
    s3_bucket?: SortOrder
    cloudfront_url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    alt_text?: SortOrder
    caption?: SortOrder
    metadata?: SortOrder
    uploaded_by?: SortOrder
    created_at?: SortOrder
  }

  export type mediaAvgOrderByAggregateInput = {
    size_bytes?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type mediaMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    filename?: SortOrder
    original_filename?: SortOrder
    mime_type?: SortOrder
    size_bytes?: SortOrder
    s3_key?: SortOrder
    s3_bucket?: SortOrder
    cloudfront_url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    alt_text?: SortOrder
    caption?: SortOrder
    uploaded_by?: SortOrder
    created_at?: SortOrder
  }

  export type mediaMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    filename?: SortOrder
    original_filename?: SortOrder
    mime_type?: SortOrder
    size_bytes?: SortOrder
    s3_key?: SortOrder
    s3_bucket?: SortOrder
    cloudfront_url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    alt_text?: SortOrder
    caption?: SortOrder
    uploaded_by?: SortOrder
    created_at?: SortOrder
  }

  export type mediaSumOrderByAggregateInput = {
    size_bytes?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SitesRelationFilter = {
    is?: sitesWhereInput
    isNot?: sitesWhereInput
  }

  export type TemplatesRelationFilter = {
    is?: templatesWhereInput
    isNot?: templatesWhereInput
  }

  export type pagesSite_idSlugCompoundUniqueInput = {
    site_id: string
    slug: string
  }

  export type pagesCountOrderByAggregateInput = {
    id?: SortOrder
    site_id?: SortOrder
    template_id?: SortOrder
    slug?: SortOrder
    overrides?: SortOrder
    published?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type pagesMaxOrderByAggregateInput = {
    id?: SortOrder
    site_id?: SortOrder
    template_id?: SortOrder
    slug?: SortOrder
    published?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type pagesMinOrderByAggregateInput = {
    id?: SortOrder
    site_id?: SortOrder
    template_id?: SortOrder
    slug?: SortOrder
    published?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PagesListRelationFilter = {
    every?: pagesWhereInput
    some?: pagesWhereInput
    none?: pagesWhereInput
  }

  export type pagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sitesTenant_idKeyCompoundUniqueInput = {
    tenant_id: string
    key: string
  }

  export type sitesCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    created_at?: SortOrder
  }

  export type sitesMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    created_at?: SortOrder
  }

  export type sitesMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    created_at?: SortOrder
  }

  export type templatesCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    category?: SortOrder
    version?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type templatesAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type templatesMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    category?: SortOrder
    version?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type templatesMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    category?: SortOrder
    version?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type templatesSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type tenant_templatesTenant_idTemplate_idCompoundUniqueInput = {
    tenant_id: string
    template_id: string
  }

  export type tenant_templatesCountOrderByAggregateInput = {
    tenant_id?: SortOrder
    template_id?: SortOrder
    enabled?: SortOrder
    overrides?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tenant_templatesMaxOrderByAggregateInput = {
    tenant_id?: SortOrder
    template_id?: SortOrder
    enabled?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tenant_templatesMinOrderByAggregateInput = {
    tenant_id?: SortOrder
    template_id?: SortOrder
    enabled?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type helloCreateNestedManyWithoutTenantsInput = {
    create?: XOR<helloCreateWithoutTenantsInput, helloUncheckedCreateWithoutTenantsInput> | helloCreateWithoutTenantsInput[] | helloUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: helloCreateOrConnectWithoutTenantsInput | helloCreateOrConnectWithoutTenantsInput[]
    createMany?: helloCreateManyTenantsInputEnvelope
    connect?: helloWhereUniqueInput | helloWhereUniqueInput[]
  }

  export type leadsCreateNestedManyWithoutTenantsInput = {
    create?: XOR<leadsCreateWithoutTenantsInput, leadsUncheckedCreateWithoutTenantsInput> | leadsCreateWithoutTenantsInput[] | leadsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutTenantsInput | leadsCreateOrConnectWithoutTenantsInput[]
    createMany?: leadsCreateManyTenantsInputEnvelope
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
  }

  export type listingsCreateNestedManyWithoutTenantsInput = {
    create?: XOR<listingsCreateWithoutTenantsInput, listingsUncheckedCreateWithoutTenantsInput> | listingsCreateWithoutTenantsInput[] | listingsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: listingsCreateOrConnectWithoutTenantsInput | listingsCreateOrConnectWithoutTenantsInput[]
    createMany?: listingsCreateManyTenantsInputEnvelope
    connect?: listingsWhereUniqueInput | listingsWhereUniqueInput[]
  }

  export type mediaCreateNestedManyWithoutTenantsInput = {
    create?: XOR<mediaCreateWithoutTenantsInput, mediaUncheckedCreateWithoutTenantsInput> | mediaCreateWithoutTenantsInput[] | mediaUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: mediaCreateOrConnectWithoutTenantsInput | mediaCreateOrConnectWithoutTenantsInput[]
    createMany?: mediaCreateManyTenantsInputEnvelope
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
  }

  export type MembershipCreateNestedManyWithoutTenantsInput = {
    create?: XOR<MembershipCreateWithoutTenantsInput, MembershipUncheckedCreateWithoutTenantsInput> | MembershipCreateWithoutTenantsInput[] | MembershipUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutTenantsInput | MembershipCreateOrConnectWithoutTenantsInput[]
    createMany?: MembershipCreateManyTenantsInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type sitesCreateNestedManyWithoutTenantsInput = {
    create?: XOR<sitesCreateWithoutTenantsInput, sitesUncheckedCreateWithoutTenantsInput> | sitesCreateWithoutTenantsInput[] | sitesUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: sitesCreateOrConnectWithoutTenantsInput | sitesCreateOrConnectWithoutTenantsInput[]
    createMany?: sitesCreateManyTenantsInputEnvelope
    connect?: sitesWhereUniqueInput | sitesWhereUniqueInput[]
  }

  export type tenant_templatesCreateNestedManyWithoutTenantsInput = {
    create?: XOR<tenant_templatesCreateWithoutTenantsInput, tenant_templatesUncheckedCreateWithoutTenantsInput> | tenant_templatesCreateWithoutTenantsInput[] | tenant_templatesUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: tenant_templatesCreateOrConnectWithoutTenantsInput | tenant_templatesCreateOrConnectWithoutTenantsInput[]
    createMany?: tenant_templatesCreateManyTenantsInputEnvelope
    connect?: tenant_templatesWhereUniqueInput | tenant_templatesWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutTenantsInput = {
    create?: XOR<UserCreateWithoutTenantsInput, UserUncheckedCreateWithoutTenantsInput> | UserCreateWithoutTenantsInput[] | UserUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantsInput | UserCreateOrConnectWithoutTenantsInput[]
    createMany?: UserCreateManyTenantsInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type helloUncheckedCreateNestedManyWithoutTenantsInput = {
    create?: XOR<helloCreateWithoutTenantsInput, helloUncheckedCreateWithoutTenantsInput> | helloCreateWithoutTenantsInput[] | helloUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: helloCreateOrConnectWithoutTenantsInput | helloCreateOrConnectWithoutTenantsInput[]
    createMany?: helloCreateManyTenantsInputEnvelope
    connect?: helloWhereUniqueInput | helloWhereUniqueInput[]
  }

  export type leadsUncheckedCreateNestedManyWithoutTenantsInput = {
    create?: XOR<leadsCreateWithoutTenantsInput, leadsUncheckedCreateWithoutTenantsInput> | leadsCreateWithoutTenantsInput[] | leadsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutTenantsInput | leadsCreateOrConnectWithoutTenantsInput[]
    createMany?: leadsCreateManyTenantsInputEnvelope
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
  }

  export type listingsUncheckedCreateNestedManyWithoutTenantsInput = {
    create?: XOR<listingsCreateWithoutTenantsInput, listingsUncheckedCreateWithoutTenantsInput> | listingsCreateWithoutTenantsInput[] | listingsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: listingsCreateOrConnectWithoutTenantsInput | listingsCreateOrConnectWithoutTenantsInput[]
    createMany?: listingsCreateManyTenantsInputEnvelope
    connect?: listingsWhereUniqueInput | listingsWhereUniqueInput[]
  }

  export type mediaUncheckedCreateNestedManyWithoutTenantsInput = {
    create?: XOR<mediaCreateWithoutTenantsInput, mediaUncheckedCreateWithoutTenantsInput> | mediaCreateWithoutTenantsInput[] | mediaUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: mediaCreateOrConnectWithoutTenantsInput | mediaCreateOrConnectWithoutTenantsInput[]
    createMany?: mediaCreateManyTenantsInputEnvelope
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
  }

  export type MembershipUncheckedCreateNestedManyWithoutTenantsInput = {
    create?: XOR<MembershipCreateWithoutTenantsInput, MembershipUncheckedCreateWithoutTenantsInput> | MembershipCreateWithoutTenantsInput[] | MembershipUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutTenantsInput | MembershipCreateOrConnectWithoutTenantsInput[]
    createMany?: MembershipCreateManyTenantsInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type sitesUncheckedCreateNestedManyWithoutTenantsInput = {
    create?: XOR<sitesCreateWithoutTenantsInput, sitesUncheckedCreateWithoutTenantsInput> | sitesCreateWithoutTenantsInput[] | sitesUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: sitesCreateOrConnectWithoutTenantsInput | sitesCreateOrConnectWithoutTenantsInput[]
    createMany?: sitesCreateManyTenantsInputEnvelope
    connect?: sitesWhereUniqueInput | sitesWhereUniqueInput[]
  }

  export type tenant_templatesUncheckedCreateNestedManyWithoutTenantsInput = {
    create?: XOR<tenant_templatesCreateWithoutTenantsInput, tenant_templatesUncheckedCreateWithoutTenantsInput> | tenant_templatesCreateWithoutTenantsInput[] | tenant_templatesUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: tenant_templatesCreateOrConnectWithoutTenantsInput | tenant_templatesCreateOrConnectWithoutTenantsInput[]
    createMany?: tenant_templatesCreateManyTenantsInputEnvelope
    connect?: tenant_templatesWhereUniqueInput | tenant_templatesWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTenantsInput = {
    create?: XOR<UserCreateWithoutTenantsInput, UserUncheckedCreateWithoutTenantsInput> | UserCreateWithoutTenantsInput[] | UserUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantsInput | UserCreateOrConnectWithoutTenantsInput[]
    createMany?: UserCreateManyTenantsInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type helloUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<helloCreateWithoutTenantsInput, helloUncheckedCreateWithoutTenantsInput> | helloCreateWithoutTenantsInput[] | helloUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: helloCreateOrConnectWithoutTenantsInput | helloCreateOrConnectWithoutTenantsInput[]
    upsert?: helloUpsertWithWhereUniqueWithoutTenantsInput | helloUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: helloCreateManyTenantsInputEnvelope
    set?: helloWhereUniqueInput | helloWhereUniqueInput[]
    disconnect?: helloWhereUniqueInput | helloWhereUniqueInput[]
    delete?: helloWhereUniqueInput | helloWhereUniqueInput[]
    connect?: helloWhereUniqueInput | helloWhereUniqueInput[]
    update?: helloUpdateWithWhereUniqueWithoutTenantsInput | helloUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: helloUpdateManyWithWhereWithoutTenantsInput | helloUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: helloScalarWhereInput | helloScalarWhereInput[]
  }

  export type leadsUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<leadsCreateWithoutTenantsInput, leadsUncheckedCreateWithoutTenantsInput> | leadsCreateWithoutTenantsInput[] | leadsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutTenantsInput | leadsCreateOrConnectWithoutTenantsInput[]
    upsert?: leadsUpsertWithWhereUniqueWithoutTenantsInput | leadsUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: leadsCreateManyTenantsInputEnvelope
    set?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    disconnect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    delete?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    update?: leadsUpdateWithWhereUniqueWithoutTenantsInput | leadsUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: leadsUpdateManyWithWhereWithoutTenantsInput | leadsUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: leadsScalarWhereInput | leadsScalarWhereInput[]
  }

  export type listingsUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<listingsCreateWithoutTenantsInput, listingsUncheckedCreateWithoutTenantsInput> | listingsCreateWithoutTenantsInput[] | listingsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: listingsCreateOrConnectWithoutTenantsInput | listingsCreateOrConnectWithoutTenantsInput[]
    upsert?: listingsUpsertWithWhereUniqueWithoutTenantsInput | listingsUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: listingsCreateManyTenantsInputEnvelope
    set?: listingsWhereUniqueInput | listingsWhereUniqueInput[]
    disconnect?: listingsWhereUniqueInput | listingsWhereUniqueInput[]
    delete?: listingsWhereUniqueInput | listingsWhereUniqueInput[]
    connect?: listingsWhereUniqueInput | listingsWhereUniqueInput[]
    update?: listingsUpdateWithWhereUniqueWithoutTenantsInput | listingsUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: listingsUpdateManyWithWhereWithoutTenantsInput | listingsUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: listingsScalarWhereInput | listingsScalarWhereInput[]
  }

  export type mediaUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<mediaCreateWithoutTenantsInput, mediaUncheckedCreateWithoutTenantsInput> | mediaCreateWithoutTenantsInput[] | mediaUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: mediaCreateOrConnectWithoutTenantsInput | mediaCreateOrConnectWithoutTenantsInput[]
    upsert?: mediaUpsertWithWhereUniqueWithoutTenantsInput | mediaUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: mediaCreateManyTenantsInputEnvelope
    set?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    disconnect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    delete?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    update?: mediaUpdateWithWhereUniqueWithoutTenantsInput | mediaUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: mediaUpdateManyWithWhereWithoutTenantsInput | mediaUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: mediaScalarWhereInput | mediaScalarWhereInput[]
  }

  export type MembershipUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<MembershipCreateWithoutTenantsInput, MembershipUncheckedCreateWithoutTenantsInput> | MembershipCreateWithoutTenantsInput[] | MembershipUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutTenantsInput | MembershipCreateOrConnectWithoutTenantsInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutTenantsInput | MembershipUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: MembershipCreateManyTenantsInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutTenantsInput | MembershipUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutTenantsInput | MembershipUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type sitesUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<sitesCreateWithoutTenantsInput, sitesUncheckedCreateWithoutTenantsInput> | sitesCreateWithoutTenantsInput[] | sitesUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: sitesCreateOrConnectWithoutTenantsInput | sitesCreateOrConnectWithoutTenantsInput[]
    upsert?: sitesUpsertWithWhereUniqueWithoutTenantsInput | sitesUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: sitesCreateManyTenantsInputEnvelope
    set?: sitesWhereUniqueInput | sitesWhereUniqueInput[]
    disconnect?: sitesWhereUniqueInput | sitesWhereUniqueInput[]
    delete?: sitesWhereUniqueInput | sitesWhereUniqueInput[]
    connect?: sitesWhereUniqueInput | sitesWhereUniqueInput[]
    update?: sitesUpdateWithWhereUniqueWithoutTenantsInput | sitesUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: sitesUpdateManyWithWhereWithoutTenantsInput | sitesUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: sitesScalarWhereInput | sitesScalarWhereInput[]
  }

  export type tenant_templatesUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<tenant_templatesCreateWithoutTenantsInput, tenant_templatesUncheckedCreateWithoutTenantsInput> | tenant_templatesCreateWithoutTenantsInput[] | tenant_templatesUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: tenant_templatesCreateOrConnectWithoutTenantsInput | tenant_templatesCreateOrConnectWithoutTenantsInput[]
    upsert?: tenant_templatesUpsertWithWhereUniqueWithoutTenantsInput | tenant_templatesUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: tenant_templatesCreateManyTenantsInputEnvelope
    set?: tenant_templatesWhereUniqueInput | tenant_templatesWhereUniqueInput[]
    disconnect?: tenant_templatesWhereUniqueInput | tenant_templatesWhereUniqueInput[]
    delete?: tenant_templatesWhereUniqueInput | tenant_templatesWhereUniqueInput[]
    connect?: tenant_templatesWhereUniqueInput | tenant_templatesWhereUniqueInput[]
    update?: tenant_templatesUpdateWithWhereUniqueWithoutTenantsInput | tenant_templatesUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: tenant_templatesUpdateManyWithWhereWithoutTenantsInput | tenant_templatesUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: tenant_templatesScalarWhereInput | tenant_templatesScalarWhereInput[]
  }

  export type UserUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<UserCreateWithoutTenantsInput, UserUncheckedCreateWithoutTenantsInput> | UserCreateWithoutTenantsInput[] | UserUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantsInput | UserCreateOrConnectWithoutTenantsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantsInput | UserUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: UserCreateManyTenantsInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantsInput | UserUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantsInput | UserUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type helloUncheckedUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<helloCreateWithoutTenantsInput, helloUncheckedCreateWithoutTenantsInput> | helloCreateWithoutTenantsInput[] | helloUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: helloCreateOrConnectWithoutTenantsInput | helloCreateOrConnectWithoutTenantsInput[]
    upsert?: helloUpsertWithWhereUniqueWithoutTenantsInput | helloUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: helloCreateManyTenantsInputEnvelope
    set?: helloWhereUniqueInput | helloWhereUniqueInput[]
    disconnect?: helloWhereUniqueInput | helloWhereUniqueInput[]
    delete?: helloWhereUniqueInput | helloWhereUniqueInput[]
    connect?: helloWhereUniqueInput | helloWhereUniqueInput[]
    update?: helloUpdateWithWhereUniqueWithoutTenantsInput | helloUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: helloUpdateManyWithWhereWithoutTenantsInput | helloUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: helloScalarWhereInput | helloScalarWhereInput[]
  }

  export type leadsUncheckedUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<leadsCreateWithoutTenantsInput, leadsUncheckedCreateWithoutTenantsInput> | leadsCreateWithoutTenantsInput[] | leadsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutTenantsInput | leadsCreateOrConnectWithoutTenantsInput[]
    upsert?: leadsUpsertWithWhereUniqueWithoutTenantsInput | leadsUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: leadsCreateManyTenantsInputEnvelope
    set?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    disconnect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    delete?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    update?: leadsUpdateWithWhereUniqueWithoutTenantsInput | leadsUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: leadsUpdateManyWithWhereWithoutTenantsInput | leadsUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: leadsScalarWhereInput | leadsScalarWhereInput[]
  }

  export type listingsUncheckedUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<listingsCreateWithoutTenantsInput, listingsUncheckedCreateWithoutTenantsInput> | listingsCreateWithoutTenantsInput[] | listingsUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: listingsCreateOrConnectWithoutTenantsInput | listingsCreateOrConnectWithoutTenantsInput[]
    upsert?: listingsUpsertWithWhereUniqueWithoutTenantsInput | listingsUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: listingsCreateManyTenantsInputEnvelope
    set?: listingsWhereUniqueInput | listingsWhereUniqueInput[]
    disconnect?: listingsWhereUniqueInput | listingsWhereUniqueInput[]
    delete?: listingsWhereUniqueInput | listingsWhereUniqueInput[]
    connect?: listingsWhereUniqueInput | listingsWhereUniqueInput[]
    update?: listingsUpdateWithWhereUniqueWithoutTenantsInput | listingsUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: listingsUpdateManyWithWhereWithoutTenantsInput | listingsUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: listingsScalarWhereInput | listingsScalarWhereInput[]
  }

  export type mediaUncheckedUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<mediaCreateWithoutTenantsInput, mediaUncheckedCreateWithoutTenantsInput> | mediaCreateWithoutTenantsInput[] | mediaUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: mediaCreateOrConnectWithoutTenantsInput | mediaCreateOrConnectWithoutTenantsInput[]
    upsert?: mediaUpsertWithWhereUniqueWithoutTenantsInput | mediaUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: mediaCreateManyTenantsInputEnvelope
    set?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    disconnect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    delete?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    update?: mediaUpdateWithWhereUniqueWithoutTenantsInput | mediaUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: mediaUpdateManyWithWhereWithoutTenantsInput | mediaUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: mediaScalarWhereInput | mediaScalarWhereInput[]
  }

  export type MembershipUncheckedUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<MembershipCreateWithoutTenantsInput, MembershipUncheckedCreateWithoutTenantsInput> | MembershipCreateWithoutTenantsInput[] | MembershipUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutTenantsInput | MembershipCreateOrConnectWithoutTenantsInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutTenantsInput | MembershipUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: MembershipCreateManyTenantsInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutTenantsInput | MembershipUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutTenantsInput | MembershipUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type sitesUncheckedUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<sitesCreateWithoutTenantsInput, sitesUncheckedCreateWithoutTenantsInput> | sitesCreateWithoutTenantsInput[] | sitesUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: sitesCreateOrConnectWithoutTenantsInput | sitesCreateOrConnectWithoutTenantsInput[]
    upsert?: sitesUpsertWithWhereUniqueWithoutTenantsInput | sitesUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: sitesCreateManyTenantsInputEnvelope
    set?: sitesWhereUniqueInput | sitesWhereUniqueInput[]
    disconnect?: sitesWhereUniqueInput | sitesWhereUniqueInput[]
    delete?: sitesWhereUniqueInput | sitesWhereUniqueInput[]
    connect?: sitesWhereUniqueInput | sitesWhereUniqueInput[]
    update?: sitesUpdateWithWhereUniqueWithoutTenantsInput | sitesUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: sitesUpdateManyWithWhereWithoutTenantsInput | sitesUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: sitesScalarWhereInput | sitesScalarWhereInput[]
  }

  export type tenant_templatesUncheckedUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<tenant_templatesCreateWithoutTenantsInput, tenant_templatesUncheckedCreateWithoutTenantsInput> | tenant_templatesCreateWithoutTenantsInput[] | tenant_templatesUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: tenant_templatesCreateOrConnectWithoutTenantsInput | tenant_templatesCreateOrConnectWithoutTenantsInput[]
    upsert?: tenant_templatesUpsertWithWhereUniqueWithoutTenantsInput | tenant_templatesUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: tenant_templatesCreateManyTenantsInputEnvelope
    set?: tenant_templatesWhereUniqueInput | tenant_templatesWhereUniqueInput[]
    disconnect?: tenant_templatesWhereUniqueInput | tenant_templatesWhereUniqueInput[]
    delete?: tenant_templatesWhereUniqueInput | tenant_templatesWhereUniqueInput[]
    connect?: tenant_templatesWhereUniqueInput | tenant_templatesWhereUniqueInput[]
    update?: tenant_templatesUpdateWithWhereUniqueWithoutTenantsInput | tenant_templatesUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: tenant_templatesUpdateManyWithWhereWithoutTenantsInput | tenant_templatesUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: tenant_templatesScalarWhereInput | tenant_templatesScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTenantsNestedInput = {
    create?: XOR<UserCreateWithoutTenantsInput, UserUncheckedCreateWithoutTenantsInput> | UserCreateWithoutTenantsInput[] | UserUncheckedCreateWithoutTenantsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantsInput | UserCreateOrConnectWithoutTenantsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantsInput | UserUpsertWithWhereUniqueWithoutTenantsInput[]
    createMany?: UserCreateManyTenantsInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantsInput | UserUpdateWithWhereUniqueWithoutTenantsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantsInput | UserUpdateManyWithWhereWithoutTenantsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutUsersInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    connect?: TenantWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    upsert?: TenantUpsertWithoutUsersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutUsersInput, TenantUpdateWithoutUsersInput>, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type accountsCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<accountsCreateWithoutMembershipsInput, accountsUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: accountsCreateOrConnectWithoutMembershipsInput
    connect?: accountsWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<TenantCreateWithoutMembershipsInput, TenantUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutMembershipsInput
    connect?: TenantWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type accountsUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<accountsCreateWithoutMembershipsInput, accountsUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: accountsCreateOrConnectWithoutMembershipsInput
    upsert?: accountsUpsertWithoutMembershipsInput
    connect?: accountsWhereUniqueInput
    update?: XOR<XOR<accountsUpdateToOneWithWhereWithoutMembershipsInput, accountsUpdateWithoutMembershipsInput>, accountsUncheckedUpdateWithoutMembershipsInput>
  }

  export type TenantUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<TenantCreateWithoutMembershipsInput, TenantUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutMembershipsInput
    upsert?: TenantUpsertWithoutMembershipsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutMembershipsInput, TenantUpdateWithoutMembershipsInput>, TenantUncheckedUpdateWithoutMembershipsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MembershipCreateNestedManyWithoutAccountsInput = {
    create?: XOR<MembershipCreateWithoutAccountsInput, MembershipUncheckedCreateWithoutAccountsInput> | MembershipCreateWithoutAccountsInput[] | MembershipUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutAccountsInput | MembershipCreateOrConnectWithoutAccountsInput[]
    createMany?: MembershipCreateManyAccountsInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type MembershipUncheckedCreateNestedManyWithoutAccountsInput = {
    create?: XOR<MembershipCreateWithoutAccountsInput, MembershipUncheckedCreateWithoutAccountsInput> | MembershipCreateWithoutAccountsInput[] | MembershipUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutAccountsInput | MembershipCreateOrConnectWithoutAccountsInput[]
    createMany?: MembershipCreateManyAccountsInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type MembershipUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<MembershipCreateWithoutAccountsInput, MembershipUncheckedCreateWithoutAccountsInput> | MembershipCreateWithoutAccountsInput[] | MembershipUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutAccountsInput | MembershipCreateOrConnectWithoutAccountsInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutAccountsInput | MembershipUpsertWithWhereUniqueWithoutAccountsInput[]
    createMany?: MembershipCreateManyAccountsInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutAccountsInput | MembershipUpdateWithWhereUniqueWithoutAccountsInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutAccountsInput | MembershipUpdateManyWithWhereWithoutAccountsInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type MembershipUncheckedUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<MembershipCreateWithoutAccountsInput, MembershipUncheckedCreateWithoutAccountsInput> | MembershipCreateWithoutAccountsInput[] | MembershipUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutAccountsInput | MembershipCreateOrConnectWithoutAccountsInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutAccountsInput | MembershipUpsertWithWhereUniqueWithoutAccountsInput[]
    createMany?: MembershipCreateManyAccountsInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutAccountsInput | MembershipUpdateWithWhereUniqueWithoutAccountsInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutAccountsInput | MembershipUpdateManyWithWhereWithoutAccountsInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutHelloInput = {
    create?: XOR<TenantCreateWithoutHelloInput, TenantUncheckedCreateWithoutHelloInput>
    connectOrCreate?: TenantCreateOrConnectWithoutHelloInput
    connect?: TenantWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutHelloNestedInput = {
    create?: XOR<TenantCreateWithoutHelloInput, TenantUncheckedCreateWithoutHelloInput>
    connectOrCreate?: TenantCreateOrConnectWithoutHelloInput
    upsert?: TenantUpsertWithoutHelloInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutHelloInput, TenantUpdateWithoutHelloInput>, TenantUncheckedUpdateWithoutHelloInput>
  }

  export type listingsCreateNestedOneWithoutLeadsInput = {
    create?: XOR<listingsCreateWithoutLeadsInput, listingsUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: listingsCreateOrConnectWithoutLeadsInput
    connect?: listingsWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutLeadsInput = {
    create?: XOR<TenantCreateWithoutLeadsInput, TenantUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLeadsInput
    connect?: TenantWhereUniqueInput
  }

  export type listingsUpdateOneWithoutLeadsNestedInput = {
    create?: XOR<listingsCreateWithoutLeadsInput, listingsUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: listingsCreateOrConnectWithoutLeadsInput
    upsert?: listingsUpsertWithoutLeadsInput
    disconnect?: listingsWhereInput | boolean
    delete?: listingsWhereInput | boolean
    connect?: listingsWhereUniqueInput
    update?: XOR<XOR<listingsUpdateToOneWithWhereWithoutLeadsInput, listingsUpdateWithoutLeadsInput>, listingsUncheckedUpdateWithoutLeadsInput>
  }

  export type TenantUpdateOneRequiredWithoutLeadsNestedInput = {
    create?: XOR<TenantCreateWithoutLeadsInput, TenantUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLeadsInput
    upsert?: TenantUpsertWithoutLeadsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutLeadsInput, TenantUpdateWithoutLeadsInput>, TenantUncheckedUpdateWithoutLeadsInput>
  }

  export type listingsCreateNestedOneWithoutListing_mediaInput = {
    create?: XOR<listingsCreateWithoutListing_mediaInput, listingsUncheckedCreateWithoutListing_mediaInput>
    connectOrCreate?: listingsCreateOrConnectWithoutListing_mediaInput
    connect?: listingsWhereUniqueInput
  }

  export type mediaCreateNestedOneWithoutListing_mediaInput = {
    create?: XOR<mediaCreateWithoutListing_mediaInput, mediaUncheckedCreateWithoutListing_mediaInput>
    connectOrCreate?: mediaCreateOrConnectWithoutListing_mediaInput
    connect?: mediaWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type listingsUpdateOneRequiredWithoutListing_mediaNestedInput = {
    create?: XOR<listingsCreateWithoutListing_mediaInput, listingsUncheckedCreateWithoutListing_mediaInput>
    connectOrCreate?: listingsCreateOrConnectWithoutListing_mediaInput
    upsert?: listingsUpsertWithoutListing_mediaInput
    connect?: listingsWhereUniqueInput
    update?: XOR<XOR<listingsUpdateToOneWithWhereWithoutListing_mediaInput, listingsUpdateWithoutListing_mediaInput>, listingsUncheckedUpdateWithoutListing_mediaInput>
  }

  export type mediaUpdateOneRequiredWithoutListing_mediaNestedInput = {
    create?: XOR<mediaCreateWithoutListing_mediaInput, mediaUncheckedCreateWithoutListing_mediaInput>
    connectOrCreate?: mediaCreateOrConnectWithoutListing_mediaInput
    upsert?: mediaUpsertWithoutListing_mediaInput
    connect?: mediaWhereUniqueInput
    update?: XOR<XOR<mediaUpdateToOneWithWhereWithoutListing_mediaInput, mediaUpdateWithoutListing_mediaInput>, mediaUncheckedUpdateWithoutListing_mediaInput>
  }

  export type leadsCreateNestedManyWithoutListingsInput = {
    create?: XOR<leadsCreateWithoutListingsInput, leadsUncheckedCreateWithoutListingsInput> | leadsCreateWithoutListingsInput[] | leadsUncheckedCreateWithoutListingsInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutListingsInput | leadsCreateOrConnectWithoutListingsInput[]
    createMany?: leadsCreateManyListingsInputEnvelope
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
  }

  export type listing_mediaCreateNestedManyWithoutListingsInput = {
    create?: XOR<listing_mediaCreateWithoutListingsInput, listing_mediaUncheckedCreateWithoutListingsInput> | listing_mediaCreateWithoutListingsInput[] | listing_mediaUncheckedCreateWithoutListingsInput[]
    connectOrCreate?: listing_mediaCreateOrConnectWithoutListingsInput | listing_mediaCreateOrConnectWithoutListingsInput[]
    createMany?: listing_mediaCreateManyListingsInputEnvelope
    connect?: listing_mediaWhereUniqueInput | listing_mediaWhereUniqueInput[]
  }

  export type mediaCreateNestedOneWithoutListingsInput = {
    create?: XOR<mediaCreateWithoutListingsInput, mediaUncheckedCreateWithoutListingsInput>
    connectOrCreate?: mediaCreateOrConnectWithoutListingsInput
    connect?: mediaWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutListingsInput = {
    create?: XOR<TenantCreateWithoutListingsInput, TenantUncheckedCreateWithoutListingsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutListingsInput
    connect?: TenantWhereUniqueInput
  }

  export type leadsUncheckedCreateNestedManyWithoutListingsInput = {
    create?: XOR<leadsCreateWithoutListingsInput, leadsUncheckedCreateWithoutListingsInput> | leadsCreateWithoutListingsInput[] | leadsUncheckedCreateWithoutListingsInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutListingsInput | leadsCreateOrConnectWithoutListingsInput[]
    createMany?: leadsCreateManyListingsInputEnvelope
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
  }

  export type listing_mediaUncheckedCreateNestedManyWithoutListingsInput = {
    create?: XOR<listing_mediaCreateWithoutListingsInput, listing_mediaUncheckedCreateWithoutListingsInput> | listing_mediaCreateWithoutListingsInput[] | listing_mediaUncheckedCreateWithoutListingsInput[]
    connectOrCreate?: listing_mediaCreateOrConnectWithoutListingsInput | listing_mediaCreateOrConnectWithoutListingsInput[]
    createMany?: listing_mediaCreateManyListingsInputEnvelope
    connect?: listing_mediaWhereUniqueInput | listing_mediaWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type leadsUpdateManyWithoutListingsNestedInput = {
    create?: XOR<leadsCreateWithoutListingsInput, leadsUncheckedCreateWithoutListingsInput> | leadsCreateWithoutListingsInput[] | leadsUncheckedCreateWithoutListingsInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutListingsInput | leadsCreateOrConnectWithoutListingsInput[]
    upsert?: leadsUpsertWithWhereUniqueWithoutListingsInput | leadsUpsertWithWhereUniqueWithoutListingsInput[]
    createMany?: leadsCreateManyListingsInputEnvelope
    set?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    disconnect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    delete?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    update?: leadsUpdateWithWhereUniqueWithoutListingsInput | leadsUpdateWithWhereUniqueWithoutListingsInput[]
    updateMany?: leadsUpdateManyWithWhereWithoutListingsInput | leadsUpdateManyWithWhereWithoutListingsInput[]
    deleteMany?: leadsScalarWhereInput | leadsScalarWhereInput[]
  }

  export type listing_mediaUpdateManyWithoutListingsNestedInput = {
    create?: XOR<listing_mediaCreateWithoutListingsInput, listing_mediaUncheckedCreateWithoutListingsInput> | listing_mediaCreateWithoutListingsInput[] | listing_mediaUncheckedCreateWithoutListingsInput[]
    connectOrCreate?: listing_mediaCreateOrConnectWithoutListingsInput | listing_mediaCreateOrConnectWithoutListingsInput[]
    upsert?: listing_mediaUpsertWithWhereUniqueWithoutListingsInput | listing_mediaUpsertWithWhereUniqueWithoutListingsInput[]
    createMany?: listing_mediaCreateManyListingsInputEnvelope
    set?: listing_mediaWhereUniqueInput | listing_mediaWhereUniqueInput[]
    disconnect?: listing_mediaWhereUniqueInput | listing_mediaWhereUniqueInput[]
    delete?: listing_mediaWhereUniqueInput | listing_mediaWhereUniqueInput[]
    connect?: listing_mediaWhereUniqueInput | listing_mediaWhereUniqueInput[]
    update?: listing_mediaUpdateWithWhereUniqueWithoutListingsInput | listing_mediaUpdateWithWhereUniqueWithoutListingsInput[]
    updateMany?: listing_mediaUpdateManyWithWhereWithoutListingsInput | listing_mediaUpdateManyWithWhereWithoutListingsInput[]
    deleteMany?: listing_mediaScalarWhereInput | listing_mediaScalarWhereInput[]
  }

  export type mediaUpdateOneWithoutListingsNestedInput = {
    create?: XOR<mediaCreateWithoutListingsInput, mediaUncheckedCreateWithoutListingsInput>
    connectOrCreate?: mediaCreateOrConnectWithoutListingsInput
    upsert?: mediaUpsertWithoutListingsInput
    disconnect?: mediaWhereInput | boolean
    delete?: mediaWhereInput | boolean
    connect?: mediaWhereUniqueInput
    update?: XOR<XOR<mediaUpdateToOneWithWhereWithoutListingsInput, mediaUpdateWithoutListingsInput>, mediaUncheckedUpdateWithoutListingsInput>
  }

  export type TenantUpdateOneRequiredWithoutListingsNestedInput = {
    create?: XOR<TenantCreateWithoutListingsInput, TenantUncheckedCreateWithoutListingsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutListingsInput
    upsert?: TenantUpsertWithoutListingsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutListingsInput, TenantUpdateWithoutListingsInput>, TenantUncheckedUpdateWithoutListingsInput>
  }

  export type leadsUncheckedUpdateManyWithoutListingsNestedInput = {
    create?: XOR<leadsCreateWithoutListingsInput, leadsUncheckedCreateWithoutListingsInput> | leadsCreateWithoutListingsInput[] | leadsUncheckedCreateWithoutListingsInput[]
    connectOrCreate?: leadsCreateOrConnectWithoutListingsInput | leadsCreateOrConnectWithoutListingsInput[]
    upsert?: leadsUpsertWithWhereUniqueWithoutListingsInput | leadsUpsertWithWhereUniqueWithoutListingsInput[]
    createMany?: leadsCreateManyListingsInputEnvelope
    set?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    disconnect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    delete?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    connect?: leadsWhereUniqueInput | leadsWhereUniqueInput[]
    update?: leadsUpdateWithWhereUniqueWithoutListingsInput | leadsUpdateWithWhereUniqueWithoutListingsInput[]
    updateMany?: leadsUpdateManyWithWhereWithoutListingsInput | leadsUpdateManyWithWhereWithoutListingsInput[]
    deleteMany?: leadsScalarWhereInput | leadsScalarWhereInput[]
  }

  export type listing_mediaUncheckedUpdateManyWithoutListingsNestedInput = {
    create?: XOR<listing_mediaCreateWithoutListingsInput, listing_mediaUncheckedCreateWithoutListingsInput> | listing_mediaCreateWithoutListingsInput[] | listing_mediaUncheckedCreateWithoutListingsInput[]
    connectOrCreate?: listing_mediaCreateOrConnectWithoutListingsInput | listing_mediaCreateOrConnectWithoutListingsInput[]
    upsert?: listing_mediaUpsertWithWhereUniqueWithoutListingsInput | listing_mediaUpsertWithWhereUniqueWithoutListingsInput[]
    createMany?: listing_mediaCreateManyListingsInputEnvelope
    set?: listing_mediaWhereUniqueInput | listing_mediaWhereUniqueInput[]
    disconnect?: listing_mediaWhereUniqueInput | listing_mediaWhereUniqueInput[]
    delete?: listing_mediaWhereUniqueInput | listing_mediaWhereUniqueInput[]
    connect?: listing_mediaWhereUniqueInput | listing_mediaWhereUniqueInput[]
    update?: listing_mediaUpdateWithWhereUniqueWithoutListingsInput | listing_mediaUpdateWithWhereUniqueWithoutListingsInput[]
    updateMany?: listing_mediaUpdateManyWithWhereWithoutListingsInput | listing_mediaUpdateManyWithWhereWithoutListingsInput[]
    deleteMany?: listing_mediaScalarWhereInput | listing_mediaScalarWhereInput[]
  }

  export type listing_mediaCreateNestedManyWithoutMediaInput = {
    create?: XOR<listing_mediaCreateWithoutMediaInput, listing_mediaUncheckedCreateWithoutMediaInput> | listing_mediaCreateWithoutMediaInput[] | listing_mediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: listing_mediaCreateOrConnectWithoutMediaInput | listing_mediaCreateOrConnectWithoutMediaInput[]
    createMany?: listing_mediaCreateManyMediaInputEnvelope
    connect?: listing_mediaWhereUniqueInput | listing_mediaWhereUniqueInput[]
  }

  export type listingsCreateNestedManyWithoutMediaInput = {
    create?: XOR<listingsCreateWithoutMediaInput, listingsUncheckedCreateWithoutMediaInput> | listingsCreateWithoutMediaInput[] | listingsUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: listingsCreateOrConnectWithoutMediaInput | listingsCreateOrConnectWithoutMediaInput[]
    createMany?: listingsCreateManyMediaInputEnvelope
    connect?: listingsWhereUniqueInput | listingsWhereUniqueInput[]
  }

  export type TenantCreateNestedOneWithoutMediaInput = {
    create?: XOR<TenantCreateWithoutMediaInput, TenantUncheckedCreateWithoutMediaInput>
    connectOrCreate?: TenantCreateOrConnectWithoutMediaInput
    connect?: TenantWhereUniqueInput
  }

  export type listing_mediaUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<listing_mediaCreateWithoutMediaInput, listing_mediaUncheckedCreateWithoutMediaInput> | listing_mediaCreateWithoutMediaInput[] | listing_mediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: listing_mediaCreateOrConnectWithoutMediaInput | listing_mediaCreateOrConnectWithoutMediaInput[]
    createMany?: listing_mediaCreateManyMediaInputEnvelope
    connect?: listing_mediaWhereUniqueInput | listing_mediaWhereUniqueInput[]
  }

  export type listingsUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<listingsCreateWithoutMediaInput, listingsUncheckedCreateWithoutMediaInput> | listingsCreateWithoutMediaInput[] | listingsUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: listingsCreateOrConnectWithoutMediaInput | listingsCreateOrConnectWithoutMediaInput[]
    createMany?: listingsCreateManyMediaInputEnvelope
    connect?: listingsWhereUniqueInput | listingsWhereUniqueInput[]
  }

  export type listing_mediaUpdateManyWithoutMediaNestedInput = {
    create?: XOR<listing_mediaCreateWithoutMediaInput, listing_mediaUncheckedCreateWithoutMediaInput> | listing_mediaCreateWithoutMediaInput[] | listing_mediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: listing_mediaCreateOrConnectWithoutMediaInput | listing_mediaCreateOrConnectWithoutMediaInput[]
    upsert?: listing_mediaUpsertWithWhereUniqueWithoutMediaInput | listing_mediaUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: listing_mediaCreateManyMediaInputEnvelope
    set?: listing_mediaWhereUniqueInput | listing_mediaWhereUniqueInput[]
    disconnect?: listing_mediaWhereUniqueInput | listing_mediaWhereUniqueInput[]
    delete?: listing_mediaWhereUniqueInput | listing_mediaWhereUniqueInput[]
    connect?: listing_mediaWhereUniqueInput | listing_mediaWhereUniqueInput[]
    update?: listing_mediaUpdateWithWhereUniqueWithoutMediaInput | listing_mediaUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: listing_mediaUpdateManyWithWhereWithoutMediaInput | listing_mediaUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: listing_mediaScalarWhereInput | listing_mediaScalarWhereInput[]
  }

  export type listingsUpdateManyWithoutMediaNestedInput = {
    create?: XOR<listingsCreateWithoutMediaInput, listingsUncheckedCreateWithoutMediaInput> | listingsCreateWithoutMediaInput[] | listingsUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: listingsCreateOrConnectWithoutMediaInput | listingsCreateOrConnectWithoutMediaInput[]
    upsert?: listingsUpsertWithWhereUniqueWithoutMediaInput | listingsUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: listingsCreateManyMediaInputEnvelope
    set?: listingsWhereUniqueInput | listingsWhereUniqueInput[]
    disconnect?: listingsWhereUniqueInput | listingsWhereUniqueInput[]
    delete?: listingsWhereUniqueInput | listingsWhereUniqueInput[]
    connect?: listingsWhereUniqueInput | listingsWhereUniqueInput[]
    update?: listingsUpdateWithWhereUniqueWithoutMediaInput | listingsUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: listingsUpdateManyWithWhereWithoutMediaInput | listingsUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: listingsScalarWhereInput | listingsScalarWhereInput[]
  }

  export type TenantUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<TenantCreateWithoutMediaInput, TenantUncheckedCreateWithoutMediaInput>
    connectOrCreate?: TenantCreateOrConnectWithoutMediaInput
    upsert?: TenantUpsertWithoutMediaInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutMediaInput, TenantUpdateWithoutMediaInput>, TenantUncheckedUpdateWithoutMediaInput>
  }

  export type listing_mediaUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<listing_mediaCreateWithoutMediaInput, listing_mediaUncheckedCreateWithoutMediaInput> | listing_mediaCreateWithoutMediaInput[] | listing_mediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: listing_mediaCreateOrConnectWithoutMediaInput | listing_mediaCreateOrConnectWithoutMediaInput[]
    upsert?: listing_mediaUpsertWithWhereUniqueWithoutMediaInput | listing_mediaUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: listing_mediaCreateManyMediaInputEnvelope
    set?: listing_mediaWhereUniqueInput | listing_mediaWhereUniqueInput[]
    disconnect?: listing_mediaWhereUniqueInput | listing_mediaWhereUniqueInput[]
    delete?: listing_mediaWhereUniqueInput | listing_mediaWhereUniqueInput[]
    connect?: listing_mediaWhereUniqueInput | listing_mediaWhereUniqueInput[]
    update?: listing_mediaUpdateWithWhereUniqueWithoutMediaInput | listing_mediaUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: listing_mediaUpdateManyWithWhereWithoutMediaInput | listing_mediaUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: listing_mediaScalarWhereInput | listing_mediaScalarWhereInput[]
  }

  export type listingsUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<listingsCreateWithoutMediaInput, listingsUncheckedCreateWithoutMediaInput> | listingsCreateWithoutMediaInput[] | listingsUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: listingsCreateOrConnectWithoutMediaInput | listingsCreateOrConnectWithoutMediaInput[]
    upsert?: listingsUpsertWithWhereUniqueWithoutMediaInput | listingsUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: listingsCreateManyMediaInputEnvelope
    set?: listingsWhereUniqueInput | listingsWhereUniqueInput[]
    disconnect?: listingsWhereUniqueInput | listingsWhereUniqueInput[]
    delete?: listingsWhereUniqueInput | listingsWhereUniqueInput[]
    connect?: listingsWhereUniqueInput | listingsWhereUniqueInput[]
    update?: listingsUpdateWithWhereUniqueWithoutMediaInput | listingsUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: listingsUpdateManyWithWhereWithoutMediaInput | listingsUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: listingsScalarWhereInput | listingsScalarWhereInput[]
  }

  export type sitesCreateNestedOneWithoutPagesInput = {
    create?: XOR<sitesCreateWithoutPagesInput, sitesUncheckedCreateWithoutPagesInput>
    connectOrCreate?: sitesCreateOrConnectWithoutPagesInput
    connect?: sitesWhereUniqueInput
  }

  export type templatesCreateNestedOneWithoutPagesInput = {
    create?: XOR<templatesCreateWithoutPagesInput, templatesUncheckedCreateWithoutPagesInput>
    connectOrCreate?: templatesCreateOrConnectWithoutPagesInput
    connect?: templatesWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type sitesUpdateOneRequiredWithoutPagesNestedInput = {
    create?: XOR<sitesCreateWithoutPagesInput, sitesUncheckedCreateWithoutPagesInput>
    connectOrCreate?: sitesCreateOrConnectWithoutPagesInput
    upsert?: sitesUpsertWithoutPagesInput
    connect?: sitesWhereUniqueInput
    update?: XOR<XOR<sitesUpdateToOneWithWhereWithoutPagesInput, sitesUpdateWithoutPagesInput>, sitesUncheckedUpdateWithoutPagesInput>
  }

  export type templatesUpdateOneRequiredWithoutPagesNestedInput = {
    create?: XOR<templatesCreateWithoutPagesInput, templatesUncheckedCreateWithoutPagesInput>
    connectOrCreate?: templatesCreateOrConnectWithoutPagesInput
    upsert?: templatesUpsertWithoutPagesInput
    connect?: templatesWhereUniqueInput
    update?: XOR<XOR<templatesUpdateToOneWithWhereWithoutPagesInput, templatesUpdateWithoutPagesInput>, templatesUncheckedUpdateWithoutPagesInput>
  }

  export type pagesCreateNestedManyWithoutSitesInput = {
    create?: XOR<pagesCreateWithoutSitesInput, pagesUncheckedCreateWithoutSitesInput> | pagesCreateWithoutSitesInput[] | pagesUncheckedCreateWithoutSitesInput[]
    connectOrCreate?: pagesCreateOrConnectWithoutSitesInput | pagesCreateOrConnectWithoutSitesInput[]
    createMany?: pagesCreateManySitesInputEnvelope
    connect?: pagesWhereUniqueInput | pagesWhereUniqueInput[]
  }

  export type TenantCreateNestedOneWithoutSitesInput = {
    create?: XOR<TenantCreateWithoutSitesInput, TenantUncheckedCreateWithoutSitesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutSitesInput
    connect?: TenantWhereUniqueInput
  }

  export type pagesUncheckedCreateNestedManyWithoutSitesInput = {
    create?: XOR<pagesCreateWithoutSitesInput, pagesUncheckedCreateWithoutSitesInput> | pagesCreateWithoutSitesInput[] | pagesUncheckedCreateWithoutSitesInput[]
    connectOrCreate?: pagesCreateOrConnectWithoutSitesInput | pagesCreateOrConnectWithoutSitesInput[]
    createMany?: pagesCreateManySitesInputEnvelope
    connect?: pagesWhereUniqueInput | pagesWhereUniqueInput[]
  }

  export type pagesUpdateManyWithoutSitesNestedInput = {
    create?: XOR<pagesCreateWithoutSitesInput, pagesUncheckedCreateWithoutSitesInput> | pagesCreateWithoutSitesInput[] | pagesUncheckedCreateWithoutSitesInput[]
    connectOrCreate?: pagesCreateOrConnectWithoutSitesInput | pagesCreateOrConnectWithoutSitesInput[]
    upsert?: pagesUpsertWithWhereUniqueWithoutSitesInput | pagesUpsertWithWhereUniqueWithoutSitesInput[]
    createMany?: pagesCreateManySitesInputEnvelope
    set?: pagesWhereUniqueInput | pagesWhereUniqueInput[]
    disconnect?: pagesWhereUniqueInput | pagesWhereUniqueInput[]
    delete?: pagesWhereUniqueInput | pagesWhereUniqueInput[]
    connect?: pagesWhereUniqueInput | pagesWhereUniqueInput[]
    update?: pagesUpdateWithWhereUniqueWithoutSitesInput | pagesUpdateWithWhereUniqueWithoutSitesInput[]
    updateMany?: pagesUpdateManyWithWhereWithoutSitesInput | pagesUpdateManyWithWhereWithoutSitesInput[]
    deleteMany?: pagesScalarWhereInput | pagesScalarWhereInput[]
  }

  export type TenantUpdateOneRequiredWithoutSitesNestedInput = {
    create?: XOR<TenantCreateWithoutSitesInput, TenantUncheckedCreateWithoutSitesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutSitesInput
    upsert?: TenantUpsertWithoutSitesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutSitesInput, TenantUpdateWithoutSitesInput>, TenantUncheckedUpdateWithoutSitesInput>
  }

  export type pagesUncheckedUpdateManyWithoutSitesNestedInput = {
    create?: XOR<pagesCreateWithoutSitesInput, pagesUncheckedCreateWithoutSitesInput> | pagesCreateWithoutSitesInput[] | pagesUncheckedCreateWithoutSitesInput[]
    connectOrCreate?: pagesCreateOrConnectWithoutSitesInput | pagesCreateOrConnectWithoutSitesInput[]
    upsert?: pagesUpsertWithWhereUniqueWithoutSitesInput | pagesUpsertWithWhereUniqueWithoutSitesInput[]
    createMany?: pagesCreateManySitesInputEnvelope
    set?: pagesWhereUniqueInput | pagesWhereUniqueInput[]
    disconnect?: pagesWhereUniqueInput | pagesWhereUniqueInput[]
    delete?: pagesWhereUniqueInput | pagesWhereUniqueInput[]
    connect?: pagesWhereUniqueInput | pagesWhereUniqueInput[]
    update?: pagesUpdateWithWhereUniqueWithoutSitesInput | pagesUpdateWithWhereUniqueWithoutSitesInput[]
    updateMany?: pagesUpdateManyWithWhereWithoutSitesInput | pagesUpdateManyWithWhereWithoutSitesInput[]
    deleteMany?: pagesScalarWhereInput | pagesScalarWhereInput[]
  }

  export type pagesCreateNestedManyWithoutTemplatesInput = {
    create?: XOR<pagesCreateWithoutTemplatesInput, pagesUncheckedCreateWithoutTemplatesInput> | pagesCreateWithoutTemplatesInput[] | pagesUncheckedCreateWithoutTemplatesInput[]
    connectOrCreate?: pagesCreateOrConnectWithoutTemplatesInput | pagesCreateOrConnectWithoutTemplatesInput[]
    createMany?: pagesCreateManyTemplatesInputEnvelope
    connect?: pagesWhereUniqueInput | pagesWhereUniqueInput[]
  }

  export type tenant_templatesCreateNestedManyWithoutTemplatesInput = {
    create?: XOR<tenant_templatesCreateWithoutTemplatesInput, tenant_templatesUncheckedCreateWithoutTemplatesInput> | tenant_templatesCreateWithoutTemplatesInput[] | tenant_templatesUncheckedCreateWithoutTemplatesInput[]
    connectOrCreate?: tenant_templatesCreateOrConnectWithoutTemplatesInput | tenant_templatesCreateOrConnectWithoutTemplatesInput[]
    createMany?: tenant_templatesCreateManyTemplatesInputEnvelope
    connect?: tenant_templatesWhereUniqueInput | tenant_templatesWhereUniqueInput[]
  }

  export type pagesUncheckedCreateNestedManyWithoutTemplatesInput = {
    create?: XOR<pagesCreateWithoutTemplatesInput, pagesUncheckedCreateWithoutTemplatesInput> | pagesCreateWithoutTemplatesInput[] | pagesUncheckedCreateWithoutTemplatesInput[]
    connectOrCreate?: pagesCreateOrConnectWithoutTemplatesInput | pagesCreateOrConnectWithoutTemplatesInput[]
    createMany?: pagesCreateManyTemplatesInputEnvelope
    connect?: pagesWhereUniqueInput | pagesWhereUniqueInput[]
  }

  export type tenant_templatesUncheckedCreateNestedManyWithoutTemplatesInput = {
    create?: XOR<tenant_templatesCreateWithoutTemplatesInput, tenant_templatesUncheckedCreateWithoutTemplatesInput> | tenant_templatesCreateWithoutTemplatesInput[] | tenant_templatesUncheckedCreateWithoutTemplatesInput[]
    connectOrCreate?: tenant_templatesCreateOrConnectWithoutTemplatesInput | tenant_templatesCreateOrConnectWithoutTemplatesInput[]
    createMany?: tenant_templatesCreateManyTemplatesInputEnvelope
    connect?: tenant_templatesWhereUniqueInput | tenant_templatesWhereUniqueInput[]
  }

  export type pagesUpdateManyWithoutTemplatesNestedInput = {
    create?: XOR<pagesCreateWithoutTemplatesInput, pagesUncheckedCreateWithoutTemplatesInput> | pagesCreateWithoutTemplatesInput[] | pagesUncheckedCreateWithoutTemplatesInput[]
    connectOrCreate?: pagesCreateOrConnectWithoutTemplatesInput | pagesCreateOrConnectWithoutTemplatesInput[]
    upsert?: pagesUpsertWithWhereUniqueWithoutTemplatesInput | pagesUpsertWithWhereUniqueWithoutTemplatesInput[]
    createMany?: pagesCreateManyTemplatesInputEnvelope
    set?: pagesWhereUniqueInput | pagesWhereUniqueInput[]
    disconnect?: pagesWhereUniqueInput | pagesWhereUniqueInput[]
    delete?: pagesWhereUniqueInput | pagesWhereUniqueInput[]
    connect?: pagesWhereUniqueInput | pagesWhereUniqueInput[]
    update?: pagesUpdateWithWhereUniqueWithoutTemplatesInput | pagesUpdateWithWhereUniqueWithoutTemplatesInput[]
    updateMany?: pagesUpdateManyWithWhereWithoutTemplatesInput | pagesUpdateManyWithWhereWithoutTemplatesInput[]
    deleteMany?: pagesScalarWhereInput | pagesScalarWhereInput[]
  }

  export type tenant_templatesUpdateManyWithoutTemplatesNestedInput = {
    create?: XOR<tenant_templatesCreateWithoutTemplatesInput, tenant_templatesUncheckedCreateWithoutTemplatesInput> | tenant_templatesCreateWithoutTemplatesInput[] | tenant_templatesUncheckedCreateWithoutTemplatesInput[]
    connectOrCreate?: tenant_templatesCreateOrConnectWithoutTemplatesInput | tenant_templatesCreateOrConnectWithoutTemplatesInput[]
    upsert?: tenant_templatesUpsertWithWhereUniqueWithoutTemplatesInput | tenant_templatesUpsertWithWhereUniqueWithoutTemplatesInput[]
    createMany?: tenant_templatesCreateManyTemplatesInputEnvelope
    set?: tenant_templatesWhereUniqueInput | tenant_templatesWhereUniqueInput[]
    disconnect?: tenant_templatesWhereUniqueInput | tenant_templatesWhereUniqueInput[]
    delete?: tenant_templatesWhereUniqueInput | tenant_templatesWhereUniqueInput[]
    connect?: tenant_templatesWhereUniqueInput | tenant_templatesWhereUniqueInput[]
    update?: tenant_templatesUpdateWithWhereUniqueWithoutTemplatesInput | tenant_templatesUpdateWithWhereUniqueWithoutTemplatesInput[]
    updateMany?: tenant_templatesUpdateManyWithWhereWithoutTemplatesInput | tenant_templatesUpdateManyWithWhereWithoutTemplatesInput[]
    deleteMany?: tenant_templatesScalarWhereInput | tenant_templatesScalarWhereInput[]
  }

  export type pagesUncheckedUpdateManyWithoutTemplatesNestedInput = {
    create?: XOR<pagesCreateWithoutTemplatesInput, pagesUncheckedCreateWithoutTemplatesInput> | pagesCreateWithoutTemplatesInput[] | pagesUncheckedCreateWithoutTemplatesInput[]
    connectOrCreate?: pagesCreateOrConnectWithoutTemplatesInput | pagesCreateOrConnectWithoutTemplatesInput[]
    upsert?: pagesUpsertWithWhereUniqueWithoutTemplatesInput | pagesUpsertWithWhereUniqueWithoutTemplatesInput[]
    createMany?: pagesCreateManyTemplatesInputEnvelope
    set?: pagesWhereUniqueInput | pagesWhereUniqueInput[]
    disconnect?: pagesWhereUniqueInput | pagesWhereUniqueInput[]
    delete?: pagesWhereUniqueInput | pagesWhereUniqueInput[]
    connect?: pagesWhereUniqueInput | pagesWhereUniqueInput[]
    update?: pagesUpdateWithWhereUniqueWithoutTemplatesInput | pagesUpdateWithWhereUniqueWithoutTemplatesInput[]
    updateMany?: pagesUpdateManyWithWhereWithoutTemplatesInput | pagesUpdateManyWithWhereWithoutTemplatesInput[]
    deleteMany?: pagesScalarWhereInput | pagesScalarWhereInput[]
  }

  export type tenant_templatesUncheckedUpdateManyWithoutTemplatesNestedInput = {
    create?: XOR<tenant_templatesCreateWithoutTemplatesInput, tenant_templatesUncheckedCreateWithoutTemplatesInput> | tenant_templatesCreateWithoutTemplatesInput[] | tenant_templatesUncheckedCreateWithoutTemplatesInput[]
    connectOrCreate?: tenant_templatesCreateOrConnectWithoutTemplatesInput | tenant_templatesCreateOrConnectWithoutTemplatesInput[]
    upsert?: tenant_templatesUpsertWithWhereUniqueWithoutTemplatesInput | tenant_templatesUpsertWithWhereUniqueWithoutTemplatesInput[]
    createMany?: tenant_templatesCreateManyTemplatesInputEnvelope
    set?: tenant_templatesWhereUniqueInput | tenant_templatesWhereUniqueInput[]
    disconnect?: tenant_templatesWhereUniqueInput | tenant_templatesWhereUniqueInput[]
    delete?: tenant_templatesWhereUniqueInput | tenant_templatesWhereUniqueInput[]
    connect?: tenant_templatesWhereUniqueInput | tenant_templatesWhereUniqueInput[]
    update?: tenant_templatesUpdateWithWhereUniqueWithoutTemplatesInput | tenant_templatesUpdateWithWhereUniqueWithoutTemplatesInput[]
    updateMany?: tenant_templatesUpdateManyWithWhereWithoutTemplatesInput | tenant_templatesUpdateManyWithWhereWithoutTemplatesInput[]
    deleteMany?: tenant_templatesScalarWhereInput | tenant_templatesScalarWhereInput[]
  }

  export type templatesCreateNestedOneWithoutTenant_templatesInput = {
    create?: XOR<templatesCreateWithoutTenant_templatesInput, templatesUncheckedCreateWithoutTenant_templatesInput>
    connectOrCreate?: templatesCreateOrConnectWithoutTenant_templatesInput
    connect?: templatesWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutTenant_templatesInput = {
    create?: XOR<TenantCreateWithoutTenant_templatesInput, TenantUncheckedCreateWithoutTenant_templatesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutTenant_templatesInput
    connect?: TenantWhereUniqueInput
  }

  export type templatesUpdateOneRequiredWithoutTenant_templatesNestedInput = {
    create?: XOR<templatesCreateWithoutTenant_templatesInput, templatesUncheckedCreateWithoutTenant_templatesInput>
    connectOrCreate?: templatesCreateOrConnectWithoutTenant_templatesInput
    upsert?: templatesUpsertWithoutTenant_templatesInput
    connect?: templatesWhereUniqueInput
    update?: XOR<XOR<templatesUpdateToOneWithWhereWithoutTenant_templatesInput, templatesUpdateWithoutTenant_templatesInput>, templatesUncheckedUpdateWithoutTenant_templatesInput>
  }

  export type TenantUpdateOneRequiredWithoutTenant_templatesNestedInput = {
    create?: XOR<TenantCreateWithoutTenant_templatesInput, TenantUncheckedCreateWithoutTenant_templatesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutTenant_templatesInput
    upsert?: TenantUpsertWithoutTenant_templatesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutTenant_templatesInput, TenantUpdateWithoutTenant_templatesInput>, TenantUncheckedUpdateWithoutTenant_templatesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type helloCreateWithoutTenantsInput = {
    id?: string
    msg: string
    created_at?: Date | string
  }

  export type helloUncheckedCreateWithoutTenantsInput = {
    id?: string
    msg: string
    created_at?: Date | string
  }

  export type helloCreateOrConnectWithoutTenantsInput = {
    where: helloWhereUniqueInput
    create: XOR<helloCreateWithoutTenantsInput, helloUncheckedCreateWithoutTenantsInput>
  }

  export type helloCreateManyTenantsInputEnvelope = {
    data: helloCreateManyTenantsInput | helloCreateManyTenantsInput[]
    skipDuplicates?: boolean
  }

  export type leadsCreateWithoutTenantsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    message?: string | null
    subject?: string | null
    source?: string | null
    page_url?: string | null
    referrer?: string | null
    status?: string | null
    assigned_to?: string | null
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    listings?: listingsCreateNestedOneWithoutLeadsInput
  }

  export type leadsUncheckedCreateWithoutTenantsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    message?: string | null
    subject?: string | null
    source?: string | null
    page_url?: string | null
    referrer?: string | null
    listing_id?: string | null
    status?: string | null
    assigned_to?: string | null
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type leadsCreateOrConnectWithoutTenantsInput = {
    where: leadsWhereUniqueInput
    create: XOR<leadsCreateWithoutTenantsInput, leadsUncheckedCreateWithoutTenantsInput>
  }

  export type leadsCreateManyTenantsInputEnvelope = {
    data: leadsCreateManyTenantsInput | leadsCreateManyTenantsInput[]
    skipDuplicates?: boolean
  }

  export type listingsCreateWithoutTenantsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    type?: string
    category?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    duration_minutes?: number | null
    capacity?: number | null
    is_bookable?: boolean | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    leads?: leadsCreateNestedManyWithoutListingsInput
    listing_media?: listing_mediaCreateNestedManyWithoutListingsInput
    media?: mediaCreateNestedOneWithoutListingsInput
  }

  export type listingsUncheckedCreateWithoutTenantsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    type?: string
    category?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    duration_minutes?: number | null
    capacity?: number | null
    is_bookable?: boolean | null
    featured_image_id?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    leads?: leadsUncheckedCreateNestedManyWithoutListingsInput
    listing_media?: listing_mediaUncheckedCreateNestedManyWithoutListingsInput
  }

  export type listingsCreateOrConnectWithoutTenantsInput = {
    where: listingsWhereUniqueInput
    create: XOR<listingsCreateWithoutTenantsInput, listingsUncheckedCreateWithoutTenantsInput>
  }

  export type listingsCreateManyTenantsInputEnvelope = {
    data: listingsCreateManyTenantsInput | listingsCreateManyTenantsInput[]
    skipDuplicates?: boolean
  }

  export type mediaCreateWithoutTenantsInput = {
    id?: string
    filename: string
    original_filename: string
    mime_type: string
    size_bytes: number
    s3_key: string
    s3_bucket: string
    cloudfront_url?: string | null
    width?: number | null
    height?: number | null
    alt_text?: string | null
    caption?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    uploaded_by?: string | null
    created_at?: Date | string
    listing_media?: listing_mediaCreateNestedManyWithoutMediaInput
    listings?: listingsCreateNestedManyWithoutMediaInput
  }

  export type mediaUncheckedCreateWithoutTenantsInput = {
    id?: string
    filename: string
    original_filename: string
    mime_type: string
    size_bytes: number
    s3_key: string
    s3_bucket: string
    cloudfront_url?: string | null
    width?: number | null
    height?: number | null
    alt_text?: string | null
    caption?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    uploaded_by?: string | null
    created_at?: Date | string
    listing_media?: listing_mediaUncheckedCreateNestedManyWithoutMediaInput
    listings?: listingsUncheckedCreateNestedManyWithoutMediaInput
  }

  export type mediaCreateOrConnectWithoutTenantsInput = {
    where: mediaWhereUniqueInput
    create: XOR<mediaCreateWithoutTenantsInput, mediaUncheckedCreateWithoutTenantsInput>
  }

  export type mediaCreateManyTenantsInputEnvelope = {
    data: mediaCreateManyTenantsInput | mediaCreateManyTenantsInput[]
    skipDuplicates?: boolean
  }

  export type MembershipCreateWithoutTenantsInput = {
    role?: string
    created_at?: Date | string
    accounts: accountsCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipUncheckedCreateWithoutTenantsInput = {
    account_id: string
    role?: string
    created_at?: Date | string
  }

  export type MembershipCreateOrConnectWithoutTenantsInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutTenantsInput, MembershipUncheckedCreateWithoutTenantsInput>
  }

  export type MembershipCreateManyTenantsInputEnvelope = {
    data: MembershipCreateManyTenantsInput | MembershipCreateManyTenantsInput[]
    skipDuplicates?: boolean
  }

  export type sitesCreateWithoutTenantsInput = {
    id?: string
    key: string
    name: string
    domain?: string | null
    created_at?: Date | string
    pages?: pagesCreateNestedManyWithoutSitesInput
  }

  export type sitesUncheckedCreateWithoutTenantsInput = {
    id?: string
    key: string
    name: string
    domain?: string | null
    created_at?: Date | string
    pages?: pagesUncheckedCreateNestedManyWithoutSitesInput
  }

  export type sitesCreateOrConnectWithoutTenantsInput = {
    where: sitesWhereUniqueInput
    create: XOR<sitesCreateWithoutTenantsInput, sitesUncheckedCreateWithoutTenantsInput>
  }

  export type sitesCreateManyTenantsInputEnvelope = {
    data: sitesCreateManyTenantsInput | sitesCreateManyTenantsInput[]
    skipDuplicates?: boolean
  }

  export type tenant_templatesCreateWithoutTenantsInput = {
    enabled?: boolean
    overrides?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    templates: templatesCreateNestedOneWithoutTenant_templatesInput
  }

  export type tenant_templatesUncheckedCreateWithoutTenantsInput = {
    template_id: string
    enabled?: boolean
    overrides?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type tenant_templatesCreateOrConnectWithoutTenantsInput = {
    where: tenant_templatesWhereUniqueInput
    create: XOR<tenant_templatesCreateWithoutTenantsInput, tenant_templatesUncheckedCreateWithoutTenantsInput>
  }

  export type tenant_templatesCreateManyTenantsInputEnvelope = {
    data: tenant_templatesCreateManyTenantsInput | tenant_templatesCreateManyTenantsInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTenantsInput = {
    id?: string
    email: string
    role?: string
    created_at?: Date | string | null
  }

  export type UserUncheckedCreateWithoutTenantsInput = {
    id?: string
    email: string
    role?: string
    created_at?: Date | string | null
  }

  export type UserCreateOrConnectWithoutTenantsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantsInput, UserUncheckedCreateWithoutTenantsInput>
  }

  export type UserCreateManyTenantsInputEnvelope = {
    data: UserCreateManyTenantsInput | UserCreateManyTenantsInput[]
    skipDuplicates?: boolean
  }

  export type helloUpsertWithWhereUniqueWithoutTenantsInput = {
    where: helloWhereUniqueInput
    update: XOR<helloUpdateWithoutTenantsInput, helloUncheckedUpdateWithoutTenantsInput>
    create: XOR<helloCreateWithoutTenantsInput, helloUncheckedCreateWithoutTenantsInput>
  }

  export type helloUpdateWithWhereUniqueWithoutTenantsInput = {
    where: helloWhereUniqueInput
    data: XOR<helloUpdateWithoutTenantsInput, helloUncheckedUpdateWithoutTenantsInput>
  }

  export type helloUpdateManyWithWhereWithoutTenantsInput = {
    where: helloScalarWhereInput
    data: XOR<helloUpdateManyMutationInput, helloUncheckedUpdateManyWithoutTenantsInput>
  }

  export type helloScalarWhereInput = {
    AND?: helloScalarWhereInput | helloScalarWhereInput[]
    OR?: helloScalarWhereInput[]
    NOT?: helloScalarWhereInput | helloScalarWhereInput[]
    id?: UuidFilter<"hello"> | string
    tenant_id?: UuidFilter<"hello"> | string
    msg?: StringFilter<"hello"> | string
    created_at?: DateTimeFilter<"hello"> | Date | string
  }

  export type leadsUpsertWithWhereUniqueWithoutTenantsInput = {
    where: leadsWhereUniqueInput
    update: XOR<leadsUpdateWithoutTenantsInput, leadsUncheckedUpdateWithoutTenantsInput>
    create: XOR<leadsCreateWithoutTenantsInput, leadsUncheckedCreateWithoutTenantsInput>
  }

  export type leadsUpdateWithWhereUniqueWithoutTenantsInput = {
    where: leadsWhereUniqueInput
    data: XOR<leadsUpdateWithoutTenantsInput, leadsUncheckedUpdateWithoutTenantsInput>
  }

  export type leadsUpdateManyWithWhereWithoutTenantsInput = {
    where: leadsScalarWhereInput
    data: XOR<leadsUpdateManyMutationInput, leadsUncheckedUpdateManyWithoutTenantsInput>
  }

  export type leadsScalarWhereInput = {
    AND?: leadsScalarWhereInput | leadsScalarWhereInput[]
    OR?: leadsScalarWhereInput[]
    NOT?: leadsScalarWhereInput | leadsScalarWhereInput[]
    id?: UuidFilter<"leads"> | string
    tenant_id?: UuidFilter<"leads"> | string
    name?: StringFilter<"leads"> | string
    email?: StringFilter<"leads"> | string
    phone?: StringNullableFilter<"leads"> | string | null
    message?: StringNullableFilter<"leads"> | string | null
    subject?: StringNullableFilter<"leads"> | string | null
    source?: StringNullableFilter<"leads"> | string | null
    page_url?: StringNullableFilter<"leads"> | string | null
    referrer?: StringNullableFilter<"leads"> | string | null
    listing_id?: UuidNullableFilter<"leads"> | string | null
    status?: StringNullableFilter<"leads"> | string | null
    assigned_to?: UuidNullableFilter<"leads"> | string | null
    notes?: StringNullableFilter<"leads"> | string | null
    metadata?: JsonNullableFilter<"leads">
    created_at?: DateTimeFilter<"leads"> | Date | string
    updated_at?: DateTimeFilter<"leads"> | Date | string
  }

  export type listingsUpsertWithWhereUniqueWithoutTenantsInput = {
    where: listingsWhereUniqueInput
    update: XOR<listingsUpdateWithoutTenantsInput, listingsUncheckedUpdateWithoutTenantsInput>
    create: XOR<listingsCreateWithoutTenantsInput, listingsUncheckedCreateWithoutTenantsInput>
  }

  export type listingsUpdateWithWhereUniqueWithoutTenantsInput = {
    where: listingsWhereUniqueInput
    data: XOR<listingsUpdateWithoutTenantsInput, listingsUncheckedUpdateWithoutTenantsInput>
  }

  export type listingsUpdateManyWithWhereWithoutTenantsInput = {
    where: listingsScalarWhereInput
    data: XOR<listingsUpdateManyMutationInput, listingsUncheckedUpdateManyWithoutTenantsInput>
  }

  export type listingsScalarWhereInput = {
    AND?: listingsScalarWhereInput | listingsScalarWhereInput[]
    OR?: listingsScalarWhereInput[]
    NOT?: listingsScalarWhereInput | listingsScalarWhereInput[]
    id?: UuidFilter<"listings"> | string
    tenant_id?: UuidFilter<"listings"> | string
    title?: StringFilter<"listings"> | string
    slug?: StringFilter<"listings"> | string
    description?: StringNullableFilter<"listings"> | string | null
    type?: StringFilter<"listings"> | string
    category?: StringNullableFilter<"listings"> | string | null
    price?: DecimalNullableFilter<"listings"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringNullableFilter<"listings"> | string | null
    duration_minutes?: IntNullableFilter<"listings"> | number | null
    capacity?: IntNullableFilter<"listings"> | number | null
    is_bookable?: BoolNullableFilter<"listings"> | boolean | null
    featured_image_id?: UuidNullableFilter<"listings"> | string | null
    metadata?: JsonNullableFilter<"listings">
    status?: StringNullableFilter<"listings"> | string | null
    published_at?: DateTimeNullableFilter<"listings"> | Date | string | null
    created_at?: DateTimeFilter<"listings"> | Date | string
    updated_at?: DateTimeFilter<"listings"> | Date | string
  }

  export type mediaUpsertWithWhereUniqueWithoutTenantsInput = {
    where: mediaWhereUniqueInput
    update: XOR<mediaUpdateWithoutTenantsInput, mediaUncheckedUpdateWithoutTenantsInput>
    create: XOR<mediaCreateWithoutTenantsInput, mediaUncheckedCreateWithoutTenantsInput>
  }

  export type mediaUpdateWithWhereUniqueWithoutTenantsInput = {
    where: mediaWhereUniqueInput
    data: XOR<mediaUpdateWithoutTenantsInput, mediaUncheckedUpdateWithoutTenantsInput>
  }

  export type mediaUpdateManyWithWhereWithoutTenantsInput = {
    where: mediaScalarWhereInput
    data: XOR<mediaUpdateManyMutationInput, mediaUncheckedUpdateManyWithoutTenantsInput>
  }

  export type mediaScalarWhereInput = {
    AND?: mediaScalarWhereInput | mediaScalarWhereInput[]
    OR?: mediaScalarWhereInput[]
    NOT?: mediaScalarWhereInput | mediaScalarWhereInput[]
    id?: UuidFilter<"media"> | string
    tenant_id?: UuidFilter<"media"> | string
    filename?: StringFilter<"media"> | string
    original_filename?: StringFilter<"media"> | string
    mime_type?: StringFilter<"media"> | string
    size_bytes?: IntFilter<"media"> | number
    s3_key?: StringFilter<"media"> | string
    s3_bucket?: StringFilter<"media"> | string
    cloudfront_url?: StringNullableFilter<"media"> | string | null
    width?: IntNullableFilter<"media"> | number | null
    height?: IntNullableFilter<"media"> | number | null
    alt_text?: StringNullableFilter<"media"> | string | null
    caption?: StringNullableFilter<"media"> | string | null
    metadata?: JsonNullableFilter<"media">
    uploaded_by?: UuidNullableFilter<"media"> | string | null
    created_at?: DateTimeFilter<"media"> | Date | string
  }

  export type MembershipUpsertWithWhereUniqueWithoutTenantsInput = {
    where: MembershipWhereUniqueInput
    update: XOR<MembershipUpdateWithoutTenantsInput, MembershipUncheckedUpdateWithoutTenantsInput>
    create: XOR<MembershipCreateWithoutTenantsInput, MembershipUncheckedCreateWithoutTenantsInput>
  }

  export type MembershipUpdateWithWhereUniqueWithoutTenantsInput = {
    where: MembershipWhereUniqueInput
    data: XOR<MembershipUpdateWithoutTenantsInput, MembershipUncheckedUpdateWithoutTenantsInput>
  }

  export type MembershipUpdateManyWithWhereWithoutTenantsInput = {
    where: MembershipScalarWhereInput
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyWithoutTenantsInput>
  }

  export type MembershipScalarWhereInput = {
    AND?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    OR?: MembershipScalarWhereInput[]
    NOT?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    account_id?: UuidFilter<"Membership"> | string
    tenant_id?: UuidFilter<"Membership"> | string
    role?: StringFilter<"Membership"> | string
    created_at?: DateTimeFilter<"Membership"> | Date | string
  }

  export type sitesUpsertWithWhereUniqueWithoutTenantsInput = {
    where: sitesWhereUniqueInput
    update: XOR<sitesUpdateWithoutTenantsInput, sitesUncheckedUpdateWithoutTenantsInput>
    create: XOR<sitesCreateWithoutTenantsInput, sitesUncheckedCreateWithoutTenantsInput>
  }

  export type sitesUpdateWithWhereUniqueWithoutTenantsInput = {
    where: sitesWhereUniqueInput
    data: XOR<sitesUpdateWithoutTenantsInput, sitesUncheckedUpdateWithoutTenantsInput>
  }

  export type sitesUpdateManyWithWhereWithoutTenantsInput = {
    where: sitesScalarWhereInput
    data: XOR<sitesUpdateManyMutationInput, sitesUncheckedUpdateManyWithoutTenantsInput>
  }

  export type sitesScalarWhereInput = {
    AND?: sitesScalarWhereInput | sitesScalarWhereInput[]
    OR?: sitesScalarWhereInput[]
    NOT?: sitesScalarWhereInput | sitesScalarWhereInput[]
    id?: UuidFilter<"sites"> | string
    tenant_id?: UuidFilter<"sites"> | string
    key?: StringFilter<"sites"> | string
    name?: StringFilter<"sites"> | string
    domain?: StringNullableFilter<"sites"> | string | null
    created_at?: DateTimeFilter<"sites"> | Date | string
  }

  export type tenant_templatesUpsertWithWhereUniqueWithoutTenantsInput = {
    where: tenant_templatesWhereUniqueInput
    update: XOR<tenant_templatesUpdateWithoutTenantsInput, tenant_templatesUncheckedUpdateWithoutTenantsInput>
    create: XOR<tenant_templatesCreateWithoutTenantsInput, tenant_templatesUncheckedCreateWithoutTenantsInput>
  }

  export type tenant_templatesUpdateWithWhereUniqueWithoutTenantsInput = {
    where: tenant_templatesWhereUniqueInput
    data: XOR<tenant_templatesUpdateWithoutTenantsInput, tenant_templatesUncheckedUpdateWithoutTenantsInput>
  }

  export type tenant_templatesUpdateManyWithWhereWithoutTenantsInput = {
    where: tenant_templatesScalarWhereInput
    data: XOR<tenant_templatesUpdateManyMutationInput, tenant_templatesUncheckedUpdateManyWithoutTenantsInput>
  }

  export type tenant_templatesScalarWhereInput = {
    AND?: tenant_templatesScalarWhereInput | tenant_templatesScalarWhereInput[]
    OR?: tenant_templatesScalarWhereInput[]
    NOT?: tenant_templatesScalarWhereInput | tenant_templatesScalarWhereInput[]
    tenant_id?: UuidFilter<"tenant_templates"> | string
    template_id?: UuidFilter<"tenant_templates"> | string
    enabled?: BoolFilter<"tenant_templates"> | boolean
    overrides?: JsonFilter<"tenant_templates">
    created_at?: DateTimeFilter<"tenant_templates"> | Date | string
    updated_at?: DateTimeFilter<"tenant_templates"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutTenantsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTenantsInput, UserUncheckedUpdateWithoutTenantsInput>
    create: XOR<UserCreateWithoutTenantsInput, UserUncheckedCreateWithoutTenantsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTenantsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTenantsInput, UserUncheckedUpdateWithoutTenantsInput>
  }

  export type UserUpdateManyWithWhereWithoutTenantsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTenantsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: UuidFilter<"User"> | string
    tenant_id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    created_at?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type TenantCreateWithoutUsersInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    hello?: helloCreateNestedManyWithoutTenantsInput
    leads?: leadsCreateNestedManyWithoutTenantsInput
    listings?: listingsCreateNestedManyWithoutTenantsInput
    media?: mediaCreateNestedManyWithoutTenantsInput
    memberships?: MembershipCreateNestedManyWithoutTenantsInput
    sites?: sitesCreateNestedManyWithoutTenantsInput
    tenant_templates?: tenant_templatesCreateNestedManyWithoutTenantsInput
  }

  export type TenantUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    hello?: helloUncheckedCreateNestedManyWithoutTenantsInput
    leads?: leadsUncheckedCreateNestedManyWithoutTenantsInput
    listings?: listingsUncheckedCreateNestedManyWithoutTenantsInput
    media?: mediaUncheckedCreateNestedManyWithoutTenantsInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutTenantsInput
    sites?: sitesUncheckedCreateNestedManyWithoutTenantsInput
    tenant_templates?: tenant_templatesUncheckedCreateNestedManyWithoutTenantsInput
  }

  export type TenantCreateOrConnectWithoutUsersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
  }

  export type TenantUpsertWithoutUsersInput = {
    update: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutUsersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type TenantUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hello?: helloUpdateManyWithoutTenantsNestedInput
    leads?: leadsUpdateManyWithoutTenantsNestedInput
    listings?: listingsUpdateManyWithoutTenantsNestedInput
    media?: mediaUpdateManyWithoutTenantsNestedInput
    memberships?: MembershipUpdateManyWithoutTenantsNestedInput
    sites?: sitesUpdateManyWithoutTenantsNestedInput
    tenant_templates?: tenant_templatesUpdateManyWithoutTenantsNestedInput
  }

  export type TenantUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hello?: helloUncheckedUpdateManyWithoutTenantsNestedInput
    leads?: leadsUncheckedUpdateManyWithoutTenantsNestedInput
    listings?: listingsUncheckedUpdateManyWithoutTenantsNestedInput
    media?: mediaUncheckedUpdateManyWithoutTenantsNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutTenantsNestedInput
    sites?: sitesUncheckedUpdateManyWithoutTenantsNestedInput
    tenant_templates?: tenant_templatesUncheckedUpdateManyWithoutTenantsNestedInput
  }

  export type accountsCreateWithoutMembershipsInput = {
    id?: string
    email: string
    created_at?: Date | string
  }

  export type accountsUncheckedCreateWithoutMembershipsInput = {
    id?: string
    email: string
    created_at?: Date | string
  }

  export type accountsCreateOrConnectWithoutMembershipsInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutMembershipsInput, accountsUncheckedCreateWithoutMembershipsInput>
  }

  export type TenantCreateWithoutMembershipsInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    hello?: helloCreateNestedManyWithoutTenantsInput
    leads?: leadsCreateNestedManyWithoutTenantsInput
    listings?: listingsCreateNestedManyWithoutTenantsInput
    media?: mediaCreateNestedManyWithoutTenantsInput
    sites?: sitesCreateNestedManyWithoutTenantsInput
    tenant_templates?: tenant_templatesCreateNestedManyWithoutTenantsInput
    users?: UserCreateNestedManyWithoutTenantsInput
  }

  export type TenantUncheckedCreateWithoutMembershipsInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    hello?: helloUncheckedCreateNestedManyWithoutTenantsInput
    leads?: leadsUncheckedCreateNestedManyWithoutTenantsInput
    listings?: listingsUncheckedCreateNestedManyWithoutTenantsInput
    media?: mediaUncheckedCreateNestedManyWithoutTenantsInput
    sites?: sitesUncheckedCreateNestedManyWithoutTenantsInput
    tenant_templates?: tenant_templatesUncheckedCreateNestedManyWithoutTenantsInput
    users?: UserUncheckedCreateNestedManyWithoutTenantsInput
  }

  export type TenantCreateOrConnectWithoutMembershipsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutMembershipsInput, TenantUncheckedCreateWithoutMembershipsInput>
  }

  export type accountsUpsertWithoutMembershipsInput = {
    update: XOR<accountsUpdateWithoutMembershipsInput, accountsUncheckedUpdateWithoutMembershipsInput>
    create: XOR<accountsCreateWithoutMembershipsInput, accountsUncheckedCreateWithoutMembershipsInput>
    where?: accountsWhereInput
  }

  export type accountsUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: accountsWhereInput
    data: XOR<accountsUpdateWithoutMembershipsInput, accountsUncheckedUpdateWithoutMembershipsInput>
  }

  export type accountsUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountsUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUpsertWithoutMembershipsInput = {
    update: XOR<TenantUpdateWithoutMembershipsInput, TenantUncheckedUpdateWithoutMembershipsInput>
    create: XOR<TenantCreateWithoutMembershipsInput, TenantUncheckedCreateWithoutMembershipsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutMembershipsInput, TenantUncheckedUpdateWithoutMembershipsInput>
  }

  export type TenantUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hello?: helloUpdateManyWithoutTenantsNestedInput
    leads?: leadsUpdateManyWithoutTenantsNestedInput
    listings?: listingsUpdateManyWithoutTenantsNestedInput
    media?: mediaUpdateManyWithoutTenantsNestedInput
    sites?: sitesUpdateManyWithoutTenantsNestedInput
    tenant_templates?: tenant_templatesUpdateManyWithoutTenantsNestedInput
    users?: UserUpdateManyWithoutTenantsNestedInput
  }

  export type TenantUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hello?: helloUncheckedUpdateManyWithoutTenantsNestedInput
    leads?: leadsUncheckedUpdateManyWithoutTenantsNestedInput
    listings?: listingsUncheckedUpdateManyWithoutTenantsNestedInput
    media?: mediaUncheckedUpdateManyWithoutTenantsNestedInput
    sites?: sitesUncheckedUpdateManyWithoutTenantsNestedInput
    tenant_templates?: tenant_templatesUncheckedUpdateManyWithoutTenantsNestedInput
    users?: UserUncheckedUpdateManyWithoutTenantsNestedInput
  }

  export type MembershipCreateWithoutAccountsInput = {
    role?: string
    created_at?: Date | string
    tenants: TenantCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipUncheckedCreateWithoutAccountsInput = {
    tenant_id: string
    role?: string
    created_at?: Date | string
  }

  export type MembershipCreateOrConnectWithoutAccountsInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutAccountsInput, MembershipUncheckedCreateWithoutAccountsInput>
  }

  export type MembershipCreateManyAccountsInputEnvelope = {
    data: MembershipCreateManyAccountsInput | MembershipCreateManyAccountsInput[]
    skipDuplicates?: boolean
  }

  export type MembershipUpsertWithWhereUniqueWithoutAccountsInput = {
    where: MembershipWhereUniqueInput
    update: XOR<MembershipUpdateWithoutAccountsInput, MembershipUncheckedUpdateWithoutAccountsInput>
    create: XOR<MembershipCreateWithoutAccountsInput, MembershipUncheckedCreateWithoutAccountsInput>
  }

  export type MembershipUpdateWithWhereUniqueWithoutAccountsInput = {
    where: MembershipWhereUniqueInput
    data: XOR<MembershipUpdateWithoutAccountsInput, MembershipUncheckedUpdateWithoutAccountsInput>
  }

  export type MembershipUpdateManyWithWhereWithoutAccountsInput = {
    where: MembershipScalarWhereInput
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyWithoutAccountsInput>
  }

  export type TenantCreateWithoutHelloInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    leads?: leadsCreateNestedManyWithoutTenantsInput
    listings?: listingsCreateNestedManyWithoutTenantsInput
    media?: mediaCreateNestedManyWithoutTenantsInput
    memberships?: MembershipCreateNestedManyWithoutTenantsInput
    sites?: sitesCreateNestedManyWithoutTenantsInput
    tenant_templates?: tenant_templatesCreateNestedManyWithoutTenantsInput
    users?: UserCreateNestedManyWithoutTenantsInput
  }

  export type TenantUncheckedCreateWithoutHelloInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    leads?: leadsUncheckedCreateNestedManyWithoutTenantsInput
    listings?: listingsUncheckedCreateNestedManyWithoutTenantsInput
    media?: mediaUncheckedCreateNestedManyWithoutTenantsInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutTenantsInput
    sites?: sitesUncheckedCreateNestedManyWithoutTenantsInput
    tenant_templates?: tenant_templatesUncheckedCreateNestedManyWithoutTenantsInput
    users?: UserUncheckedCreateNestedManyWithoutTenantsInput
  }

  export type TenantCreateOrConnectWithoutHelloInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutHelloInput, TenantUncheckedCreateWithoutHelloInput>
  }

  export type TenantUpsertWithoutHelloInput = {
    update: XOR<TenantUpdateWithoutHelloInput, TenantUncheckedUpdateWithoutHelloInput>
    create: XOR<TenantCreateWithoutHelloInput, TenantUncheckedCreateWithoutHelloInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutHelloInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutHelloInput, TenantUncheckedUpdateWithoutHelloInput>
  }

  export type TenantUpdateWithoutHelloInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leads?: leadsUpdateManyWithoutTenantsNestedInput
    listings?: listingsUpdateManyWithoutTenantsNestedInput
    media?: mediaUpdateManyWithoutTenantsNestedInput
    memberships?: MembershipUpdateManyWithoutTenantsNestedInput
    sites?: sitesUpdateManyWithoutTenantsNestedInput
    tenant_templates?: tenant_templatesUpdateManyWithoutTenantsNestedInput
    users?: UserUpdateManyWithoutTenantsNestedInput
  }

  export type TenantUncheckedUpdateWithoutHelloInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leads?: leadsUncheckedUpdateManyWithoutTenantsNestedInput
    listings?: listingsUncheckedUpdateManyWithoutTenantsNestedInput
    media?: mediaUncheckedUpdateManyWithoutTenantsNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutTenantsNestedInput
    sites?: sitesUncheckedUpdateManyWithoutTenantsNestedInput
    tenant_templates?: tenant_templatesUncheckedUpdateManyWithoutTenantsNestedInput
    users?: UserUncheckedUpdateManyWithoutTenantsNestedInput
  }

  export type listingsCreateWithoutLeadsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    type?: string
    category?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    duration_minutes?: number | null
    capacity?: number | null
    is_bookable?: boolean | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    listing_media?: listing_mediaCreateNestedManyWithoutListingsInput
    media?: mediaCreateNestedOneWithoutListingsInput
    tenants: TenantCreateNestedOneWithoutListingsInput
  }

  export type listingsUncheckedCreateWithoutLeadsInput = {
    id?: string
    tenant_id: string
    title: string
    slug: string
    description?: string | null
    type?: string
    category?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    duration_minutes?: number | null
    capacity?: number | null
    is_bookable?: boolean | null
    featured_image_id?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    listing_media?: listing_mediaUncheckedCreateNestedManyWithoutListingsInput
  }

  export type listingsCreateOrConnectWithoutLeadsInput = {
    where: listingsWhereUniqueInput
    create: XOR<listingsCreateWithoutLeadsInput, listingsUncheckedCreateWithoutLeadsInput>
  }

  export type TenantCreateWithoutLeadsInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    hello?: helloCreateNestedManyWithoutTenantsInput
    listings?: listingsCreateNestedManyWithoutTenantsInput
    media?: mediaCreateNestedManyWithoutTenantsInput
    memberships?: MembershipCreateNestedManyWithoutTenantsInput
    sites?: sitesCreateNestedManyWithoutTenantsInput
    tenant_templates?: tenant_templatesCreateNestedManyWithoutTenantsInput
    users?: UserCreateNestedManyWithoutTenantsInput
  }

  export type TenantUncheckedCreateWithoutLeadsInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    hello?: helloUncheckedCreateNestedManyWithoutTenantsInput
    listings?: listingsUncheckedCreateNestedManyWithoutTenantsInput
    media?: mediaUncheckedCreateNestedManyWithoutTenantsInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutTenantsInput
    sites?: sitesUncheckedCreateNestedManyWithoutTenantsInput
    tenant_templates?: tenant_templatesUncheckedCreateNestedManyWithoutTenantsInput
    users?: UserUncheckedCreateNestedManyWithoutTenantsInput
  }

  export type TenantCreateOrConnectWithoutLeadsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutLeadsInput, TenantUncheckedCreateWithoutLeadsInput>
  }

  export type listingsUpsertWithoutLeadsInput = {
    update: XOR<listingsUpdateWithoutLeadsInput, listingsUncheckedUpdateWithoutLeadsInput>
    create: XOR<listingsCreateWithoutLeadsInput, listingsUncheckedCreateWithoutLeadsInput>
    where?: listingsWhereInput
  }

  export type listingsUpdateToOneWithWhereWithoutLeadsInput = {
    where?: listingsWhereInput
    data: XOR<listingsUpdateWithoutLeadsInput, listingsUncheckedUpdateWithoutLeadsInput>
  }

  export type listingsUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    is_bookable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    listing_media?: listing_mediaUpdateManyWithoutListingsNestedInput
    media?: mediaUpdateOneWithoutListingsNestedInput
    tenants?: TenantUpdateOneRequiredWithoutListingsNestedInput
  }

  export type listingsUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    is_bookable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    featured_image_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    listing_media?: listing_mediaUncheckedUpdateManyWithoutListingsNestedInput
  }

  export type TenantUpsertWithoutLeadsInput = {
    update: XOR<TenantUpdateWithoutLeadsInput, TenantUncheckedUpdateWithoutLeadsInput>
    create: XOR<TenantCreateWithoutLeadsInput, TenantUncheckedCreateWithoutLeadsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutLeadsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutLeadsInput, TenantUncheckedUpdateWithoutLeadsInput>
  }

  export type TenantUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hello?: helloUpdateManyWithoutTenantsNestedInput
    listings?: listingsUpdateManyWithoutTenantsNestedInput
    media?: mediaUpdateManyWithoutTenantsNestedInput
    memberships?: MembershipUpdateManyWithoutTenantsNestedInput
    sites?: sitesUpdateManyWithoutTenantsNestedInput
    tenant_templates?: tenant_templatesUpdateManyWithoutTenantsNestedInput
    users?: UserUpdateManyWithoutTenantsNestedInput
  }

  export type TenantUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hello?: helloUncheckedUpdateManyWithoutTenantsNestedInput
    listings?: listingsUncheckedUpdateManyWithoutTenantsNestedInput
    media?: mediaUncheckedUpdateManyWithoutTenantsNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutTenantsNestedInput
    sites?: sitesUncheckedUpdateManyWithoutTenantsNestedInput
    tenant_templates?: tenant_templatesUncheckedUpdateManyWithoutTenantsNestedInput
    users?: UserUncheckedUpdateManyWithoutTenantsNestedInput
  }

  export type listingsCreateWithoutListing_mediaInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    type?: string
    category?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    duration_minutes?: number | null
    capacity?: number | null
    is_bookable?: boolean | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    leads?: leadsCreateNestedManyWithoutListingsInput
    media?: mediaCreateNestedOneWithoutListingsInput
    tenants: TenantCreateNestedOneWithoutListingsInput
  }

  export type listingsUncheckedCreateWithoutListing_mediaInput = {
    id?: string
    tenant_id: string
    title: string
    slug: string
    description?: string | null
    type?: string
    category?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    duration_minutes?: number | null
    capacity?: number | null
    is_bookable?: boolean | null
    featured_image_id?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    leads?: leadsUncheckedCreateNestedManyWithoutListingsInput
  }

  export type listingsCreateOrConnectWithoutListing_mediaInput = {
    where: listingsWhereUniqueInput
    create: XOR<listingsCreateWithoutListing_mediaInput, listingsUncheckedCreateWithoutListing_mediaInput>
  }

  export type mediaCreateWithoutListing_mediaInput = {
    id?: string
    filename: string
    original_filename: string
    mime_type: string
    size_bytes: number
    s3_key: string
    s3_bucket: string
    cloudfront_url?: string | null
    width?: number | null
    height?: number | null
    alt_text?: string | null
    caption?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    uploaded_by?: string | null
    created_at?: Date | string
    listings?: listingsCreateNestedManyWithoutMediaInput
    tenants: TenantCreateNestedOneWithoutMediaInput
  }

  export type mediaUncheckedCreateWithoutListing_mediaInput = {
    id?: string
    tenant_id: string
    filename: string
    original_filename: string
    mime_type: string
    size_bytes: number
    s3_key: string
    s3_bucket: string
    cloudfront_url?: string | null
    width?: number | null
    height?: number | null
    alt_text?: string | null
    caption?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    uploaded_by?: string | null
    created_at?: Date | string
    listings?: listingsUncheckedCreateNestedManyWithoutMediaInput
  }

  export type mediaCreateOrConnectWithoutListing_mediaInput = {
    where: mediaWhereUniqueInput
    create: XOR<mediaCreateWithoutListing_mediaInput, mediaUncheckedCreateWithoutListing_mediaInput>
  }

  export type listingsUpsertWithoutListing_mediaInput = {
    update: XOR<listingsUpdateWithoutListing_mediaInput, listingsUncheckedUpdateWithoutListing_mediaInput>
    create: XOR<listingsCreateWithoutListing_mediaInput, listingsUncheckedCreateWithoutListing_mediaInput>
    where?: listingsWhereInput
  }

  export type listingsUpdateToOneWithWhereWithoutListing_mediaInput = {
    where?: listingsWhereInput
    data: XOR<listingsUpdateWithoutListing_mediaInput, listingsUncheckedUpdateWithoutListing_mediaInput>
  }

  export type listingsUpdateWithoutListing_mediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    is_bookable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: leadsUpdateManyWithoutListingsNestedInput
    media?: mediaUpdateOneWithoutListingsNestedInput
    tenants?: TenantUpdateOneRequiredWithoutListingsNestedInput
  }

  export type listingsUncheckedUpdateWithoutListing_mediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    is_bookable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    featured_image_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: leadsUncheckedUpdateManyWithoutListingsNestedInput
  }

  export type mediaUpsertWithoutListing_mediaInput = {
    update: XOR<mediaUpdateWithoutListing_mediaInput, mediaUncheckedUpdateWithoutListing_mediaInput>
    create: XOR<mediaCreateWithoutListing_mediaInput, mediaUncheckedCreateWithoutListing_mediaInput>
    where?: mediaWhereInput
  }

  export type mediaUpdateToOneWithWhereWithoutListing_mediaInput = {
    where?: mediaWhereInput
    data: XOR<mediaUpdateWithoutListing_mediaInput, mediaUncheckedUpdateWithoutListing_mediaInput>
  }

  export type mediaUpdateWithoutListing_mediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    original_filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    size_bytes?: IntFieldUpdateOperationsInput | number
    s3_key?: StringFieldUpdateOperationsInput | string
    s3_bucket?: StringFieldUpdateOperationsInput | string
    cloudfront_url?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    uploaded_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: listingsUpdateManyWithoutMediaNestedInput
    tenants?: TenantUpdateOneRequiredWithoutMediaNestedInput
  }

  export type mediaUncheckedUpdateWithoutListing_mediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    original_filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    size_bytes?: IntFieldUpdateOperationsInput | number
    s3_key?: StringFieldUpdateOperationsInput | string
    s3_bucket?: StringFieldUpdateOperationsInput | string
    cloudfront_url?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    uploaded_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: listingsUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type leadsCreateWithoutListingsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    message?: string | null
    subject?: string | null
    source?: string | null
    page_url?: string | null
    referrer?: string | null
    status?: string | null
    assigned_to?: string | null
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    tenants: TenantCreateNestedOneWithoutLeadsInput
  }

  export type leadsUncheckedCreateWithoutListingsInput = {
    id?: string
    tenant_id: string
    name: string
    email: string
    phone?: string | null
    message?: string | null
    subject?: string | null
    source?: string | null
    page_url?: string | null
    referrer?: string | null
    status?: string | null
    assigned_to?: string | null
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type leadsCreateOrConnectWithoutListingsInput = {
    where: leadsWhereUniqueInput
    create: XOR<leadsCreateWithoutListingsInput, leadsUncheckedCreateWithoutListingsInput>
  }

  export type leadsCreateManyListingsInputEnvelope = {
    data: leadsCreateManyListingsInput | leadsCreateManyListingsInput[]
    skipDuplicates?: boolean
  }

  export type listing_mediaCreateWithoutListingsInput = {
    position?: number
    media: mediaCreateNestedOneWithoutListing_mediaInput
  }

  export type listing_mediaUncheckedCreateWithoutListingsInput = {
    media_id: string
    position?: number
  }

  export type listing_mediaCreateOrConnectWithoutListingsInput = {
    where: listing_mediaWhereUniqueInput
    create: XOR<listing_mediaCreateWithoutListingsInput, listing_mediaUncheckedCreateWithoutListingsInput>
  }

  export type listing_mediaCreateManyListingsInputEnvelope = {
    data: listing_mediaCreateManyListingsInput | listing_mediaCreateManyListingsInput[]
    skipDuplicates?: boolean
  }

  export type mediaCreateWithoutListingsInput = {
    id?: string
    filename: string
    original_filename: string
    mime_type: string
    size_bytes: number
    s3_key: string
    s3_bucket: string
    cloudfront_url?: string | null
    width?: number | null
    height?: number | null
    alt_text?: string | null
    caption?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    uploaded_by?: string | null
    created_at?: Date | string
    listing_media?: listing_mediaCreateNestedManyWithoutMediaInput
    tenants: TenantCreateNestedOneWithoutMediaInput
  }

  export type mediaUncheckedCreateWithoutListingsInput = {
    id?: string
    tenant_id: string
    filename: string
    original_filename: string
    mime_type: string
    size_bytes: number
    s3_key: string
    s3_bucket: string
    cloudfront_url?: string | null
    width?: number | null
    height?: number | null
    alt_text?: string | null
    caption?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    uploaded_by?: string | null
    created_at?: Date | string
    listing_media?: listing_mediaUncheckedCreateNestedManyWithoutMediaInput
  }

  export type mediaCreateOrConnectWithoutListingsInput = {
    where: mediaWhereUniqueInput
    create: XOR<mediaCreateWithoutListingsInput, mediaUncheckedCreateWithoutListingsInput>
  }

  export type TenantCreateWithoutListingsInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    hello?: helloCreateNestedManyWithoutTenantsInput
    leads?: leadsCreateNestedManyWithoutTenantsInput
    media?: mediaCreateNestedManyWithoutTenantsInput
    memberships?: MembershipCreateNestedManyWithoutTenantsInput
    sites?: sitesCreateNestedManyWithoutTenantsInput
    tenant_templates?: tenant_templatesCreateNestedManyWithoutTenantsInput
    users?: UserCreateNestedManyWithoutTenantsInput
  }

  export type TenantUncheckedCreateWithoutListingsInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    hello?: helloUncheckedCreateNestedManyWithoutTenantsInput
    leads?: leadsUncheckedCreateNestedManyWithoutTenantsInput
    media?: mediaUncheckedCreateNestedManyWithoutTenantsInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutTenantsInput
    sites?: sitesUncheckedCreateNestedManyWithoutTenantsInput
    tenant_templates?: tenant_templatesUncheckedCreateNestedManyWithoutTenantsInput
    users?: UserUncheckedCreateNestedManyWithoutTenantsInput
  }

  export type TenantCreateOrConnectWithoutListingsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutListingsInput, TenantUncheckedCreateWithoutListingsInput>
  }

  export type leadsUpsertWithWhereUniqueWithoutListingsInput = {
    where: leadsWhereUniqueInput
    update: XOR<leadsUpdateWithoutListingsInput, leadsUncheckedUpdateWithoutListingsInput>
    create: XOR<leadsCreateWithoutListingsInput, leadsUncheckedCreateWithoutListingsInput>
  }

  export type leadsUpdateWithWhereUniqueWithoutListingsInput = {
    where: leadsWhereUniqueInput
    data: XOR<leadsUpdateWithoutListingsInput, leadsUncheckedUpdateWithoutListingsInput>
  }

  export type leadsUpdateManyWithWhereWithoutListingsInput = {
    where: leadsScalarWhereInput
    data: XOR<leadsUpdateManyMutationInput, leadsUncheckedUpdateManyWithoutListingsInput>
  }

  export type listing_mediaUpsertWithWhereUniqueWithoutListingsInput = {
    where: listing_mediaWhereUniqueInput
    update: XOR<listing_mediaUpdateWithoutListingsInput, listing_mediaUncheckedUpdateWithoutListingsInput>
    create: XOR<listing_mediaCreateWithoutListingsInput, listing_mediaUncheckedCreateWithoutListingsInput>
  }

  export type listing_mediaUpdateWithWhereUniqueWithoutListingsInput = {
    where: listing_mediaWhereUniqueInput
    data: XOR<listing_mediaUpdateWithoutListingsInput, listing_mediaUncheckedUpdateWithoutListingsInput>
  }

  export type listing_mediaUpdateManyWithWhereWithoutListingsInput = {
    where: listing_mediaScalarWhereInput
    data: XOR<listing_mediaUpdateManyMutationInput, listing_mediaUncheckedUpdateManyWithoutListingsInput>
  }

  export type listing_mediaScalarWhereInput = {
    AND?: listing_mediaScalarWhereInput | listing_mediaScalarWhereInput[]
    OR?: listing_mediaScalarWhereInput[]
    NOT?: listing_mediaScalarWhereInput | listing_mediaScalarWhereInput[]
    listing_id?: UuidFilter<"listing_media"> | string
    media_id?: UuidFilter<"listing_media"> | string
    position?: IntFilter<"listing_media"> | number
  }

  export type mediaUpsertWithoutListingsInput = {
    update: XOR<mediaUpdateWithoutListingsInput, mediaUncheckedUpdateWithoutListingsInput>
    create: XOR<mediaCreateWithoutListingsInput, mediaUncheckedCreateWithoutListingsInput>
    where?: mediaWhereInput
  }

  export type mediaUpdateToOneWithWhereWithoutListingsInput = {
    where?: mediaWhereInput
    data: XOR<mediaUpdateWithoutListingsInput, mediaUncheckedUpdateWithoutListingsInput>
  }

  export type mediaUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    original_filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    size_bytes?: IntFieldUpdateOperationsInput | number
    s3_key?: StringFieldUpdateOperationsInput | string
    s3_bucket?: StringFieldUpdateOperationsInput | string
    cloudfront_url?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    uploaded_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    listing_media?: listing_mediaUpdateManyWithoutMediaNestedInput
    tenants?: TenantUpdateOneRequiredWithoutMediaNestedInput
  }

  export type mediaUncheckedUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    original_filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    size_bytes?: IntFieldUpdateOperationsInput | number
    s3_key?: StringFieldUpdateOperationsInput | string
    s3_bucket?: StringFieldUpdateOperationsInput | string
    cloudfront_url?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    uploaded_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    listing_media?: listing_mediaUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type TenantUpsertWithoutListingsInput = {
    update: XOR<TenantUpdateWithoutListingsInput, TenantUncheckedUpdateWithoutListingsInput>
    create: XOR<TenantCreateWithoutListingsInput, TenantUncheckedCreateWithoutListingsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutListingsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutListingsInput, TenantUncheckedUpdateWithoutListingsInput>
  }

  export type TenantUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hello?: helloUpdateManyWithoutTenantsNestedInput
    leads?: leadsUpdateManyWithoutTenantsNestedInput
    media?: mediaUpdateManyWithoutTenantsNestedInput
    memberships?: MembershipUpdateManyWithoutTenantsNestedInput
    sites?: sitesUpdateManyWithoutTenantsNestedInput
    tenant_templates?: tenant_templatesUpdateManyWithoutTenantsNestedInput
    users?: UserUpdateManyWithoutTenantsNestedInput
  }

  export type TenantUncheckedUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hello?: helloUncheckedUpdateManyWithoutTenantsNestedInput
    leads?: leadsUncheckedUpdateManyWithoutTenantsNestedInput
    media?: mediaUncheckedUpdateManyWithoutTenantsNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutTenantsNestedInput
    sites?: sitesUncheckedUpdateManyWithoutTenantsNestedInput
    tenant_templates?: tenant_templatesUncheckedUpdateManyWithoutTenantsNestedInput
    users?: UserUncheckedUpdateManyWithoutTenantsNestedInput
  }

  export type listing_mediaCreateWithoutMediaInput = {
    position?: number
    listings: listingsCreateNestedOneWithoutListing_mediaInput
  }

  export type listing_mediaUncheckedCreateWithoutMediaInput = {
    listing_id: string
    position?: number
  }

  export type listing_mediaCreateOrConnectWithoutMediaInput = {
    where: listing_mediaWhereUniqueInput
    create: XOR<listing_mediaCreateWithoutMediaInput, listing_mediaUncheckedCreateWithoutMediaInput>
  }

  export type listing_mediaCreateManyMediaInputEnvelope = {
    data: listing_mediaCreateManyMediaInput | listing_mediaCreateManyMediaInput[]
    skipDuplicates?: boolean
  }

  export type listingsCreateWithoutMediaInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    type?: string
    category?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    duration_minutes?: number | null
    capacity?: number | null
    is_bookable?: boolean | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    leads?: leadsCreateNestedManyWithoutListingsInput
    listing_media?: listing_mediaCreateNestedManyWithoutListingsInput
    tenants: TenantCreateNestedOneWithoutListingsInput
  }

  export type listingsUncheckedCreateWithoutMediaInput = {
    id?: string
    tenant_id: string
    title: string
    slug: string
    description?: string | null
    type?: string
    category?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    duration_minutes?: number | null
    capacity?: number | null
    is_bookable?: boolean | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    leads?: leadsUncheckedCreateNestedManyWithoutListingsInput
    listing_media?: listing_mediaUncheckedCreateNestedManyWithoutListingsInput
  }

  export type listingsCreateOrConnectWithoutMediaInput = {
    where: listingsWhereUniqueInput
    create: XOR<listingsCreateWithoutMediaInput, listingsUncheckedCreateWithoutMediaInput>
  }

  export type listingsCreateManyMediaInputEnvelope = {
    data: listingsCreateManyMediaInput | listingsCreateManyMediaInput[]
    skipDuplicates?: boolean
  }

  export type TenantCreateWithoutMediaInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    hello?: helloCreateNestedManyWithoutTenantsInput
    leads?: leadsCreateNestedManyWithoutTenantsInput
    listings?: listingsCreateNestedManyWithoutTenantsInput
    memberships?: MembershipCreateNestedManyWithoutTenantsInput
    sites?: sitesCreateNestedManyWithoutTenantsInput
    tenant_templates?: tenant_templatesCreateNestedManyWithoutTenantsInput
    users?: UserCreateNestedManyWithoutTenantsInput
  }

  export type TenantUncheckedCreateWithoutMediaInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    hello?: helloUncheckedCreateNestedManyWithoutTenantsInput
    leads?: leadsUncheckedCreateNestedManyWithoutTenantsInput
    listings?: listingsUncheckedCreateNestedManyWithoutTenantsInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutTenantsInput
    sites?: sitesUncheckedCreateNestedManyWithoutTenantsInput
    tenant_templates?: tenant_templatesUncheckedCreateNestedManyWithoutTenantsInput
    users?: UserUncheckedCreateNestedManyWithoutTenantsInput
  }

  export type TenantCreateOrConnectWithoutMediaInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutMediaInput, TenantUncheckedCreateWithoutMediaInput>
  }

  export type listing_mediaUpsertWithWhereUniqueWithoutMediaInput = {
    where: listing_mediaWhereUniqueInput
    update: XOR<listing_mediaUpdateWithoutMediaInput, listing_mediaUncheckedUpdateWithoutMediaInput>
    create: XOR<listing_mediaCreateWithoutMediaInput, listing_mediaUncheckedCreateWithoutMediaInput>
  }

  export type listing_mediaUpdateWithWhereUniqueWithoutMediaInput = {
    where: listing_mediaWhereUniqueInput
    data: XOR<listing_mediaUpdateWithoutMediaInput, listing_mediaUncheckedUpdateWithoutMediaInput>
  }

  export type listing_mediaUpdateManyWithWhereWithoutMediaInput = {
    where: listing_mediaScalarWhereInput
    data: XOR<listing_mediaUpdateManyMutationInput, listing_mediaUncheckedUpdateManyWithoutMediaInput>
  }

  export type listingsUpsertWithWhereUniqueWithoutMediaInput = {
    where: listingsWhereUniqueInput
    update: XOR<listingsUpdateWithoutMediaInput, listingsUncheckedUpdateWithoutMediaInput>
    create: XOR<listingsCreateWithoutMediaInput, listingsUncheckedCreateWithoutMediaInput>
  }

  export type listingsUpdateWithWhereUniqueWithoutMediaInput = {
    where: listingsWhereUniqueInput
    data: XOR<listingsUpdateWithoutMediaInput, listingsUncheckedUpdateWithoutMediaInput>
  }

  export type listingsUpdateManyWithWhereWithoutMediaInput = {
    where: listingsScalarWhereInput
    data: XOR<listingsUpdateManyMutationInput, listingsUncheckedUpdateManyWithoutMediaInput>
  }

  export type TenantUpsertWithoutMediaInput = {
    update: XOR<TenantUpdateWithoutMediaInput, TenantUncheckedUpdateWithoutMediaInput>
    create: XOR<TenantCreateWithoutMediaInput, TenantUncheckedCreateWithoutMediaInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutMediaInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutMediaInput, TenantUncheckedUpdateWithoutMediaInput>
  }

  export type TenantUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hello?: helloUpdateManyWithoutTenantsNestedInput
    leads?: leadsUpdateManyWithoutTenantsNestedInput
    listings?: listingsUpdateManyWithoutTenantsNestedInput
    memberships?: MembershipUpdateManyWithoutTenantsNestedInput
    sites?: sitesUpdateManyWithoutTenantsNestedInput
    tenant_templates?: tenant_templatesUpdateManyWithoutTenantsNestedInput
    users?: UserUpdateManyWithoutTenantsNestedInput
  }

  export type TenantUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hello?: helloUncheckedUpdateManyWithoutTenantsNestedInput
    leads?: leadsUncheckedUpdateManyWithoutTenantsNestedInput
    listings?: listingsUncheckedUpdateManyWithoutTenantsNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutTenantsNestedInput
    sites?: sitesUncheckedUpdateManyWithoutTenantsNestedInput
    tenant_templates?: tenant_templatesUncheckedUpdateManyWithoutTenantsNestedInput
    users?: UserUncheckedUpdateManyWithoutTenantsNestedInput
  }

  export type sitesCreateWithoutPagesInput = {
    id?: string
    key: string
    name: string
    domain?: string | null
    created_at?: Date | string
    tenants: TenantCreateNestedOneWithoutSitesInput
  }

  export type sitesUncheckedCreateWithoutPagesInput = {
    id?: string
    tenant_id: string
    key: string
    name: string
    domain?: string | null
    created_at?: Date | string
  }

  export type sitesCreateOrConnectWithoutPagesInput = {
    where: sitesWhereUniqueInput
    create: XOR<sitesCreateWithoutPagesInput, sitesUncheckedCreateWithoutPagesInput>
  }

  export type templatesCreateWithoutPagesInput = {
    id?: string
    key: string
    name: string
    category?: string | null
    version?: number
    content?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    tenant_templates?: tenant_templatesCreateNestedManyWithoutTemplatesInput
  }

  export type templatesUncheckedCreateWithoutPagesInput = {
    id?: string
    key: string
    name: string
    category?: string | null
    version?: number
    content?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    tenant_templates?: tenant_templatesUncheckedCreateNestedManyWithoutTemplatesInput
  }

  export type templatesCreateOrConnectWithoutPagesInput = {
    where: templatesWhereUniqueInput
    create: XOR<templatesCreateWithoutPagesInput, templatesUncheckedCreateWithoutPagesInput>
  }

  export type sitesUpsertWithoutPagesInput = {
    update: XOR<sitesUpdateWithoutPagesInput, sitesUncheckedUpdateWithoutPagesInput>
    create: XOR<sitesCreateWithoutPagesInput, sitesUncheckedCreateWithoutPagesInput>
    where?: sitesWhereInput
  }

  export type sitesUpdateToOneWithWhereWithoutPagesInput = {
    where?: sitesWhereInput
    data: XOR<sitesUpdateWithoutPagesInput, sitesUncheckedUpdateWithoutPagesInput>
  }

  export type sitesUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUpdateOneRequiredWithoutSitesNestedInput
  }

  export type sitesUncheckedUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type templatesUpsertWithoutPagesInput = {
    update: XOR<templatesUpdateWithoutPagesInput, templatesUncheckedUpdateWithoutPagesInput>
    create: XOR<templatesCreateWithoutPagesInput, templatesUncheckedCreateWithoutPagesInput>
    where?: templatesWhereInput
  }

  export type templatesUpdateToOneWithWhereWithoutPagesInput = {
    where?: templatesWhereInput
    data: XOR<templatesUpdateWithoutPagesInput, templatesUncheckedUpdateWithoutPagesInput>
  }

  export type templatesUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant_templates?: tenant_templatesUpdateManyWithoutTemplatesNestedInput
  }

  export type templatesUncheckedUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant_templates?: tenant_templatesUncheckedUpdateManyWithoutTemplatesNestedInput
  }

  export type pagesCreateWithoutSitesInput = {
    id?: string
    slug: string
    overrides?: JsonNullValueInput | InputJsonValue
    published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    templates: templatesCreateNestedOneWithoutPagesInput
  }

  export type pagesUncheckedCreateWithoutSitesInput = {
    id?: string
    template_id: string
    slug: string
    overrides?: JsonNullValueInput | InputJsonValue
    published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type pagesCreateOrConnectWithoutSitesInput = {
    where: pagesWhereUniqueInput
    create: XOR<pagesCreateWithoutSitesInput, pagesUncheckedCreateWithoutSitesInput>
  }

  export type pagesCreateManySitesInputEnvelope = {
    data: pagesCreateManySitesInput | pagesCreateManySitesInput[]
    skipDuplicates?: boolean
  }

  export type TenantCreateWithoutSitesInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    hello?: helloCreateNestedManyWithoutTenantsInput
    leads?: leadsCreateNestedManyWithoutTenantsInput
    listings?: listingsCreateNestedManyWithoutTenantsInput
    media?: mediaCreateNestedManyWithoutTenantsInput
    memberships?: MembershipCreateNestedManyWithoutTenantsInput
    tenant_templates?: tenant_templatesCreateNestedManyWithoutTenantsInput
    users?: UserCreateNestedManyWithoutTenantsInput
  }

  export type TenantUncheckedCreateWithoutSitesInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    hello?: helloUncheckedCreateNestedManyWithoutTenantsInput
    leads?: leadsUncheckedCreateNestedManyWithoutTenantsInput
    listings?: listingsUncheckedCreateNestedManyWithoutTenantsInput
    media?: mediaUncheckedCreateNestedManyWithoutTenantsInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutTenantsInput
    tenant_templates?: tenant_templatesUncheckedCreateNestedManyWithoutTenantsInput
    users?: UserUncheckedCreateNestedManyWithoutTenantsInput
  }

  export type TenantCreateOrConnectWithoutSitesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutSitesInput, TenantUncheckedCreateWithoutSitesInput>
  }

  export type pagesUpsertWithWhereUniqueWithoutSitesInput = {
    where: pagesWhereUniqueInput
    update: XOR<pagesUpdateWithoutSitesInput, pagesUncheckedUpdateWithoutSitesInput>
    create: XOR<pagesCreateWithoutSitesInput, pagesUncheckedCreateWithoutSitesInput>
  }

  export type pagesUpdateWithWhereUniqueWithoutSitesInput = {
    where: pagesWhereUniqueInput
    data: XOR<pagesUpdateWithoutSitesInput, pagesUncheckedUpdateWithoutSitesInput>
  }

  export type pagesUpdateManyWithWhereWithoutSitesInput = {
    where: pagesScalarWhereInput
    data: XOR<pagesUpdateManyMutationInput, pagesUncheckedUpdateManyWithoutSitesInput>
  }

  export type pagesScalarWhereInput = {
    AND?: pagesScalarWhereInput | pagesScalarWhereInput[]
    OR?: pagesScalarWhereInput[]
    NOT?: pagesScalarWhereInput | pagesScalarWhereInput[]
    id?: UuidFilter<"pages"> | string
    site_id?: UuidFilter<"pages"> | string
    template_id?: UuidFilter<"pages"> | string
    slug?: StringFilter<"pages"> | string
    overrides?: JsonFilter<"pages">
    published?: BoolFilter<"pages"> | boolean
    created_at?: DateTimeFilter<"pages"> | Date | string
    updated_at?: DateTimeFilter<"pages"> | Date | string
  }

  export type TenantUpsertWithoutSitesInput = {
    update: XOR<TenantUpdateWithoutSitesInput, TenantUncheckedUpdateWithoutSitesInput>
    create: XOR<TenantCreateWithoutSitesInput, TenantUncheckedCreateWithoutSitesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutSitesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutSitesInput, TenantUncheckedUpdateWithoutSitesInput>
  }

  export type TenantUpdateWithoutSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hello?: helloUpdateManyWithoutTenantsNestedInput
    leads?: leadsUpdateManyWithoutTenantsNestedInput
    listings?: listingsUpdateManyWithoutTenantsNestedInput
    media?: mediaUpdateManyWithoutTenantsNestedInput
    memberships?: MembershipUpdateManyWithoutTenantsNestedInput
    tenant_templates?: tenant_templatesUpdateManyWithoutTenantsNestedInput
    users?: UserUpdateManyWithoutTenantsNestedInput
  }

  export type TenantUncheckedUpdateWithoutSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hello?: helloUncheckedUpdateManyWithoutTenantsNestedInput
    leads?: leadsUncheckedUpdateManyWithoutTenantsNestedInput
    listings?: listingsUncheckedUpdateManyWithoutTenantsNestedInput
    media?: mediaUncheckedUpdateManyWithoutTenantsNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutTenantsNestedInput
    tenant_templates?: tenant_templatesUncheckedUpdateManyWithoutTenantsNestedInput
    users?: UserUncheckedUpdateManyWithoutTenantsNestedInput
  }

  export type pagesCreateWithoutTemplatesInput = {
    id?: string
    slug: string
    overrides?: JsonNullValueInput | InputJsonValue
    published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    sites: sitesCreateNestedOneWithoutPagesInput
  }

  export type pagesUncheckedCreateWithoutTemplatesInput = {
    id?: string
    site_id: string
    slug: string
    overrides?: JsonNullValueInput | InputJsonValue
    published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type pagesCreateOrConnectWithoutTemplatesInput = {
    where: pagesWhereUniqueInput
    create: XOR<pagesCreateWithoutTemplatesInput, pagesUncheckedCreateWithoutTemplatesInput>
  }

  export type pagesCreateManyTemplatesInputEnvelope = {
    data: pagesCreateManyTemplatesInput | pagesCreateManyTemplatesInput[]
    skipDuplicates?: boolean
  }

  export type tenant_templatesCreateWithoutTemplatesInput = {
    enabled?: boolean
    overrides?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    tenants: TenantCreateNestedOneWithoutTenant_templatesInput
  }

  export type tenant_templatesUncheckedCreateWithoutTemplatesInput = {
    tenant_id: string
    enabled?: boolean
    overrides?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type tenant_templatesCreateOrConnectWithoutTemplatesInput = {
    where: tenant_templatesWhereUniqueInput
    create: XOR<tenant_templatesCreateWithoutTemplatesInput, tenant_templatesUncheckedCreateWithoutTemplatesInput>
  }

  export type tenant_templatesCreateManyTemplatesInputEnvelope = {
    data: tenant_templatesCreateManyTemplatesInput | tenant_templatesCreateManyTemplatesInput[]
    skipDuplicates?: boolean
  }

  export type pagesUpsertWithWhereUniqueWithoutTemplatesInput = {
    where: pagesWhereUniqueInput
    update: XOR<pagesUpdateWithoutTemplatesInput, pagesUncheckedUpdateWithoutTemplatesInput>
    create: XOR<pagesCreateWithoutTemplatesInput, pagesUncheckedCreateWithoutTemplatesInput>
  }

  export type pagesUpdateWithWhereUniqueWithoutTemplatesInput = {
    where: pagesWhereUniqueInput
    data: XOR<pagesUpdateWithoutTemplatesInput, pagesUncheckedUpdateWithoutTemplatesInput>
  }

  export type pagesUpdateManyWithWhereWithoutTemplatesInput = {
    where: pagesScalarWhereInput
    data: XOR<pagesUpdateManyMutationInput, pagesUncheckedUpdateManyWithoutTemplatesInput>
  }

  export type tenant_templatesUpsertWithWhereUniqueWithoutTemplatesInput = {
    where: tenant_templatesWhereUniqueInput
    update: XOR<tenant_templatesUpdateWithoutTemplatesInput, tenant_templatesUncheckedUpdateWithoutTemplatesInput>
    create: XOR<tenant_templatesCreateWithoutTemplatesInput, tenant_templatesUncheckedCreateWithoutTemplatesInput>
  }

  export type tenant_templatesUpdateWithWhereUniqueWithoutTemplatesInput = {
    where: tenant_templatesWhereUniqueInput
    data: XOR<tenant_templatesUpdateWithoutTemplatesInput, tenant_templatesUncheckedUpdateWithoutTemplatesInput>
  }

  export type tenant_templatesUpdateManyWithWhereWithoutTemplatesInput = {
    where: tenant_templatesScalarWhereInput
    data: XOR<tenant_templatesUpdateManyMutationInput, tenant_templatesUncheckedUpdateManyWithoutTemplatesInput>
  }

  export type templatesCreateWithoutTenant_templatesInput = {
    id?: string
    key: string
    name: string
    category?: string | null
    version?: number
    content?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    pages?: pagesCreateNestedManyWithoutTemplatesInput
  }

  export type templatesUncheckedCreateWithoutTenant_templatesInput = {
    id?: string
    key: string
    name: string
    category?: string | null
    version?: number
    content?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    pages?: pagesUncheckedCreateNestedManyWithoutTemplatesInput
  }

  export type templatesCreateOrConnectWithoutTenant_templatesInput = {
    where: templatesWhereUniqueInput
    create: XOR<templatesCreateWithoutTenant_templatesInput, templatesUncheckedCreateWithoutTenant_templatesInput>
  }

  export type TenantCreateWithoutTenant_templatesInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    hello?: helloCreateNestedManyWithoutTenantsInput
    leads?: leadsCreateNestedManyWithoutTenantsInput
    listings?: listingsCreateNestedManyWithoutTenantsInput
    media?: mediaCreateNestedManyWithoutTenantsInput
    memberships?: MembershipCreateNestedManyWithoutTenantsInput
    sites?: sitesCreateNestedManyWithoutTenantsInput
    users?: UserCreateNestedManyWithoutTenantsInput
  }

  export type TenantUncheckedCreateWithoutTenant_templatesInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    hello?: helloUncheckedCreateNestedManyWithoutTenantsInput
    leads?: leadsUncheckedCreateNestedManyWithoutTenantsInput
    listings?: listingsUncheckedCreateNestedManyWithoutTenantsInput
    media?: mediaUncheckedCreateNestedManyWithoutTenantsInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutTenantsInput
    sites?: sitesUncheckedCreateNestedManyWithoutTenantsInput
    users?: UserUncheckedCreateNestedManyWithoutTenantsInput
  }

  export type TenantCreateOrConnectWithoutTenant_templatesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutTenant_templatesInput, TenantUncheckedCreateWithoutTenant_templatesInput>
  }

  export type templatesUpsertWithoutTenant_templatesInput = {
    update: XOR<templatesUpdateWithoutTenant_templatesInput, templatesUncheckedUpdateWithoutTenant_templatesInput>
    create: XOR<templatesCreateWithoutTenant_templatesInput, templatesUncheckedCreateWithoutTenant_templatesInput>
    where?: templatesWhereInput
  }

  export type templatesUpdateToOneWithWhereWithoutTenant_templatesInput = {
    where?: templatesWhereInput
    data: XOR<templatesUpdateWithoutTenant_templatesInput, templatesUncheckedUpdateWithoutTenant_templatesInput>
  }

  export type templatesUpdateWithoutTenant_templatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: pagesUpdateManyWithoutTemplatesNestedInput
  }

  export type templatesUncheckedUpdateWithoutTenant_templatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: pagesUncheckedUpdateManyWithoutTemplatesNestedInput
  }

  export type TenantUpsertWithoutTenant_templatesInput = {
    update: XOR<TenantUpdateWithoutTenant_templatesInput, TenantUncheckedUpdateWithoutTenant_templatesInput>
    create: XOR<TenantCreateWithoutTenant_templatesInput, TenantUncheckedCreateWithoutTenant_templatesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutTenant_templatesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutTenant_templatesInput, TenantUncheckedUpdateWithoutTenant_templatesInput>
  }

  export type TenantUpdateWithoutTenant_templatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hello?: helloUpdateManyWithoutTenantsNestedInput
    leads?: leadsUpdateManyWithoutTenantsNestedInput
    listings?: listingsUpdateManyWithoutTenantsNestedInput
    media?: mediaUpdateManyWithoutTenantsNestedInput
    memberships?: MembershipUpdateManyWithoutTenantsNestedInput
    sites?: sitesUpdateManyWithoutTenantsNestedInput
    users?: UserUpdateManyWithoutTenantsNestedInput
  }

  export type TenantUncheckedUpdateWithoutTenant_templatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hello?: helloUncheckedUpdateManyWithoutTenantsNestedInput
    leads?: leadsUncheckedUpdateManyWithoutTenantsNestedInput
    listings?: listingsUncheckedUpdateManyWithoutTenantsNestedInput
    media?: mediaUncheckedUpdateManyWithoutTenantsNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutTenantsNestedInput
    sites?: sitesUncheckedUpdateManyWithoutTenantsNestedInput
    users?: UserUncheckedUpdateManyWithoutTenantsNestedInput
  }

  export type helloCreateManyTenantsInput = {
    id?: string
    msg: string
    created_at?: Date | string
  }

  export type leadsCreateManyTenantsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    message?: string | null
    subject?: string | null
    source?: string | null
    page_url?: string | null
    referrer?: string | null
    listing_id?: string | null
    status?: string | null
    assigned_to?: string | null
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type listingsCreateManyTenantsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    type?: string
    category?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    duration_minutes?: number | null
    capacity?: number | null
    is_bookable?: boolean | null
    featured_image_id?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type mediaCreateManyTenantsInput = {
    id?: string
    filename: string
    original_filename: string
    mime_type: string
    size_bytes: number
    s3_key: string
    s3_bucket: string
    cloudfront_url?: string | null
    width?: number | null
    height?: number | null
    alt_text?: string | null
    caption?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    uploaded_by?: string | null
    created_at?: Date | string
  }

  export type MembershipCreateManyTenantsInput = {
    account_id: string
    role?: string
    created_at?: Date | string
  }

  export type sitesCreateManyTenantsInput = {
    id?: string
    key: string
    name: string
    domain?: string | null
    created_at?: Date | string
  }

  export type tenant_templatesCreateManyTenantsInput = {
    template_id: string
    enabled?: boolean
    overrides?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateManyTenantsInput = {
    id?: string
    email: string
    role?: string
    created_at?: Date | string | null
  }

  export type helloUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    msg?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type helloUncheckedUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    msg?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type helloUncheckedUpdateManyWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    msg?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leadsUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    page_url?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: listingsUpdateOneWithoutLeadsNestedInput
  }

  export type leadsUncheckedUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    page_url?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    listing_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leadsUncheckedUpdateManyWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    page_url?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    listing_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type listingsUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    is_bookable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: leadsUpdateManyWithoutListingsNestedInput
    listing_media?: listing_mediaUpdateManyWithoutListingsNestedInput
    media?: mediaUpdateOneWithoutListingsNestedInput
  }

  export type listingsUncheckedUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    is_bookable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    featured_image_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: leadsUncheckedUpdateManyWithoutListingsNestedInput
    listing_media?: listing_mediaUncheckedUpdateManyWithoutListingsNestedInput
  }

  export type listingsUncheckedUpdateManyWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    is_bookable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    featured_image_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mediaUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    original_filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    size_bytes?: IntFieldUpdateOperationsInput | number
    s3_key?: StringFieldUpdateOperationsInput | string
    s3_bucket?: StringFieldUpdateOperationsInput | string
    cloudfront_url?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    uploaded_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    listing_media?: listing_mediaUpdateManyWithoutMediaNestedInput
    listings?: listingsUpdateManyWithoutMediaNestedInput
  }

  export type mediaUncheckedUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    original_filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    size_bytes?: IntFieldUpdateOperationsInput | number
    s3_key?: StringFieldUpdateOperationsInput | string
    s3_bucket?: StringFieldUpdateOperationsInput | string
    cloudfront_url?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    uploaded_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    listing_media?: listing_mediaUncheckedUpdateManyWithoutMediaNestedInput
    listings?: listingsUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type mediaUncheckedUpdateManyWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    original_filename?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    size_bytes?: IntFieldUpdateOperationsInput | number
    s3_key?: StringFieldUpdateOperationsInput | string
    s3_bucket?: StringFieldUpdateOperationsInput | string
    cloudfront_url?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    uploaded_by?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUpdateWithoutTenantsInput = {
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: accountsUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipUncheckedUpdateWithoutTenantsInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUncheckedUpdateManyWithoutTenantsInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sitesUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: pagesUpdateManyWithoutSitesNestedInput
  }

  export type sitesUncheckedUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: pagesUncheckedUpdateManyWithoutSitesNestedInput
  }

  export type sitesUncheckedUpdateManyWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tenant_templatesUpdateWithoutTenantsInput = {
    enabled?: BoolFieldUpdateOperationsInput | boolean
    overrides?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: templatesUpdateOneRequiredWithoutTenant_templatesNestedInput
  }

  export type tenant_templatesUncheckedUpdateWithoutTenantsInput = {
    template_id?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    overrides?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tenant_templatesUncheckedUpdateManyWithoutTenantsInput = {
    template_id?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    overrides?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MembershipCreateManyAccountsInput = {
    tenant_id: string
    role?: string
    created_at?: Date | string
  }

  export type MembershipUpdateWithoutAccountsInput = {
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipUncheckedUpdateWithoutAccountsInput = {
    tenant_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUncheckedUpdateManyWithoutAccountsInput = {
    tenant_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leadsCreateManyListingsInput = {
    id?: string
    tenant_id: string
    name: string
    email: string
    phone?: string | null
    message?: string | null
    subject?: string | null
    source?: string | null
    page_url?: string | null
    referrer?: string | null
    status?: string | null
    assigned_to?: string | null
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type listing_mediaCreateManyListingsInput = {
    media_id: string
    position?: number
  }

  export type leadsUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    page_url?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUpdateOneRequiredWithoutLeadsNestedInput
  }

  export type leadsUncheckedUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    page_url?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leadsUncheckedUpdateManyWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    page_url?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type listing_mediaUpdateWithoutListingsInput = {
    position?: IntFieldUpdateOperationsInput | number
    media?: mediaUpdateOneRequiredWithoutListing_mediaNestedInput
  }

  export type listing_mediaUncheckedUpdateWithoutListingsInput = {
    media_id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type listing_mediaUncheckedUpdateManyWithoutListingsInput = {
    media_id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type listing_mediaCreateManyMediaInput = {
    listing_id: string
    position?: number
  }

  export type listingsCreateManyMediaInput = {
    id?: string
    tenant_id: string
    title: string
    slug: string
    description?: string | null
    type?: string
    category?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    currency?: string | null
    duration_minutes?: number | null
    capacity?: number | null
    is_bookable?: boolean | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: string | null
    published_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type listing_mediaUpdateWithoutMediaInput = {
    position?: IntFieldUpdateOperationsInput | number
    listings?: listingsUpdateOneRequiredWithoutListing_mediaNestedInput
  }

  export type listing_mediaUncheckedUpdateWithoutMediaInput = {
    listing_id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type listing_mediaUncheckedUpdateManyWithoutMediaInput = {
    listing_id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type listingsUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    is_bookable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: leadsUpdateManyWithoutListingsNestedInput
    listing_media?: listing_mediaUpdateManyWithoutListingsNestedInput
    tenants?: TenantUpdateOneRequiredWithoutListingsNestedInput
  }

  export type listingsUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    is_bookable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: leadsUncheckedUpdateManyWithoutListingsNestedInput
    listing_media?: listing_mediaUncheckedUpdateManyWithoutListingsNestedInput
  }

  export type listingsUncheckedUpdateManyWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    is_bookable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagesCreateManySitesInput = {
    id?: string
    template_id: string
    slug: string
    overrides?: JsonNullValueInput | InputJsonValue
    published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type pagesUpdateWithoutSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    overrides?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: templatesUpdateOneRequiredWithoutPagesNestedInput
  }

  export type pagesUncheckedUpdateWithoutSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    template_id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    overrides?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagesUncheckedUpdateManyWithoutSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    template_id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    overrides?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagesCreateManyTemplatesInput = {
    id?: string
    site_id: string
    slug: string
    overrides?: JsonNullValueInput | InputJsonValue
    published?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type tenant_templatesCreateManyTemplatesInput = {
    tenant_id: string
    enabled?: boolean
    overrides?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type pagesUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    overrides?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sites?: sitesUpdateOneRequiredWithoutPagesNestedInput
  }

  export type pagesUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    site_id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    overrides?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pagesUncheckedUpdateManyWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    site_id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    overrides?: JsonNullValueInput | InputJsonValue
    published?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tenant_templatesUpdateWithoutTemplatesInput = {
    enabled?: BoolFieldUpdateOperationsInput | boolean
    overrides?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tenants?: TenantUpdateOneRequiredWithoutTenant_templatesNestedInput
  }

  export type tenant_templatesUncheckedUpdateWithoutTemplatesInput = {
    tenant_id?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    overrides?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tenant_templatesUncheckedUpdateManyWithoutTemplatesInput = {
    tenant_id?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    overrides?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TenantCountOutputTypeDefaultArgs instead
     */
    export type TenantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountsCountOutputTypeDefaultArgs instead
     */
    export type AccountsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ListingsCountOutputTypeDefaultArgs instead
     */
    export type ListingsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ListingsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MediaCountOutputTypeDefaultArgs instead
     */
    export type MediaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MediaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SitesCountOutputTypeDefaultArgs instead
     */
    export type SitesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SitesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TemplatesCountOutputTypeDefaultArgs instead
     */
    export type TemplatesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TemplatesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TenantDefaultArgs instead
     */
    export type TenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MembershipDefaultArgs instead
     */
    export type MembershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MembershipDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditLogDefaultArgs instead
     */
    export type AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use accountsDefaultArgs instead
     */
    export type accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = accountsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use helloDefaultArgs instead
     */
    export type helloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = helloDefaultArgs<ExtArgs>
    /**
     * @deprecated Use leadsDefaultArgs instead
     */
    export type leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = leadsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use listing_mediaDefaultArgs instead
     */
    export type listing_mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = listing_mediaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use listingsDefaultArgs instead
     */
    export type listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = listingsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use mediaDefaultArgs instead
     */
    export type mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = mediaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use pagesDefaultArgs instead
     */
    export type pagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = pagesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use sitesDefaultArgs instead
     */
    export type sitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = sitesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use templatesDefaultArgs instead
     */
    export type templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = templatesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tenant_templatesDefaultArgs instead
     */
    export type tenant_templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tenant_templatesDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
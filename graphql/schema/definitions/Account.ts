import Definition, { OPTIONAL_STRING, REQUIRED_STRING } from "@/graphql/schema/definition";

const accountFields = [
  "userId",
  "provider",
  "remoteId",
  "scopes",
  "accessToken",
  "refreshToken",
  "accessTokenExpiry",
  "syncToken",
] as const;
type AccountFields = typeof accountFields[number];

// export const accountFields: Record<AccountFieldNames, Field> = {
//   userId: { required: true, type: "ID" },
//   provider: REQUIRED_STRING,
//   remoteId: { required: true, unique: true, type: "String" },
//   scopes: { required: true, type: "Array", typeArg: "String" },
//   accessToken: OPTIONAL_STRING,
//   refreshToken: OPTIONAL_STRING,
//   accessTokenExpiry: { required: false, type: "DateTime" },
//   syncToken: OPTIONAL_STRING,
// };

const accountDefinition: Definition<AccountFields> = {
  name: "account",
  fields: {
    userId: { required: true, type: "ID" },
    provider: REQUIRED_STRING,
    remoteId: { required: true, unique: true, type: "String" },
    scopes: { required: true, type: "Array", typeArg: "String" },
    accessToken: OPTIONAL_STRING,
    refreshToken: OPTIONAL_STRING,
    accessTokenExpiry: { required: false, type: "DateTime" },
    syncToken: OPTIONAL_STRING,
  },
};

export default accountDefinition;

// @TypeGraphQL.Field(() => [Account], { nullable: false })
// @Property({ required: true, default: [] })
// accounts!: Account[];

// @TypeGraphQL.Field(() => [Calendar], { nullable: false })
// @Property({ required: true, default: [] })
// calendars!: Calendar[];

// @TypeGraphQL.Field(() => [Identity], { nullable: false })
// @Property({ required: true, default: [] })
// identities!: Identity[];

// @TypeGraphQL.Field(() => [Value], { nullable: false })
// @Property({ required: true, default: [] })
// values!: Value[];

// @TypeGraphQL.Field(() => [Belief], { nullable: false })
// @Property({ required: true, default: [] })
// beliefs!: Belief[];

// @TypeGraphQL.Field(() => [Mantra], { nullable: false })
// @Property({ required: true, default: [] })
// mantras!: Mantra[];

// @TypeGraphQL.Field(() => [Habit], { nullable: false })
// @Property({ required: true, default: [] })
// habits!: Habit[];

// @TypeGraphQL.Field(() => [Task], { nullable: true })
// @Property({ required: false, default: [] })
// tasks!: Task[];

// @TypeGraphQL.Field(() => [Dashboard], { nullable: true })
// @Property({ required: false, default: [] })
// dashboards!: Dashboard[];

// @TypeGraphQL.Field(() => [Notebook], { nullable: true })
// @Property({ required: false, default: [] })
// notebooks!: Notebook[];

// notebookPermissions?: NotebookUserPermission[];

// @TypeGraphQL.Field(() => [List], { nullable: true })
// @Property({ required: false, default: [] })
// lists?: List[];

// readings?: Reading[];

// bookshelves?: Bookshelf[];

// bookReviews?: BookReview[];

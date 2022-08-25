import Definition, {
  OPTIONAL_BOOLEAN,
  OPTIONAL_STRING,
  REQUIRED_STRING,
} from "@/graphql/schema/definition";

const userFields = [
  "name",
  "email",
  "emailVerified",
  "image",
  "isAdmin",
  "password",
  "settings",
  "lastLogin",
  "accounts",
  "calendars",
  "notebooks",
  "habits",
  "calendarEvents",
  "goals",
  "mantras",
  "tasks",
] as const;

type UserFields = typeof userFields[number];

const definition: Definition<UserFields> = {
  name: "user",
  modelImports: [
    "Account",
    "Calendar",
    "CalendarEvent",
    "Goal",
    "Habit",
    "Mantra",
    "Notebook",
    "Task",
  ],
  fields: {
    name: OPTIONAL_STRING,
    email: { ...REQUIRED_STRING, unique: true },
    emailVerified: OPTIONAL_BOOLEAN,
    image: OPTIONAL_STRING,
    isAdmin: { required: true, default: false, type: "Boolean" },
    settings: {
      required: true,
      default: {},
      type: "Map",
      shape: {
        colorMode: { type: "String", required: false, choices: ["light", "dark"] },
        defaultCalendarId: { type: "ID", required: false },
      },
    },
    lastLogin: { required: false, type: "DateTime" },
    password: { required: false, select: false, type: "String" },
    // archivedAt: { required: false, type: "DateTime" },
    accounts: {
      required: false,
      default: [],
      type: "Array",
      typeArg: "Account",
      typeCast: "[Account]",
    },
    calendars: {
      required: false,
      default: [],
      type: "Array",
      typeArg: "Calendar",
      typeCast: "[Calendar]",
    },
    calendarEvents: {
      required: false,
      default: [],
      type: "Array",
      typeArg: "CalendarEvent",
      typeCast: "[CalendarEvent]",
    },
    goals: { required: false, default: [], type: "Array", typeArg: "Goal", typeCast: "[Goal]" },
    habits: { required: false, default: [], type: "Array", typeArg: "Habit", typeCast: "[Habit]" },
    mantras: {
      required: false,
      default: [],
      type: "Array",
      typeArg: "Mantra",
      typeCast: "[Mantra]",
    },
    notebooks: {
      required: false,
      default: [],
      type: "Array",
      typeArg: "Notebook",
      typeCast: "[Notebook]",
    },
    tasks: { required: false, default: [], type: "Array", typeArg: "Task", typeCast: "[Task]" },
  },
};

export default definition;

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

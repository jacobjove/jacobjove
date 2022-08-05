import Definition, {
  REQUIRED_STRING,
  OPTIONAL_STRING,
  OPTIONAL_BOOLEAN,
} from "@/graphql/schema/definition";
import CalendarModel from "../generated/models/calendar.model";
import { DocumentType } from "@typegoose/typegoose";
import bcrypt from "bcryptjs";

const COST_FACTOR = 12;

const definition: Definition = {
  name: "user",
  modelImports: ["Account", "Calendar", "CalendarEvent", "Habit", "Mantra", "Task"],
  fields: {
    name: OPTIONAL_STRING,
    email: { ...REQUIRED_STRING, unique: true },
    emailVerified: OPTIONAL_BOOLEAN,
    image: OPTIONAL_STRING,
    isAdmin: { required: true, default: false, type: "Boolean", typeCast: "Boolean" },
    settings: { required: true, default: {}, type: "UserSettings", typeCast: "JSON" },
    lastLogin: { required: false, type: "DateTime", typeCast: "DateTime" },
    password: { required: false, select: false, type: "String", typeCast: "String" },
    archivedAt: { required: false, type: "DateTime", typeCast: "DateTime" },
    accounts: { required: false, default: [], type: "Account[]", typeCast: "[Account]" },
    tasks: { required: false, default: [], type: "Task[]", typeCast: "[Task]" },
    calendars: { required: false, default: [], type: "Calendar[]", typeCast: "[Calendar]" },
    calendarEvents: {
      required: false,
      default: [],
      type: "CalendarEvent[]",
      typeCast: "[CalendarEvent]",
    },
    mantras: { required: false, default: [], type: "Mantra[]", typeCast: "[Mantra]" },
    habits: { required: false, default: [], type: "Habit[]", typeCast: "[Habit]" },
  },
  hooks: {
    save: {
      pre: async function (next) {
        const instance = this as DocumentType<any>;
        if (instance.isModified("password") && instance.password) {
          instance.password = await bcrypt.hash(instance.password, COST_FACTOR);
        }
        return next();
      },
      post: async (user: any) => {
        if (!user.calendars?.length) {
          const defaultCalendar = await CalendarModel.create({
            userId: user.id,
            name: "Default calendar",
          });
          user.calendars = [defaultCalendar];
          user.markModified("calendars");
          user.settings.defaultCalendarId = defaultCalendar.id;
          user.markModified("settings");
          user.save();
        }
      },
    },
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

import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardCreateManyInput } from "../../../inputs/DashboardCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDashboardArgs {
  @TypeGraphQL.Field(() => [DashboardCreateManyInput], { nullable: false })
  data!: DashboardCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

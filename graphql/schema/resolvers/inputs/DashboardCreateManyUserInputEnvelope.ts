import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardCreateManyUserInput } from "../inputs/DashboardCreateManyUserInput";

@TypeGraphQL.InputType("DashboardCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class DashboardCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(() => [DashboardCreateManyUserInput], { nullable: false })
  data!: DashboardCreateManyUserInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

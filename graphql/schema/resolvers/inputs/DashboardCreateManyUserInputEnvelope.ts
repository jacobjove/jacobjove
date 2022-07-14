import * as TypeGraphQL from "type-graphql";
import { DashboardCreateManyUserInput } from "../inputs/DashboardCreateManyUserInput";

@TypeGraphQL.InputType("DashboardCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class DashboardCreateManyUserInputEnvelope {
  @TypeGraphQL.Field((_type) => [DashboardCreateManyUserInput], {
    nullable: false,
  })
  data!: DashboardCreateManyUserInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}

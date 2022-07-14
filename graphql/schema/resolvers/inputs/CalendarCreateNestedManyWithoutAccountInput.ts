import * as TypeGraphQL from "type-graphql";
import { CalendarCreateManyAccountInputEnvelope } from "../inputs/CalendarCreateManyAccountInputEnvelope";
import { CalendarCreateOrConnectWithoutAccountInput } from "../inputs/CalendarCreateOrConnectWithoutAccountInput";
import { CalendarCreateWithoutAccountInput } from "../inputs/CalendarCreateWithoutAccountInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarCreateNestedManyWithoutAccountInput", {
  isAbstract: true,
})
export class CalendarCreateNestedManyWithoutAccountInput {
  @TypeGraphQL.Field((_type) => [CalendarCreateWithoutAccountInput], {
    nullable: true,
  })
  create?: CalendarCreateWithoutAccountInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarCreateOrConnectWithoutAccountInput], {
    nullable: true,
  })
  connectOrCreate?: CalendarCreateOrConnectWithoutAccountInput[] | undefined;

  @TypeGraphQL.Field((_type) => CalendarCreateManyAccountInputEnvelope, {
    nullable: true,
  })
  createMany?: CalendarCreateManyAccountInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [CalendarWhereUniqueInput], {
    nullable: true,
  })
  connect?: CalendarWhereUniqueInput[] | undefined;
}

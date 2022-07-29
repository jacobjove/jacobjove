import * as TypeGraphQL from "type-graphql-v2-fork";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableEnumCalendarProviderFieldUpdateOperationsInput } from "../inputs/NullableEnumCalendarProviderFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CalendarUpdateManyMutationInput", {
  isAbstract: true,
})
export class CalendarUpdateManyMutationInput {
  @TypeGraphQL.Field({ nullable: true })
  uid?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  color?: string | null | undefined;

  @TypeGraphQL.Field((_type) => NullableEnumCalendarProviderFieldUpdateOperationsInput, {
    nullable: true,
  })
  provider?: NullableEnumCalendarProviderFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  remoteId?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  syncToken?: string | null | undefined;

  @TypeGraphQL.Field((_type) => NullableBoolFieldUpdateOperationsInput, { nullable: true })
  primary?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableBoolFieldUpdateOperationsInput, { nullable: true })
  public?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableBoolFieldUpdateOperationsInput, { nullable: true })
  enabled?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;
}

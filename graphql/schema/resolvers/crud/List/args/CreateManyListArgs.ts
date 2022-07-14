import * as TypeGraphQL from "type-graphql";
import { ListCreateManyInput } from "../../../inputs/ListCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyListArgs {
  @TypeGraphQL.Field((_type) => [ListCreateManyInput], {
    nullable: false,
  })
  data!: ListCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}

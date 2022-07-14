import * as TypeGraphQL from "type-graphql";
import { ShelvingCreateManyInput } from "../../../inputs/ShelvingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyShelvingArgs {
  @TypeGraphQL.Field((_type) => [ShelvingCreateManyInput], {
    nullable: false,
  })
  data!: ShelvingCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}

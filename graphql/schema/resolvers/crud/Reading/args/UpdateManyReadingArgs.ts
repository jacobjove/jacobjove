import * as TypeGraphQL from "type-graphql";
import { ReadingUpdateManyMutationInput } from "../../../inputs/ReadingUpdateManyMutationInput";
import { ReadingWhereInput } from "../../../inputs/ReadingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyReadingArgs {
  @TypeGraphQL.Field((_type) => ReadingUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ReadingUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => ReadingWhereInput, {
    nullable: true,
  })
  where?: ReadingWhereInput | undefined;
}

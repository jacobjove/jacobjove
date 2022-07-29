import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingCreateManyInput } from "../../../inputs/ShelvingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyShelvingArgs {
  @TypeGraphQL.Field(() => [ShelvingCreateManyInput], { nullable: false })
  data!: ShelvingCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

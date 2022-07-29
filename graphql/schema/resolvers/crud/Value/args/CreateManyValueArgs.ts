import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueCreateManyInput } from "../../../inputs/ValueCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyValueArgs {
  @TypeGraphQL.Field(() => [ValueCreateManyInput], { nullable: false })
  data!: ValueCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

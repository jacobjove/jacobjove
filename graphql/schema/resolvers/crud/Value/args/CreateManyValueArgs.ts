import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueCreateManyInput } from "../../../inputs/ValueCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyValueArgs {
  @TypeGraphQL.Field((_type) => [ValueCreateManyInput], { nullable: false })
  data!: ValueCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

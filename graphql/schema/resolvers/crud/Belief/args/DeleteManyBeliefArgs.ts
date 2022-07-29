import * as TypeGraphQL from "type-graphql-v2-fork";
import { BeliefWhereInput } from "../../../inputs/BeliefWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBeliefArgs {
  @TypeGraphQL.Field((_type) => BeliefWhereInput, { nullable: true })
  where?: BeliefWhereInput | undefined;
}

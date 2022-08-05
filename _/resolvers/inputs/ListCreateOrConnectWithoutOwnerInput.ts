import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListCreateWithoutOwnerInput } from "../inputs/ListCreateWithoutOwnerInput";
import { ListWhereUniqueInput } from "../inputs/ListWhereUniqueInput";

@TypeGraphQL.InputType("ListCreateOrConnectWithoutOwnerInput", { isAbstract: true })
export class ListCreateOrConnectWithoutOwnerInput {
  @TypeGraphQL.Field(() => ListWhereUniqueInput, { nullable: false })
  where!: ListWhereUniqueInput;

  @TypeGraphQL.Field(() => ListCreateWithoutOwnerInput, { nullable: false })
  create!: ListCreateWithoutOwnerInput;
}

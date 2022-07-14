import * as TypeGraphQL from "type-graphql";
import { ShelvingScalarFieldEnum } from "../../../../enums/ShelvingScalarFieldEnum";
import { ShelvingOrderByWithRelationInput } from "../../../inputs/ShelvingOrderByWithRelationInput";
import { ShelvingWhereInput } from "../../../inputs/ShelvingWhereInput";
import { ShelvingWhereUniqueInput } from "../../../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyShelvingArgs {
  @TypeGraphQL.Field((_type) => ShelvingWhereInput, {
    nullable: true,
  })
  where?: ShelvingWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: ShelvingOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => ShelvingWhereUniqueInput, {
    nullable: true,
  })
  cursor?: ShelvingWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [ShelvingScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        | "id"
        | "bookId"
        | "shelfId"
        | "position"
        | "rationale"
        | "createdAt"
        | "updatedAt"
        | "archivedAt"
      >
    | undefined;
}

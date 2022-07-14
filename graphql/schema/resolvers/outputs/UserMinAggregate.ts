import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("UserMinAggregate", {
  isAbstract: true,
})
export class UserMinAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  uid!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  email!: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  emailVerified!: Date | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  image!: string | null;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  isAdmin!: boolean | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  lastLogin!: Date | null;
}

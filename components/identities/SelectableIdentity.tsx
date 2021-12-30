import SelectionToggleIcon from "@/components/icons/SelectionToggleIcon";
import { Identity } from "@/graphql/schema";
import { gql, useMutation } from "@apollo/client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { FC, MouseEvent } from "react";

const TOGGLE_IDENTIFICATION = gql`
  mutation ToggleUserIdentity($identityId: Int!, $userId: String!, $deleted: DateTime) {
    toggleUserIdentity(identityId: $identityId, userId: $userId, deleted: $deleted) {
      identityId
      userId
      deleted
    }
  }
`;

interface SelectableIdentityProps {
  identity: Identity;
  selected: boolean;
}

const SelectableIdentity: FC<SelectableIdentityProps> = ({
  identity,
  selected: initiallySelected,
}: SelectableIdentityProps) => {
  const { data: session } = useSession();
  const [mutate] = useMutation(TOGGLE_IDENTIFICATION);
  const [selected, setSelected] = React.useState(initiallySelected);
  const toggleUserIdentity = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (session?.user) {
      let deleted = null;
      if (selected) {
        deleted = new Date().toISOString();
      }
      mutate({
        variables: { identityId: identity.id, userId: session.user.id, deleted },
        optimisticResponse: {
          __typename: "Mutation",
          toggleUserIdentity: {
            __typename: "ToggleUserIdentityPayload",
            identityId: identity.id,
            userId: session.user.id,
            deleted,
          },
        },
      });
      setSelected(!selected);
    }
  };
  return (
    <Box key={identity.name} position="relative" display="inline-block">
      <Link href={`/identities/${identity.slug}`} key={identity.name} passHref prefetch={false}>
        <Button
          component="a"
          variant="outlined"
          size="small"
          sx={{
            color: "black",
            margin: "0.6rem 1.2rem",
            display: "inline-block",
            fontSize: "1rem",
            border: ".08rem solid black",
            paddingRight: "2.1rem",
          }}
        >
          {identity.name}
        </Button>
      </Link>
      <Box position="absolute" right="1.5rem" display="inline-block" top="24%">
        <a href={`/identities/${identity.slug}`} onClick={toggleUserIdentity}>
          <SelectionToggleIcon positive={selected} />
        </a>
      </Box>
    </Box>
  );
};

export default SelectableIdentity;

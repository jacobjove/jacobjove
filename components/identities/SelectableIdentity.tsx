import { Identity } from "@/prisma/generated";
import { gql, useMutation } from "@apollo/client";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { FC } from "react";
import SelectionToggleIcon from "@/components/icons/SelectionToggleIcon";

const TOGGLE_IDENTIFICATION = gql`
  mutation ToggleIdentitySelection($identityId: Int!, $userId: String!, $deleted: DateTime) {
    toggleIdentitySelection(identityId: $identityId, userId: $userId, deleted: $deleted) {
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
  const toggleIdentitySelection = (e) => {
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
          toggleIdentitySelection: {
            __typename: "ToggleIdentitySelectionPayload",
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
        <a href={`/identities/${identity.slug}`} onClick={toggleIdentitySelection}>
          <SelectionToggleIcon positive={selected} />
        </a>
      </Box>
    </Box>
  );
};

export default SelectableIdentity;

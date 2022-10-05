import { gql, useMutation } from "@apollo/client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SelectionToggleIcon from "@web/components/icons/SelectionToggleIcon";
import { Identity } from "@web/generated/graphql/types";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { FC, MouseEvent } from "react";

const TOGGLE_IDENTIFICATION = gql`
  mutation ToggleIdentity($identityId: String!, $archivedAt: DateTime) {
    toggleIdentity(identityId: $identityId, archivedAt: $archivedAt) {
      identityId
      archivedAt
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
  const toggleIdentity = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (session) {
      let archivedAt = null;
      if (selected) {
        archivedAt = new Date();
      }
      mutate({
        variables: { identityId: identity.id, archivedAt },
        optimisticResponse: {
          toggleIdentity: {
            __typename: "ToggleIdentityPayload",
            identityId: identity.id,
            archivedAt,
          },
        },
      });
      setSelected(!selected);
    }
  };
  return (
    <Box key={identity.name} position="relative" display="inline-block">
      <Link href={`/identities/`} key={identity.name} passHref prefetch={false}>
        <Button
          component="a"
          variant="outlined"
          size="small"
          sx={{
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
        <a href={`/identities/`} onClick={toggleIdentity}>
          <SelectionToggleIcon positive={selected} />
        </a>
      </Box>
    </Box>
  );
};

export default SelectableIdentity;

import SelectionToggleIcon from "@/components/icons/SelectionToggleIcon";
import { Belief } from "@/graphql/schema";
import { gql, useMutation } from "@apollo/client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { FC, MouseEvent } from "react";

const TOGGLE_IDENTIFICATION = gql`
  mutation ToggleUserBelief($beliefId: Int!, $userId: String!, $deleted: DateTime) {
    toggleUserBelief(beliefId: $beliefId, userId: $userId, deleted: $deleted) {
      beliefId
      userId
      deleted
    }
  }
`;

interface SelectableBeliefProps {
  belief: Belief;
  selected: boolean;
}

const SelectableBelief: FC<SelectableBeliefProps> = ({
  belief,
  selected: initiallySelected,
}: SelectableBeliefProps) => {
  const { data: session } = useSession();
  const [mutate] = useMutation(TOGGLE_IDENTIFICATION);
  const [selected, setSelected] = React.useState(initiallySelected);
  const toggleUserBelief = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (session?.user) {
      let deleted = null;
      if (selected) {
        deleted = new Date().toISOString();
      }
      mutate({
        variables: { beliefId: belief.id, userId: session.user.id, deleted },
        optimisticResponse: {
          __typename: "Mutation",
          toggleUserBelief: {
            __typename: "ToggleUserBeliefPayload",
            beliefId: belief.id,
            userId: session.user.id,
            deleted,
          },
        },
      });
      setSelected(!selected);
    }
  };
  return (
    <Box key={belief.name} position="relative" display="inline-block">
      <Link href={`/identities/${belief.slug}`} key={belief.name} passHref prefetch={false}>
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
          {belief.name}
        </Button>
      </Link>
      <Box position="absolute" right="1.5rem" display="inline-block" top="24%">
        <a href={`/identities/${belief.slug}`} onClick={toggleUserBelief}>
          <SelectionToggleIcon positive={selected} />
        </a>
      </Box>
    </Box>
  );
};

export default SelectableBelief;

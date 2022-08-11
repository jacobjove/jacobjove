import SelectionToggleIcon from "@/components/icons/SelectionToggleIcon";
import { Belief } from "@/generated/models/belief.model";
import { gql, useMutation } from "@apollo/client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { FC, MouseEvent } from "react";

const TOGGLE_IDENTIFICATION = gql`
  mutation ToggleBelief($beliefId: String!, $archivedAt: DateTime) {
    toggleBelief(beliefId: $beliefId, archivedAt: $archivedAt) {
      beliefId
      archivedAt
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
  const toggleBelief = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (session) {
      let archivedAt = null;
      if (selected) {
        archivedAt = new Date();
      }
      mutate({
        variables: { beliefId: belief.id, archivedAt },
        optimisticResponse: {
          toggleBelief: {
            __typename: "ToggleBeliefPayload",
            beliefId: belief.id,
            archivedAt,
          },
        },
      });
      setSelected(!selected);
    }
  };
  return (
    <Box key={belief.name} position="relative" display="inline-block">
      <Link href={`/beliefs/`} key={belief.name} passHref prefetch={false}>
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
          {belief.name}
        </Button>
      </Link>
      <Box position="absolute" right="1.5rem" display="inline-block" top="24%">
        <a href={`/beliefs/`} onClick={toggleBelief}>
          <SelectionToggleIcon positive={selected} />
        </a>
      </Box>
    </Box>
  );
};

export default SelectableBelief;

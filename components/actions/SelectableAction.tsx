import { Action } from "@/graphql/schema";
import { gql, useMutation } from "@apollo/client";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FC, MouseEvent, useState } from "react";
import SelectionToggleIcon from "@/components/icons/SelectionToggleIcon";

const TOGGLE_IDENTIFICATION = gql`
  mutation ToggleScheduleSelection($actionId: Int!, $userId: String!, $abandonedAt: DateTime) {
    toggleScheduleAdoption(actionId: $actionId, userId: $userId, abandonedAt: $abandonedAt) {
      actionId
      userId
      abandonedAt
    }
  }
`;

interface SelectableActionProps {
  action: Action;
  selected: boolean;
}

const SelectableAction: FC<SelectableActionProps> = ({
  action,
  selected: initiallySelected,
}: SelectableActionProps) => {
  const { data: session } = useSession();
  const [mutate] = useMutation(TOGGLE_IDENTIFICATION);
  const [selected, setSelected] = useState(initiallySelected);
  const toggleSelection = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (session?.user) {
      let abandonedAt = null;
      if (selected) {
        abandonedAt = new Date().toISOString();
      }
      mutate({
        variables: { actionId: action.id, userId: session.user.id, abandonedAt },
        optimisticResponse: {
          __typename: "Mutation",
          toggleSelection: {
            __typename: "ToggleSelectionPayload",
            actionId: action.id,
            userId: session.user.id,
            abandonedAt,
          },
        },
      });
      setSelected(!selected);
    }
  };
  return (
    <Box key={action.name} position="relative" display="inline-block">
      <Link href={`/actions/${action.slug}`} key={action.name} passHref prefetch={false}>
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
          {action.name}
        </Button>
      </Link>
      <Box position="absolute" right="1.5rem" display="inline-block" top="24%">
        <a href={`/actions/${action.slug}`} onClick={toggleSelection}>
          <SelectionToggleIcon positive={selected} />
        </a>
      </Box>
    </Box>
  );
};

export default SelectableAction;

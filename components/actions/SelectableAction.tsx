import SelectionToggleIcon from "@/components/icons/SelectionToggleIcon";
import { ActionTemplate } from "@/graphql/schema";
import { gql, useMutation } from "@apollo/client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FC, MouseEvent, useState } from "react";

const TOGGLE_IDENTIFICATION = gql`
  mutation ToggleActionAdoption($actionId: Int!, $userId: String!, $archivedAt: DateTime) {
    toggleActionAdoption(actionId: $actionId, userId: $userId, archivedAt: $archivedAt) {
      actionTemplateId
      archivedAt
    }
  }
`;

interface SelectableActionProps {
  actionTemplate: ActionTemplate;
  selected: boolean;
}

const SelectableAction: FC<SelectableActionProps> = ({
  actionTemplate,
  selected: initiallySelected,
}: SelectableActionProps) => {
  const { data: session } = useSession();
  const [mutate] = useMutation(TOGGLE_IDENTIFICATION);
  const [selected, setSelected] = useState(initiallySelected);
  const toggleSelection = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (session?.user) {
      let archivedAt = null;
      if (selected) {
        archivedAt = new Date().toISOString();
      }
      mutate({
        variables: { actionTemplateId: actionTemplate.id, userId: session.user.id, archivedAt },
        optimisticResponse: {
          __typename: "Mutation",
          toggleActionAdoption: {
            __typename: "ToggleActionAdoptionPayload",
            actionTemplateId: actionTemplate.id,
            archivedAt,
          },
        },
      });
      setSelected(!selected);
    }
  };
  return (
    <Box key={actionTemplate.name} position="relative" display="inline-block">
      <Link
        href={`/actions/${actionTemplate.slug}`}
        key={actionTemplate.name}
        passHref
        prefetch={false}
      >
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
          {actionTemplate.name}
        </Button>
      </Link>
      <Box position="absolute" right="1.5rem" display="inline-block" top="24%">
        <a href={`/actions/${actionTemplate.slug}`} onClick={toggleSelection}>
          <SelectionToggleIcon positive={selected} />
        </a>
      </Box>
    </Box>
  );
};

export default SelectableAction;

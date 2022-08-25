import SelectionToggleIcon from "@/components/icons/SelectionToggleIcon";
import Mantra from "@/graphql/generated/types/Mantra";
import { gql, useMutation } from "@apollo/client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { FC, MouseEvent } from "react";

const TOGGLE_SELECTION = gql`
  mutation ToggleMantra($mantraId: String!, $archivedAt: DateTime) {
    toggleMantra(mantraId: $mantraId, archivedAt: $archivedAt) {
      mantraId
      archivedAt
    }
  }
`;

interface SelectableMantraProps {
  mantra: Mantra;
  selected: boolean;
}

const SelectableMantra: FC<SelectableMantraProps> = ({
  mantra,
  selected: initiallySelected,
}: SelectableMantraProps) => {
  const { data: session } = useSession();
  const [mutate] = useMutation(TOGGLE_SELECTION);
  const [selected, setSelected] = React.useState(initiallySelected);
  const toggleMantra = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (session) {
      let archivedAt = null;
      if (selected) {
        archivedAt = new Date();
      }
      mutate({
        variables: { mantraId: mantra.id, archivedAt },
        optimisticResponse: {
          toggleMantra: {
            __typename: "ToggleMantraPayload",
            mantraId: mantra.id,
            archivedAt,
          },
        },
      });
      setSelected(!selected);
    }
  };
  return (
    <Box key={mantra.content} position="relative" display="inline-flex" alignItems={"center"}>
      <Link href={`/mantras/${mantra.id}`} key={mantra.content} passHref prefetch={false}>
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
          {mantra.content}
        </Button>
      </Link>
      <Box
        position="absolute"
        right="1.5rem"
        height="100%"
        display="inline-flex"
        alignItems="center"
      >
        <a
          href={`/mantras/${mantra.id}`}
          onClick={toggleMantra}
          style={{ display: "flex", alignItems: "center" }}
        >
          <SelectionToggleIcon positive={selected} />
        </a>
      </Box>
    </Box>
  );
};

export default SelectableMantra;

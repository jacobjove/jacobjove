import { gql, useMutation } from "@apollo/client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SelectionToggleIcon from "@web/components/icons/SelectionToggleIcon";
import Value from "@web/generated/types/Value";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { FC, MouseEvent } from "react";

const TOGGLE_IDENTIFICATION = gql`
  mutation ToggleValue($valueId: String!, $archivedAt: DateTime) {
    toggleValue(valueId: $valueId, archivedAt: $archivedAt) {
      valueId
      archivedAt
    }
  }
`;

interface SelectableValueProps {
  value: Value;
  selected: boolean;
}

const SelectableValue: FC<SelectableValueProps> = ({
  value,
  selected: initiallySelected,
}: SelectableValueProps) => {
  const { data: session } = useSession();
  const [mutate] = useMutation(TOGGLE_IDENTIFICATION);
  const [selected, setSelected] = React.useState(initiallySelected);
  const toggleValue = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (session) {
      let archivedAt = null;
      if (selected) {
        archivedAt = new Date();
      }
      mutate({
        variables: { valueId: value.id, archivedAt },
        optimisticResponse: {
          toggleValue: {
            __typename: "ToggleValuePayload",
            valueId: value.id,
            archivedAt,
          },
        },
      });
      setSelected(!selected);
    }
  };
  return (
    <Box key={value.name} position="relative" display="inline-block">
      <Link href={`/values/`} key={value.name} passHref prefetch={false}>
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
          {value.name}
        </Button>
      </Link>
      <Box position="absolute" right="1.5rem" display="inline-block" top="24%">
        <a href={`/values/`} onClick={toggleValue}>
          <SelectionToggleIcon positive={selected} />
        </a>
      </Box>
    </Box>
  );
};

export default SelectableValue;

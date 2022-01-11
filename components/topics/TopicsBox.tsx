import { actionFragment } from "@/graphql/fragments";
import { Action, ActionTheme } from "@/graphql/schema";
import { gql } from "@apollo/client";
import TextField from "@mui/material/TextField";
import { isPast, parseISO } from "date-fns";
import { FC } from "react";

export const fragment = gql`
  fragment TopicsBox on Query {
    actions(where: { userId: { equals: $userId } }) {
      ...ActionFragment
    }
  }
  ${actionFragment}
`;

interface TopicsBoxProps {
  data: {
    actions: Action[];
  };
}

const TopicsBox: FC<TopicsBoxProps> = (props: TopicsBoxProps) => {
  const { data } = props;
  const { actions } = data;
  const actionsWithThemes = actions.filter((action: Action) => {
    return action.themes.filter((theme: ActionTheme) => {
      if (theme.end && isPast(parseISO(theme.end))) {
        return false;
      }
      return true;
    }).length;
  });
  return (
    <div>
      {actionsWithThemes.map((action: Action) => (
        <TextField
          key={action.id}
          value=""
          label="Study theme"
          sx={{ margin: "0.25rem 0" }}
          variant="outlined"
          size="small"
          margin="dense"
          fullWidth
          onChange={() => {
            console.log("study theme changed");
          }}
        />
      ))}
    </div>
  );
};

export default TopicsBox;

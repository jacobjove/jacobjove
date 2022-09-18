import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import DataBox, { DataBoxProps } from "@web/components/DataBox";
import Mantra from "@web/graphql/generated/types/Mantra";
import { FC } from "react";

type MantrasBoxProps = Pick<DataBoxProps, "displayTitle"> & {
  mantras: Mantra[];
};

const MantrasBox: FC<MantrasBoxProps> = (props: MantrasBoxProps) => {
  const { mantras, displayTitle } = props;
  return (
    <DataBox title={"Mantras"} displayTitle={displayTitle}>
      {mantras?.length ? (
        mantras.map((mantra, index) => {
          return (
            <Box p={"1rem"} key={mantra.id}>
              <Typography>{mantra.content}</Typography>
              {(mantras?.length || 0) > index + 1 && <hr />}
            </Box>
          );
        })
      ) : (
        <Typography
          sx={{
            textAlign: "center",
            mt: "3rem",
          }}
        >
          {"You don't have any mantras yet."}
        </Typography>
      )}
    </DataBox>
  );
};

export default MantrasBox;

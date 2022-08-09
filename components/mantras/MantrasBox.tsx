import DataBox, { DataBoxProps } from "@/components/DataBox";
import { Mantra } from "@/graphql/schema/generated/models/mantra.model";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
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
          }}
        >
          {"You don't have any mantras yet."}
        </Typography>
      )}
    </DataBox>
  );
};

export default MantrasBox;

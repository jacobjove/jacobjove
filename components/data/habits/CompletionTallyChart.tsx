import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { FC } from "react";

export interface CompletionTallyChartProps {
  nCompletions: number;
}

const CompletionTallyChart: FC<CompletionTallyChartProps> = ({
  nCompletions,
}: CompletionTallyChartProps) => {
  return (
    <Box>
      {nCompletions > 15 ? (
        <Typography>{nCompletions}</Typography>
      ) : (
        <Root>
          {[...Array(nCompletions).keys()].map((_, i) => (
            <li key={i} />
          ))}
        </Root>
      )}
    </Box>
  );
};

const Root = styled("ol")(({ theme: _theme }) => {
  return {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: "0.5rem",
    "& li": {
      border: "1px solid",
      margin: "2px",
      height: "0.75rem",
      "&:nth-child(5n)": {
        transform: "rotate(300deg)",
        // -webkit-transform: rotate(300deg);
        // -moz-transform: rotate(300deg);
        // -o-transform: rotate(300deg);
        height: "27px",
        position: "relative",
        left: "-15px",
        top: "5px",
        marginRight: "0.25rem",
        marginTop: "-10px",
      },
    },
  };
});

export default CompletionTallyChart;

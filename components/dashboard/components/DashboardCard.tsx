import DragHandle from "@/components/dashboard/components/DragHandle";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";

const CardTitle: FC<{ title: string }> = ({ title }) => (
  <Typography
    component="h3"
    fontSize="0.8rem"
    m="0.25rem 0.5rem"
    fontWeight="bold"
    sx={{
      color: (theme) => theme.palette.secondary.contrastText,
    }}
  >
    {title}
  </Typography>
);

interface DashboardCardProps {
  title: string;
  loading: boolean;
  editing?: boolean;
  error?: Error;
  children?: ReactNode;
}

const StyledCard = styled(Card)(() => ({
  height: "100%",
  "& .MuiCardHeader-action": {
    display: "flex",
    alignItems: "center",
    margin: 0,
  },
}));

const DashboardCard: FC<DashboardCardProps> = (props: DashboardCardProps) => {
  const displayCardHeader = props.editing || true;
  return (
    <StyledCard className={`${props.editing ? "editing" : "not-editing"}`}>
      <Collapse in={displayCardHeader}>
        <CardHeader
          title={<CardTitle title={props.title} />}
          sx={{
            padding: 0,
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.secondary.main
                : theme.palette.secondary.dark,
            borderBottom: (theme) =>
              `1px solid ${
                theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)"
              }`,
            height: "100%",
            display: "flex",
            alignItems: "center",
            "& .MuiCardHeader-action": {
              height: "100%",
            },
          }}
          action={<DragHandle className={`drag-anchor${!props.editing ? " hidden" : ""}`} />}
        />
      </Collapse>
      <CardContent
        style={{
          padding: "0.5rem",
          height: "100%",
          maxHeight: "100%",
          overflow: "scroll",
        }}
      >
        {props.loading ? <div>Loading...</div> : props.children}
      </CardContent>
    </StyledCard>
  );
};

export default DashboardCard;

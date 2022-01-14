import DragHandle from "@/components/dashboard/components/DragHandle";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";

const CardTitle: FC<{ title: string }> = ({ title }) => (
  <Typography fontSize="0.8rem" m="0.25rem 0.5rem" fontWeight="bold">
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
    <StyledCard>
      <Collapse in={displayCardHeader}>
        <CardHeader
          title={<CardTitle title={props.title} />}
          style={{
            padding: 0,
            backgroundColor: "whitesmoke",
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            height: "100%",
            display: "flex",
            alignItems: "center",
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

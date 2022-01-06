import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
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

const DashboardCard: FC<DashboardCardProps> = (props: DashboardCardProps) => {
  return (
    <Card sx={{ height: "100%" }}>
      <Collapse in={props.editing}>
        <CardHeader
          title={<CardTitle title="Dashboard" />}
          style={{ padding: 0 }}
          action={
            <span className={`drag-anchor${!props.editing ? " hidden" : ""}`}>
              <IconButton>
                <DragIndicatorIcon />
              </IconButton>
            </span>
          }
        />
      </Collapse>
      <CardContent
        style={{
          paddingTop: "0.25rem",
          height: "100%",
          maxHeight: "100%",
          overflow: "scroll",
        }}
      >
        {props.loading ? <div>Loading...</div> : props.children}
      </CardContent>
    </Card>
  );
};

export default DashboardCard;

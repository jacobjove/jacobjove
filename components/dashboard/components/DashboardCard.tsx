import DragHandle from "@/components/dashboard/components/DragHandle";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  loading: boolean;
  editing?: boolean;
  error?: Error;
  children?: ReactNode;
}

const StyledCard = styled(Card)(() => ({
  height: "100%",
}));

const DashboardCard: FC<DashboardCardProps> = (props: DashboardCardProps) => {
  return (
    <StyledCard className={`${props.editing ? "editing" : "not-editing"}`}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          component="h3"
          sx={{
            display: "none", // TODO !!!
            fontWeight: 700,
            fontSize: "0.8rem",
            m: "0.25rem 0.5rem",
            px: "0.33rem",
            position: "absolute",
            top: "-1rem",
            left: "0.8rem",
            color: "text.primary",
            backgroundColor: (theme) => theme.palette.background.default,
            borderRadius: "0.25rem",
            border: (theme) => `1px solid ${theme.palette.divider}`,
            zIndex: 1e6,
          }}
        >
          {props.title}
        </Typography>
        <DragHandle
          className={`drag-anchor${!props.editing ? " hidden" : ""}`}
          style={{ marginLeft: "auto" }}
        />
      </Box>
      <CardContent
        className="no-scrollbar"
        style={{
          padding: "0.2rem 0.33rem",
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

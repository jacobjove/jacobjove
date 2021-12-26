import { Action, ActionSchedule, Schedule } from "@/graphql/schema";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { FC } from "react";
import { useDrag } from "react-dnd";

interface ActionCardProps {
  actionSchedule: ActionSchedule & {
    action: Action;
    schedule: Schedule;
  };
}

const StyledCard = styled(Card)(() => ({
  margin: "1rem 0.1rem",
}));

const ActionCard: FC<ActionCardProps> = ({ actionSchedule }: ActionCardProps) => {
  const [{ opacity }, dragRef] = useDrag(() => ({
    type: "action",
    item: {
      title: actionSchedule.action.name,
      scheduleId: actionSchedule.id,
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }));
  return (
    <StyledCard ref={dragRef} sx={{ opacity }}>
      <CardContent>
        <Link href={`/actions/${actionSchedule.action.slug}`}>
          <a>{actionSchedule.action.name}</a>
        </Link>{" "}
        <small>every {actionSchedule.schedule.frequency.toLowerCase()}</small>
      </CardContent>
    </StyledCard>
  );
};

export default ActionCard;

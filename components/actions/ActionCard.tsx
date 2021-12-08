import { useDrag } from "react-dnd";
import { Action, Schedule as _Schedule } from "@/graphql/schema";
import { FC } from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";

type Schedule = _Schedule & {
  action: Action;
};

interface ActionCardProps {
  schedule: Schedule;
}

const StyledCard = styled(Card)(() => ({
  margin: "1rem 0.1rem",
}));

const ActionCard: FC<ActionCardProps> = ({ schedule }: ActionCardProps) => {
  const [{ opacity }, dragRef] = useDrag(() => ({
    type: "action",
    item: {
      title: schedule.action.name,
      scheduleId: schedule.id,
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }));
  return (
    <StyledCard ref={dragRef} sx={{ opacity }}>
      <CardContent>
        <Link href={`/actions/${schedule.action.slug}`}>
          <a>{schedule.action.name}</a>
        </Link>{" "}
        <small>every {schedule.frequency.toLowerCase()}</small>
      </CardContent>
    </StyledCard>
  );
};

export default ActionCard;

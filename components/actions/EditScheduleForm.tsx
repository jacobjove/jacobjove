import Task from "@/graphql/generated/types/Task";
import { FC } from "react";

interface EditScheduleFormProps {
  task: Task;
}

const EditScheduleForm: FC<EditScheduleFormProps> = ({ task }: EditScheduleFormProps) => {
  return (
    <form>
      <div>{task.title}</div>
    </form>
  );
};

export default EditScheduleForm;

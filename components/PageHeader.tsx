import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";

interface PageHeaderProps {
  children: ReactNode;
}

const PageHeader: FC<PageHeaderProps> = ({ children }: PageHeaderProps) => {
  return (
    <Typography
      variant="h1"
      component="h1"
      marginY="1rem"
      paddingBottom="0.5rem"
      marginX="20%"
      textAlign={"center"}
      borderBottom={"1px solid lightgray"}
    >
      {children}
    </Typography>
  );
};

export default PageHeader;

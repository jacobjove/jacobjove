import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";

interface PageHeaderProps {
  children: ReactNode;
}

const PageHeader: FC<PageHeaderProps> = ({ children }) => {
  return (
    <Typography
      variant={"h1"}
      component={"h1"}
      sx={{
        fontSize: "2.5rem",
        fontWeight: "400",
        margin: "1rem 0",
        textAlign: "center",
      }}
    >
      {children}
    </Typography>
  );
};

export default PageHeader;

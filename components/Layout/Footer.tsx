// Material UI
import { Typography } from "@mui/material";
import { CSSProperties, FC } from "react";

const copyrightOwner = "Jacob T. Fredericksen";

interface FooterProps {
  height: string;
}

const Footer: FC<FooterProps> = (props: FooterProps) => {
  return (
    <footer style={{ position: "absolute", bottom: 0, width: "100%", height: props.height }}>
      <Typography variant="body2" color="textSecondary" align="center">
        {`© ${new Date().getFullYear()} ${copyrightOwner}. All rights reserved.`}
      </Typography>
    </footer>
  );
};
export default Footer;

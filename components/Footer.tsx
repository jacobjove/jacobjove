import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { FC } from "react";

const copyrightOwner = "Jacob T. Fredericksen";

interface FooterProps {
  height: string;
}

const Footer: FC<FooterProps> = styled((props: FooterProps) => {
  return (
    <footer style={{ height: props.height, marginBottom: `-${props.height}` }}>
      <Typography variant="body2" color="textSecondary" align="center">
        {`© ${new Date().getFullYear()} ${copyrightOwner}. All rights reserved.`}
      </Typography>
    </footer>
  );
})(() => ({
  position: "absolute",
  bottom: 0,
  width: "100%",
}));

export default Footer;

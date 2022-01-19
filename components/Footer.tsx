import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { alpha, darken, lighten } from "@mui/system";
import { FC } from "react";

const copyrightOwner = "Jacob T. Fredericksen";

interface FooterProps {
  height: string;
}

const StyledFooter = styled("footer", {
  shouldForwardProp: (prop) => prop !== "height",
})<FooterProps>(({ theme, height }) => ({
  width: "100%",
  height,
  marginBottom: `calc(-${height} - 0.5rem)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderTop: `1px solid
  ${
    theme.palette.mode === "light"
      ? lighten(alpha(theme.palette.divider, 1), 0.88)
      : darken(alpha(theme.palette.divider, 1), 0.68)
  }`,
  zIndex: 10000,
}));

const Footer: FC<FooterProps> = (props: FooterProps) => {
  return (
    <StyledFooter height={props.height}>
      <Typography variant="body2" color="textSecondary" align="center">
        {`© ${new Date().getFullYear()} ${copyrightOwner}`}
      </Typography>
    </StyledFooter>
  );
};

export default Footer;

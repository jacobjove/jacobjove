import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { FC } from "react";

const copyrightOwner = "Jacob T. Fredericksen";

interface FooterProps {
  height: string;
}

const StyledFooter = styled("footer", {
  shouldForwardProp: (prop) => prop !== "height",
})<FooterProps>`
  width: 100%;
  height: ${(props) => props.height};
  margin-bottom: calc(${(props) => `-${props.height}`} - 0.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid lightgray;
  background-color: whitesmoke;
  z-index: 10000;
`;

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

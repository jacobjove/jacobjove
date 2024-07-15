import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import type { FC } from 'react';

const copyrightOwner = 'Jacob T. Jove';

// TODO
// - Privacy Policy
// - Terms of Use
// - Social Media Icons/Links

interface FooterProps {
  height: string;
}

const StyledFooter = styled('footer', {
  shouldForwardProp: (prop) => prop !== 'height',
})<FooterProps>(({ theme, height }) => ({
  flexShrink: 0,
  width: '100%',
  height,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderTop: `1px solid ${theme.palette.divider}`,
  zIndex: 1e4,
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

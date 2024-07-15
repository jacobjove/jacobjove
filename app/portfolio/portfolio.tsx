'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as m from '@paraglide/messages';
import PageHeader from '@app/components/PageHeader';

const GITHUB_PROFILE_URL = 'https://github.com/jacobjove';

export default function Projects() {
  return (
    <>
      <PageHeader>{m.portfolio_title()}</PageHeader>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <Typography textAlign={'center'} flexBasis={'100%'}>
          {m.portfolio_lead()}
        </Typography>
        <div>
          <p>
            {'For software projects, see my '}
            <a href={GITHUB_PROFILE_URL} target={'_blank'} rel="noreferrer">
              {'GitHub profile'}
            </a>
            {'.'}
          </p>
        </div>
      </Box>
    </>
  );
}

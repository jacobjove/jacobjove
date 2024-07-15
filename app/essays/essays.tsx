'use client';

import type { NextPage } from 'next';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { Fragment } from 'react';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import type { Essay } from './[slug]/essay';
import { Link } from '@i18n';

interface EssaysPageProps {
  essays: Record<string, Essay>;
}

const EssaysPage: NextPage<EssaysPageProps> = ({ essays }) => {
  return (
    <List>
      {Object.entries(essays).map(([slug, essay]) => (
        <Fragment key={slug}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={<Link href={`/essays/${slug}`}>{essay.title}</Link>}
              secondary={<Typography>{essay.description}</Typography>}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </Fragment>
      ))}
    </List>
  );
};

export default EssaysPage;

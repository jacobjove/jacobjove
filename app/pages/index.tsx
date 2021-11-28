import { Identification, Identity } from ".prisma/client";
import Layout from "@/components/Layout";
import prisma from "@/lib/prisma";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import Link from "next/link";

interface DefaultPageProps {
  identifications: (Identification & {
    identity: Identity;
  })[];
}

const DefaultPage: NextPage<DefaultPageProps> = ({ identifications }: DefaultPageProps) => {
  return (
    <Layout>
      <Container>
        {!!identifications &&
          identifications.map((identification) => (
            <p key={identification.id}>{identification.identity.name}</p>
          )) || (
            <Box textAlign="center">
              <Link href="/identities" passHref>
                <Button variant="contained" color="secondary">Explore identities</Button>
              </Link>
            </Box>
          )}
      </Container>
    </Layout>
  );
};
export default DefaultPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  let identifications = null;
  if (session?.user?.id) {
    identifications = await prisma.identification.findMany({
      where: { user: { id: session.user.id } },
      include: { identity: true },
    });
  }
  return { props: { identifications } };
};

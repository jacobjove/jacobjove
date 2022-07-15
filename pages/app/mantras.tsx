import AppLayout from "@/components/AppLayout";
import { useAuth } from "@/components/contexts/AuthContext";
import { useUser } from "@/components/contexts/UserContext";
import { userFragment } from "@/graphql/fragments";
import { buildGetServerSidePropsFunc } from "@/utils/ssr";
import { gql, useMutation } from "@apollo/client";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { GetServerSideProps, NextPage } from "next";
import { PageWithAuth, Session } from "next-auth";
import { NextSeo } from "next-seo";

interface MantrasPageProps {
  session: Session | null;
}

const UPDATE_MANTRAS = gql`
  mutation UpdateMantras($userId: String!, $settings: JSON!) {
    updateUser(where: { id: $userId }, data: { settings: $settings }) {
      ...UserFragment
    }
  }
  ${userFragment}
`;

const MantrasPage: NextPage<MantrasPageProps> = (_props: MantrasPageProps) => {
  const { token } = useAuth();
  const user = useUser();
  const [updateMantras, { loading: loadingUpdateMantra }] = useMutation(UPDATE_MANTRAS);
  if (!token || !user) return null;
  const mantras = user.mantras ?? [];
  return (
    <AppLayout>
      <NextSeo
        title={"Mantras"}
        canonical={"/app/mantras"}
        description={"View and/or update your mantras."}
        noindex
        nofollow
      />
      <Container
        maxWidth="md"
        sx={{
          height: "100%",
          maxHeight: "100%",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            padding: "1rem",
            height: "100%",
            maxHeight: "100%",
            position: "relative",
          }}
        >
          <Box position="absolute" right={2}>
            <IconButton title={"Add new mantra"} onClick={() => null}>
              <AddIcon />
            </IconButton>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell component="th" scope="column" sx={{ width: "10rem" }}>
                  <Typography variant="h4">{"Mantra"}</Typography>
                </TableCell>
                {/* <TableCell component="th" scope="column">
                  <Typography variant="h4">{"Value"}</Typography>
                </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {mantras.map(({ id, content }) => {
                return (
                  <TableRow key={id}>
                    <TableCell component="th" scope="row">
                      {content}
                    </TableCell>
                    {/* <TableCell>
                    </TableCell> */}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </AppLayout>
  );
};
export default MantrasPage;

(MantrasPage as PageWithAuth).auth = true;

export const getServerSideProps: GetServerSideProps = buildGetServerSidePropsFunc({
  unauthedRedirectDestination: "/auth/signin?callbackUrl=/app/mantras",
});

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import type { getProviders } from 'next-auth/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { NextSeo } from 'next-seo';
import type { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from '@navigation';
import Layout from '@app/client/layout';
import SocialLogin from '@components/auth/SocialLogin';

interface SignInPageProps {
  providers: Awaited<ReturnType<typeof getProviders>>;
}

const SignInPage: FunctionComponent<SignInPageProps> = ({ providers }: SignInPageProps) => {
  const router = useRouter();
  const query = useSearchParams();
  const { data: session } = useSession();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const callbackUrl = Array.isArray(query?.callbackUrl)
    ? query.callbackUrl[0]
    : query?.callbackUrl;
  useEffect(() => {
    if (typeof query.provider === 'string') {
      const scope =
        typeof query.scope === 'string' ? query.scope.split(',').join(' ') : undefined;
      signIn(
        query.provider,
        typeof callbackUrl === 'string' ? { callbackUrl } : {},
        scope ? { scope } : {}
      );
    } else if (query.error) {
      setError(`${query?.error}`);
    }
  }, [query, callbackUrl]);
  useEffect(() => {
    if (session && callbackUrl) {
      router.push(callbackUrl);
    }
  }, [session, router, callbackUrl]);
  if (query.provider) return <div>{'Redirecting...'}</div>;
  const handleCredentialsSubmission = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await signIn('credentials', {
      username,
      password,
    });
    setError(null);
    if (response?.error) {
      setError(response.error);
    }
  };
  return (
    <Layout>
      <NextSeo
        title={'Sign in'}
        canonical={'/auth/signin'}
        description={'Sign in to your SelfBuilder account.'}
      />
      <Box m={'auto'} p={4} maxWidth={'30rem'}>
        {!!error && (
          <>
            <Alert severity="error" sx={{ alignItems: 'center' }}>
              <p className="error-message">
                {'Error:'} {error}
              </p>
            </Alert>
            <br />
          </>
        )}
        {(session?.user && (
          <Box
            height="100%"
            display="flex"
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Typography variant="h5" component="p" sx={{ width: '100%' }} textAlign={'center'}>
              You are logged in as <strong>{session.user.email}</strong>.
            </Typography>
            <Box textAlign={'center'} my={2}>
              <Button variant="outlined" color="primary" size="large" onClick={() => signOut()}>
                {'Sign out'}
              </Button>
            </Box>
          </Box>
        )) || (
          <div id="sign-in">
            <Typography variant="h1" textAlign={'center'} my={2}>
              {'Sign in'}
            </Typography>
            <SocialLogin
              providers={providers}
              callbackUrl={callbackUrl ?? '/'}
              onError={setError}
            />
            {providers?.credentials && (
              <Card sx={{ textAlign: 'center', my: 2 }}>
                <CardContent>
                  <form onSubmit={handleCredentialsSubmission}>
                    <TextField
                      name={'username'}
                      label="Username"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                      variant="outlined"
                      fullWidth
                      margin="dense"
                    />
                    <TextField
                      name={'password'}
                      type={'password'}
                      label="Password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      variant="outlined"
                      fullWidth
                      margin="dense"
                    />
                    <Button
                      type="submit"
                      variant="outlined"
                      color="primary"
                      size="large"
                      sx={{ mt: 2 }}
                    >
                      {'Sign in'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </Box>
    </Layout>
  );
};

export default SignInPage;

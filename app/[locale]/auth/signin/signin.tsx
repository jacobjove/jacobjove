'use client';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { signIn, signOut, useSession } from 'next-auth/react';
import type { FunctionComponent } from 'react';
import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from '@navigation';
import SocialLogin from '@components/auth/SocialLogin';
import type { Providers } from '@app/auth';
import Layout from '@app/client/layout';

interface SignInPageProps {
  providers: Providers;
}

const SignIn: FunctionComponent<SignInPageProps> = ({ providers }: SignInPageProps) => {
  const router = useRouter();
  const query = useSearchParams();
  const { data: session } = useSession();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const _callbackUrl = query?.get('callbackUrl');
  const provider = query?.get('provider');
  const callbackUrl = Array.isArray(_callbackUrl) ? _callbackUrl[0] : _callbackUrl;
  useEffect(() => {
    const _scope = query?.get('scope');
    const error = query?.get('error');
    if (typeof provider === 'string') {
      const scope = typeof _scope === 'string' ? _scope.split(',').join(' ') : undefined;
      signIn(
        provider,
        typeof callbackUrl === 'string' ? { callbackUrl } : {},
        scope ? { scope } : {}
      );
    } else if (error) {
      setError(`${error}`);
    }
  }, [query, provider, callbackUrl]);
  useEffect(() => {
    if (session && callbackUrl) {
      router.push(callbackUrl);
    }
  }, [session, router, callbackUrl]);
  if (provider) return <div>{'Redirecting...'}</div>;
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
      {/* <NextSeo
        title={'Sign in'}
        canonical={'/auth/signin'}
        description={'Sign in to your SelfBuilder account.'}
      /> */}
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

const SignInPage: FunctionComponent<SignInPageProps> = ({ providers }: SignInPageProps) => {
  return (
    <Suspense>
      <SignIn providers={providers} />
    </Suspense>
  );
};

export default SignInPage;

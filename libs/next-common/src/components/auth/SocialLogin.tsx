import Box from "@mui/material/Box";
import { getProviders, signIn } from "next-auth/react";
import { FC, ReactElement } from "react";
import {
  DiscordLoginButton,
  FacebookLoginButton,
  GithubLoginButton,
  GoogleLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";
import React from "react";

// https://www.npmjs.com/package/react-social-login-buttons
export const SOCIAL_LOGIN_BUTTONS = {
  facebook: FacebookLoginButton,
  discord: DiscordLoginButton,
  google: GoogleLoginButton,
  twitter: TwitterLoginButton,
  github: GithubLoginButton,
};

const CREDENTIALS_KEY = "credentials";
const EMAIL_KEY = "email";

interface SocialLoginProps {
  providers: Awaited<ReturnType<typeof getProviders>>;
  callbackUrl: string;
  onError: (error: string) => void;
}

const SocialLogin: FC<SocialLoginProps> = ({
  providers,
  callbackUrl,
  onError,
}: SocialLoginProps) => {
  if (!providers) throw new Error("No providers are configured.");
  const socialAuthLoginComponents: ReactElement[] = [];
  const handleSocialLogin = async (providerId: string) => {
    try {
      signIn(providerId, { callbackUrl });
    } catch (error) {
      onError(`${error}`);
    }
  };
  let SocialLoginButton;
  Object.entries(providers).forEach(([, provider]) => {
    if ([CREDENTIALS_KEY, EMAIL_KEY].includes(provider.id)) return;
    SocialLoginButton = SOCIAL_LOGIN_BUTTONS[provider.id as keyof typeof SOCIAL_LOGIN_BUTTONS];
    if (!SocialLoginButton)
      throw new Error(`No social login button is configured for ${provider.id}.`);
    socialAuthLoginComponents.push(
      <SocialLoginButton
        key={provider.name}
        style={{ minWidth: "245px", maxWidth: "245px" }}
        onClick={() => handleSocialLogin(provider.id)}
        text={`Sign in with ${provider.name}`}
      />
    );
  });
  return (
    <div>
      {(!!socialAuthLoginComponents.length && (
        <Box id="social-sign-in" justifyContent="center">
          {socialAuthLoginComponents.map((component) => (
            <Box key={component.key} sx={{ my: 1, display: "flex", justifyContent: "center" }}>
              {component}
            </Box>
          ))}
        </Box>
      )) || <p className="text-center">Other sign-in options are unavailable.</p>}
    </div>
  );
};

export default SocialLogin;

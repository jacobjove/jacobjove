import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { getProviders, signIn } from "next-auth/react";
import { FC, ReactElement } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

export const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  google: GoogleIcon,
  twitter: TwitterIcon,
  github: GitHubIcon,
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
  Object.entries(providers).forEach(([, provider]) => {
    if ([CREDENTIALS_KEY, EMAIL_KEY].includes(provider.id)) return;
    const Icon = SOCIAL_ICONS[provider.id as keyof typeof SOCIAL_ICONS];
    if (!Icon) throw new Error(`No social icon is configured for ${provider.id}.`);
    socialAuthLoginComponents.push(
      <Button
        key={provider.name}
        style={{ minWidth: "245px", maxWidth: "245px" }}
        onClick={() => handleSocialLogin(provider.id)}
      >
        <Icon /> {`Sign in with ${provider.name}`}
      </Button>
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

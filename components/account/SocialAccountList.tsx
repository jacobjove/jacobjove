import { Account } from "@/prisma/generated";
import axios, { AxiosResponse } from "axios";
import { Provider } from "next-auth/providers";
import { signIn } from "next-auth/react";
import { FC } from "react";
import {
  DiscordLoginButton,
  FacebookLoginButton,
  GithubLoginButton,
  GoogleLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";

const SOCIAL_LOGIN_BUTTONS: Record<string, typeof GithubLoginButton> = {
  facebook: FacebookLoginButton,
  discord: DiscordLoginButton,
  google: GoogleLoginButton,
  twitter: TwitterLoginButton,
  github: GithubLoginButton,
};

interface SocialConnectButtonProps {
  provider: Provider;
}

const SocialConnectButton: FC<SocialConnectButtonProps> = ({
  provider,
}: SocialConnectButtonProps) => {
  const Button = SOCIAL_LOGIN_BUTTONS[provider.id];
  const handleSocialConnect = async (provider_id: string) => {
    signIn(provider_id);
    await axios
      .post(`/api/users/auth/${provider_id}/connect/`, {})
      .then(function (response: AxiosResponse) {
        console.log(`${response}`);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <Button
      style={{ minWidth: "245px", maxWidth: "245px" }}
      onClick={() => handleSocialConnect(provider.id)}
    >
      Connect {provider.name}
    </Button>
  );
};

interface SocialAccountListProps {
  providers: Record<string, Provider>;
  accounts: Account[];
}

const SocialAccountList: FC<SocialAccountListProps> = ({
  providers,
  accounts,
}: SocialAccountListProps) => {
  return (
    <div>
      {Object.entries(providers).map(
        ([providerKey, provider]) =>
          provider.name != "Credentials" && (
            <div key={providerKey}>
              <p>{provider.name}</p>
              {(accounts.find((account) => account.provider === provider.id) && (
                <p>
                  Connected ({accounts.find((account) => account.provider === provider.id)["uid"]})
                </p>
              )) || <SocialConnectButton provider={provider} />}
            </div>
          )
      )}
    </div>
  );
};

export default SocialAccountList;

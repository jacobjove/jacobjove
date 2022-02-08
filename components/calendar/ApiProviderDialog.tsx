import UserContext from "@/components/contexts/UserContext";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { bindPopover } from "material-ui-popup-state/hooks";
import { signIn } from "next-auth/react";
import { useContext, useMemo } from "react";

const CALENDAR_PROVIDERS = {
  google: {
    name: "Google",
    Icon: GoogleIcon,
    // https://developers.google.com/identity/protocols/oauth2/scopes
    scope: "https://www.googleapis.com/auth/calendar",
  },
  apple: {
    name: "Apple",
    Icon: AppleIcon,
    scope: "https://www.googleapis.com/auth/calendar",
  },
};

const GOOGLE_DEFAULT_SCOPES = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile",
  "openid",
];
const GOOGLE_CALENDAR_SCOPE = "https://www.googleapis.com/auth/calendar";

type ApiProviderDialogProps = ReturnType<typeof bindPopover> & {
  provider: "google" | "apple";
};

export default function ApiProviderDialog(props: ApiProviderDialogProps) {
  const { provider, onClose, anchorEl: _anchorEl, ...dialogProps } = props;
  const { name, Icon, scope } = useMemo(() => {
    return CALENDAR_PROVIDERS[provider];
  }, [provider]);
  const user = useContext(UserContext);
  const account = useMemo(() => {
    if (!user) return null;
    return user.accounts.find((account) => account.provider === provider) || null;
  }, [user, provider]);
  return (
    <Dialog fullWidth {...dialogProps} onClose={onClose}>
      <DialogTitle>{name}</DialogTitle>
      <DialogContent sx={{ minHeight: "33vh" }}>
        <DialogContentText>{name}</DialogContentText>
        {(!!provider && <Icon />) || null}
        <Button
          onClick={async () => {
            const response = await axios
              .get(`/api/calendars/${provider}/calendars`)
              .catch(console.error);
            console.log("response", response);
          }}
        >
          Get data from {provider}
        </Button>

        {account?.scopes.includes(scope) ? null : (
          <Button
            title={`Connect ${name} Calendar`}
            onClick={() => {
              signIn(
                provider,
                { callbackUrl: window.location.href },
                {
                  scope: [...(account?.scopes ?? GOOGLE_DEFAULT_SCOPES), scope].join(" "),
                }
              );
            }}
          >
            <Icon sx={{ color: "lightgray" }} />
          </Button>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        {/* <Button
          onClick={() => {
            console.log("do something");
          }}
        >
          Subscribe
        </Button> */}
      </DialogActions>
    </Dialog>
  );
}

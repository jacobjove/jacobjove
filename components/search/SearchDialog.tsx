import InstantSearch, { InstantSearchProps } from "@/components/search/InstantSearch";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { bindPopover } from "material-ui-popup-state/hooks";
import { FC, ReactElement } from "react";

export interface SearchDialogProps extends ReturnType<typeof bindPopover> {
  header: string | ReactElement;
  searchProps: InstantSearchProps;
}

const SearchDialog: FC<SearchDialogProps> = (props: SearchDialogProps) => {
  const { header, searchProps, onClose, anchorEl: _anchorEl, ...dialogProps } = props;
  return (
    <Dialog {...dialogProps} fullWidth onClose={onClose}>
      <DialogTitle
        sx={{
          textAlign: "center",
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        {header}
      </DialogTitle>
      <DialogContent
        sx={{
          minHeight: "50vh",
          paddingTop: "0.5rem !important",
        }}
      >
        <InstantSearch {...searchProps} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SearchDialog;

import type { Transporter } from 'nodemailer';

declare global {
  // eslint-disable-next-line no-var
  var _transporter: Transporter;
}

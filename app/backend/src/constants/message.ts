import {LIFETIME_EMAIL_TOKEN} from "./token";

export const MESSAGE_CONFIRM_USER =
  `A number has been sent to your email \n 
  Best before date - ${LIFETIME_EMAIL_TOKEN / 60} (min)`;

export const MESSAGE_RESET_PASSWORD =
  `A link to reset your password has been sent to your email \n 
  Best before date - ${LIFETIME_EMAIL_TOKEN / 60} (min)`;

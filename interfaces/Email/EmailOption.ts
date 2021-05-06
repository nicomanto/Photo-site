interface EmailOption {
  readonly from: string; // sender address
  readonly to: string; // list of receivers
  readonly subject: string; // Subject line
  readonly text: string; // plaintext body
  readonly html: string; // html body
}

export default EmailOption;

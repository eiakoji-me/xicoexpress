export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

export type CtaButton = {
  label: string;
  href: string;
  target?: "_blank";
};

export type FooterSection = {
  title: string;
  links: { label: string; href: string }[];
};

export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
  show?: boolean;
  iconKey?: string;
};

export type ContactInfo = {
  address: string;
  phone: string;
};

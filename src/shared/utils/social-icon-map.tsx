import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaGoogle,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export const socialIconMap: Record<string, React.ReactNode> = {
  facebook: (
    <FaFacebookF className="h-6 w-6 text-muted-foreground hover:text-primary transition" />
  ),
  instagram: (
    <FaInstagram className="h-6 w-6 text-muted-foreground hover:text-primary transition" />
  ),
  whatsapp: (
    <FaWhatsapp className="h-6 w-6 text-muted-foreground hover:text-primary transition" />
  ),
  google: (
    <FaGoogle className="h-6 w-6 text-muted-foreground hover:text-primary transition" />
  ),
  tiktok: (
    <FaTiktok className="h-6 w-6 text-muted-foreground hover:text-primary transition" />
  ),
  youtube: (
    <FaYoutube className="h-6 w-6 text-muted-foreground hover:text-primary transition" />
  ),
};
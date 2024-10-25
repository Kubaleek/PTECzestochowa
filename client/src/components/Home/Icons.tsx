import Link from "next/link";
import { SocialIconsProps } from "./ts/types";

export default function SocialIcons({ label, icon, className, href }: SocialIconsProps) {
    return (
    <Link href={href} className={className} aria-label={label}>
        {icon}
    </Link>
  );
}

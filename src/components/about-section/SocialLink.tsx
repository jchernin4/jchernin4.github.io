import { ReactNode } from "react";

interface SocialLinkProps {
    href: string;
    icon: ReactNode;
    label: string;
}

export default function SocialLink({ href, icon, label }: SocialLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-orange-100 hover:text-orange-600 dark:hover:bg-orange-900/30 dark:hover:text-orange-400 transition-colors"
        >
            {icon}
            {label}
        </a>
    );
}

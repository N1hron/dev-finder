import { ReactNode } from 'react';

export interface SocialInfoItemProps {
    icon: ReactNode;
    text: string | null;
    isLink: boolean;
}

export const SocialInfoItem = ({ icon, text, isLink }: SocialInfoItemProps) => {
    function renderText() {
        if (isLink && text) {
            return (
                <a href={text} target="_blank" rel="noopener noreferrer">
                    {text}
                </a>
            );
        } else if (text) {
            return <span>{text}</span>;
        } else {
            return <span>Not Available</span>;
        }
    }

    return (
        <li data-available={Boolean(text)}>
            {icon}
            {renderText()}
        </li>
    );
};

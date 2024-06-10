import { User } from 'types';
import { SocialInfoItemProps } from './SocialInfoItem';

import { ReactComponent as LocationIcon } from 'assets/icon-location.svg';
import { ReactComponent as TwitterIcon } from 'assets/icon-twitter.svg';
import { ReactComponent as BlogIcon } from 'assets/icon-website.svg';
import { ReactComponent as CompanyIcon } from 'assets/icon-company.svg';
import { SocialInfoItem } from './SocialInfoItem';

interface SocialInfoProps
    extends Pick<User, 'location' | 'blog' | 'twitterUsername' | 'company'> {
    className?: string;
}

export const SocialInfo = (props: SocialInfoProps) => {
    const socialInfoItems: SocialInfoItemProps[] = [
        {
            icon: <LocationIcon />,
            text: props.location,
            isLink: false,
        },
        {
            icon: <TwitterIcon />,
            text: props.twitterUsername,
            isLink: false,
        },
        {
            icon: <BlogIcon />,
            text: props.blog,
            isLink: true,
        },
        {
            icon: <CompanyIcon />,
            text: props.company,
            isLink: false,
        },
    ];

    return (
        <ul className={props.className}>
            {socialInfoItems.map((item, i) => (
                <SocialInfoItem key={i} {...item} />
            ))}
        </ul>
    );
};

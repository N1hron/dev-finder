import { User } from 'types';

import { Avatar } from './Avatar';
import { Header } from './Header';
import { Bio } from './Bio';
import { Stats } from './Stats';
import { SocialInfo } from './SocialInfo/SocialInfo';

import styles from './UserInfo.module.scss';

interface UserInfoProps {
    user: User | null;
}

export const UserInfo = ({ user }: UserInfoProps) => {
    if (!user) return null;
    return (
        <article className={styles.userInfo}>
            <Avatar
                className={styles.avatar}
                avatarUrl={user.avatarUrl}
                name={user.name}
            />
            <Header
                className={styles.header}
                login={user.login}
                name={user.name}
                createdAt={user.createdAt}
            />
            <Bio className={styles.bio} bio={user.bio} />
            <Stats
                className={styles.stats}
                followers={user.followers}
                following={user.following}
                publicRepos={user.publicRepos}
            />
            <SocialInfo
                className={styles.socialInfo}
                company={user.company}
                blog={user.blog}
                location={user.location}
                twitterUsername={user.twitterUsername}
            />
        </article>
    );
};

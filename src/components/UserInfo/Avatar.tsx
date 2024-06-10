import { User } from 'types';

interface AvatarProps extends Pick<User, 'avatarUrl' | 'name'> {
    className?: string;
}

export const Avatar = (props: AvatarProps) => {
    return (
        <img
            className={props.className}
            src={props.avatarUrl}
            alt={`${props.name}'s avatar`}
        />
    );
};

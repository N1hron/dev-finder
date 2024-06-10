import { User } from 'types';

interface HeaderProps extends Pick<User, 'login' | 'name' | 'createdAt'> {
    className?: string;
}

export const Header = (props: HeaderProps) => {
    function renderCreatedAt() {
        const formattedCreatedAt = Intl.DateTimeFormat('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        }).format(new Date(props.createdAt));

        return `Joined ${formattedCreatedAt}`;
    }

    return (
        <header className={props.className}>
            <div>
                <h2>{props.name}</h2>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://github.com/${props.login}`}
                >
                    @{props.login}
                </a>
            </div>
            <span>{renderCreatedAt()}</span>
        </header>
    );
};

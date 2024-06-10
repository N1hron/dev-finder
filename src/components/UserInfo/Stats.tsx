import { User } from "types";

interface StatsProps extends Pick<User, "publicRepos" | "followers" | "following"> {
    className?: string
}

export const Stats = (props: StatsProps) => {
    return (
        <ul className={props.className}>
            <li>
                Repos:
                <span>{props.publicRepos}</span>
            </li>
            <li>
                Followers:
                <span>{props.followers}</span>
            </li>
            <li>
                Following:
                <span>{props.following}</span>
            </li>
        </ul>
    );
};

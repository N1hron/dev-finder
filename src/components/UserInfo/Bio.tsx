import { User } from 'types';

interface BioProps extends Pick<User, 'bio'> {
    className?: string;
}

export const Bio = (props: BioProps) => {
    return (
        <p data-available={Boolean(props.bio)} className={props.className}>
            {props.bio || 'This profile has no bio'}
        </p>
    );
};

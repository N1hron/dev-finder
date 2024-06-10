import { ReactComponent as Spinner } from 'assets/spinner.svg';

import styles from './Loading.module.scss';

interface LoadingProps { 
    isVisible: boolean;
}

export const Loading = ({ isVisible }: LoadingProps) => (
    isVisible ?
    <div className={styles.loading}>
        <Spinner title='Loading'/>
    </div> : null
);

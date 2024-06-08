import { useState, FormEventHandler } from 'react';

import { Button } from 'components/Button';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';

import styles from './Search.module.scss';

interface SearchProps {
    searchError: boolean;
    onSubmit: FormEventHandler<HTMLFormElement>;
}

export const Search = ({ searchError, onSubmit }: SearchProps) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <form className={styles.search} onSubmit={onSubmit}>
            <label htmlFor="search">
                <SearchIcon title="Search" />
            </label>
            <input
                id="search"
                type="text"
                placeholder="Search GitHub username"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            {searchError && <p className={styles.errorMessage}>No results</p>}
            <Button>Search</Button>
        </form>
    );
};

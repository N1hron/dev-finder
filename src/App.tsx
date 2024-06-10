import { useState } from 'react';

import { User } from 'types';
import { isGithubError, isGithubUser } from 'utils/typeguards';
import { getUserFromGithubUser } from 'utils';

import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { Search } from 'components/Search';
import { UserInfo } from 'components/UserInfo';
import { Loading } from 'components/Loading';

const BASE_URL = 'https://api.github.com/users/';

function App() {
    const [user, setUser] = useState<User | null>(null);
    
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    async function getUser(username: string) {
        if (!isLoading) {
            setErrorMessage('');
            setIsLoading(true);
            setUser(null);

            const url = BASE_URL + username;

            try {
                const response = await fetch(url);
                const json: unknown = await response.json();

                if (isGithubUser(json)) {
                    const user = getUserFromGithubUser(json);
                    setUser(user);
                } else if (isGithubError(json)) {
                    setErrorMessage(json.status === '404' ? 'No results' : 'Unexpected error');
                }
            } catch (error) {
                setErrorMessage('Unexpected error');
            }

            setIsLoading(false);
        }
    }

    return (
        <Container>
            <Header />
            <Search
                isLoading={isLoading}
                errorMessage={errorMessage}
                onSubmit={getUser}
            />
            <UserInfo user={user} />
            <Loading isVisible={isLoading}/>
        </Container>
    );
}

export default App;

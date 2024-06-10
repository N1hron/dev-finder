import { User } from 'types';
import { isGithubError, isGithubUser } from 'utils/typeguards';
import { getUserFromGithubUser } from 'utils';

import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { Search } from 'components/Search';
import { UserInfo } from 'components/UserInfo';
import { useState } from 'react';

const BASE_URL = 'https://api.github.com/users/';

function App() {
    const [user, setUser] = useState<User | null>(null);
    const [isNotFound, setIsNotFound] = useState(false);

    async function getUser(username: string) {
        setIsNotFound(false);

        const url = BASE_URL + username;

        try {
            const response = await fetch(url);
            const json: unknown = await response.json();

            if (isGithubUser(json)) {
                const user = getUserFromGithubUser(json);
                setUser(user);
            } else if (isGithubError(json) && json.status === '404') {
                setIsNotFound(true);
            }
        } catch (error) {
            console.error(error);
        }

        console.log('end');
    }

    return (
        <Container>
            <Header />
            <Search
                setIsNotFound={setIsNotFound}
                isNotFound={isNotFound}
                onSubmit={getUser}
            />
            {user && <UserInfo user={user} />}
        </Container>
    );
}

export default App;

import { User } from 'types';

import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { Search } from 'components/Search';
import { UserInfo } from 'components/UserInfo';

const testUser: User = {
    login: 'mojombo',
    id: 1,
    avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
    name: "Tom Preston-Werner",
    company: "@chatterbugapp, @redwoodjs, @preston-werner-ventures",
    blog: "http://tom.preston-werner.com",
    location: "San Francisco",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eveniet necessitatibus dolores deserunt veniam nisi ad debitis hic vitae similique unde asperiores dicta nobis dolorem, laborum, eaque odio dolore. Excepturi.",
    twitterUsername: null,
    publicRepos: 66,
    followers: 23899,
    following: 11,
    createdAt: "2007-10-20T05:24:19Z",
}

function App() {
    return (
        <Container>
            <Header/>
            <Search searchError={true} onSubmit={() => {}}/>
            <UserInfo user={testUser}/>
        </Container>
    );
}

export default App;

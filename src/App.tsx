import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { Search } from 'components/Search';

function App() {
    return (
        <Container>
            <Header/>
            <Search searchError={true} onSubmit={() => {}}/>
        </Container>
    );
}

export default App;

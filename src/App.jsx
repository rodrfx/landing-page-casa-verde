import { Header } from './components/Header';
import { Newsletter } from './components/Newsletter';
import { GlobalStyle } from './styles/globalStyle';
import * as S from './styles/stylesAPP';

function App() {
	return (
		<S.Container>
			<S.Content>
				<Header />
				<Newsletter />
			</S.Content>

			<GlobalStyle />
		</S.Container>
	);
}

export default App;

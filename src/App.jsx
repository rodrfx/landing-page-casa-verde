import { Header } from './components/Header';
import { GlobalStyle } from './styles/globalStyle';
import * as S from './styles/stylesAPP';

function App() {
	return (
		<S.Container>
			<S.Content>
				<Header />
			</S.Content>

			<GlobalStyle />
		</S.Container>
	);
}

export default App;

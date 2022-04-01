import logo from './assets/logo.svg';
import { GlobalStyle } from './styles/globalStyle';
import * as S from './styles/stylesAPP';

function App() {
	return (
		<S.Container>
			<S.Content>
				<img src={logo} alt="" />
				<h1>Iniciando o projeto...</h1>
			</S.Content>

			<GlobalStyle />
		</S.Container>
	);
}

export default App;

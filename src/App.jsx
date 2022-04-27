import planteImage from './assets/image-1.png';
import { Header } from './components/Header';
import { Newsletter } from './components/Newsletter';
import { GlobalStyle } from './styles/globalStyle';
import * as S from './styles/stylesAPP';

function App() {
	return (
		<S.Container>
			<S.Content>
				<Header />
				<S.Flex>
					<Newsletter />
					<img src={planteImage} alt="imagem de uma planta" />
				</S.Flex>
			</S.Content>

			<GlobalStyle />
		</S.Container>
	);
}

export default App;

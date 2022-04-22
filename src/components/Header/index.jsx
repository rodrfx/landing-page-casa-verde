import Logo from '../../assets/logo.svg';
import * as S from './styles';

export function Header() {
	return (
		<S.Container>
			<div>
				<img src={Logo} alt="Logo Casa Verde" />
			</div>
			<S.NavMenu>
				<ul>
					<li>
						<a href="#">Como fazer</a>
						<span>/</span>
						<a href="#">Ofertas</a>
						<span>/</span>
						<a href="#">Depoimentos</a>
						<span>/</span>
						<a href="#">Vídeos</a>
						<span>/</span>
						<a href="#">Meu Carrinho</a>
					</li>
				</ul>
			</S.NavMenu>
		</S.Container>
	);
}

import * as S from './styles';

export function Newsletter() {
	return (
		<S.Container>
			<p>Sua casa com as</p>
			<h1>melhores plantas</h1>
			<p>
				Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
				torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e
				assine nossa newsletter para saber das novidades da marca.
			</p>
			<form action="/">
				<input
					type="email"
					placeholder="Insira seu e-mail"
					pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
					required
				/>
				<button type="submit">Assinar newsletter</button>
			</form>
		</S.Container>
	);
}

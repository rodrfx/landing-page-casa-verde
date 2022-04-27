import styled from 'styled-components';
import email from '../../assets/mail.svg';

export const Container = styled.div`
	width: 36.56rem;
	margin-top: calc(9.44rem - 3.7rem);

	p:first-child {
		opacity: 0.5;
		font-size: 1.38rem;
		margin-bottom: 0.08rem;
	}

	h1 {
		font-size: 5.13rem;
		margin-bottom: 1.5rem;
	}

	p:nth-child(3) {
		max-width: 30.06rem;
		line-height: 1.63rem;
		margin-bottom: 2.31rem;
		opacity: 0.5;
	}

	input {
		width: 24.4rem;
		height: 4.69rem;
		opacity: 0.6;
		border: 0;
		line-height: 1.25rem;
		font-size: 1.25rem;
		background-image: url(${email});
		background-size: 1.5rem;
		background-repeat: no-repeat;
		background-position: 17px center;
		outline-color: var(--yellow);
		box-shadow: 10px 10px 30px 0px #0000000f;
		padding: 0 51px;
	}

	button {
		color: var(--white);
		background-color: var(--yellow);
		width: 12.13rem;
		height: 4.69rem;
		border: 0;
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.95);
		}
	}
`;

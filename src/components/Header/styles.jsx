import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;

	height: 3.7rem;
	padding-top: 0.64rem;
`;

export const NavMenu = styled.div`
	li {
		list-style: none;
	}

	a {
		color: var(--text);
		line-height: 1.22rem;
		text-decoration: none;
	}

	span {
		margin: 0 13px;
	}
`;

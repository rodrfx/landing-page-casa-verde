import styled from 'styled-components';
import vector from '../assets/vector.png';

export const Container = styled.div`
	max-width: 1920px;
	height: 100vh;
	margin: 0 auto;

	background-image: url(${vector});
	background-repeat: no-repeat;
	background-position: right top;
`;

export const Content = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	height: 100%;
`;

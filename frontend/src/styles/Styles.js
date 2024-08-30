//ARCHIVO DE ESTILOS DE RECEPCIONREPUESTOS 
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  flex: 1;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.palette.background.card};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;


export const CardTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 10px;
`;


export const CardText = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

// neuvos estilos 



import styled from 'styled-components';
import { Paper } from '@mui/material';

export const MainContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

export const Card = styled(Paper)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  background-color: ${props => props.theme.palette.background.paper};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const CardTitle = styled.h3`
  font-weight: bold;
  margin: 10px 0;
  font-size: 1.1rem;
  color: ${props => props.theme.palette.text.primary};
`;

export const CardValue = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 10px 0;
  color: ${props => props.theme.palette.primary.main};
`;

export const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${props => props.color || props.theme.palette.primary.main};
  margin-bottom: 10px;
`;
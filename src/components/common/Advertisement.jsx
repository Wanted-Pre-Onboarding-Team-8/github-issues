import { THINGS_FLOW_URL } from '@/consts';
import styled from 'styled-components';
import ThingsFlowLogo from '../../assets/ThingsFlowLogo.png';

function Advertisement() {
  return (
    <a href={THINGS_FLOW_URL} target="_blank" rel="noopener noreferrer">
      <Image />
    </a>
  );
}

const Image = styled.div`
  margin: 6px 12px;
  width: 10em;
  height: 10em;
  background: url(${ThingsFlowLogo}) center/cover no-repeat;
  transition: all 0.25s;
  
  &:hover {
    transform: scale(1.25);
  }
`;

export default Advertisement;

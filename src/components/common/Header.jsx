import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SUB_TITLE, TITLE } from '@/consts';
import colors from '@/styles/themes/colors';

function Header() {
  const navigate = useNavigate();

  return (
    <Wrap>
      <p onClick={() => navigate('/')}>{`${TITLE} / ${SUB_TITLE}`}</p>
    </Wrap>
  );
}

export default Header;

const Wrap = styled.div`
  width: 100%;
  position: fixed;
  height: 4em;
  top: 0;
  text-align: center;
  cursor: pointer;
  background-color: ${colors.shallowGray};

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.2em;
    font-weight: bold;
  }
`;

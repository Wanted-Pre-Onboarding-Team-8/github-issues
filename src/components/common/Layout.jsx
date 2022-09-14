import { Outlet } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';

function Layout() {
  return (
    <div>
      <Header />
      <Wrap>
        <OutletWrap>
          <Outlet />
        </OutletWrap>
      </Wrap>
    </div>
  );
}

export default Layout;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const OutletWrap = styled.main`
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

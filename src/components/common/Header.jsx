import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SUB_TITLE, TITLE } from "@/consts";

function Header() {
  const navigate = useNavigate();
  
  return (
    <Wrap onClick={() => navigate('/')}>
      <p>{`${TITLE} / ${SUB_TITLE}`}</p>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  margin: 1em;
  text-align: center;
  cursor: pointer;
  
  p {
    font-size: 1.2em;
    font-weight: bold;
  }
`

export default Header;
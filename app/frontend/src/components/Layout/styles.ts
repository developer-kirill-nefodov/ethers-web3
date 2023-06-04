import styled from "styled-components";
import {CustomLink} from "../../styles";

export const WrapperLayout = styled.div`

`;

export const WrapperLayoutHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  border-bottom: 1px solid #DBDEE5;
`;

export const WrapperLogoHeader = styled.div`

`;

export const NavigateLink = styled(CustomLink)`
  color: ${props => props.theme.colors.navigate};
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  transition-duration: 400ms;

  &:hover {
    opacity: .75;
  }

  &:active {
    opacity: 1;
  }
`;

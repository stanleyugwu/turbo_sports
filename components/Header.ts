import styled from "styled-components/native";
import Row from "./Row";

const Header = {
  Header: styled(Row)`
    background-color: #f6f6f6;
    padding: 15px;
  `,
  ProfilePicWrapper: styled.View`
    background-color: #e9e9e9;
    border-radius: 999px;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    width: 45px;
    height: 45px;
    padding: 5px;
  `,
  ProfilePic: styled.Image`
    width: 35px;
    height: 35px;
    border-radius: 999px;
  `,
};

export default Header;

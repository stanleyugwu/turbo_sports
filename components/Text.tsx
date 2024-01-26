import Colors from "@/constants/Colors";
import { AppFont } from "@/constants/Fonts";
import { Text as _Text, TextProps as _TextProps } from "react-native";
import styled from "styled-components/native";

interface TextProps extends _TextProps {
  font?: AppFont;
  color?: string;
  size?: number;
}

const Text = styled.Text<TextProps>`
  color: ${(props) => props.color || Colors.light.text};
  font-size: ${(props) => props.size || 12};
  font-family: ${(props) => props.font || "AirBnbMedium"};
`;

export default Text;

import Colors from "@/constants/Colors";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const TAB_WIDTH = Dimensions.get("window").width / 5;

type TabIconProps = { focused: boolean; color: string; size: number };

const TabBarImageWrapper = styled.View`
  width: ${TAB_WIDTH}px;
  align-items: center;
`;

const StyledActiveBar = styled.View<TabIconProps>`
  width: 100%;
  height: ${(props) => (props.focused ? "3px" : "0px")};
  border-radius: 999px;
  background-color: ${Colors.light.tabIconSelected};
  margin-bottom: 5px;
`;

/**
 * Renders icons for tab bar
 */
function TabBarImage(Image: SVGComponent) {
  return ({ color, focused, size }: TabIconProps) => {
    const { tabIconDefault, tabIconSelected } = Colors.light;
    const activeColor = focused ? tabIconSelected : tabIconDefault;
    return (
      <TabBarImageWrapper>
        <StyledActiveBar focused={focused} color={color} size={size} />
        <Image fill={activeColor} />
      </TabBarImageWrapper>
    );
  };
}

export default TabBarImage;

import Colors from "@/constants/Colors";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

interface TabSectionButtonProps extends TouchableOpacityProps {
  label: string;
  active: boolean;
}

interface ActiveTabBarProps {
  active: TabSectionButtonProps["active"];
}

const TabButton = styled.TouchableOpacity.attrs({ activeOpacity: 0.8 })`
  width: 50%;
`;

const TabButtonLabel = styled.Text<ActiveTabBarProps>`
  font-family: "PoppinsMedium";
  font-size: 14px;
  text-align: center;
  color: ${(props) =>
    props.active ? Colors.light.primary : Colors.light.gray};
`;

const ActiveTabBar = styled.View<ActiveTabBarProps>`
  height: 3px;
  margin-top: 15px;
  border-radius: 50px;
  width: "100%";
  background-color: ${(props) =>
    props.active ? Colors.light.primary : "#F1F1F1"};
`;

/**
 * Renders a tab section button for switching btw hot predictions
 * and upcoming matches
 */
function TabSectionButton({
  active,
  label,
  style,
  ...otherProps
}: TabSectionButtonProps) {
  return (
    <TabButton style={[style]} {...otherProps}>
      <TabButtonLabel active={active}>{label}</TabButtonLabel>
      <ActiveTabBar active={active} />
    </TabButton>
  );
}
export default TabSectionButton;

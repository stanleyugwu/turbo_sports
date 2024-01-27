import Text from "@/components/Text";
import { View } from "react-native";

interface PortfolioProps {
  name: string;
  value: string;
}

function PortfolioItem({ name, value }: PortfolioProps) {
  return (
    <View style={{ alignItems: "center" }}>
      <Text font="AirBnbMedium" size={9} color="#00000080">
        {name}
      </Text>
      <Text font="AirBnbBold" size={14}>
        {value}
      </Text>
    </View>
  );
}

export default PortfolioItem;

import Colors from "@/constants/Colors";
import styled from "styled-components/native";
import { useWindowDimensions } from "react-native";
import Text from "@/components/Text";
import PortfolioItem from "./PortfolioItem";
import Header from "./Header";
import { Predictor } from "@/assets/dashboard/data";
import Row from "./Row";

interface PredictorCardProps {
  item: Predictor;
}

export const Card = {
  Card: styled.View`
    background-color: #fff;
    box-shadow: 0px 10px 10px #00000012;
    border-radius: 8px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    margin: 0px 8px;
  `,
  PositionBadge: styled.View`
    padding: 4px;
    border-radius: 50px;
    background-color: ${Colors.light.primary};
    justify-content: center;
    align-items: center;
    width: 40px;
  `,
  PredictorFlag: styled.Image`
    width: 15px;
    height: 10px;
    margin-left: 5px;
  `,
  FollowButton: styled.TouchableOpacity`
    width: 100%;
    padding: 10px;
    border-radius: 50px;
    background-color: #e9f3ee;
    align-items: center;
    justify-content: center;
  `,
};

/**
 * Renders a UI card that dsiplays details of each predictor
 */
function PredictorCard({ item }: PredictorCardProps) {
  const { width } = useWindowDimensions();
  const CARD_WIDTH = (width * 0.85) / 2;

  return (
    <Card.Card style={{ width: CARD_WIDTH, height: 200 }}>
      <Card.PositionBadge>
        <Text font="AirBnbBold" size={12} color="white">
          {item.position}
        </Text>
      </Card.PositionBadge>
      <Header.ProfilePic
        style={{ marginVertical: 10 }}
        source={item.profilePic}
      />
      <Row>
        <Text font="AirBnbMedium" size={16}>
          {item.fullName}
        </Text>
        <Card.PredictorFlag source={item.country.flagPic} />
      </Row>
      <Row style={{ width: "100%", marginVertical: 10 }}>
        <PortfolioItem name="Rating" value={item.rating} />
        <PortfolioItem name="Winning streak" value={item.streak} />
        <PortfolioItem name="Accuracy" value={`${item.accuracy}%`} />
      </Row>
      <Card.FollowButton>
        <Text font="AirBnbMedium" size={10} color={Colors.light.primary}>
          Follow
        </Text>
      </Card.FollowButton>
    </Card.Card>
  );
}

export default PredictorCard;

import { Image, View, useWindowDimensions } from "react-native";
import { Card } from "./PredictorCard";
import { LiveMatch } from "@/assets/dashboard/data";
import Row from "./Row";
import Text from "./Text";
import { FontAwesome } from "@expo/vector-icons";
import Header from "./Header";
import styled from "styled-components/native";

const GRAY = "#00000080";

interface LiveMatchCardProps {
  item: LiveMatch;
}

const MatchCard = styled(Card.Card)`
  justify-content: space-around;
`;

const LeagueInfoRow = styled(Row)`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 10px;
  border-bottom-color: #f5f5f5;
  border-bottom-width: 1px;
`;

const TeamLogowrapper = styled(Header.ProfilePicWrapper)`
  margin-left: 0px;
  margin-right: 10px;
  width: 42px;
  height: 42px;
  background-color: #f4f4f4;
`;

const TeamLogo = styled(Header.ProfilePic)`
  width: 30px;
  height: 30px;
`;

/**
 * Renders a UI card that dsiplays details of each predictor
 */
function LiveMatchCard({ item }: LiveMatchCardProps) {
  const { width } = useWindowDimensions();
  const CARD_WIDTH = (width * 0.85) / 2;

  return (
    <MatchCard style={{ width: CARD_WIDTH, height: CARD_WIDTH }}>
      <LeagueInfoRow>
        <Image
          source={item.league.country.flagPic}
          style={{ marginRight: 5 }}
        />
        <Text font="AirBnbMedium" color={GRAY} size={10}>
          {item.league.country.name}
        </Text>
        <FontAwesome
          name="caret-right"
          size={13}
          color={GRAY}
          style={{ marginHorizontal: 8 }}
        />
        <Text font="AirBnbMedium" color={GRAY} size={10}>
          {item.league.name}
        </Text>
      </LeagueInfoRow>
      <Row
        style={{
          width: "100%",
        }}
      >
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <TeamLogowrapper>
            <TeamLogo source={item.team1.logo} />
          </TeamLogowrapper>
          <TeamLogowrapper>
            <TeamLogo source={item.team2.logo} />
          </TeamLogowrapper>
        </View>
        <Text color="#ff0000">{item.time}'</Text>
      </Row>
      <View style={{ width: "100%", alignSelf: "flex-end" }}>
        <Row>
          <Text>{item.team1.name}</Text>
          <Text color={GRAY}>{item.team1.score}</Text>
        </Row>
        <Row>
          <Text>{item.team2.name}</Text>
          <Text color={GRAY}>{item.team2.score}</Text>
        </Row>
      </View>
    </MatchCard>
  );
}

export default LiveMatchCard;

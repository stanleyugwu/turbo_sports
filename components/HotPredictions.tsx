import { Prediction } from "@/types";
import Row from "./Row";
import styled from "styled-components/native";
import Colors from "@/constants/Colors";
import { Image, View } from "react-native";
import Text from "./Text";

import SoccerImg from "@/assets/dashboard/images/soccer.svg";
import { Card } from "./PredictorCard";

interface HotPredictionProps {
  prediction: Prediction.Prediction;
}

const PredictionCard = styled(Card.Card)`
  justify-content: space-around;
  width: 100%;
  margin: 10px 0px;
  padding: 15px;
  box-shadow: -1px 5px 30px #00000012;
`;

const ViewCouponButton = {
  Wrapper: styled.TouchableOpacity.attrs({ activeOpacity: 0.8 })`
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: ${Colors.light.primary};
  `,
  text: styled.Text.attrs({ children: "View coupon" })`
    color: #fff;
    font-family: "PoppinsMedium";
    text-align: center;
  `,
};

const PredictionResult = {
  Wrapper: styled.View`
    background-color: #f4f4f4;
    margin: 0 3px;
    align-items: center;
    justify-content: center;
    padding: 2px;
    width: 15px;
    height: 15px;
  `,
  Text: styled.Text<{ won: boolean }>`
    color: ${(props) => (props.won ? Colors.light.primary : "#ff0000")};
    font-size: 12px;
  `,
};

const PredictionsArea = styled.View`
  margin: 20px 0px;
  background-color: #fafafa;
  border-radius: 10px;
  width: 100%;
  padding: 10px;
`;

const FullRow = styled(Row)`
  width: 100%;
`;

type StatTextProps = {
  stat: string;
  value: number | string;
};

const StatWrapper = styled(Row)`
  background-color: #fafafa;
  border-radius: 50px;
  padding: 10px;
`;

/**
 * Renders Stat summary for the predictions
 */
function StatText({ stat, value }: StatTextProps) {
  return (
    <StatWrapper>
      <Text color={Colors.light.gray}>{stat} - </Text>
      <Text>{value}</Text>
    </StatWrapper>
  );
}

type PredictionItemProps = Prediction.CurrentPrediction;

const PredictionText = styled(Text)`
  color: ${Colors.light.gray};
`;

/**
 * Renders prediction for each match/game
 */
function PredictionItem({ prediction, team1, team2 }: PredictionItemProps) {
  return (
    <Row style={{ marginVertical: 10 }}>
      <SoccerImg width={12} height={12} />
      <PredictionText>{team1}</PredictionText>
      <PredictionText>VS</PredictionText>
      <PredictionText>{team2}</PredictionText>
      <PredictionText>{prediction}</PredictionText>
    </Row>
  );
}

/**
 * Renders predictions from a single predictors
 */
function HotPrediction({ prediction }: HotPredictionProps) {
  return (
    <PredictionCard>
      <FullRow>
        <Row>
          <Image source={prediction.predictor.profilePic} />
          <View style={{ marginLeft: 10 }}>
            <Text size={16}>{prediction.predictor.name}</Text>
            <Row style={{ marginTop: 5 }}>
              {prediction.previousPredictions.predictions.map(
                (predResult, idx) => (
                  <PredictionResult.Wrapper key={idx}>
                    <PredictionResult.Text won={predResult.result === "win"}>
                      {predResult.result === "loss" ? "L" : "W"}
                    </PredictionResult.Text>
                  </PredictionResult.Wrapper>
                )
              )}
              <Text size={11} color={Colors.light.gray}>
                {prediction.previousPredictions.wins} of{" "}
                {prediction.previousPredictions.total} wins
              </Text>
            </Row>
          </View>
        </Row>
        <ViewCouponButton.Wrapper>
          <ViewCouponButton.text />
        </ViewCouponButton.Wrapper>
      </FullRow>
      <PredictionsArea>
        {prediction.currentPredictions.map((prediction, idx) => (
          <PredictionItem {...prediction} key={idx} />
        ))}
      </PredictionsArea>
      <FullRow>
        <StatText stat="Total odds" value={prediction.totalOdds} />
        <StatText stat="Games" value={prediction.totalGames} />
        <StatText stat="Total returns" value={prediction.totalReturns} />
      </FullRow>
    </PredictionCard>
  );
}

export default HotPrediction;

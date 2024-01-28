import { ImageSourcePropType } from "react-native";

interface Country {
  name: string;
  flagPic: ImageSourcePropType;
}

interface Team {
  name: string;
  score: number;
  logo: ImageSourcePropType;
}

export interface Predictor {
  position: string;
  profilePic: ImageSourcePropType;
  fullName: string;
  country: Country;
  rating: string;
  streak: string;
  accuracy: number;
}

export interface LiveMatch {
  league: {
    country: Country;
    name: string;
  };
  time: string;
  team1: Team;
  team2: Team;
}

namespace Prediction {
  type PredictionResult = "win" | "loss";
  type Predictor = { name: string; profilePic: ImageSourcePropType };
  type PreviousPreditions = {
    wins: number;
    total: number;
    predictions: Array<{ result: PredictionResult }>;
  };

  type CurrentPrediction = {
    team1: string;
    team2: string;
    prediction: string;
  };

  export interface Prediction {
    couponId: string;
    predictor: Predictor;
    previousPredictions: PreviousPreditions;
    currentPredictions: CurrentPrediction[];
    totalOdds: number;
    totalGames: number;
    totalReturns: string;
  }
}

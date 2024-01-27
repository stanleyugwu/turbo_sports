import { ImageSourcePropType } from "react-native";

// predictors
import nigeriaFlag from "./images/predictors/nigeria_flag.png";
import ivoryCostFlag from "./images/predictors/ivory_coast_flag.png";
import predictor1 from "./images/predictors/profile1.png";
import predictor2 from "./images/predictors/profile2.png";

// matches
import spainFlag from "@/assets/dashboard/images/matches/spain_flag.png";
import manUFlag from "@/assets/dashboard/images/matches/manchester.png";
import chelseaFlag from "@/assets/dashboard/images/matches/chelsea.png";

import englandFlag from "@/assets/dashboard/images/matches/england_flag.png";
import aston from "@/assets/dashboard/images/matches/aston.png";
import liverpool from "@/assets/dashboard/images/matches/liverpool.png";
import tottenham from "@/assets/dashboard/images/matches/tottenham.png";
import southampton from "@/assets/dashboard/images/matches/southampton.png";

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

export const PREDICTORS: Predictor[] = [
  {
    fullName: "John Pete",
    country: {
      name: "Côte d'Ivoire",
      flagPic: ivoryCostFlag,
    },
    rating: "9.5",
    streak: "9 of 10",
    position: "1st",
    accuracy: 90,
    profilePic: predictor1,
  },
  {
    fullName: "Keith Powers",
    country: {
      name: "Nigeria",
      flagPic: nigeriaFlag,
    },
    rating: "8.5",
    streak: "8 of 10",
    position: "2nd",
    accuracy: 90,
    profilePic: predictor2,
  },
  {
    fullName: "Eric James",
    country: {
      name: "Côte d'Ivoire",
      flagPic: ivoryCostFlag,
    },
    rating: "7.5",
    streak: "7 of 10",
    position: "3rd",
    accuracy: 85,
    profilePic: predictor1,
  },
];

export const MATCHES: LiveMatch[] = [
  {
    league: {
      country: { flagPic: spainFlag, name: "Spain" },
      name: "La Liga",
    },
    time: "32",
    team1: { logo: manUFlag, name: "Manchester United", score: 3 },
    team2: { logo: chelseaFlag, name: "Chelsea", score: 5 },
  },
  {
    league: {
      country: { flagPic: englandFlag, name: "England" },
      name: "Premier League",
    },
    time: "67",
    team1: { logo: aston, name: "Aston Villa", score: 3 },
    team2: { logo: liverpool, name: "Liverpool", score: 5 },
  },
  {
    league: {
      country: { flagPic: englandFlag, name: "England" },
      name: "Premier League",
    },
    time: "45",
    team1: { logo: tottenham, name: "Tottenham", score: 5 },
    team2: { logo: southampton, name: "Southampton", score: 2 },
  },
];

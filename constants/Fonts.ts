import { FontAwesome } from "@expo/vector-icons";

const APP_FONTS = {
  SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  PoppinsExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
  AirBnbBold: require("../assets/fonts/airbnb-cereal-font/AirbnbCereal_W_Bd.otf"),
  AirBnbBlack: require("../assets/fonts/airbnb-cereal-font/AirbnbCereal_W_Bk.otf"),
  AirBnbBlock: require("../assets/fonts/airbnb-cereal-font/AirbnbCereal_W_Blk.otf"),
  AirBnbLight: require("../assets/fonts/airbnb-cereal-font/AirbnbCereal_W_Lt.otf"),
  AirBnbMedium: require("../assets/fonts/airbnb-cereal-font/AirbnbCereal_W_Md.otf"),
  AirBnbExtraBold: require("../assets/fonts/airbnb-cereal-font/AirbnbCereal_W_Bd.otf"),
  ...FontAwesome.font,
};

export type AppFont = keyof typeof APP_FONTS;

export default APP_FONTS;

import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Text from "@/components/Text";
import { StatusBar } from "expo-status-bar";

import pic1 from "@/assets/dashboard/images/profile_pic1.png";
import pic2 from "@/assets/dashboard/images/profile_pic2.png";

import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { MATCHES, PREDICTORS } from "@/assets/dashboard/data";
import PredictorCard from "@/components/PredictorCard";
import Header from "@/components/Header";
import Row from "@/components/Row";
import LiveIcon from "@/assets/dashboard/images/live.svg";
import LiveMatchCard from "@/components/LiveMatchCard";
import styled from "styled-components/native";

const ActiveMatchBar = styled.View<{ active?: boolean }>`
  width: ${(props) => (props.active ? "20px" : "10px")};
  height: 5px;
  background-color: ${(props) =>
    props.active ? Colors.light.primary : "#d9d9d9"};
  border-radius: 999px;
  margin: 0 3px;
`;

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <ScrollView>
        <StatusBar backgroundColor="#F6F6F6" style="dark" animated />
        <Header.Header>
          <Text font="PoppinsExtraBold" size={24} color="#237648">
            Turbo Sports
          </Text>

          <Row>
            <Header.ProfilePicWrapper>
              <Header.ProfilePic source={pic1} />
            </Header.ProfilePicWrapper>
            <Header.ProfilePicWrapper>
              <Header.ProfilePic source={pic2} />
            </Header.ProfilePicWrapper>
          </Row>
        </Header.Header>
        <View style={{ padding: 15 }}>
          <Row>
            <Text font="AirBnbBold" size={20}>
              Top Predictors
            </Text>
            <Row>
              <Text
                font="AirBnbMedium"
                size={16}
                color={Colors.light.primary}
                style={{ marginRight: 10 }}
              >
                See all
              </Text>
              <FontAwesome
                name="angle-right"
                size={22}
                color={Colors.light.primary}
              />
            </Row>
          </Row>
        </View>
        <FlatList
          style={{
            flex: 1,
            paddingTop: 10,
            paddingBottom: 30,
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={PREDICTORS}
          renderItem={({ item }) => {
            return <PredictorCard item={item} />;
          }}
        />
        <View style={{ paddingHorizontal: 15 }}>
          <Row>
            <Row>
              <LiveIcon width={"30"} height={"30"} />
              <Text font="AirBnbBold" size={20} style={{ marginLeft: 10 }}>
                Live Matches
              </Text>
            </Row>
            <Row>
              <Row>
                <ActiveMatchBar active />
                <ActiveMatchBar />
                <ActiveMatchBar />
              </Row>
              <Text
                font="AirBnbMedium"
                size={16}
                color={Colors.light.primary}
                style={{ marginRight: 10, marginLeft: 10 }}
              >
                All
              </Text>
              <FontAwesome
                name="angle-right"
                size={22}
                color={Colors.light.primary}
              />
            </Row>
          </Row>
        </View>
        <FlatList
          showsHorizontalScrollIndicator
          style={{
            flex: 1,
            paddingTop: 10,
            paddingBottom: 30,
          }}
          horizontal
          data={MATCHES}
          renderItem={({ item }) => {
            return <LiveMatchCard item={item} />;
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: { backgroundColor: "#fcfcfc", flex: 1 },
});

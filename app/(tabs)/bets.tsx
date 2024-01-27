import { StyleSheet, View } from "react-native";

import Text from "@/components/Text";

export default function BetsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bets</Text>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

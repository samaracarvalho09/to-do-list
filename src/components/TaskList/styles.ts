import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerTasList: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginBottom: 8,
    padding: 12,

    backgroundColor: "#262626",
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 8,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 4,
  },
  textList: {
    maxWidth: "80%",
    flex: 1,
    textAlign: "center",
    color: "#fff",
    textTransform: "capitalize",
  },
  checkIcon: {},
  strikeThrough: {
    textDecorationLine: "line-through",
  },
});

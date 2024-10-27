import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapperContainer: {
    backgroundColor: "#1A1A1A",
    height: "100%",
    width: "100%",
  },
  darkContainer: {
    height: 150,
    backgroundColor: "#0D0D0D",
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  container: {
    height: "100%",
    paddingTop: 44,
    paddingHorizontal: 24,
    paddingBottom: 120,
    zIndex: 2,
  },
  containerHeader: {
    height: 32,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 40,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 32,
  },
  input: {
    flex: 1,
    padding: 16,
    color: "#F2F2F2",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#0D0D0D",
    backgroundColor: "#262626",
    textDecorationLine: "none",
  },
  buttonAdd: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4EA8DE",
    borderRadius: 8,
    padding: 18,
  },
  containerTaskCounter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
    zIndex: 2,
  },
  containerCreatedTasks: {
    flexDirection: "row",
    gap: 8,
  },
  textStyleCreatedTask: {
    fontSize: 14,
    fontWeight: "700",
    color: "#4EA8DE",
    lineHeight: 17,
  },
  numberStyleCreatedTask: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 15,
    color: "#D9D9D9",
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: "#333333",
    borderRadius: 999,
  },
  containerCompletedTasks: {
    flexDirection: "row",
    gap: 8,
  },
  textStyleCompletedTasks: {
    fontSize: 14,
    fontWeight: "700",
    color: "#8284FA",
    lineHeight: 17,
  },
  numberStyleCompletedTasks: {
    fontSize: 12,
    fontWeight: "700",
    color: "#D9D9D9",
    lineHeight: 15,
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: "#333333",
    borderRadius: 999,
  },
  containerTaskList: {
    marginBottom:100
  }
});

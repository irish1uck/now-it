import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "auto",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 35,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    display: "flex",
    borderWidth: 0.5,
    borderColor: "#000000",
    borderRadius: 5,
    borderWidth: 1.5,
    padding: 10,
    marginVertical: 10,
    width: 300,
    alignItems: "center",
    backgroundColor: "#87CEEB",
    marginHorizontal: 3,
  },
  buttonText: {
    fontSize: 25,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "#000000",
    textShadowRadius: 5,
    color: "#FFFFFF",
  },
  quoteText: {
    fontStyle: "italic",
    position: "absolute",
    fontSize: 18,
    marginHorizontal: 35,
    textAlign: "center",
    fontWeight: "normal",
    bottom: 70,
  },
  createListMain: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    height: 440,
    width: "100%",
    marginVertical: 15,
    alignItems: "center",
  },
  listTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  listTitleText: {
    fontSize: 23,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  editTitleButton: { marginLeft: 10 },
  editTitleIcon: { height: 18, width: 18 },
  listBodyContainer: {
    width: "90%",
    height: 160,
    alignItems: "center",
    justifyContent: "center",
  },
  listEntry: {
    height: 50,
    width: "85%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000000",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 18,
  },
  listEntryButton: {
    width: "85%",
  },
  listEntryButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "#000000",
    textShadowRadius: 5,
  },
  listBodyView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listBodyText: {
    color: "black",
    flexDirection: "row",
    marginVertical: 3,
    fontSize: 18,
  },
  listBodyButton: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
  },
  width90: { width: "90%" },
  listPreviewText: {
    marginTop: 10,
    fontSize: 25,
  },
  submitBtnExtra: { width: "100%", marginHorizontal: 0 },
  centerAlign: { alignItems: "center" },
  mainTitle: {
    fontSize: 70,
    fontWeight: "bold",
    color: "#87CEEB",
    textAlign: "center",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "#000000",
    textShadowRadius: 5,
  },
  extraMarginVertical: {
    marginVertical: 30,
  },
  taskListView: { height: 345, flex: 1 },
  taskListBody: { height: 345 },
  mainSubtitle: {
    fontSize: 40,
    color: "#87CEEB",
    textAlign: "center",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "#000000",
    textShadowRadius: 5,
  },
  logoutButton: {
    alignItems: "center",
    position: "absolute",
    top: 50,
    right: 25,
  },
  logoutButtonText: { color: "#87CEEB", fontWeight: "bold" },
  loadingScreen: { backgroundColor: "#87CEEB" },
});

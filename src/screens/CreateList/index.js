import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AddEntryContainer from "../../components/Create/AddEntryContainer";
import RenderListBody from "../../components/Create/RenderListBody";
import {
  addListItem,
  addTitle,
  centerJustified,
  createListButtonFunc,
} from "../../components/Utils";
import { db } from "../../firebase/config";
import {
  str006,
  str007,
  str008,
  str009,
  str010,
  str012,
} from "../../resources/strings";
import { styles } from "../../styles";

export default CreateList = (props) => {
  const [loading, setLoading] = useState(false);
  const [listEntryText, setListEntryText] = useState(str006);
  const [listName, setListName] = useState(str006);
  const [listItems, setListItems] = useState([]);
  const placeholder = listName ? str007 : str008;
  const stateUser = props.extraData;
  const listDB = db.collection("Lists");
  console.log("here here here ", stateUser);
  const navigation = useNavigation();

  const addTitleFunc = () =>
    addTitle(listEntryText, setListName, setListEntryText);

  const addTaskFunc = () =>
    addListItem(listEntryText, listItems, setListItems, setListEntryText);

  const submitList = () => {
    if (listName && listItems.length) {
      setLoading(true);
      createListButtonFunc(listName, listItems, listDB, stateUser, navigation);
      setListName(str006);
      setListItems([]);
    } else {
      alert("Your list needs a name and items to publish");
    }
  };

  const mainViewStyle =
    listName || listItems.length
      ? styles.container
      : [styles.container, centerJustified];

  if (loading) {
    return (
      <View style={[styles.container, { backgroundColor: "#87CEEB" }]}>
        <ActivityIndicator size={"large"} color={"#FFFFFF"} />
      </View>
    );
  }

  return (
    <View style={mainViewStyle}>
      <AddEntryContainer
        containerStyle={styles.listBodyContainer}
        listEntryStyle={styles.listEntry}
        placeholderText={placeholder}
        setListFunc={setListEntryText}
        listEntryValue={listEntryText}
        onSubmitEditing={!listName ? addTitleFunc : addTaskFunc}
        buttonStyle={[styles.button, styles.listEntryButton]}
        buttonFunc={!listName ? addTitleFunc : addTaskFunc}
        buttonTextStyle={styles.listEntryButtonText}
        buttonText={str009}
      />
      {listName || listItems.length ? (
        <RenderListBody
          previewTitle={str010}
          name={listName}
          setName={setListName}
          listWidth={260}
          items={listItems}
          setItems={setListItems}
          submit={submitList}
          submitLabel={str012}
        />
      ) : null}
    </View>
  );
};

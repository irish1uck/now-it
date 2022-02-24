import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { gray, transparent } from "../../../resources/colors";
import {
  str006,
  str014,
  str080,
  str081,
  str085,
  str086,
  str087,
  str088,
  str089,
} from "../../../resources/strings";
import { styles } from "../../../styles";
import { useDispatch } from "react-redux";
import { registerNewUser } from "../Utils";
import { db } from "../../../firebase/config";
import Loading from "../Loading";

export default Register = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState(str006);
  const [email, setEmail] = useState(str006);
  const [location, setLocation] = useState(str006);
  const [password, setPassword] = useState(str006);
  const [confirmPassword, setConfirmPassword] = useState(str006);
  const dispatch = useDispatch();
  const handleUserNameInput = (text) => setUsername(text);
  const handleEmailInput = (text) => setEmail(text);
  const handlePasswordInput = (text) => setPassword(text);
  const handleConfirmPasswordInput = (text) => setConfirmPassword(text);
  const handleLocationInput = (text) => setLocation(text);
  const handleRegister = () => {
    if (username === str006) {
      alert("You need to enter a username");
    } else if (username.length < 6) {
      alert("Your username must be 6 character or more");
    } else if (email === str006) {
      alert("You need to enter your email");
    } else if (password.length < 8) {
      alert("Your password needs to be 8 characters or more");
    } else if (confirmPassword === str006) {
      alert("You need to re enter your password");
    } else if (password !== confirmPassword) {
      alert("Your passwords don't match");
    } else if (location === str006) {
      alert("You have to enter a location");
    } else {
      setLoading(true);
      registerNewUser(
        username,
        email,
        password,
        location,
        setUsername,
        setEmail,
        setPassword,
        setConfirmPassword,
        setLocation,
        dispatch,
        db
      );
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.mainTitle, styles.extraMarginVertical]}>
        {str085}
      </Text>
      <TextInput
        style={styles.listEntry}
        placeholder={str086}
        placeholderTextColor={gray}
        onChangeText={handleUserNameInput}
        value={username}
        underlineColorAndroid={transparent}
        autoCapitalize={str014}
      />
      <TextInput
        style={styles.listEntry}
        placeholder={str080}
        placeholderTextColor={gray}
        onChangeText={handleEmailInput}
        value={email}
        underlineColorAndroid={transparent}
        autoCapitalize={str014}
      />
      <TextInput
        style={styles.listEntry}
        placeholder={str081}
        placeholderTextColor={gray}
        onChangeText={handlePasswordInput}
        value={password}
        underlineColorAndroid={transparent}
        autoCapitalize={str014}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.listEntry}
        placeholder={str087}
        placeholderTextColor={gray}
        onChangeText={handleConfirmPasswordInput}
        value={confirmPassword}
        underlineColorAndroid={transparent}
        autoCapitalize={str014}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.listEntry}
        placeholder={str088}
        placeholderTextColor={gray}
        onChangeText={handleLocationInput}
        value={location}
        underlineColorAndroid={transparent}
        autoCapitalize={str014}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>{str089}</Text>
      </TouchableOpacity>
    </View>
  );
};
import React from "react";
import { View } from "react-native";
import { Item, Input, Icon, Button, Text } from "native-base";

const Login = () => {
  return (
    <View style={styles.mainContainerStyle}>
      <View style={styles.subContainerStyle}>
        <Icon style={[styles.logoStyle, styles.textStyle]} name="appstore" />
        <Text style={[styles.logoText, styles.textStyle]}>Pulse</Text>
        <View style={styles.inputSectionStyle}>
          <Item>
            <Input style={styles.textStyle} placeholder="email" />
            <Icon style={styles.textStyle} active name="close" />
          </Item>
          <Item>
            <Input style={styles.textStyle} placeholder="password" />
            <Icon style={styles.textStyle} active name="close" />
          </Item>
          <View style={styles.forgotPswdBtn}>
            <Button transparent>
              <Text style={styles.buttonText}>Forgot Password?</Text>
            </Button>
          </View>
        </View>

        <View>
          <Button
            style={[styles.loginButtonStyle, styles.googleBtn]}
            iconLeft
            full
            rounded
          >
            <Icon name="logo-googleplus" />
            <Text style={styles.buttonText}>Sign in with Google</Text>
          </Button>
          <Button
            style={[styles.loginButtonStyle, styles.facebookBtn]}
            iconLeft
            full
            rounded
          >
            <Icon name="logo-facebook" />
            <Text style={styles.buttonText}>Sign in with Facebook</Text>
          </Button>
          <Button
            style={[styles.loginButtonStyle, styles.createAccBtn]}
            iconLeft
            full
            rounded
          >
            <Text style={styles.createAccText}>Create an Account</Text>
          </Button>
        </View>
      </View>
      <View style={styles.signInStyle}>
        <Text style={[styles.signInText, styles.textStyle]}>Sign In</Text>
        <Button style={styles.signInBtn} iconRight rounded>
          <Icon style={styles.signInIcon} name="arrow-forward" />
        </Button>
      </View>
    </View>
  );
};

const styles = {
  mainContainerStyle: {
    flex: 1,
    justifyContent: "space-around",
    margin: 10
  },
  subContainerStyle: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logoStyle: {
    fontSize: 80
  },
  logoText: {
    fontSize: 25
  },
  textStyle: {
    color: "#fff"
  },
  inputSectionStyle: {
    width: 250,
    margin: 10,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  forgotPswdBtn: {
    textAlign: "center"
  },
  buttonText: {
    fontSize: 12,
    color: "#fff",
    marginHorizontal: "auto"
  },
  createAccText: {
    fontSize: 12,
    color: "#000",
    marginHorizontal: "auto"
  },
  loginButtonStyle: {
    width: 250,
    margin: 5,
    marginHorizontal: "auto"
  },
  googleBtn: {
    backgroundColor: "#dd4b39"
  },
  facebookBtn: {
    backgroundColor: "#3b5998"
  },
  createAccBtn: {
    backgroundColor: "#fff"
  },
  signInStyle: {
    flexDirection: "row",
    alignSelf: "flex-end"
  },
  signInText: {
    fontSize: 10,
    margin: 20,
    marginHorizontal: 10
  },
  signInBtn: {
    width: 45,
    textAlign: "center",
    backgroundColor: "#ff0053",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 3
  },
  signInIcon: {
    textAlign: "center",
    fontSize: 25,
    paddingHorizontal: 3
  }
};

export default Login;

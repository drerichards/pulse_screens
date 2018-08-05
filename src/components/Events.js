import React from "react";
import { View } from "react-native";
import { Item, Input, Icon, Button, Text } from "native-base";

const buttonLabels = [
    "Attraction",
    "Class",
    "Conference",
    "Convention",
    "Community",
    "Class",
    "Festival",
    "Gala",
    "Game",
    "Networking",
    "Party",
    "Performance",
    "Race",
    "Rally",
    "Retreat",
    "Screening",
    "Tour",
    "Tournament"
]

const listButtons = () => {
    const list = buttonLabels.map((button, i) => {
        return <Button style={styles.buttonStyle} rounded key={i}>
            <Text style={styles.buttonText}>{button}</Text>
        </Button>
    })
    return list
}

const Events = () => {
  return (
    <View style={styles.mainContainerStyle}>
        <Text style={[styles.headerText, styles.textStyle]}>Sign Up</Text>
        <View style={styles.subContainerStyle}>
            <Text style={styles.titleText}>Event Categories</Text>
            <Text style={[styles.subTitleText, styles.textStyle]}>What are you interested in?</Text>
            <Text style={[styles.captionText, styles.textStyle]}>You can always add to this</Text>
        </View>
        <View style={styles.subContainerStyle}>
            <Text style={[styles.captionText, styles.textStyle]}>Limit - 10</Text>
            <View style={styles.buttonSection}>
                {listButtons()}
            </View>
        </View>
    <View style={styles.finishStyle}>
        <Text style={[styles.finishText, styles.textStyle]}>Finish</Text>
        <Button style={styles.finishBtn} iconRight rounded>
          <Icon style={styles.finishIcon} name="ios-checkmark" />
        </Button>
      </View>
    </View>
  );
};

const styles = {
    mainContainerStyle: {
      flex: 1,
      justifyContent: "space-around",
      margin: 10,
      alignSelf: 'stretch',
    },
    subContainerStyle: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      textAlign: "left",
      paddingHorizontal: 5
    },
    textStyle: {
      color: "#fff"
    },
    headerText: {
        marginTop: 10,
        textAlign: "center"
    },
    titleText: {
      color: "#ff0053",

    },
    subTitleText: {
        fontSize: 35,
        margin: 10,
        marginHorizontal: 0
    },
    captionText: {
        fontSize: 11
    },
    buttonSection: {
        width: "90%",
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row'
    },
    buttonStyle: {
      backgroundColor: "#ff0053",
      height: 30,
        margin: 10,
        marginHorizontal: 5
    },
    buttonText: {
      fontSize: 11,
      color: "#fff",
      fontWeight: "600",
      marginHorizontal: "auto"
    },
    finishStyle: {
      flexDirection: "row",
      alignSelf: "flex-end"
    },
    finishText: {
      fontSize: 10,
      margin: 20,
      marginHorizontal: 10
    },
    finishBtn: {
      width: 45,
      textAlign: "center",
      backgroundColor: "#ff0053",
      shadowColor: "#000",
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.6,
      shadowRadius: 3
    },
    finishIcon: {
      textAlign: "center",
      fontSize: 55,
      width: 45,
      padding: 10,
      paddingBottom: 57
    }
  };
  
  export default Events;
  
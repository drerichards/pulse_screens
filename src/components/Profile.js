import React, { Component } from 'react';
import {View} from 'react-native';
import { Item, Input, Icon, Button, Text, Label, Form, Textarea, DatePicker } from "native-base";

class Profile extends Component {
    constructor(props) {
      super(props);
      this.state = { chosenDate: new Date() };
      this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
      this.setState({ chosenDate: newDate });
    }
    render(){

    return (
        <View style={styles.mainContainerStyle}>
            <Text style={[styles.headerText, styles.textStyle]}>Sign Up</Text>
            <View style={styles.subContainerStyle}>
                <View style={styles.profilePicStyle}>
                    <Text style={[styles.profilePicText, styles.textStyle]}>Profile Picture</Text>
                    <Button style={styles.profilePicBtn} iconRight rounded>
                        <Icon style={styles.profilePicIcon} name="ios-add" />
                    </Button>
                </View>
                <Item floatingLabel>
                    <Label style={[styles.captionText, styles.textStyle]}>Name</Label>
                    <Input style={styles.textStyle} />
                    <Icon style={styles.textStyle} active name="ios-close-circle-outline" />
                </Item>
                <Text style={styles.subTitleText}>Email</Text>
                <Item style={styles.formMargin} floatingLabel>
                    <Label style={[styles.captionText, styles.textStyle]}>Username</Label>
                    <Input style={styles.textStyle} />
                    <Icon style={styles.textStyle} active name="ios-close-circle-outline" />
                </Item>
                <Item style={styles.formMargin} floatingLabel>
                    <Label style={[styles.captionText, styles.textStyle]}>City</Label>
                    <Input style={styles.textStyle} />
                    <Icon style={styles.textStyle} active name="ios-close-circle-outline" />
                </Item>
                 <Button style={styles.buttonStyle} rounded>
                <DatePicker style={[styles.finishText, styles.textStyle]}
                    defaultDate={new Date()}
                    minimumDate={new Date(1900, 1, 1)}
                    maximumDate={new Date()}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select Date of Birth"
                    placeHolderTextStyle={{ color: "#ff0053", fontSize: 11 }}
                    onDateChange={() => this.setDate}
                    />
                    </Button>
                <Text style={[styles.finishText, styles.textStyle]}>
                    Date: {this.state.chosenDate.toString().substr(4, 12)}
                </Text> 
                <Form style={[styles.formMargin, styles.textarea]}>
                    <Text style={[styles.captionText, styles.textStyle]}>Bio</Text>
                    <Textarea style={[styles.captionText, styles.textStyle]} rowSpan={3} placeholder="100 words or less..." />
                </Form>  
            </View>
            
        <View style={styles.finishStyle}>
            <Text style={[styles.finishText, styles.textStyle]}>Continue to Interests</Text>
            <Button style={styles.finishBtn} iconRight rounded>
              <Icon style={styles.finishIcon} name="arrow-forward" />
            </Button>
        </View>
    </View>
    );
};
}
    
    const styles = {
        mainContainerStyle: {
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
          margin: 10,
          alignSelf: 'stretch',
        },
        subContainerStyle: {
          justifyContent: "flex-start",
          alignItems: "flex-start",
          textAlign: "left",
          paddingHorizontal: 5,
          width: 250
        },
        textStyle: {
          color: "#fff"
        },
        headerText: {
            marginTop: 10,
            textAlign: "center"
        },
        subTitleText: {
            fontSize: 30,
            marginTop: 20,
            marginHorizontal: 0,
            color: "#666"
        },
        captionText: {
            fontSize: 11
        },
        formMargin: {
            marginVertical: 8
        },
        textarea: {
            width: 250,
            height: 30
        },
        buttonSection: {
            width: "90%",
            flexWrap: 'wrap', 
            alignItems: 'flex-start',
            flexDirection:'row'
        },
        buttonStyle: {
          backgroundColor: "#fff",
            marginTop: 10,
            height: 35,
            paddingBottom: 18
        },
        buttonText: {
          fontSize: 11,
          color: "#fff",
          fontWeight: "600",
          marginHorizontal: "auto"
        },
        profilePicStyle: {
            flexDirection: "column",
            alignSelf: "flex-start"
        },
        profilePicText: {
            fontSize: 10,
            margin: 5
        },
        profilePicBtn: {
            width: 45,
            textAlign: "center",
            backgroundColor: "#fff",
        },
        profilePicIcon: {
            color: "#ff0053",
        textAlign: "center",
        fontSize: 25,
        width: 46
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
          fontSize: 35,
          width: 48,
          padding: 10,
          paddingBottom: 37
        }
      };

export default Profile;
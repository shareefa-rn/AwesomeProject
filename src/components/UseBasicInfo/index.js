import React from "react";
import { TextInput, View } from "react-native";

const UserBasicInfo = props => {
    const {inputStyle, userData} = props;
    const {firstname, lastName} = userData;

    return(
        <View>
        <Text>BASIC USER INFO</Text>
        <TextInput
        value={firstname}
        onChangeText={() => {}}
        placeholder="First Name"
        style={inputStyle}/>

        <TextInput 
        value={lastName}
        onChangeText={() => {}}
        placeholder="Last Name"
        style={inputStyle}/>
        </View>
    )
}

export default UserBasicInfo;
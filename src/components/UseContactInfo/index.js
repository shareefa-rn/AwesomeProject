import React from "react";
import { TextInput, View } from "react-native";

const UserContactInfo = props => {
    const {inputStyle, userData} = props;
    const {phone, email} = userData;

    return(
        <View>
        <Text>BASIC Contact INFO</Text>
        <TextInput
        value={phone}
        onChangeText={() => {}}
        placeholder="Phone"
        style={inputStyle}/>

        <TextInput 
        value={email}
        onChangeText={() => {}}
        placeholder="Email"
        style={inputStyle}/>
        </View>
    )
}

export default UserContactInfo;
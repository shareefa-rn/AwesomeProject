import React from "react";
import { TextInput, View } from "react-native";

const UserAddressInfo = props => {
    const {inputStyle, userData} = props;
    const {city, country, postalcode} = userData;

    return(
        <View>
        <Text>BASIC Address INFO</Text>
        <TextInput
        value={city}
        onChangeText={() => {}}
        placeholder="City"
        style={inputStyle}/>

        <TextInput 
        value={country}
        onChangeText={() => {}}
        placeholder="Country"
        style={inputStyle}/>
        
        <TextInput 
        value={postalcode}
        onChangeText={() => {}}
        placeholder="PostalCode"
        style={inputStyle}/>

        </View>
    )
}

export default UserAddressInfo;
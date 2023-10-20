import React from "react";

import UserBasicInfo from "../UseBasicInfo";
import UserContactInfo from "../UseContactInfo";
import UserAddressInfo from "../UseAddressInfo";
import { View } from "react-native";

const UserProfile = props => {

    const {userData, inputStyle} = props;
    const {firstName, lastName, email, phone, city, country, postalCode} = userData;

    return(<View>
        <Text>User Profile</Text>
        <UserBasicInfo {...props}/>
        <UserContactInfo {...props}/>
        <UserAddressInfo {...props}/>
    </View>)
};

export default UserProfile;
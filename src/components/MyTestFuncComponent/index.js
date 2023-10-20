import React, { useState } from "react";
import { View, Text, TextInput} from "react-native";
import styles from "./styles";

const MyTestFuncComponent = props => {
    const [text, onChangeText] = React.useState('');

    return (
        <View>
            <Text>Hello iam from My text function</Text>
            <TextInput
            style={styles.textInput}
           onChangeText={onChangeText}
           value={text} />
        </View>
    )
}

export default MyTestFuncComponent;
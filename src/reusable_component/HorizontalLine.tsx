import { StyleSheet, View } from "react-native";
import { lightGrey } from "../helper/ColorStyles";

const HorizontalLine = () => {
    return (
        <View
            style={{
                borderBottomColor: lightGrey,
                borderBottomWidth: StyleSheet.hairlineWidth,
            }}
        />
    );
}

export default HorizontalLine;
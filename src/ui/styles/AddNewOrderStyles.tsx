import { StyleSheet } from "react-native";
import { grey, lightGrey } from "../../helper/ColorStyles";

const AddNewOrderStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        flexDirection: 'column'
    },
    content: {
        backgroundColor: 'white',
        width: '100%',
        // height: '100%',
        flex: 1,
        paddingHorizontal: 15
    },
    labelWithRequired: {
        flexDirection: 'row'
    },
    section: { color: grey, fontSize: 14, fontWeight: '500' },
    label: { color: 'black', fontSize: 13, fontWeight: '400' },
    required: { color: 'red', fontSize: 13, fontWeight: '400' },
    textInput: {borderColor: lightGrey, borderWidth: 1, borderRadius: 4, fontSize: 14, fontWeight: '500', paddingHorizontal: 15},
    textInputDisable: {backgroundColor: lightGrey,borderColor: lightGrey, borderWidth: 1, borderRadius: 4, fontSize: 14, fontWeight: '500', paddingHorizontal: 15}

});

export default AddNewOrderStyles;
import { StyleSheet } from "react-native";
import { lightGrey } from "../../helper/ColorStyles";

const ListOfOrderStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        flexDirection: 'column'
    },
    content: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        paddingLeft: 15,
        paddingRight: 15
    },
    item: {
        // height: 328,
        backgroundColor: 'white',
        borderColor: lightGrey,
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 15,
        padding: 10
    }
});

export default ListOfOrderStyles;
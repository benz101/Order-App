import { View } from "react-native"


const Spacer = ({ width, height }: {
    width?: number,
    height?: number
}) => {
    return <View style={{ width, height }} />
}



export default Spacer;
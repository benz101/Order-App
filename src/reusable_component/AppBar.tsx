import { View } from "react-native";
import { Appbar, useTheme } from "react-native-paper"
import { blueSky, lightGrey } from "../helper/ColorStyles";

const AppBar = ({ onPressLeft, showIconLeft, iconLeft, iconLeftColor, title, actions }: AppbarProps) => {
    const theme = useTheme();

    return (
        <Appbar.Header style={{ backgroundColor: 'white', paddingHorizontal: 15, borderBottomColor: lightGrey, borderBottomWidth: 3 }}>
            {(showIconLeft ?? false) ? <Appbar.Action icon={iconLeft ?? ''} iconColor={iconLeftColor ?? blueSky} onPress={onPressLeft} /> : <View />}
            {/* <Appbar.BackAction onPress={backPress} /> */}

            <Appbar.Content title={title} titleStyle={{ color: 'black', fontSize: 16, textAlign: 'center', fontWeight: '700' }} />
            {
                actions !== undefined ?
                    actions.map((item, index) => <Appbar.Action icon={item.icon} onPress={item.onPress} />) : <View />
            }
        </Appbar.Header>

    );
}

export default AppBar;

interface AppbarProps {
    showIconLeft?: boolean;
    onPressLeft?: () => void;
    iconLeft?: string;
    iconLeftColor?: string;
    title: string;
    actions?: Array<AppbarActionProps>

}

interface AppbarActionProps {
    icon: string;
    onPress: () => void;
}
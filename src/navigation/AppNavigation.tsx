import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListOfOrderPage from "../ui/ListOfOrderPage";
import AddNewOrderPage from "../ui/AddNewOrderPage";
import EditOrderPage from "../ui/EditOrderPage";
import DetailOfOrderPage from "../ui/DetailOfOrderPage";



export type RootStackParamList = {
    ListOfOrder: undefined,
    AddNewOrder: undefined,
    EditOrder: {
        param: any
    },
    DetailOfOrder: {
        param: any
    }
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListOfOrder">
                <Stack.Screen name="ListOfOrder" component={ListOfOrderPage} options={{headerShown: false}}/>
                <Stack.Screen name="AddNewOrder" component={AddNewOrderPage} options={{headerShown: false}}/>
                <Stack.Screen name="EditOrder" component={EditOrderPage} options={{headerShown: false}}/>
                <Stack.Screen name="DetailOfOrder" component={DetailOfOrderPage} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
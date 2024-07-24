import {
    Button,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import AppBar from '../reusable_component/AppBar';
import ListOfOrderStyles from './styles/ListOfOrderStyles';
import Spacer from '../reusable_component/Spacer';
import { darkButton, lightBlueButton, lightGrey } from '../helper/ColorStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import HorizontalLine from '../reusable_component/HorizontalLine';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
import MultipleDialog from '../reusable_component/MultipleDialog';
import { useState } from 'react';

type ListOfOrderProps = NativeStackScreenProps<RootStackParamList, 'ListOfOrder'>;


export default function ListOfOrderPage({ navigation }: ListOfOrderProps) {
    const listOfOrder = [
        {
            "created_at": "2083-08-03T12:11:55.85Z",
            "customer_name": "Billie Murazik",
            "total_products": -54516053,
            "total_price": "663.00",
            "id": "616958473136071"
        },
        {
            "created_at": "2014-09-28T02:57:21.294Z",
            "customer_name": "Terrance Dare",
            "total_products": 67920965,
            "total_price": "287.00",
            "id": "479710301752239"
        },
        {
            "created_at": "2061-06-02T07:47:27.776Z",
            "customer_name": "Rachael Feeney",
            "total_products": 31162484,
            "total_price": "908.00",
            "id": "356528614513228"
        },
        {
            "created_at": "2058-01-07T08:49:15.811Z",
            "customer_name": "Elisa Rolfson",
            "total_products": 68184868,
            "total_price": "555.00",
            "id": "345874312254449"
        },
        {
            "created_at": "2098-04-16T03:49:30.123Z",
            "customer_name": "Miss Virgil Walter",
            "total_products": 74174492,
            "total_price": "898.00",
            "id": "614296915336931"
        },
        {
            "created_at": "1991-03-10T02:02:31.023Z",
            "customer_name": "Mrs. Theodore Bednar",
            "total_products": -3575672,
            "total_price": "268.00",
            "id": "546760592410375"
        },
        {
            "created_at": "2044-11-14T18:40:50.954Z",
            "customer_name": "Bert McDermott",
            "total_products": -15324931,
            "total_price": "623.00",
            "id": "576999622297064"
        },
        {
            "created_at": "2048-11-28T22:18:46.69Z",
            "customer_name": "Wayne Rau",
            "total_products": -24807943,
            "total_price": "334.00",
            "id": "584421671957337"
        },
        {
            "created_at": "2045-01-28T04:26:02.021Z",
            "customer_name": "Joey Runolfsdottir DDS",
            "total_products": -48665660,
            "total_price": "28.00",
            "id": "879212459464446"
        },
        {
            "created_at": "2027-05-27T05:58:13.541Z",
            "customer_name": "Marty Hessel",
            "total_products": -32888235,
            "total_price": "251.00",
            "id": "157689786314913"
        }
    ];
    const [deleteVisbility, setDeleteVisibility] = useState(false);

    const updateDeleteVisibility = (newState: boolean) => {
        setDeleteVisibility(newState);
    };

    return (
        <View style={ListOfOrderStyles.container}>
            <AppBar title="Order" showIconLeft iconLeft="plus" onPressLeft={() => navigation.navigate('AddNewOrder')} />
            <View style={ListOfOrderStyles.content}>
                <ListOfOrderComponent list={listOfOrder} navigation={navigation} updateDeleteVisibility={updateDeleteVisibility} />
            </View>
            <MultipleDialog
                visible={deleteVisbility}
                onDismiss={() => setDeleteVisibility(false)}
                title="Are you sure to delete this?"
                body="You can't recover data because it will be deleted permanently."
                onPressOk={() => { }}
                onPressCancel={() => setDeleteVisibility(false)}
            />
        </View>
    );
}

function ListOfOrderComponent({ list, navigation, updateDeleteVisibility }: { list: Array<any>, navigation: NativeStackNavigationProp<RootStackParamList, "ListOfOrder", undefined>, updateDeleteVisibility: (newState: boolean) => void }) {
    const handlePressDelete = (param: boolean) => {
        updateDeleteVisibility(param);
    };
    return (
        <FlatList
            keyExtractor={(item, index) => `${item.id}`}
            data={list}
            renderItem={(item) =>
                <ItemOfOrder item={item} navigation={navigation} onDelete={() => handlePressDelete(true)} />
            }
        />);
}

function ItemOfOrder({ item, navigation, onDelete }: { item: any, navigation: NativeStackNavigationProp<RootStackParamList, "ListOfOrder", undefined>, onDelete: () => void }) {
    return (
        <View style={ListOfOrderStyles.item}>
            <View style={{ width: '100%' }}>
                <Text style={{ color: 'black', fontSize: 14, fontWeight: 500 }}>Order Id</Text>
                <Spacer height={10} />
                <Text style={{ color: 'black', fontSize: 14, fontWeight: 700 }}>10981234566</Text>
            </View>
            <Spacer height={10} />
            <HorizontalLine />
            <Spacer height={10} />
            <View style={{ width: '100%' }}>
                <View style={{ width: '100%', flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <Text>Customer</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text>Anugrah Store</Text>
                    </View>
                </View>
                <Spacer height={10} />
                <View style={{ width: '100%', flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <Text>Total Products</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text>1.541.000</Text>
                    </View>
                </View>
                <Spacer height={10} />
                <View style={{ width: '100%', flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <Text>Total Price</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text>4.541.000</Text>
                    </View>
                </View>
                <Spacer height={10} />
                <View style={{ width: '100%', flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <Text>Order Date</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text>13/03/2021 10:43</Text>
                    </View>
                </View>
            </View>
            <Spacer height={10} />
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('EditOrder', {
                    param: 0
                })} style={{ backgroundColor: darkButton, flex: 1, borderColor: darkButton, borderWidth: 1, borderRadius: 4, height: 36, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: '700' }}>Edit</Text>
                </TouchableOpacity>
                <Spacer width={8} />
                <TouchableOpacity onPress={() => navigation.navigate('DetailOfOrder', {
                    param: 0
                })} style={{ backgroundColor: 'white', flex: 1, borderColor: lightBlueButton, borderWidth: 1, borderRadius: 4, height: 36, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: lightBlueButton, fontSize: 15, fontWeight: '700' }}>Detail</Text>
                </TouchableOpacity>
                <Spacer width={8} />
                <TouchableOpacity onPress={onDelete} style={{ backgroundColor: 'white', width: 36, borderColor: lightGrey, borderWidth: 1, borderRadius: 4, height: 36, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                    <Image source={require("../image/img_delete.png")} width={10} height={10} />
                </TouchableOpacity>
            </View>

        </View>
    )
}
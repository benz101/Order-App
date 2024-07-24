import {
    FlatList,
    ScrollView,
    Text,
    View,
} from 'react-native';
import AppBar from '../reusable_component/AppBar';
import DetailOfOrderStyles from './styles/DetailOfOrderStyles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
import Spacer from '../reusable_component/Spacer';
import { grey, lightBlack, lightGrey } from '../helper/ColorStyles';

type DetailOfOrderProps = NativeStackScreenProps<RootStackParamList, 'DetailOfOrder'>;


export default function DetailOfOrderPage({navigation}:DetailOfOrderProps) {
    const listOfProduct = [
        {
            "name": "Ergonomic Metal Keyboard",
            "price": 190000,
            "id": 1
        },
        {
            "name": "Small Frozen Cheese",
            "price": 310000,
            "id": 2
        },
        {
            "name": "Bespoke Frozen Gloves",
            "price": 470000,
            "id": 3
        },
        {
            "name": "Awesome Fresh Pants",
            "price": 430000,
            "id": 4
        },
        {
            "name": "Elegant Plastic Table",
            "price": 330000,
            "id": 5
        },
        {
            "name": "Luxurious Rubber Fish",
            "price": 390000,
            "id": 6
        },
        {
            "name": "Practical Metal Tuna",
            "price": 800000,
            "id": 7
        },
        {
            "name": "Awesome Plastic Fish",
            "price": 90000,
            "id": 8
        },
        {
            "name": "Unbranded Metal Towels",
            "price": 540000,
            "id": 9
        },
        {
            "name": "Modern Concrete Chips",
            "price": 990000,
            "id": 10
        }
    ];

    return (
        <View style={DetailOfOrderStyles.container}>
            <AppBar title="Detail Order" showIconLeft iconLeft="keyboard-backspace" iconLeftColor="black" onPressLeft={() => navigation.pop()} />
            <View style={DetailOfOrderStyles.content}>
                <DetailOfOrderComponent list={listOfProduct} />
            </View>
        </View>
    );
}

function DetailOfOrderComponent({ list }: { list: Array<any> }) {
    return (
        <View style={{ width: '100%' }}>
            <ScrollView>
            <View style={{ width: '100%' }}>
                <View style={{ width: '100%' }}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 400 }}>Order ID</Text>
                    <Spacer height={10}/>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 700 }}>11001100</Text>
                </View>
                <Spacer height={10}/>
                <View style={{ width: '100%' }}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 400 }}>Customer Name</Text>
                    <Spacer height={10}/>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 700 }}>Anugrah Store</Text>
                </View>
                <Spacer height={10}/>
                <View style={{ width: '100%' }}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 400 }}>Total Order Price</Text>
                    <Spacer height={10}/>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 700 }}>Rp 1.000.000</Text>
                </View>
            </View>
            <Spacer height={10}/>
            <Text style={{ color: grey, fontSize: 16, fontWeight: 400 }}>Product Detail</Text>
            <Spacer height={10}/>
            <ListOfProductComponent list={list}/>
            <Spacer height={10}/>
            </ScrollView>
        </View>
    );
}

function ListOfProductComponent({ list }: { list: Array<any> }) {

    return (
        <FlatList
            keyExtractor={(item, index) => `${item.id}`}
            data={list}
            scrollEnabled={false}
            renderItem={(item) =>
                <ItemOfProductComponent item={item} />
            }
        />);
}

function ItemOfProductComponent({item}: {item: any}) {
    return (
        <View style={{ width: '100%', borderBottomColor:  lightGrey, borderBottomWidth: 1, marginTop: 10}}>
                <View style={{ width: '100%', flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <Text style={{ color: lightBlack, fontSize: 13, fontWeight: 400 }}>Hero Mie</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={{ color: lightBlack, fontSize: 13, fontWeight: 400 }}>Anugrah Store</Text>
                    </View>
                </View>
                <Spacer height={10} />
                <View style={{ width: '100%', flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <Text style={{ color: lightBlack, fontSize: 13, fontWeight: 400 }}>Price</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={{ color: lightBlack, fontSize: 13, fontWeight: 400 }}>Rp 1.000</Text>
                    </View>
                </View>
                <Spacer height={10} />
                <View style={{ width: '100%', flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <Text style={{ color: lightBlack, fontSize: 13, fontWeight: 400 }}>Quantity</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={{ color: lightBlack, fontSize: 13, fontWeight: 400 }}>10</Text>
                    </View>
                </View>
                <Spacer height={10} />
                <View style={{ width: '100%', flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <Text style={{ color: lightBlack, fontSize: 13, fontWeight: 400 }}>Total Price</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={{ color: lightBlack, fontSize: 13, fontWeight: 400 }}>Rp 10.000</Text>
                    </View>
                </View>
                <Spacer height={10} />
            </View>
    );
}
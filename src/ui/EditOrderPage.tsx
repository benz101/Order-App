import {
    FlatList,
    Modal,
    NativeSyntheticEvent,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import EditOrderStyles from './styles/EditOrderStyles';
import AppBar from '../reusable_component/AppBar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
import { blueSky, darkButton, grey, lightGrey } from '../helper/ColorStyles';
import { Divider } from 'react-native-paper';
import Spacer from '../reusable_component/Spacer';
import HorizontalLine from '../reusable_component/HorizontalLine';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


type EditOrderProps = NativeStackScreenProps<RootStackParamList, 'EditOrder'>;


export default function EditNewOrderPage({ navigation, route }: EditOrderProps) {

    const listProductChoosed = [
        {
            "name": "Ergonomic Metal Keyboard",
            "price": 190000,
            "id": 1
        },
        {
            "name": "Ergonomic Metal Keyboard",
            "price": 190000,
            "id": 2
        }

    ];

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
        },
        {
            "name": "Rustic Granite Chair",
            "price": 50000,
            "id": 11
        },
        {
            "name": "Fantastic Frozen Fish",
            "price": 680000,
            "id": 12
        },
        {
            "name": "Tasty Fresh Soap",
            "price": 490000,
            "id": 13
        },
        {
            "name": "Ergonomic Granite Chips",
            "price": 880000,
            "id": 14
        },
        {
            "name": "Practical Concrete Fish",
            "price": 20000,
            "id": 15
        },
        {
            "name": "Tasty Cotton Fish",
            "price": 860000,
            "id": 16
        },
        {
            "name": "Generic Cotton Bike",
            "price": 350000,
            "id": 17
        },
        {
            "name": "Awesome Soft Table",
            "price": 900000,
            "id": 18
        },
        {
            "name": "Recycled Bronze Pizza",
            "price": 940000,
            "id": 19
        },
        {
            "name": "Gorgeous Granite Shoes",
            "price": 20000,
            "id": 20
        }
    ];

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={EditOrderStyles.container}>
            <AppBar title="Edit Order" showIconLeft iconLeft="keyboard-backspace" iconLeftColor="black" onPressLeft={() => navigation.pop()} />
            <OrderFormComponent listProductChoosed={listProductChoosed} listOfProduct={listOfProduct} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)} onPressForOptions={() => setModalVisible(true)} />
            <Spacer height={10} />
            <ButtonBackAndSaveComponent />
            <Spacer height={10} />
        </View>
    );
}

function OrderFormComponent({ listProductChoosed, listOfProduct, visible, onRequestClose, onPressForOptions }: { listProductChoosed: Array<any>, listOfProduct: Array<any>, visible: boolean, onRequestClose: () => void, onPressForOptions: () => void }) {
    return (
        <View style={EditOrderStyles.content}>
            <ScrollView>
                <View style={{ width: '100%' }}>
                    <View style={EditOrderStyles.labelWithRequired}>
                        <Text style={EditOrderStyles.label}>Customer Name</Text>
                        <Spacer width={5} />
                        <Text style={EditOrderStyles.required}>*</Text>
                    </View>
                    <Spacer height={5} />
                    <TextInput style={EditOrderStyles.textInput} placeholder="Input customer name" placeholderTextColor={grey} />
                </View>
                <Spacer height={10} />
                <HorizontalLine />
                <Spacer height={10} />
                <Text style={EditOrderStyles.section}>Product Detail</Text>
                <Spacer height={10} />
                {listProductChoosed.map((e, i) => <View style={{ width: '100%', marginTop: i > 0 ? 10 : 0 }} key={e.id}>
                    <View style={{ width: '100%' }}>
                        <View style={EditOrderStyles.labelWithRequired}>
                            <Text style={EditOrderStyles.label}>Product Name</Text>
                            <Spacer width={5} />
                            <Text style={EditOrderStyles.required}>*</Text>
                        </View>
                        <Spacer height={5} />
                        <TouchableOpacity onPress={onPressForOptions}>
                            <TextInput style={EditOrderStyles.textInput} placeholder="Select product name" placeholderTextColor={grey} editable={false} selectTextOnFocus={false} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%' }}>
                        <Text style={EditOrderStyles.label}>Price</Text>
                        <Spacer height={5} />
                        <TextInput style={EditOrderStyles.textInputDisable} placeholder="Price" placeholderTextColor={grey} />
                    </View>
                    <View style={{ width: '100%' }}>
                        <View style={EditOrderStyles.labelWithRequired}>
                            <Text style={EditOrderStyles.label}>Quantity</Text>
                            <Spacer width={5} />
                            <Text style={EditOrderStyles.required}>*</Text>
                        </View>
                        <Spacer height={5} />
                        <TextInput style={EditOrderStyles.textInput} placeholder="Input quantity" placeholderTextColor={grey} />
                    </View>
                </View>)}
                <Spacer height={10} />
                <HorizontalLine />
                <Spacer height={10} />
                <View style={{ width: '100%' }}>
                    <Text style={EditOrderStyles.label}>Total price</Text>
                    <Spacer height={5} />
                    <TextInput style={EditOrderStyles.textInputDisable} placeholder="Total price" placeholderTextColor={grey} />
                </View>
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={onRequestClose}>
                <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
                    <View style={{ width: '100%', flex: 1, backgroundColor: 'white', }}>
                        <ScrollView>
                            <View style={{ width: '100%', flexDirection: 'row', paddingHorizontal: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '700', textAlign: 'center', flex: 1 }}>List Of Product</Text>
                                <TouchableOpacity onPress={onRequestClose}>
                                    <Icon name='close' size={20} />
                                </TouchableOpacity>
                            </View>
                            <Spacer height={10} />
                            <HorizontalLine />
                            <FlatList
                                keyExtractor={(item, index) => `${item.id}`}
                                data={listOfProduct}
                                scrollEnabled={false}
                                renderItem={(item) =>
                                    <View style={{ width: '100%', padding: 10, borderBottomColor: lightGrey, borderBottomWidth: 1 }}>
                                        <Text>{item.item.name}</Text>
                                    </View>
                                }
                            />
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

function ButtonBackAndSaveComponent() {
    return (
        <View style={{ backgroundColor: 'white', width: '100%', height: 48, flexDirection: 'row', paddingHorizontal: 15 }}>
            <TouchableOpacity style={{ backgroundColor: 'white', flex: 1, borderColor: lightGrey, borderWidth: 1, borderRadius: 4, height: 48, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 15, fontWeight: '700' }}>Back</Text>
            </TouchableOpacity>
            <Spacer width={8} />
            <TouchableOpacity style={{ backgroundColor: blueSky, flex: 1, borderColor: blueSky, borderWidth: 1, borderRadius: 4, height: 48, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 15, fontWeight: '700' }}>Detail</Text>
            </TouchableOpacity>
        </View>
    );
}
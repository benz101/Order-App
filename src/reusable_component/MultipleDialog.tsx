import { Button, Dialog, Text } from "react-native-paper";
import { darkButton } from "../helper/ColorStyles";
import Spacer from "./Spacer";

const MultipleDialog = ({visible, onDismiss, title, body, onPressOk, onPressCancel}: {visible: boolean, onDismiss: () => void, title: string, body: string, onPressOk: () => void, onPressCancel: ()=>void}) => {
    return (
        <Dialog visible={visible} onDismiss={onDismiss} style={{backgroundColor: 'white'}}>
            <Dialog.Title style={{color: '#002D40', fontSize: 16, fontWeight: '700', textAlign: 'center'}}>{title}</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium" style={{color: '#002D40', fontSize: 14, fontWeight: '500', textAlign: 'center'}}>{body}</Text>
            </Dialog.Content>
            <Dialog.Actions style={{flexDirection: 'column'}}>
              <Button mode="contained" buttonColor="white" textColor="red" labelStyle={{fontSize: 16, fontWeight: '700'}}  style={{width: '100%',borderRadius: 4, borderColor: 'red', borderWidth: 1}} onPress={onPressOk}>Yes, delete it</Button>
              <Spacer height={10}/>
              <Button mode="contained" buttonColor= {darkButton} textColor="white" labelStyle={{fontSize: 16, fontWeight: '700'}}  style={{width: '100%',borderRadius: 4, borderColor: darkButton, borderWidth: 1}} onPress={onPressCancel}>Back</Button>
            </Dialog.Actions>
          </Dialog>
    );
} 

export default MultipleDialog;
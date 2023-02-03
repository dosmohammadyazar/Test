import react from "react";
import { View,Text,Button } from "react-native";

export default function HomeScreen({navigation}){
    return(
        <View>
            <Button title="User list" onPress={()=> navigation.navigate('List')} /><br/>
            <Button title="New screen" onPress={()=> navigation.navigate('New')} />
        </View>
    );
}
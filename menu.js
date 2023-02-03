import react from "react";
import { View,Button } from "react-native";

export default function Menu({navigation}){
    return(
        <View>
            <Button title="Go to Homescreen" onPress={() => navigation.navigate('Home') } />
            <Button title="User list" onPress={()=> navigation.navigate('List')} />
        </View>
    );
}
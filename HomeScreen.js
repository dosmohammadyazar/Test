import react, { useEffect, useState } from "react";
import { View,Text,Button } from "react-native";
import axios from "axios";

export default function HomeScreen({navigation}){

    const [count,setCount] = useState(0);
    const [userdata,setUserData] = useState({});

    useEffect(()=>{
        console.log('Hi'); // It will print on fist load and count value changes
    },[count]);

    useEffect(()=>{
        getApiData();
        getUsers();
    },[]);

    const getApiData = () =>{
        axios.get('https://reqres.in/api/users/2')
        .then(function (response){
            setUserData(response.data.data);
        })
        .catch(function (error){
            console.log(error);
        });
    }
    const getUsers = () =>{
        console.log('entered');
        axios.get('http://localhost/new_laravel/public/api/check')
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        });
    }
    return(
        <View>
            <Button title="User list" onPress={()=> navigation.navigate('List')} /><br/>
            <Button title="New screen" onPress={()=> navigation.navigate('New')} /><br/>
            <p>You clicked {count} times.</p>
            <Button title="Click Me" onPress={()=> setCount(count+1)} />
            <h2>Api responses</h2>
            <h4>User Details</h4>
            <p>Name : {userdata.first_name} {userdata.last_name}</p>
            <p>Email : {userdata.email}</p>
            <img src={userdata.avatar} width={150} height={150}/>
        </View>
    );
}
import { View, Text } from "react-native"

export default function Index(){
    return(
        <View style = {{
            flex: 1, 
            justifyContent:"center", 
            alignItems: "center"}}>
                
            <Text style ={{fontSize: 25}}>
                Hello React Native
            </Text>
        </View>
    )   
}
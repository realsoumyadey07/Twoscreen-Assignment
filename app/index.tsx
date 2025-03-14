import { router } from "expo-router";
import { Text, TouchableOpacity, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index(){
    const colorScheme = useColorScheme();
    return (
        <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={{color: colorScheme==="dark"? "white": "black", fontSize: 20}}>Welcome to onboarding screen!</Text>
            <TouchableOpacity style={{backgroundColor: colorScheme==="dark"? "white": "black", paddingHorizontal: 30, paddingVertical: 10, borderRadius: 5, marginTop: 20}} onPress={()=> router.push("/(tabs)")}>
                <Text>Get Started</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
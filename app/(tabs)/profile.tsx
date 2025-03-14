import { Image, StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const user = {
    name: "Soumyadip Dey",
    email: "soumyadip@example.com",
    profilePic: "https://i.pravatar.cc/150?img=3", 
  };
  return (
    <SafeAreaView style={{...styles.container, backgroundColor: colorScheme==="dark"? "black": "white"}}>
      {/* <View style={styles.container}> */}
      {/* Profile Image */}
      <Image source={{ uri: user.profilePic }} style={styles.profileImage} />

      {/* Name & Email */}
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      {/* Edit Button */}
      <TouchableOpacity
        style={{...styles.editButton, backgroundColor: colorScheme==="dark"? "white": "black"}}
      >
        <Text style={{...styles.editButtonText, color: colorScheme==="dark"? "black": "white"}}>Edit Profile</Text>
      </TouchableOpacity>
    {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 100
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: "#ccc",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginTop: 12,
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  editButton: {
    marginTop: 20,
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
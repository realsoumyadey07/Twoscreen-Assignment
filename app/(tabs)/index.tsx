import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import { useEffect, useState } from "react";
import { fetchPhotos } from "@/lib/fetchPhotos";

export default function ExploreScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetchPhotos();
      setData(data || []);
    } catch (error: any) {
      console.log(error);
      setData([]);
    }
    setLoading(false);
  };
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData(); // Fetch new data
    setRefreshing(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={{ flex: 1, width: "100%" }}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <>
          <View
            style={{
              width: "95%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: colorScheme === "dark" ? "#1a1a1a" : "#dedede",
              borderRadius: 5,
              paddingVertical: 5,
              paddingHorizontal: 10,
              alignSelf: "center",
              marginVertical: 10,
            }}
          >
            <TextInput
              placeholder="Search here"
              style={{
                flexBasis: "90%",
                color: colorScheme === "dark" ? "white" : "white",
              }}
              placeholderTextColor={
                colorScheme === "dark" ? "#ccccca" : "black"
              }
            />
            <TouchableOpacity>
              <Feather
                name="search"
                size={24}
                color={colorScheme === "dark" ? "gray" : "black"}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 1,
            }}
            data={data || []}
            numColumns={3}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Image
                  source={{ uri: item.src.small }}
                  style={{
                    width: 110,
                    height: 150,
                    margin: 5,
                    borderRadius: 10,
                  }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </>
      )}
    </SafeAreaView>
  );
}


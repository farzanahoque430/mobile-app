import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

type User = {
  id: number;
  name: string;
};

export default function Index() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("Users paoa gese:", data.length);
        setUsers(data);
      });
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              router.push(`./users/${item.id}`);
            }}
            className="bg-blue-500/70 p-4 m-2 rounded-lg">
          
            <Text className="text-lg">{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}
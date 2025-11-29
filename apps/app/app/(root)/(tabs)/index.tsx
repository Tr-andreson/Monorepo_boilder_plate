import {
  SafeAreaView,
  ScrollView,
  Text,
} from "react-native";




const Home = () => {

  return (

    <SafeAreaView className="bg-white h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <Text className="">Starter Expo app</Text>
      </ScrollView>

    </SafeAreaView>
  );
};

export default Home;

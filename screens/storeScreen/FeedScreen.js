import { SafeAreaView, ScrollView, View } from "react-native";
import HeaderDefault from '../genericScreen/Header';
import FeedIntro from "./FeedIntro";
import Feed from "./FeedList";



export default function FeedScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderDefault />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <FeedIntro />
        <Feed navigation={navigation} tipo={1} />
        <Feed navigation={navigation} tipo={2} />
        <Feed navigation={navigation} tipo={0} />
      </ScrollView>
    </SafeAreaView>
  );
}
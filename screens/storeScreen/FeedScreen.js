import { NativeModuleType } from "expo";
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HeaderDefault from '../genericScreen/Header';
import FeedIntro from "./FeedIntro";
import SearchBar from "../genericScreen/searchbar";
import ItemCard from "./ItemCard";
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
import { NativeModuleType } from "expo";
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HeaderDefault from "../genericScreen/genericHeader";
import FeedIntro from "./FeedIntro";
import SearchBar from "../genericScreen/searchbar";
import ItemCard from "./ItemCard";
import Feed from "./Feed";



export default function FeedScreen({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderDefault/>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 60 }}
        >
          <FeedIntro/>
        <Feed/>
        <Feed/>
        <Feed/>
      </ScrollView>
    </SafeAreaView>
  );
}

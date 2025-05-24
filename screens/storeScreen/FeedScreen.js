import { NativeModuleType } from "expo";
import React from "react";
import { SafeAreaView, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FooterDefault from "../genericScreen/genericHeader";
import FeedIntro from "./FeedIntro";
import SearchBar from "../genericScreen/searchbar";



export default function Feed({ navigation }) {
return (
    <SafeAreaView>
        <FooterDefault></FooterDefault>
        <FeedIntro></FeedIntro>
    </SafeAreaView>
);
}

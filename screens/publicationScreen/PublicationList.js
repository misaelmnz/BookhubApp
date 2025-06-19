import { FlatList, View, Text} from "react-native";
import React, {useEffect, useState} from "react";
import PublicationCard from "./PublicationCard";
import { useNavigation } from "@react-navigation/native";
import { root } from "../../ui/components";
import { fetchUserPubs } from "./publicationController/PublicationController";

export default function PublicationList() {
const navigation = useNavigation();
const [data, setData] = useState([]);

useEffect(() => {
    async function loadPubs() {
        try {
            const response = await fetchUserPubs();
            setData(response.data || []);
        } catch (err) {
            console.error("Erro ao buscar publicações:", err);
        }
    }
    loadPubs();
}, []);

return (
    <View style={{flex: 1}}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.pub_id.toString()}
            contentContainerStyle={{
                paddingVertical: 16,
                paddingHorizontal: 8,
            }}
            renderItem={({ item }) => (
                <PublicationCard
                    imagem={Array.isArray(item.imagem_caminho) ? item.imagem[0] : item.imagem_caminho}
                    title={item.pub_titulo}
                    item_id={item.item_id}
                    pub_id={item.pub_id}
                />
            )}
            ListEmptyComponent={
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, color: root.C_BLACK, marginBottom: 20, fontFamily: root.C_FONT_LIST.Regular }}>
                        Nenhuma publicação encontrada.
                    </Text>
                </View>
            }
        />
    </View>
    )
}
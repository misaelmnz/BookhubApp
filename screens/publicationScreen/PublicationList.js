import { FlatList, View, Text} from "react-native";
import React, {useEffect, useState} from "react";
import PublicationCard from "./PublicationCard";
import { useNavigation } from "@react-navigation/native";
import { root } from "../../ui/Components";
import { fetchUserPubs } from "./publicationController/PublicationController";
import { useAuth } from "../../context/AuthContext";

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

console.log("Publicações:", data);

return (
    <View>
        <FlatList
            data={data}
            keyExtractor={(item) => item.pub_id.toString()}
            contentContainerStyle={{
                flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%'
            }}
            renderItem={({ item }) => (
                <PublicationCard
                    imagem={item.imagem_caminho}
                    title={item.pub_titulo}
                    id={item.pub_id}
                    onPress={() => navigation.navigate('DetailScreen', { pubId: item.pub_id })}
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
import { FlatList, View, Text, Button } from "react-native";
import ResultCard from "./ResultCard";
import { root } from "../../../ui/components";
import { useNavigation } from "@react-navigation/native";


export default function Result({data}) {

const navigation = useNavigation();

return(
    <FlatList
        data={data || []}
        keyExtractor={item => item.pub_id?.toString()}
        contentContainerStyle={[{
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
        }]}
        renderItem={({ item }) => (
            <ResultCard
                id={item.pub_id}
                tipoPublicacao={item.pub_tipo}
                titulo={item.pub_titulo}
                nome={item.user_nome}
                imagem={item.imagem}
                preco={item.pub_valor}
                onPress={() => navigation.navigate('ItemDetails', { itemId: item.id })}
            />
        )}
        ListEmptyComponent={
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: root.C_BLACK, fontFamily: root.C_FONT_LIST.Regular, marginBottom: 20 }}>
                    Nenhum resultado encontrado.
                </Text>
                <Button title='Voltar' onPress={() => navigation.goBack()} color={root.C_MAIN_COLOR} />
            </View>
        }
    />
)    
}
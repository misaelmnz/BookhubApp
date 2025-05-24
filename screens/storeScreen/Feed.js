import React, { useEffect, useState } from 'react';
import { View
    , Text
    , StyleSheet
    , FlatList
    , Image
    , ScrollView
    , Alert
     } from 'react-native';

export default function Feed() {
    const [PUBS, SET_PUBS] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await fetch ('http://192.168.0.2:3000/login')
                const data = await response.json();
                SET_PUBS(data);
            } catch (err) { Alert.alert("Erro ao buscar items") }
        };
    fetch();
    },[]);

    return;
}


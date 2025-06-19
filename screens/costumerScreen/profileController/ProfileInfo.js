import { StyleSheet, Text, View } from "react-native";
import { root } from "../../../ui/components";

export default function InfoBar({label, value}) {
    return (
        <View style={styles.container}>
            <Text style={styles.keyStyle}>{label}</Text>
            <Text style={styles.valueStyle}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },

    keyStyle: {
        fontSize: 12,
        color: root.C_BLACK,
        fontFamily: root.C_FONT_LIST.SemiBold
    },

    valueStyle: {
        fontSize: 10,
        color: root.C_BLACK,
        fontFamily: root.C_FONT_LIST.Light
    }
})
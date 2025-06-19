import { useState } from 'react';
import { Text, 
    StyleSheet, 
    Modal, 
    View,
    TouchableOpacity, 
    Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { root } from '../../ui/components';
import { useAuth } from '../../context/AuthContext'


export const MenuOption = ({onPress, Texto, name, style}) => {
    return(
        <TouchableOpacity onPress={onPress} style={{ marginLeft: 8 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Entypo name={name} size={24} color="black"/>
                    <Text style={styles.menuItem}>{Texto}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const logoutAlert = (setVisible, logout, navigate) => {
        Alert.alert('Logout', 'Tem certeza que deseja sair?', [
            { 
                text: 'Cancelar',
            },
            
            {
                text: 'Sim',
                onPress: () => {
                    try {
                    setVisible(false);
                    logout();
                    navigate.reset({index: 0, routes: [{name: 'Login'}]})
                } catch (err) {
                console.log(err)    
        }}
}])}

export default function Menu() {
  const [visible, setVisible] = useState(false); 
  const { logout } = useAuth();
  const navigate = useNavigation();

  return (
    <View>
        <TouchableOpacity onPress={()=>setVisible(true)}>
            <Entypo name='dots-three-vertical' size={24} color="white"/>
        </TouchableOpacity>
            
        <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setVisible(!visible)}
        >
            <TouchableOpacity onPress={()=> setVisible(false)} style={styles.modalMenu} activeOpacity={1}>
                <View style={styles.menuContainer}>
                    <View style={styles.menuBox}>
                        <MenuOption onPress={()=> {
                            navigate.navigate('Profile')
                        }} 
                        style={styles.menuItem} Texto={'Perfil de Usuário'} name={'user'}/>

                        <MenuOption onPress={()=> {
                            navigate.navigate('Publicação')
                        }}  
                        style={styles.menuItem} Texto={'Minhas Publicações'} name={'documents'}/>

                        <MenuOption onPress={() => logoutAlert(setVisible, logout, navigate)}
                         style={styles.menuItem} Texto={'Sair'} name={'log-out'}/>

                        <MenuOption onPress={() => {
                            navigate.reset({index: 1, routes: [{ name: 'Feed' }]})
                        }}
                        style={styles.menuItem} Texto={'Feed'} name={'home'}/>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
    modalMenu: {
        flex: 1,
        backgroundColor: 'transparent',
    },

    menuContainer: {
        position: 'absolute',
        width: '50%',
        top: 60,
        right: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 0.1,
    },

    menuBox: {
        padding: 10,
    },  

    menuItem: {
        borderRadius: 10,
        width: '100%',
        marginVertical: 5,
        paddingVertical: 12,
        paddingHorizontal: 10,
        fontFamily: root.C_FONT_LIST.Light,
        fontSize: 14,
        alignSelf: 'flex-start',
    }

});

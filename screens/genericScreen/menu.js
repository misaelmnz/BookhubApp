import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Modal, View, Touchable, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { root, Line } from '../../ui/Components';
import { useAuth } from '../../context/AuthContext'


const MenuOption = ({onPress, Texto}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.menuItem}>{Texto}</Text>
        </TouchableOpacity>
    )
}


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
                        <MenuOption style={styles.menuItem} Texto={'Perfil de Usuário'}/>
                        <MenuOption style={styles.menuItem} Texto={'Visualizar Publicações'}/>
                        <MenuOption onPress={async () =>
                            {
                                try {
                                setVisible(false);
                                await logout();
                                navigate.reset({index: 0, routes: [{name: 'Login'}]})
                                } catch (err) {
                                console.log(err)    
                                }
                            }
                        } style={styles.menuItem} Texto={'Sair'}/>
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
        borderColor: 'grey',
        borderWidth: 0.3,
        borderRadius: 10,
        width: '100%',
        marginVertical: 5,
        paddingVertical: 12,
        paddingHorizontal: 10,
        fontFamily: root.C_FONT_LIST.Light,
        fontSize: 16,
        alignSelf: 'flex-start'
    }

});

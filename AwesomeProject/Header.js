
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const Header = props => {
    return (
           <View style={styles.headerContainer}>
                    <Text style={styles.header}>{props.title}</Text>
           </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 100,
        paddingTop: 5,
        backgroundColor: '#FFAA00',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        color: '#FF0000',
        fontSize: 36
    }
});

export default Header;
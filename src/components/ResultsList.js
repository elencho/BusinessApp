import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {withNavigation} from 'react-navigation'
import { FlatList } from 'react-native-gesture-handler'
import ResultsDetail from '../components/ResultsDetail'
import ResultsShow from '../screens/ResultsShow'

const ResultsList = ({ title, resPrice, navigation}) => {
    if(!resPrice.length){
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={resPrice}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return(
                    <TouchableOpacity onPress={()=>{ navigation.navigate('Results',{ id: item.id })}}>
                     <ResultsDetail result={item}/> 
                     </TouchableOpacity>
                
                )
            }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
})

export default withNavigation(ResultsList)
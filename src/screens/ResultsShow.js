import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image, Linking, Button } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import yelp from '../api/yelp'
import axios from 'axios'

const ResultsShow = ({ navigation }) => {
    const id = navigation.getParam('id');
    console.log(id);
    const [result, setResult] = useState({ name: "", photos: [], });

    const getResult = async (id) => {
        const res = await axios.get(`https://api.yelp.com/v3/businesses/${id}`)
        setResult(res.data);
        console.log(res)
    };
    useEffect(() => {
        getResult(id);
    }, [])

    return (
        <View>
            <Text style={styles.head}>{result.name}</Text>

            <FlatList
                style={styles.list}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result.photos} keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
            <View style={styles.container}>
                <Text style={styles.txt}><Entypo name="phone" size={20} color="black" />{result.phone}</Text>
                <Text style={styles.txt}>{result.rating} Stars, {result.review_count} Reviews {result.about_the_business}</Text>
                <Button 
                title='Check business webpage'
                onPress={() => Linking.openURL(result.messaging.url)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        margin: 5,
        borderRadius: 2
    },
    head: {
        fontSize: 30,
        alignSelf: 'center',
    },
    container: {
        alignSelf: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        alignItems: 'center',
        width: 300,
        height: 200
    },
    txt: {
        fontSize: 20,
        margin: 10
    }
})

export default ResultsShow
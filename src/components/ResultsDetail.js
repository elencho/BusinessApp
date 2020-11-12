import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text>{result.name}</Text>
    <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },
    image: {
        borderRadius: 4,
        height: 120,
        width: 250,
        marginBottom: 5
    },
    name: {
      fontWeight: 'bold',
    }
})

export default ResultsDetail
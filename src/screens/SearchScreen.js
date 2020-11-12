import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchAPI, results, errorMessage] = useResults()


    const filterRes = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }
    return (
        <View style={styles.backgroundStyle}>
            <SearchBar

                term={term}
                onTermChange={newTerm => {
                    setTerm(newTerm)
                    searchAPI(newTerm)
                }}
               onTermSubmit={() => {}}
            />
            {errorMessage ? <Text>{errorMessage} </Text> : null}
            <Text>We have found {results.length} Businesses</Text>
            <ScrollView>
                <ResultsList
                    resPrice={filterRes('$')}
                    title='Cost Effective'
                />
                <ResultsList
                    resPrice={filterRes('$$')}
                    title='Bit Pricier'
                />
                <ResultsList
                    resPrice={filterRes('$$$')}
                    title='Big Spender'
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#FFF',
        flex: 1
    }
})
export default SearchScreen
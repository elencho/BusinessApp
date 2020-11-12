import { useEffect, useState } from 'react'
import axios from 'axios'
export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')




    const searchAPI = async searchTerm => {
        try {

            axios.defaults.headers.common['Authorization'] = 'Bearer Wq5o1oJufeZ0pPgUniOJoYCYn2N88Z2kwzj7QL16ctFwInMCY8tO8_oSxFaxao9bQTR-LVATkZJfi_mZ26beVndu1m1hFA2Mbxwjrh4Z2VW65gEHattwDOpnv1CcX3Yx';

            const res = await axios.get('https://api.yelp.com/v3/businesses/search?location=san jose&limit=50&term=' + searchTerm);
            
            setResults(res.data.businesses);
            console.log(res.data.businesses)
             
        } catch (err) {
           setErrorMessage('Somthing went wrong')
        }
    }

    useEffect(() => {
        searchAPI('pizza')
    }, [])
    

    return [searchAPI, results, errorMessage]
}
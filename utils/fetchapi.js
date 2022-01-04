import axios from 'axios';

export const baseUrl= 'https://bayut.p.rapidapi.com'

// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': '736c575070mshcc462854d46f0a9p195438jsn9cde6e13a7de'
//   }

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
                 'x-rapidapi-host': 'bayut.p.rapidapi.com',
                 'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY
              }
    });
    return data;
}
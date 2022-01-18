import axios from 'axios'

const API_KEY = '25274201-f92824dd18542ef6047cb2d3d'
const URL = 'https://pixabay.com/api/'


export const getImages = async (text, count) => {
    try{
        const data = await axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`)
        return data;
    }catch(error){
        console.log(error)
    }
}

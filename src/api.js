import axios from 'axios';

const searchImages = async (term) => {
    const responce = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID uFbymICmwX-W_l9jiDvRxC3-EQ-gLLwhpPRJQkBwB6c'
        },
        params: {
            query: term,
        }
    });

    return responce.data.results;
};

export default searchImages;

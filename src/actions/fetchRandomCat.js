// import fetch from 'cross-fetch'
import axios from 'axios'

export const fetchRandomCat = () => {
  return (dispatch) => {
    axios.get('https://api.thecatapi.com/v1/images/search?has_breeds=1&size=small')
      .then(res => {
        const { data } = res
        const { breeds } = data[0]
        const catData = data[0]
        const catBreeds = breeds[0]

        const formedCatData = {
          id: catData.id,
          imgUrl: catData.url,
          description: catBreeds.description,
          name: catBreeds.name,
          status: {
            'Adaptability': catBreeds.adaptability,
            'Affection Level': catBreeds.affection_level,
            'Social Needs': catBreeds.social_needs,
            'Stanger Friendly': catBreeds.stranger_friendly,
            'Rarity': catBreeds.rare,
          }
        }

        dispatch({ type: 'SET_CURRENT_GACHA_CAT', payload: formedCatData })
        return res
      })
  }
};
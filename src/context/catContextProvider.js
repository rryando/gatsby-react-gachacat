import axios from 'axios'
import React, { createContext, useState, useReducer } from 'react'
import PropTypes from 'prop-types';
import { initialState, catReducer } from '../reducers/catReducer';
import cover from "../../static/cover.jpg";

export const CatContext = createContext()

const CatContextProvider = (props) => {
  const [catList, dispatch] = useReducer(catReducer, initialState);
  const [cardImage, setCardImage] = useState(cover);
  const [flipAnimation, setflipAnimation] = useState(false)
  const [gachaTitle, setgachaTitle] = useState('Hayoo dapat apa')
  const [gachaRunning, setgachaRunning] = useState(false)
  const [showSaveButton, setsshowSaveButton] = useState(false)

  const gachaAction = () => {
    resetGachaState()
    setflipAnimation(!flipAnimation)
    setTimeout(() => fetchRandomCat(), 3000)
  }

  const setGachaResult = (catData) => {
    setCardImage(catData.imgUrl)
    setgachaTitle(`JENG JENG JENG... ${catData.name}`)
    setgachaRunning(false)
  }

  const resetGachaState = () => {
    setCardImage(cover)
    setsshowSaveButton(false)
    setgachaTitle('Hayoo dapat apa')
    setgachaRunning(true)
  }

  const saveButtonHandler = () => {
    dispatch({ type: 'ADD_CAT' })
    setsshowSaveButton(false)
  }

  const fetchRandomCat = async () => {
    const { data } = await axios.get('https://api.thecatapi.com/v1/images/search?has_breeds=1&size=small');
    const { breeds } = data[0]
    const catData = data[0]
    const catBreeds = breeds[0]
    const gachaCatData = {
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

    setGachaResult(gachaCatData)
    setsshowSaveButton(true)

    dispatch({ type: 'SET_CURRENT_GACHA_CAT', payload: gachaCatData })
    return data
  }

  return (
    <CatContext.Provider value={{ catList, cardImage, showSaveButton, saveButtonHandler, flipAnimation, gachaTitle, gachaRunning, gachaAction }}>
      { props.children}
    </CatContext.Provider>
  );
}

export default CatContextProvider;
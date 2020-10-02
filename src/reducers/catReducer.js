export const initialState = {
  myCats: [],
  currentGachaCat: {
    id: '0',
    imgUrl: '/cover.jpg',
    description: '',
    name: '',
    status: {
      'Adaptability': 0,
      'Affection Level': 0,
      'Social Needs': 0,
      'Stanger Friendly': 0,
      'Rarity': 0,
    }
  },
}

export const catReducer = (state = initialState, action) => {
  const { myCats, currentGachaCat } = state;

  switch (action.type) {
    case 'ADD_CAT':
      console.log(currentGachaCat, myCats);
      const addNewCats = [...myCats, { ...currentGachaCat }];
      return { ...state, myCats: addNewCats }
    case 'SET_CURRENT_GACHA_CAT':
      return { ...state, currentGachaCat: action.payload }
    default:
      return state
  }
}
export const actions = {
  SET_LEFT_DRAWER: 'SET_LEFT_DRAWER',
  SET_RIGHT_DRAWER: 'SET_RIGHT_DRAWER',
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  SET_ACCESS_TOKEN: 'SET_ACCESS_TOKEN',
  SET_COUNTRIES: 'SET_COUNTRIES',
  SET_CURRENCY_RATE: 'SET_CURRENCY_RATE',
  SET_SHOP: 'SET_SHOP',
  SET_NOTIFICATIONS: 'SET_NOTIFICATIONS',
  SET_SHOPS: 'SET_SHOPS'
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_LEFT_DRAWER:
      return {
        ...state,
        leftDrawer: action.payload
      };
    case actions.SET_RIGHT_DRAWER:
      return {
        ...state,
        rightDrawer: action.payload
      };
    case actions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case actions.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload
      };
    case actions.SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      };
    case actions.SET_CURRENCY_RATE:
      return {
        ...state,
        currencyRate: action.payload
      };
    case actions.SET_SHOP:
      return {
        ...state,
        shop: action.payload
      };
    case actions.SET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload
      };
    case actions.SET_SHOPS:
      return {
        ...state,
        shops: action.payload
      };
    default:
      return state;
  }
};

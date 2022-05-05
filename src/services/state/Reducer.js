import { initialState } from "./InitialState"

export const actions = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  SET_ACCESS_TOKEN: "SET_ACCESS_TOKEN",
  SET_PRIVACY_POLICY: "SET_PRIVACY_POLICY",
  SET_ABOUT: "SET_ABOUT",
  SET_TERMS_AND_CONDITIONS: "SET_TERMS_AND_CONDITIONS",
  SET_LOCATIONS: "SET_LOCATIONS",
  SET_LIKED_LOCATIONS: "SET_LIKED_LOCATIONS",
  SET_LOCATION_IMAGES: "SET_LOCATION_IMAGES",
  SET_INTERESTS: "SET_INTERESTS",
  SET_TRIP_TYPES: "SET_TRIP_TYPES",
  SET_INTEREST_FILTERS: "SET_INTEREST_FILTERS",
  SET_CONTINENT_FILTERS: "SET_CONTINENT_FILTERS",
  SET_COUNTRY_FILTERS: "SET_COUNTRY_FILTERS",
  SET_TRIPTYPE_FILTERS: "SET_TRIPTYPE_FILTERS",
  SET_SIGNUP_FIRST_TIME: "SET_SIGNUP_FIRST_TIME",
  SET_APPLY_SEARCH_FILTERS: "SET_APPLY_SEARCH_FILTERS"
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    case actions.SET_ACCESS_TOKEN:
      return {
        ...state,
        access_token: action.payload
      }
    case actions.SET_PRIVACY_POLICY:
      return {
        ...state,
        privacyPolicy: action.payload
      }
    case actions.SET_ABOUT:
      return {
        ...state,
        about: action.payload
      }
    case actions.SET_TERMS_AND_CONDITIONS:
      return {
        ...state,
        termsAndConditions: action.payload
      }
    case actions.SET_LOCATIONS:
      return {
        ...state,
        locations: action.payload
      }
    case actions.SET_LIKED_LOCATIONS:
      return {
        ...state,
        likedLocations: action.payload
      }
    case actions.SET_LOCATION_IMAGES:
      return {
        ...state,
        locationImages: action.payload
      }
    case actions.SET_INTERESTS:
      return {
        ...state,
        interests: action.payload
      }
    case actions.SET_TRIP_TYPES:
      return {
        ...state,
        tripTypes: action.payload
      }
    case actions.SET_INTEREST_FILTERS:
      return {
        ...state,
        interestFilters: action.payload
      }
    case actions.SET_CONTINENT_FILTERS:
      return {
        ...state,
        continentFilters: action.payload
      }
    case actions.SET_TRIPTYPE_FILTERS:
      return {
        ...state,
        tripTypeFilters: action.payload
      }
    case actions.SET_COUNTRY_FILTERS:
      return {
        ...state,
        countryFilters: action.payload
      }
    case actions.SET_SIGNUP_FIRST_TIME:
      return {
        ...state,
        signUpFirstTime: action.payload
      }
    case actions.SET_APPLY_SEARCH_FILTERS:
      return {
        ...state,
        applySearchFilters: action.payload
      }
    default:
      return state
  }
}

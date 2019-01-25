import '../styles/index.scss'

import queryString from 'query-string'
const url = "https://api.giphy.com/v1/gifs/search?"
const limit = '&limit=5'


function search(searchQuery) {

  const query = {
    api_key: process.env.GIPHY_API_KEY,
    q: searchQuery
  }
  return fetch(`${url}${queryString.stringify(query)}${limit}`)
    .then(response => response.json())

}
export default {
  search
}

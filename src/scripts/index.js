import giphy from './giphy'
const subtitle = document.querySelector('.subtitle')
const imgWrapper = document.querySelector('.img-wrapper')
const search = document.getElementById('search')
const button = document.querySelector('.search__button')

const createGifs = (json) => {
  json.data.map(imgurls => {
    imgWrapper.innerHTML = `<img src="${imgurls.images.downsized.url}">`
  })
}
search.addEventListener('submit', event => {
  event.preventDefault()
  let query = event.target[0].value
  subtitle.innerHTML = query
  giphy.search(query).then(resp => createGifs(resp))
})

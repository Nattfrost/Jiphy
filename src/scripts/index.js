import giphy from './giphy'
const subtitle = document.querySelector('.subtitle')
const imgWrapper = document.querySelector('.img-wrapper')
const search = document.getElementById('search')
const button = document.querySelector('.search__button')
const notFound = document.querySelector('.not-found')

const createGifs = (json) => {
  json.data.map(imgurls => {
    imgWrapper.innerHTML += `<div class="img-box"><img src="${imgurls.images.downsized.url}"></div>`
  })
}
search.addEventListener('submit', event => {
  event.preventDefault()
  imgWrapper.innerHTML = "";
  let query = event.target[0].value
  subtitle.innerHTML = query
  giphy.search(query).then(resp => createGifs(resp))


  giphy.search(query)
    .then(resp => {
      if (resp.data.length === 0) {
        notFound.textContent = `We couldn't find any GIFs with the search query "${query}".`;
        notFound.classList.add('not-found--active');
      }

    })
})

import { llamarHeaderFooter, scrollTop, llamarLogin, quitarPreload, fadeout } from "../../global/js/global.js";

//variables
let limite = 3;

//selectors
const cardContainer = document.querySelector("#card-container");
const showMoreButton = document.querySelector(".pagination-list a");

//events
//limita las noticias por pagina
showMoreButton.addEventListener("click", () => {
  limite += 3;
  console.log(limite);
  getNews();
});

document.addEventListener("DOMContentLoaded",()=>{
  getNews();
})

//functions
//obtener las noticias con los datos de la API
async function getNews() {
  try {
    const URL =
      "https://newsapi.org/v2/everything?q=medio-ambiente OR ecologia OR sostenibilidad OR cambio-climatico&language=es&from=2024-15-01&sortBy=publishedAt&apiKey=1892cb4435a14c8cac296a42ae609bd6";
    const response = await fetch(URL);
    const data = await response.json();
    let articles = data.articles;
    //filtrar todos los articulos que el largo sean menor a 159
    articles = articles.filter((news) => news.description.length < "159");
    showNews(articles.splice(0, limite));
  } catch (error) {
    console.log(error);
  }
}
//convierte la fecha
function dateFormat(dateOriginal) {
  const date = new Date(dateOriginal);
  const formatOptions = {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  };
  return date.toLocaleString("es-ES", formatOptions);
}
//Refresca las noticias
function clearNews() {
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
}
//mostrar las noticias 
function showNews(data) {
  clearNews();

  data.forEach((news) => {
    const dayAndMonth = dateFormat(news.publishedAt);

    cardContainer.innerHTML += `
      <div class="col-lg-4 col-md-6 col-12 card-blog">
                                  <!-- Start Single Blog Grid -->
                                  <div class="single-blog-grid">
                                      <div class="blog-img">
                                          <a href="${news.url}" target="_blank">
                                              <img src="${news.urlToImage}" alt="imgNews">
                                          </a>
                                      </div>
                                      <div class="blog-content">
                                          <div class="meta-info">
                                              <a class="date" href="javascript:void(0)"><i class="lni lni-timer"></i> ${dayAndMonth}
                                              </a>
                                              <a class="author" href="javascript:void(0)"><i class="lni lni-user"></i> ${news.author}
                                              </a>
                                          </div>
                                          <h4>
                                              <a href="${news.url}" target="_blank">${news.title}</a>
                                          </h4>
                                          <p>${news.description}.</p>
                                          <div class="button">
                                              <a href="${news.url}" target="_blank" class="btn">Leer más...</a>
                                          </div>
                                      </div>
                                  </div>
                                  <!-- End Single Blog Grid -->
                              </div>
      `;
  });
}



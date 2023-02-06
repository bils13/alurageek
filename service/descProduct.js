const getUrl = new URL(window.location)
const id = getUrl.searchParams.get('id')
let categoria = 0
let contMedia = 0

const createProduct = (nome, preco, desc, url) => {
    const main = document.querySelector('main')
    const produtoSection = document.createElement('section')
    produtoSection.setAttribute('class', 'product')
    const conteudo = `<div class="product__banner"></div>
                    <div class="product__info">
                        <h1>${nome}</h1>
                        <h2>${preco}</h2>
                        <p>${desc}</p>
                    </div>` 
    produtoSection.innerHTML = conteudo
    main.appendChild(produtoSection)
    document.querySelector('main').insertAdjacentElement('afterbegin', produtoSection)
    const imagem = document.querySelector('.product__banner')
    imagem.style.backgroundImage = `url(${url}.jpg)`
    return main
}

axios.get(`http://localhost:3000/produtos/${id}`)
.then(response => {
    const data = response.data
    categoria = data.categoria
    createProduct(data.nome, data.preço, data.descrição, data.url )
})
.catch(response => {
    console.log(response)
})


const similarProduct = (nome, preco, id, url) => {
    const similarList = document.querySelector('.similar__list')
    const similarElement = document.createElement('li')
    similarElement.setAttribute('class', 'similar__element')
    const conteudo = `
                        <div class="similar__element--img" id="img${id}"></div>
                        <h2>${nome}</h2>
                        <p>${preco}</p>
                        <a href="descProduct.html?id=${id}">Ver produto</a>
                    `
    similarElement.innerHTML = conteudo
    similarList.appendChild(similarElement)
    const imagem = document.querySelector(`#img${id}`)
    imagem.style.backgroundImage = `url(${url}.jpg)`
    return similarElement

}

axios.get(`http://localhost:3000/produtos/`)
.then(response => {
    let filtro = response.data.filter(element => {
        if(element.categoria == categoria) {
            return element
        }
    })
    if(window.matchMedia("(max-width: 1440px)").matches){
        filtro.forEach(element => {
                if(element.id != id) {
                    if(contMedia < 4){
                        similarProduct(element.nome, element.preço, element.id, element.url)
                        contMedia++
                    }
                }
         })
        console.log(contMedia)
    }
    else if(contMedia < 6) {
        filtro.forEach(element => {
            if(element.id != id) {
                if(contMedia < 6){
                    similarProduct(element.nome, element.preço, element.id, element.url)
                    contMedia++
                }
            }
     })
    }
})
.catch(response => {
    console.log(response)
})
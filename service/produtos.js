const criaNovoProduto = (cat, id, name, price) => {
    const category = document.getElementById(`${cat}`)
    const list = category.querySelector('ul')
    const listNew = document.createElement('li')
    listNew.setAttribute('class', 'card__element')
    listNew.setAttribute('id', id)
    const conteudo = `
            <div class="card__element--img"></div>
            <label>${name}</label>
            <p>${price}</p>
            <a href="descProduct.html?id=${id}">Ver produto</a>
        `
    listNew.innerHTML = conteudo
    list.appendChild(listNew)
    return list
}

const newImage = (id, url) => {
    const card = document.getElementById(id)
    const imagem = card.querySelector(".card__element--img")
    imagem.style.backgroundImage = `url('${url}.jpg')`
}

let contSw = 0
let contC = 0
let contD = 0

axios.get('http://localhost:3000/produtos')
.then(response => {
    
    const exibeProduto = _ => {
        response.data.forEach(element => {
                if(element.categoria=='Star-Wars'){
                    if(window.matchMedia("(max-width: 1440px)").matches){
                        if(contSw < 4){ 
                            criaNovoProduto('Star-Wars', element.id, element.nome, element.preço)
                            newImage(element.id, element.url)
                            contSw++
                        }
                    }
                    else if(contSw < 6) {
                        criaNovoProduto('Star-Wars', element.id, element.nome, element.preço)
                            newImage(element.id, element.url)
                            contSw++
                    }
                }
                if(element.categoria=='console'){
                    if(window.matchMedia("(max-width: 1440px)").matches){
                        if(contC < 4){ 
                            criaNovoProduto('console', element.id, element.nome, element.preço)
                            newImage(element.id, element.url)
                            contC++
                        }
                    }
                    else if(contC < 6) {
                        criaNovoProduto('console', element.id, element.nome, element.preço)
                            newImage(element.id, element.url)
                            contC++
                    }
                }
                if(element.categoria=='diversos'){
                    if(window.matchMedia("(max-width: 1440px)").matches){
                        if(contD < 4){ 
                            criaNovoProduto('diversos', element.id, element.nome, element.preço)
                            newImage(element.id, element.url)
                            contD++
                        }
                    }
                    else if(contD < 6) {
                        criaNovoProduto('diversos', element.id, element.nome, element.preço)
                            newImage(element.id, element.url)
                            contD++
                    }
                }
                
        })
    
    }

    exibeProduto()

    // const idStarWars = document.getElementById('Star-Wars')
    // if(idStarWars){
    //     window.matchMedia("(max-width: 1440px)").matches ? exibeProduto(4, 'Star-Wars') : false
    //     window.matchMedia("(min-width:1440px)").matches ? exibeProduto(6,'Star-Wars') : false 
    // }

    // const idConsole = document.getElementById('console')
    // if(idConsole){
    //     window.matchMedia("(max-width: 1440px)").matches ? exibeProduto(4, 'console') : false
    //     window.matchMedia("(in-width: 1440px)").matches ? exibeProduto(6, 'console') : false
    // }

    // const idDiversos = document.getElementById('diversos')
    // if(idDiversos){
    //     window.matchMedia("(max-width: 1440px)").matches ? exibeProduto(4, 'diversos') : false
    //     window.matchMedia("(in-width: 1440px)").matches ? exibeProduto(6, 'diversos') : false
    // }

    
})
.catch(error => {
    // aqui temos acesso ao erro, quando alguma coisa inesperada acontece:
    console.log(error);
})


const criaNovoProduto = (id, name, price) => {
    const list = document.querySelector('.card__list')
    const listNew = document.createElement('li')
    listNew.setAttribute('class', 'card__element')
    listNew.setAttribute('id', id)
    const conteudo = `
            <div class="card__element--img">
                <div class="card__buttons">
                    <i class="fa-solid fa-trash" onclick='trashProduct(${id})'></i>
                    <i class="fa-solid fa-pencil" onclick='redirectUrl(${id})'></i>
                </div>
            </div>
            <h2>${name}</h2>
            <p>${price}</p>
            <legend>#${id}</legend>
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

const redirectUrl = (id) => {
    if(id) {
        window.location.href = `./addProducts.html?id=${id}`;
    }
    else {
        window.location.href = `./addProducts.html`;
    }
}

axios.get('http://localhost:3000/produtos')
.then(response => {
    response.data.forEach(element => {
        if(element.id >= 1) {
            criaNovoProduto(element.id, element.nome, element.preço)
            newImage(element.id, element.url)
        }
        else {
            console.log('Mostrando usuário e senha')
        }
    });
})
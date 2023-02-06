const getUrl = new URL(window.location)
const id = getUrl.searchParams.get('id')

let inputName = document.querySelector('#input-name')
let inputValue = document.querySelector('#input-value')
let textDescription = document.querySelector('#textarea-description')
let labelUrlImage = document.querySelector('#label-urlImage')
let selectCat = document.querySelector('#select-cat')
let pathImg 


const editProduct = (id, optionSelect) => {
    axios.put(`http://localhost:3000/produtos/${id}`, {
        nome: inputName.value,
        preço: inputValue.value,
        descrição: textDescription.value,
        categoria: optionSelect,
        url: pathImg
    })
    .then( _ => {
        
    })
    .catch( _ => {
    })
}

const addProduct = (id, optionSelect) => {
    axios.post(`http://localhost:3000/produtos/`, {
        id: id,
        nome: inputName.value,
        categoria: optionSelect,
        preço: inputValue.value,
        descrição: textDescription.value,
        url: '/assets/img/muttley'
    })
    .then( _ => {
    })
    .catch( _ => {
        console.log(response.error)
    })
}

axios.get('http://localhost:3000/produtos')
.then(response => {
    if(id){
        document.querySelector('.addProducts__title').innerHTML = 'Alterar um Produto'
        let buttonEdit = document.querySelector('.addProducts__button')
        buttonEdit.innerHTML = 'Alterar Produto'
        response.data.forEach(element => {
            if(element.id == id) {
                labelUrlImage.innerHTML = element.url
                pathImg = element.url
                inputName.value = element.nome 
                inputValue.value = element.preço
                textDescription.value = element.descrição
            }  
        });
        buttonEdit.addEventListener('click', event => {
            event.preventDefault();
            let optionSelect = selectCat.options[selectCat.selectedIndex].value
            editProduct(id, optionSelect)
            alert('Produto alterado com sucesso!')
        })
    }else {
        labelUrlImage.innerHTML = '/assets/img/muttley'
        let buttonEdit = document.querySelector('.addProducts__button')
        buttonEdit.addEventListener('click', event => {
            event.preventDefault();
            let optionSelect = selectCat.options[selectCat.selectedIndex].value
            addProduct(getBiggerId(), optionSelect)
            alert('Produto cadastrado com sucesso!')
        })
    }
})

const getBiggerId = id => {
    axios.get('http://localhost:3000/produtos')
    .then(response => {
        const typeId = response.data.filter(element => { 
            if(typeof element.id == 'number') {
                return element
            }
         })
        const arrayIds = typeId.map(element => {
            return element.id
        })
        return Math.max(...arrayIds) + 1
    })
}
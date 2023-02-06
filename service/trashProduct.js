const trashProduct = (id) => {
    axios.delete(`http://localhost:3000/produtos/${id}`)
    .then( _ => {
        alert('Excluído com sucesso!')
    })
}


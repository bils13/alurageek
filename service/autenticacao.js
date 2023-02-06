axios.get('http://localhost:3000/produtos')
.then(response => {
    const armazenaDados = (email, senha) => {
        localStorage.setItem('email', `${email}`)
        localStorage.setItem('senha', `${senha}`)
        window.location.href = 'products.html'
    }

    const autenticacao = _ => {
        let passwordTrue = false
        let emailTrue = false
        const emailInput = document.getElementById('email').value
        const passwordInput = document.getElementById('password').value
        const login = response.data[0]
        Object.values(login).forEach(element => {
            if(emailInput==element){
                passwordTrue = true
            }
            if(passwordInput==element){
                emailTrue = true
            }
        })
        passwordTrue == true && emailTrue == true ? armazenaDados(emailInput, passwordInput) : console.log('acesso negado')
    }
    let button = document.querySelector('#login')
    button.addEventListener('click', () => {
        autenticacao()
    })
})
.catch(response => {
    console.log(response)
})


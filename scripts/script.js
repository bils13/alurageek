const barraNavegacao = (none, flex, center, urlImage) => {
    document.querySelector(".navbar__logo").style.display = none
    document.querySelector(".navbar__button") ? document.querySelector(".navbar__button").style.display = none : false
    document.querySelector(".navbar__look").style.display = flex
    document.querySelector(".navbar__icon").style.display = none
    document.querySelector(".navbar").style.justifyContent = center
    const icon = document.querySelector(".navbar__look")
    const img = icon.querySelector('img')
    img.setAttribute('src', `./assets/svg/${urlImage}.svg`)
    img.style.height = '10px'
    img.setAttribute('onclick', 'resetaBarraNavagacao();')
}

const resetaBarraNavagacao = _ => {
    barraNavegacao('flex', 'none', 'space-between', 'lupa')
}

const redirecionaLink = url => {
    window.location.href = `/${url}`
}
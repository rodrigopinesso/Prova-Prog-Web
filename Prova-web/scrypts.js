async function getMunicipiosData (name) {
    try {
        const data = await fetch ("https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios")

        const jsonData = await data.json
    } catch (error) {
        console.error(error)
    }
}

function changePageTitle (title) {
    document.title = title
}

const section = document.querySelector(municipios)


export const getPoke = (setPoke) => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
        return response.json();
    }).then((result) => {
        setPoke(result.abilities)
    })
}
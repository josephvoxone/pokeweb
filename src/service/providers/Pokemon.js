
// To Get Pokemon 
export let getPokemon = JSON.parse(localStorage.getItem('ownedPokemons')) || [];

// To Add Pokemon 
export const AddPokemon = (newPokemon) => {
    const dataPokemon = getPokemon
    dataPokemon.push(newPokemon)
    localStorage.setItem('ownedPokemons', JSON.stringify(dataPokemon))
}

// To Remove Pokemon 
export const DiscardPokemon = (nickname) => {
    const dataPokemon = getPokemon.filter((obj) => {
        return obj.nickname !== nickname
    });
    localStorage.setItem('ownedPokemons', JSON.stringify(dataPokemon))
}

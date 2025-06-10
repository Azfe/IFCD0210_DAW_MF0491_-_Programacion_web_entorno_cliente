const API_BASE = 'https://pokeapi.co/api/v2/pokemon/';
const SPECIES_API = 'https://pokeapi.co/api/v2/pokemon-species/';
let currentPokemon = null;
let evolutionChain = [];
let currentEvolutionIndex = 0;

// Búsqueda con Enter
document.getElementById('pokemonInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchPokemon();
    }
});

async function searchPokemon() {
    const input = document.getElementById('pokemonInput').value.trim().toLowerCase();
    if (!input) return;

    showLoading();

    try {
        const response = await fetch(API_BASE + input);
        if (!response.ok) {
            throw new Error('Pokémon no encontrado');
        }

        const pokemon = await response.json();
        await loadEvolutionChain(pokemon);
        displayPokemon(pokemon);
        currentPokemon = pokemon;
    } catch (error) {
        showError('No se pudo encontrar el Pokémon. Verifica el nombre o número.');
    }
}

async function getRandomPokemon() {
    const randomId = Math.floor(Math.random() * 1010) + 1; // Hasta gen 9
    showLoading();

    try {
        const response = await fetch(API_BASE + randomId);
        const pokemon = await response.json();
        await loadEvolutionChain(pokemon);
        displayPokemon(pokemon);
        currentPokemon = pokemon;
        document.getElementById('pokemonInput').value = pokemon.name;
    } catch (error) {
        showError('Error al cargar Pokémon aleatorio.');
    }
}

async function loadEvolutionChain(pokemon) {
    try {
        // Obtener información de la especie
        const speciesResponse = await fetch(SPECIES_API + pokemon.id);
        const speciesData = await speciesResponse.json();

        // Obtener cadena evolutiva
        const evolutionResponse = await fetch(speciesData.evolution_chain.url);
        const evolutionData = await evolutionResponse.json();

        // Procesar cadena evolutiva
        evolutionChain = [];
        processEvolutionChain(evolutionData.chain);

        // Encontrar posición actual en la cadena
        currentEvolutionIndex = evolutionChain.findIndex(evo => evo.id === pokemon.id);
        if (currentEvolutionIndex === -1) currentEvolutionIndex = 0;

        updateEvolutionControls();

    } catch (error) {
        console.log('No se pudo cargar la cadena evolutiva');
        evolutionChain = [];
    }
}

function processEvolutionChain(chain) {
    // Agregar el Pokémon base
    const pokemonId = extractIdFromUrl(chain.species.url);
    evolutionChain.push({
        name: chain.species.name,
        id: pokemonId,
        stage: evolutionChain.length + 1
    });

    // Procesar evoluciones recursivamente
    if (chain.evolves_to && chain.evolves_to.length > 0) {
        chain.evolves_to.forEach(evolution => {
            processEvolutionChain(evolution);
        });
    }
}

function extractIdFromUrl(url) {
    const parts = url.split('/');
    return parseInt(parts[parts.length - 2]);
}

function updateEvolutionControls() {
    const evolutionContainer = document.getElementById('evolutionContainer');
    const prevBtn = document.getElementById('prevEvolution');
    const nextBtn = document.getElementById('nextEvolution');
    const stageDiv = document.getElementById('evolutionStage');
    const chainDiv = document.getElementById('evolutionChain');

    if (evolutionChain.length > 1) {
        evolutionContainer.style.display = 'flex';

        // Actualizar botones
        prevBtn.disabled = currentEvolutionIndex === 0;
        nextBtn.disabled = currentEvolutionIndex === evolutionChain.length - 1;

        // Actualizar información
        stageDiv.textContent = `Evolución ${currentEvolutionIndex + 1} de ${evolutionChain.length}`;
        chainDiv.textContent = evolutionChain.map(evo =>
            evo.name.charAt(0).toUpperCase() + evo.name.slice(1)
        ).join(' → ');

    } else {
        evolutionContainer.style.display = 'none';
    }
}

async function previousEvolution() {
    if (currentEvolutionIndex > 0) {
        currentEvolutionIndex--;
        const prevPokemon = evolutionChain[currentEvolutionIndex];
        showLoading();

        try {
            const response = await fetch(API_BASE + prevPokemon.id);
            const pokemon = await response.json();
            displayPokemon(pokemon);
            currentPokemon = pokemon;
            document.getElementById('pokemonInput').value = pokemon.name;
            updateEvolutionControls();
        } catch (error) {
            showError('Error al cargar la evolución anterior.');
        }
    }
}

async function nextEvolution() {
    if (currentEvolutionIndex < evolutionChain.length - 1) {
        currentEvolutionIndex++;
        const nextPokemon = evolutionChain[currentEvolutionIndex];
        showLoading();

        try {
            const response = await fetch(API_BASE + nextPokemon.id);
            const pokemon = await response.json();
            displayPokemon(pokemon);
            currentPokemon = pokemon;
            document.getElementById('pokemonInput').value = pokemon.name;
            updateEvolutionControls();
        } catch (error) {
            showError('Error al cargar la siguiente evolución.');
        }
    }
}

function displayPokemon(pokemon) {
    const container = document.getElementById('pokemonContainer');

    const typesHTML = pokemon.types.map(type =>
        `<span class="type-badge type-${type.type.name}">${type.type.name}</span>`
    ).join('');

    const statsHTML = pokemon.stats.map(stat => {
        const percentage = Math.min((stat.base_stat / 255) * 100, 100);
        return `
                    <div class="stat-item">
                        <div class="stat-name">${stat.stat.name}</div>
                        <div class="stat-value">${stat.base_stat}</div>
                        <div class="stat-bar">
                            <div class="stat-fill" style="width: ${percentage}%"></div>
                        </div>
                    </div>
                `;
    }).join('');

    container.innerHTML = `
                <div class="pokemon-card">
                    <div class="pokemon-image">
                        <img src="${pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}" 
                             alt="${pokemon.name}" 
                             onerror="this.src='${pokemon.sprites.front_default}'">
                    </div>
                    <h2 class="pokemon-name">${pokemon.name}</h2>
                    <p class="pokemon-id">#${pokemon.id.toString().padStart(3, '0')}</p>
                    <div class="pokemon-types">${typesHTML}</div>
                    <div class="pokemon-stats">${statsHTML}</div>
                </div>
            `;
}

function showLoading() {
    document.getElementById('pokemonContainer').innerHTML =
        '<div class="loading">Cargando Pokémon...</div>';
}

function showError(message) {
    document.getElementById('pokemonContainer').innerHTML =
        `<div class="error">${message}</div>`;
}

// Cargar Pikachu por defecto
window.addEventListener('load', () => {
    document.getElementById('pokemonInput').value = 'pikachu';
    searchPokemon();
});
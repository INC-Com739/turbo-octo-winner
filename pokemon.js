

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function fetchSquirtle() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/squirtle');
  const data = await res.json();
  console.log(`Squirtle: Name = ${data.name}, Base Experience = ${data.base_experience}`);
}

async function fetchPikachu() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
  const data = await res.json();
  const types = data.types.map(t => t.type.name).join(', ');
  console.log(`Pikachu: Name = ${data.name}, Types = ${types}`);
}

async function fetchJigglypuff() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/jigglypuff');
  const data = await res.json();
  console.log(`Jigglypuff: Name = ${data.name}, Weight = ${data.weight}`);
}

async function fetchSecondPokemon() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/2');
  const data = await res.json();
  console.log(`Second Pokémon: Name = ${data.name}`);
}

async function fetchFirstBerryFlavor() {
  const res = await fetch('https://pokeapi.co/api/v2/berry/1');
  const data = await res.json();
  const flavor = data.flavors[0]?.flavor?.name || 'Unknown';
  console.log(`First Berry: Flavor = ${flavor}`);
}

async function fetchFirstAbility() {
  const res = await fetch('https://pokeapi.co/api/v2/ability/1');
  const data = await res.json();
  const effect = data.effect_entries.find(e => e.language.name === 'en')?.effect || 'No effect found';
  console.log(`First Ability: Name = ${data.name}, Effect = ${effect}`);
}

async function fetchAbilityById(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/ability/${id}`);
  const data = await res.json();
  const effect = data.effect_entries.find(e => e.language.name === 'en')?.effect || 'No effect found';
  console.log(`Ability by ID (${id}): Name = ${data.name}, Effect = ${effect}`);
}

async function fetchItemById(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/item/${id}`);
  const data = await res.json();
  console.log(`Item by ID (${id}): Name = ${data.name}, Category = ${data.category.name}`);
}

async function fetchTypeById(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/type/${id}`);
  const data = await res.json();
  const damageRelations = Object.entries(data.damage_relations).map(([k,v]) => `${k}: ${v.map(x=>x.name).join(', ')}`).join('; ');
  console.log(`Type by ID (${id}): Name = ${data.name}, Damage Relations = ${damageRelations}`);
}

async function main() {
  await fetchSquirtle();
  await fetchPikachu();
  await fetchJigglypuff();
  await fetchSecondPokemon();
  await fetchFirstBerryFlavor();
  await fetchFirstAbility();
  await fetchAbilityById(1); // Example: 1 = stench
  await fetchItemById(1);    // Example: 1 = master-ball
  await fetchTypeById(1);    // Example: 1 = normal
}

main();

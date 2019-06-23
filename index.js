 let animals = [
    "panda",
    "bear",
    "kitten",
    "tiger",
    "falcon",
    "spider",
    "jackal",
    "duke",
    "dragon",
    "viper",
    "buffalo",
    "cholima",
    "crane",
    "leopard",
    "wolf",
    "snake",
    "piranha",
    "crocodile",
    "orca",
    "lion",
    "elephant"
];

let descriptors = [
    "wicked",
    "evil",
    "nasty",
    "stone",
    "viexn",
    "wild",
    "rugged",
    "snappy",
    "karate",
    "kung-fu",
    "hidden",
    "sneaky",
    "private",
    "stealthy",
    "magic",
    "playful",
    "adorable",
    "goblin",
    "helix",
    "stardust",
    "neon",
    "mythic",
    "dungeon",
    "cobalt",
    "fancy",
    "cozy",
    "crazy",
    "venomous",
    "poison",
    "gothic",
    "verbose",
    "rambunctious",
    "ruthless",
    "unrelenting",
    "brutal"
];
function generateActor() {
    let animalIdx = Math.floor(Math.random() * animals.length);
    let descriptorIdx = Math.floor(Math.random() * descriptors.length);
    let descriptor = descriptors[descriptorIdx][0].toUpperCase() + descriptors[descriptorIdx].substring(1);
    let animal = animals[animalIdx][0].toUpperCase() + animals[animalIdx].substring(1);
    document.getElementById("actor").innerText = descriptor + " " + animal;
    ga('send', 'event', 'button', 'click', 'generate');
}
window.onload = () => {
    generateActor();
    document.getElementById("btn").onclick = generateActor;
}
const player1 = {
    name: 'Саб-Зиро',
    hp: 10,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['автомат', 'пистолет', 'граната'],
    attack: function () {
        console.log(this.name + ' Fight...')
    }
}

const player2 = {
    name: 'Соня',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['нож', 'базука', 'сабля'],
    attack: function () {
        console.log(this.name + ' Fight...')
    }
}

// playerClass - игрок 1-й или 2-й
// playerName - ключ name, имя того игрока, который выбран

function createPlayer(playerClass, playerName) {
    const $root = document.querySelector('.root');
    const $arenas = document.querySelector('.arenas')

    const $player = document.createElement('div');
    $player.classList.add(playerClass);
    $root.appendChild($player);

    const $progressBar = document.createElement('div');
    $progressBar.classList.add('progressbar');
    $player.appendChild($progressBar);

    const $character = document.createElement('div');
    $character.classList.add('character');
    $player.appendChild($character);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $progressBar.appendChild($life);
    $life.style.width = playerName.hp + '%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $progressBar.appendChild($name);
    $name.innerHTML = playerName.name;

    const $img = document.createElement('img');
    $character.appendChild($img);
    $img.src = playerName.img;

    $arenas.appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);
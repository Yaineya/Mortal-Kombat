const $arenas = document.querySelector('.arenas');

const $randomButton = document.querySelector('.button');   
$randomButton.addEventListener('click', function () {
    changeHP(player1);
    changeHP(player2);
} );

// playerName - ключ name, имя того игрока, который выбран

function random() {
    return Math.ceil( Math.random() * 40 );
}

function playerLose(name) {
    const $loser = createElem('div', 'loseTitle');
    $loser.innerText = name + ' LOSER';

    return $loser
}

function playerWin(name) {
    const $winTitle = createElem('div', 'winTitle');
    $winTitle.innerText = name + ' WIN';

    return $winTitle
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player'+ player.player +' .life')
    player.hp = player.hp - random();
    $playerLife.style.width = player.hp + '%';
    console.log(player.hp, $playerLife.style.width = player.hp + '%');

    if(player.hp <= 0) {
        $arenas.appendChild(playerLose(player.name));
        // $arenas.appendChild(playerWin(player.name));
        $playerLife.style.width = 0 + '%';
        $randomButton.setAttribute("disabled", "true");
    }
    // Задача сделать так, что если жизни становятся меньше или равные 0, то игроку нужно записать 0, а не минусовое значение.
    // Попробуй вместо этого вывести, кто победил.
}

function createElem(tag, className) {
    const $tag = document.createElement(tag);
    if(className){
        $tag.classList.add(className);  
    }
    return $tag
}

function createPlayer(playerName) {
    const $root = createElem('div', 'root');
    const $player = createElem('div', 'player' + playerName.player);
    const $progressBar = createElem('div', 'progressbar');
    const $character = createElem('div', 'character');
    const $life = createElem('div', 'life');
    const $name = createElem('div', 'name');
    const $img = createElem('img');

    $root.appendChild($player);
    $player.appendChild($progressBar);
    $player.appendChild($character);
    $progressBar.appendChild($life);
    $progressBar.appendChild($name);
    $character.appendChild($img);

    $life.style.width = playerName.hp + '%';
    $name.innerHTML = playerName.name;
    $img.src = playerName.img;

    return $player
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

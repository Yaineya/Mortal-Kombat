const player1 = {
    player: 1,
    name: 'Sub-zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['автомат', 'пистолет', 'граната'],
    attack: function () {
        console.log(this.name + ' Fight...')
    }
}

const player2 = {
    player: 2,
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['нож', 'базука', 'сабля'],
    attack: function () {
        console.log(this.name + ' Fight...')
    }
}
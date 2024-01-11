function startGame() {
    var numPlayers = document.getElementById("numPlayers").value;

    // Send a request to start the game with the selected number of players
    fetch(`/start_game/${numPlayers}`)
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            spinBottle();
        });
}

function spinBottle() {
    // Send a request to spin the bottle
    fetch('/spin_bottle')
        .then(response => response.json())
        .then(data => {
            alert(`Player ${data.player_index}, it's your turn!`);
            showOptions();
        });
}

function showOptions() {
    // Send a request to get a random challenge
    fetch('/get_challenge')
        .then(response => response.json())
        .then(data => {
            alert(`Your challenge: ${data.challenge}`);
        });
}

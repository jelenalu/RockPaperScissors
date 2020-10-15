function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice:', botChoice);

    results = decideWinner(humanChoice, botChoice);
    console.log(results);

    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };
    
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    
    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if(yourScore === 0) {
        return {'message':'You lost!', 'color': 'white'};
    } else if(yourScore === 0.5) {
        return {'message':'You tied!', 'color': 'white'};
    }else {
        return {'message': 'You won!', 'color': ' white'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src        
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' style='box-shadow: 0px 10px 50px rgba(241, 232, 106, 0.623);'>"
    messageDiv.innerHTML = "<p style='color: " + finalMessage['color'] + "; font-size: 2rem; '>" + finalMessage['message'] + "</p>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 0.623);'>"
    
    document.getElementById('result-wrapper').appendChild(humanDiv);
    document.getElementById('result-wrapper').appendChild(botDiv);
    document.getElementById('results-text').appendChild(messageDiv);
}


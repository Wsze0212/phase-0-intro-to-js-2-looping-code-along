
function writeCards(namesArray, event) {
    
    let messageArray = [];
    
    for (let i = 0; i < namesArray.length; i++) {
        messageArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)

    }
    
    return messageArray;

}

function countDown(positiveInteger) {
    
    while (positiveInteger >= 0) {
        console.log(positiveInteger);
        positiveInteger--; 
    }

    

}
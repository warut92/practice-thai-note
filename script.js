// https://erikmartinjordan.com/get-random-emoji-javascript
function getRandomEmoji() {
  const emoji = ['🍊','🍌','-']
  const index1 = Math.floor(Math.random() * 3);
    document.getElementById("bar1").innerHTML = emoji[index1];  
  const index2 = Math.floor(Math.random() * 2);
    document.getElementById("bar2").innerHTML = emoji[index2];  
   
}
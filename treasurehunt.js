var rainbowTreasure = Math.floor(Math.random() * 15)
var bomb = Math.floor(Math.random() * 15)
if(rainbowTreasure === bomb) {
  var rainbowTreasure = Math.floor(Math.random() * 15)
  var bomb = Math.floor(Math.random() * 15)
}
const treasure = (location) => {
  if(location === rainbowTreasure) {
    document.getElementById(location).innerHTML = "<img src='https://p1.hiclipart.com/preview/787/650/561/the-nightmare-before-christmas-telegram-sticker-jack-skellington-christmas-day-emoji-user-account-google-account-png-clipart-thumbnail.jpg' height='50px'/>"
    alert("You Win!!!")
  } 
  else if(location === bomb) {
    document.getElementById(location).innerHTML = "<img src='https://static.wikia.nocookie.net/disneyemojiblitz/images/6/68/EmojiBlitzOogieBoogie1.png/revision/latest?cb=20210102020614' height='50px'>"
    alert("You are a loser!")
  }
  else {
    document.getElementById(location).innerHTML = "<img src='https://static.wikia.nocookie.net/disneyemojiblitz/images/b/b0/EmojiBlitzZero.png/revision/latest/scale-to-width-down/506?cb=20181002185443' height='50px'>"
  }
  console.log("location;", location)
  console.log("rainbowTreasure;", rainbowTreasure) 
  console.log("bomb;", bomb)
}

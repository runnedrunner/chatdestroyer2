
var chatlist = []

// When you press enter ____________________________________________

var message = "What the heck did you just flipping say about me you big meanie? I'll have you know I graduated top of my class in the Tiny Tots Program and I've been involved in numerous secret raids on the girl's bathroom and I have over 300 confirmed noogies. I am trained in Nerf warfare and I have the most gold stars in the entire kindergarten class. You are nothing to me but just another butthead. I will beat you the heck up with precision the likes of which has never been seen before on this Earth mark my dang words. You think you can get away with saying that baloney to me on the glowy type-box? Think again doodiehead. As we speak I am contacting my secret network of teachers across the USA and your parents are being called to pick you up right now so you better prepare for the spanking junior. The spanking that wipes out the dumb little thing you call your playtime. You're in big darn trouble kid. I can be anywhere anytime and I can wedgie you in over seven hundred ways and that's just with my bare hands. Not only am I extensively trained in unarmed fartfights but I have access to the entire arsenal of the United States PTA and I will use it to its full extent to wipe your dorky bottom off the face of the playground you little poopypants. If only you could have known what serious punishments your little 'smartypants' comment was about to bring down upon you maybe you would have held your goshdarned tongue. But you couldn't you didn't and now you're paying the price you silly doofus. I will spray boogers all over you and you will cry about it. You're frickin grounded buttmunch."
var cleanerUser = "toddlerBot"
var accountColor = "red"

var useUser = (cleanerUser + ": " + message);
var myVar = setInterval(thing, 60000);

function thing () { 
  addListItem("saylist", cleanerUser +"," + message + "," + accountColor);
  console.log(herro);
}
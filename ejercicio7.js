let style = ["Jazz", "Blues"];
style.push("Rock-n-Roll");
style[Math.floor(style.length/2)]= "Classic";
style.shift();
style.unshift("Rap", "Reggae");
alert(style)
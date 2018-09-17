
//Every time you click, you get X number of cookies
document.querySelector(".mainCookie").addEventListener("click", function() {
  cookies = cookies + click;
  document.getElementById("cookies").innerHTML = cookies + " cookies";
});
//Every time you buy a power click your clickers and cursor give twice as many cookies
document.querySelector(".powerClick").addEventListener("click", function() {
  if (cookies - clickCost >= 0) {
    cookies = cookies - 50;
    click = click * 2;
    clicks = clicks + 1;
    clickCost = clickCost * 5;
    cursors = cursors * 2;
    document.getElementById("pp").innerHTML = "You have " + clicks + " Power Clicks | Cost: " + clickCost + " cookies";
    document.getElementById("messages").innerHTML = "You bought 1 Power Click. Now you have " + clicks + ".";
  } else {
    cookies = cookies;
    clicks = clicks;
    clickCost = clickCost;
  }
});

let clickerRun = function() {
  cookies = cookies + cursors;
  cookies = Math.ceil(cookies * 10) / 10;
  document.getElementById("cookies").innerHTML = cookies + " cookies";
};

document.querySelector(".clicker").addEventListener("click", function() {
  if (cookies - cursorCost >= 0) {
    console.log("clicker is equal to " + cursorCost);
    cookies = cookies - cursorCost;
    cursorCost = Math.round(cursorCost * 1.5);
    cursors = cursors + 0.1;
    setInterval(clickerRun, 1000);
    cursor = cursor + 1;
    document.getElementById("pc").innerHTML = "You have " + cursor + " Clickers | Cost: " + cursorCost + " cookies";
    document.getElementById("messages").innerHTML = "You bought 1 Clicker. Now you have " + cursor + ".";
  }
});
//same thing again with diff settings
let grandmaRun = function() {
    cookies = cookies + grandmas;
    document.getElementById("cookies").innerHTML = cookies + " cookies"
  }
  //again
document.querySelector(".grandma").addEventListener("click", function() {
  if (cookies - grandmaCost >= 0) {
    cookies = cookies - grandmaCost;
    grandmaCost = Math.round(grandmaCost * 1.5);
    grandmas = grandmas + 1;
    setInterval(grandmaRun, 1000);
    grandma = grandma + 1;
    document.getElementById("pg").innerHTML = "You have " + grandma + " Grandmas | Cost: " + grandmaCost + " cookies";
    document.getElementById("messages").innerHTML = "You bought 1 Grandma. Now you have " + grandma + ".";
  }
});
//you get it
let farmRun = function() {
    cookies = cookies + farms;
    document.getElementById("cookies").innerHTML = cookies + " cookies"
  }
  //again SAME
document.querySelector(".farm").addEventListener("click", function() {
  if (cookies - farmCost >= 0) {
    cookies = cookies - farmCost;
    farmCost = Math.round(farmCost * 1.5);
    farms = farms + 3;
    setInterval(farmRun, 1000);
    farm = farm + 1;
    document.getElementById("pf").innerHTML = "You have " + farm + " Farms | Cost: " + farmCost + " cookies";
    document.getElementById("messages").innerHTML = "You bought 1 Farm. Now you have " + farm + ".";
  }
});

let mineRun = function() {
  cookies = cookies + mines;
  document.getElementById("cookies").innerHTML = cookies + " cookies"
}

document.querySelector(".mine").addEventListener("click", function() {
  if (cookies - mineCost >= 0) {
    cookies = cookies - mineCost;
    mineCost = Math.round(mineCost * 1.5);
    mines = mines + 10;
    setInterval(mineRun, 1000);
    mine = mine + 1;
    document.getElementById("pm").innerHTML = "You have " + mine + " Mines | Cost: " + mineCost + " cookies";
    document.getElementById("messages").innerHTML = "You bought 1 Mine. Now you have " + mine + ".";
  }
});

let factoryRun = function() {
  cookies = cookies + factories;
  document.getElementById("cookies").innerHTML = cookies + " cookies"
}

document.querySelector(".factory").addEventListener("click", function() {
  if (cookies - factoryCost >= 0) {
    cookies = cookies - factoryCost;
    factoryCost = Math.round(factoryCost * 1.5);
    factories = factories + 50;
    setInterval(factoryRun, 1000);
    factory = factory + 1;
    document.getElementById("fp").innerHTML = "You have " + factory + " Factories | Cost: " + factoryCost + " cookies";
    document.getElementById("messages").innerHTML = "You bought 1 Factory. Now you have " + factory + ".";
  }
});

let bankRun = function() {
  cookies = cookies + banks;
  document.getElementById("cookies").innerHTML = cookies + " cookies"
}

document.querySelector(".bank").addEventListener("click", function() {
  if (cookies - bankCost >= 0) {
    cookies = cookies - bankCost;
    bankCost = Math.round(bankCost * 1.5);
    banks = banks + 100;
    setInterval(bankRun, 1000);
    bank = bank + 1;
    document.getElementById("pb").innerHTML = "You have " + bank + " Banks | Cost: " + bankCost + " cookies";
    document.getElementById("messages").innerHTML = "You bought 1 Bank. Now you have " + bank + ".";
  }
});

let templeRun = function() {
  cookies = cookies + temples;
  document.getElementById("cookies").innerHTML = cookies + " cookies"
}

document.querySelector(".bank").addEventListener("click", function() {
  if (cookies - templeCost >= 0) {
    cookies = cookies - templeCost;
    templeCost = Math.round(templeCost * 1.5);
    temples = temples + 500;
    setInterval(templeRun, 1000);
    temple = temple + 1;
    document.getElementById("pt").innerHTML = "You have " + temple + " Temples | Cost: " + templeCost + " cookies";
    document.getElementById("messages").innerHTML = "You bought 1 Temple. Now you have " + temple + ".";
  }
});

let towerRun = function() {
  cookies = cookies + towers;
  document.getElementById("cookies").innerHTML = cookies + " cookies"
}

document.querySelector(".tower").addEventListener("click", function() {
  if (cookies - towerCost >= 0) {
    cookies = cookies - towerCost;
    towerCost = Math.round(towerCost * 1.5);
    towers = towers + 1000;
    setInterval(towerRun, 1000);
    tower = tower + 1;
    document.getElementById("pw").innerHTML = "You have " + tower + " Towers | Cost: " + towerCost + " cookies";
    document.getElementById("messages").innerHTML = "You bought 1 Wizard Tower. Now you have " + tower + ".";
  }
});
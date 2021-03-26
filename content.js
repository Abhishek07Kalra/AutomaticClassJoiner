flag1 = false;
flag2 = false;

function go() {
  url = location.href;
  if (url.includes("meet.google.com")) {
    its_meet();
  }  else {
    console.log("Not my cup of coffee ☕ : automatic joiner extention 💣 ");
  }
}

function its_meet() {
  setTimeout(function() {
    items = document.getElementsByTagName('div');
    loop();
  }, 3000);

  // turn off camera and microphone
  function loop() {
    setTimeout(function() {
      try {
        for (i = 0; i < items.length; i++) {
          if (items[i].hasAttribute("aria-label")) {
            if (items[i].getAttribute("aria-label").includes("microphone") || items[i].getAttribute("aria-label").includes("camera")) {
              items[i].click();
              flag1 = true;
            }
          }
        }
      } catch (err) {
        console.log(err);
      }
      if (flag1 == false) {
        loop();
      } else {
        askToJoin();
      }
    }, 2000)
  }
  // Ask to Join
  function askToJoin() {
    setTimeout(function() {
      for (i = 0; i < items.length; i++) {
        if (items[i].hasAttribute("jsname")) {
          if (items[i].getAttribute("jsname").includes("Qx7uuf")) {
            items[i].click();
            flag2 = true; 
          }
        }
      }
      if (flag2 == false) {
        askToJoin();
      }
    }, 2000);
  }
}

go();

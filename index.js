let count = 0;

document.getElementById("count").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;

    if (count >= 10){
        document.getElementById("a").innerHTML = "Hey man pls dont do that";
    }
    if (count >= 20){
        document.getElementById("a").innerHTML = "...";
    }
    if (count >= 30){
        document.getElementById("a").innerHTML = "bro the website doesn't work, that button won't do anything";
    }
    if (count >= 40){
        document.getElementById("a").innerHTML = "dawg.";
    }
    if (count >= 50){
        document.getElementById("a").innerHTML = "pls knock it off";
    }
    if (count >= 60){
        document.getElementById("a").innerHTML ="I mean it increases that little number underneath it ig.";
    }
    if (count >= 70){
        document.getElementById("a").innerHTML ="but thats just a counter fr";
    }
    if (count >= 80){
        document.getElementById("a").innerHTML ="If this is so entertaining why dont you just count on your own";
    }
    if (count >= 90){
        document.getElementById("a").innerHTML ="go ahead and count somewhere else";
    }
    if (count >= 100){
        document.getElementById("a").innerHTML ="sigh";
    }
    if (count >= 110){
        document.getElementById("a").innerHTML ="I'VE CLICKED THAT BUTTON 978 TIMES TRUST ME IT DOES NOTHING";
    }
    if (count >= 120){
        document.getElementById("a").innerHTML ="listen man, I owe Andrew a favor and that was to entertain you";
    }
    if (count >= 130){
        document.getElementById("a").innerHTML ="he told me to build a cool website for you but I didn't finish it in time ";
    }
    if (count >= 140){
        document.getElementById("a").innerHTML ="please don't tell him";
    }
    if (count >= 150){
        document.getElementById("a").innerHTML ="I just don't want to dissapoint him after he helped me from....";
    }
    if (count >= 160){
        document.getElementById("a").innerHTML ="The Incident";
    }
    if (count >= 170){
        document.getElementById("a").innerHTML ="anyways you're really starting to piss me off now";
    }
    if (count >= 180){
        document.getElementById("a").innerHTML ="like what do you have to gain?";
    }
    if (count >= 190){
        document.getElementById("a").innerHTML ="Ok well now im mad, look at my mad face";
        document.getElementById("mascot").src = "angry.png";
    }
}

let count = 0;
document.getElementById("ad").style.display = "none";

document.getElementById("count").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;

    switch(true){
        case count == 10:
            document.getElementById("a").innerHTML = "Hey man pls dont do that";
            break;
        case count == 20:
            document.getElementById("a").innerHTML = "...";
            break;
        case count == 30:
            document.getElementById("a").innerHTML = "bro the website doesn't work, that button won't do anything";
            break;
        case count == 40:
            document.getElementById("a").innerHTML = "dawg.";
            break;
        case count == 50:
            document.getElementById("a").innerHTML = "pls knock it off";
            break;
        case count == 60:
            document.getElementById("a").innerHTML ="I mean it increases that little number underneath it ig.";
            break;
        case count == 70:
            document.getElementById("a").innerHTML ="but thats just a counter fr";
            break;
        case count == 80:
            document.getElementById("a").innerHTML ="If this is so entertaining why dont you just count on your own";
            break;
        case count == 90:
            document.getElementById("a").innerHTML ="go ahead and count somewhere else";
            break;
        case count == 100:
            document.getElementById("a").innerHTML ="sigh";
            break;
        case count == 110:
            document.getElementById("a").innerHTML ="I'VE CLICKED THAT BUTTON 978 TIMES TRUST ME IT DOES NOTHING";
            break;
        case count == 120:
            document.getElementById("a").innerHTML ="listen man, I owe Andrew a favor and that was to entertain you";
            break;
        case count == 130:
            document.getElementById("a").innerHTML ="he told me to build a cool website for you but I didn't finish it in time ";
            break;
        case count == 140:
            document.getElementById("a").innerHTML ="please don't tell him";
            break;
        case count == 150:
            document.getElementById("a").innerHTML ="I just don't want to dissapoint him after he helped me from....";
            break;
        case count == 160:
            document.getElementById("a").innerHTML ="The Incident";
            break;
        case count == 170:
            document.getElementById("a").innerHTML ="anyways you're really starting to piss me off now";
            break;
        case count == 180:
            document.getElementById("a").innerHTML ="like what do you have to gain?";
            break;
        case count == 190:
            document.getElementById("a").innerHTML ="Ok well now im mad, look at my mad face";
            document.getElementById("mascot").src = "angry.png";
        case count == 200:
            document.getElementById("a").innerHTML ="Well since you're here I may as well monetize this page. Please unmute as we enjoy a message from our sponser.";
            document.getElementById("ad").style.display = "inline";

            break;

    }
}
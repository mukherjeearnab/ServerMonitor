function runner() { 
    setInterval(function() { caller(); }, 1000);
}


function caller() {
    getCPUTemp();
    getCPUUsage();
    getRAMAvail();
    getRAMTotal();
    getRAMUsage();
    getRAMUsageP();
    getDiskAvail();
    getDiskTotal();
    getDiskUsage();
    getDiskUsageP();
    //checkLine();
}

function getCPUTemp() {
    const Http = new XMLHttpRequest();
    const url='http://SERVER.ADDRESS:PORT/php/serverUtils.php?action=cpuTemp';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
        //console.log(Http.responseText);
        document.getElementById("cpuTemp").innerHTML = Http.responseText;
    }
}

function getCPUUsage() {
    const Http = new XMLHttpRequest();
    const url='http://SERVER.ADDRESS:PORT/php/serverUtils.php?action=cpuUsage';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
        //console.log(Http.responseText);
        document.getElementById("cpuUsage").innerHTML = Http.responseText;
    }
}

function getRAMUsage() {
    const Http = new XMLHttpRequest();
    const url='http://SERVER.ADDRESS:PORT/php/serverUtils.php?action=ramUsage';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
        //console.log(Http.responseText);
        document.getElementById("ramUsage").innerHTML = Http.responseText;
    }
}

function getRAMUsageP() {
    const Http = new XMLHttpRequest();
    const url='http://SERVER.ADDRESS:PORT/php/serverUtils.php?action=ramUsageP';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
        //console.log(Http.responseText);
        document.getElementById("ramUsageP").innerHTML = Http.responseText;
    }
}

function getRAMAvail() {
    const Http = new XMLHttpRequest();
    const url='http://SERVER.ADDRESS:PORT/php/serverUtils.php?action=ramAvail';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
        //console.log(Http.responseText);
        document.getElementById("ramAvail").innerHTML = Http.responseText;
    }
}

function getRAMTotal() {
    const Http = new XMLHttpRequest();
    const url='http://SERVER.ADDRESS:PORT/php/serverUtils.php?action=ramTotal';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
        //console.log(Http.responseText);
        document.getElementById("ramTotal").innerHTML = Http.responseText;
    }
}

function getDiskTotal() {
    const Http = new XMLHttpRequest();
    const url='http://SERVER.ADDRESS:PORT/php/serverUtils.php?action=diskTotal';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
        //console.log(Http.responseText);
        document.getElementById("diskTotal").innerHTML = Http.responseText;
    }
}

function getDiskUsage() {
    const Http = new XMLHttpRequest();
    const url='http://SERVER.ADDRESS:PORT/php/serverUtils.php?action=diskUsage';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
        //console.log(Http.responseText);
        document.getElementById("diskUsage").innerHTML = Http.responseText;
    }
}

function getDiskAvail() {
    const Http = new XMLHttpRequest();
    const url='http://SERVER.ADDRESS:PORT/php/serverUtils.php?action=diskAvail';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
        //console.log(Http.responseText);
        document.getElementById("diskAvail").innerHTML = Http.responseText;
    }
}

function getDiskUsageP() {
    const Http = new XMLHttpRequest();
    const url='http://SERVER.ADDRESS:PORT/php/serverUtils.php?action=diskUsageP';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
        //console.log(Http.responseText);
        document.getElementById("diskUsageP").innerHTML = Http.responseText;
    }
}

function checkLine() {
    const Http = new XMLHttpRequest();
    const url='http://SERVER.ADDRESS:PORT/php/serverUtils.php?action=checkLine';
    Http.open("GET", url);
    Http.send();
    var cl = 0;
    Http.onreadystatechange=(e)=>{
        //console.log(Http.responseText);
        if(Http.responseText == "online" && cl != 0)
            document.getElementById("offlineWarn").style.display = "none";
        else if(cl == 1)
            document.getElementById("offlineWarn").style.display = "block";
        //console.log(Http.responseText);
        cl++
    }
}

function shutdown() {
    var pass = prompt("Enter ServerOne1's Password:");
    //console.log(pass);
    if (pass == null || pass == "") {
        alert("Enter a valid Password!");
    } else {
        const Http = new XMLHttpRequest();
        const url='http://SERVER.ADDRESS:PORT/php/passCheck.php?pass=' + pass;
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange=(e)=>{
            //console.log(Http.responseText);
            if(Http.responseText == 1) {
                const Http2 = new XMLHttpRequest();
                const url2='http://SERVER.ADDRESS:PORT/php/serverMan.php?action=shutdown&pass=' + pass;
                Http2.open("GET", url2);
                Http2.send();
                Http2.onreadystatechange=(e)=>{
                    //console.log(url2);
                }
                alert("The Server will shutdown in 60 seconds.");
            }
        }
    }
}

function reboot() {
    var pass = prompt("Enter ServerOne1's Password:");
    if (pass == null || pass == "") {
        alert("Enter a valid Password!");
    } else {
        const Http = new XMLHttpRequest();
        const url='http://SERVER.ADDRESS:PORT/php/passCheck.php?pass=' + pass;
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange=(e)=>{
            //console.log(Http.responseText);
            if(Http.responseText == 1) {
                const Http2 = new XMLHttpRequest();
                const url2='http://SERVER.ADDRESS:PORT/php/serverMan.php?action=reboot&pass=' + pass;
                Http2.open("GET", url2);
                Http2.send();
                Http2.onreadystatechange=(e)=>{
                    console.log(url2);
                }
                alert("The Server is Rebooting . . . .");
            }
        }
    }
}
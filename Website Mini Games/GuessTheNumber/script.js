
var r = Math.floor(Math.random() * 100) + 1;
var turn = 7;
let sc = document.getElementById('score');
let dialog = document.getElementById('dialogue');
ox = document.getElementById('guesst');
function guesser(){
    x = ox.value;
    if(x>0 && x<=100){
        turn--;
        score.innerHTML = "Number Of Guesses Left : 0"+turn;
        if(x==r){
            dialog.innerHTML = "<br><br> Ente Menang :D";
            setTimeout(reset=>{
                alert("Ente Menang! :D\nMaen Lagi?");
                location.reload();
            },1000);
            return;
            
        }
        else if(x>r){
            dialog.innerHTML = "";
            setTimeout(rite=>{
                dialog.innerHTML = "<br><br> Ketinggian! :)";
            },200);
        }
        else{
            dialog.innerHTML = "";
            setTimeout(rite=>{
                dialog.innerHTML = "<br><br> Kerendahan! :)";
            },200);
            
        }
    }
    else{
        dialog.innerHTML = "";
        setTimeout(rite=>{
            dialog.innerHTML = "<br><br> Jangan Masukin angka itu -_- <br> Ane Males Ngoding!";
        },200);
        
    }
    if(turn==0){
        setTimeout(rite=>{
            dialog.innerHTML = "<br><br> Ente Kalah ;-; <br> Nomernya adalah "+r;
        },400);
        setTimeout(reset=>{
            alert("Ente Kalah! :(  Nomernya adalah : "+r+"\nCoba Lagi?");
            location.reload();
        },1000);
        return;
    }
}


document.addEventListener("keypress", (event)=> {
    if (event.keyCode === 13) { // key code of the keybord key
        event.preventDefault();
        guesser();
    }
});

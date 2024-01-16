let player_points = 0;
let cpu_points = 0;
let span_player_points = document.getElementById('player_points');
let span_cpu_points = document.getElementById('cpu_points');
let cpu_image = document.getElementById('cpu_img');
let player_image = document.getElementById('player_img');
let span_msg = document.getElementById('span_msg');



let skills = document.querySelectorAll('.pick img');
skills.forEach((item) => {
    item.addEventListener('click', pick);
});





function pick() {
    player_image.setAttribute('src', this.src);
    let cpu_pick = getCPUpick();
    checkResult(this.alt, cpu_pick);
}

function getCPUpick() {
    let random_num = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    let cpu_pick = '';
    switch (random_num) {
        case 1: cpu_pick = 'schere'; break;
        case 2: cpu_pick = 'stein'; break;
        case 3: cpu_pick = 'papier'; break;
       
    }
    cpu_image.setAttribute('src', cpu_pick + '.png');
    return cpu_pick;
}

function checkResult(player_pick, cpu_pick) {
    let win = false;
    let msg = '';

    if(player_pick === cpu_pick) {
        msg = 'Unentschieden';
    }
    else {

        if (player_pick == 'schere') {
            switch (cpu_pick) {
                case 'stein': win = false; msg = 'Stein schägt Schere'; break;
                case 'papier': win = true; msg = 'Schere schneidet Papier'; break;
                
            }
        }else if (player_pick == 'stein') {
            switch (cpu_pick) {
                case 'schere': win = true; msg = 'Stein schägt Schere'; break;
                case 'papier': win = false; msg = 'Papier schlägt Stein '; break;
                
            }
        }else if (player_pick == 'papier') {
            switch (cpu_pick) {
                case 'schere': win = false; msg = 'Schere schägt Papier'; break;
                case 'stein': win = true; msg = 'Papier schlägt Stein'; break;
                
            }
        }


        if(win) {
            player_points++;
        }
        else {
            cpu_points++;
        }

        
        
        setPoints();
    }
    span_msg.innerHTML = msg;

}

function setPoints() {
    span_player_points.innerHTML = player_points;
    span_cpu_points.innerHTML = cpu_points;
}





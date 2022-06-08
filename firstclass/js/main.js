console.log("TIC TAC TOE")

const a1 = document.querySelector('#a1')
const a2 = document.querySelector('#a2')
const a3 = document.querySelector('#a3')
const b1 = document.querySelector('#b1')
const b2 = document.querySelector('#b2')
const b3 = document.querySelector('#b3')
const c1 = document.querySelector('#c1')
const c2 = document.querySelector('#c2')
const c3 = document.querySelector('#c3')

// a1.addEventListener('click', function() {
//     console.log('click on A1')
// })

let current_player = 0
let winner = false
const elements = ['X','O']

const validationLine = (el1, el2, el3) => {
    let valid = false
    // console.log(el1.innerHTML)

    // if (el1.innerHTML != '' && el2.innerHTML != '' && el3.innerHTML != '') {
    //     console.log('valid')
    //     valid = true
    // }

    if (el1.innerHTML == elements[1] && el2.innerHTML == elements[1] &&  el3.innerHTML == elements[1]) {
        console.log('valid')
        valid = true
    }

    if (el1.innerHTML == elements[0] && el2.innerHTML == elements[0] &&  el3.innerHTML == elements[0]) {
        console.log('valid')
        valid = true
    }

    return valid
}

const cells = document.querySelectorAll('.griditem')

cells.forEach(griditem => {
    // console.log(cell)
    griditem.addEventListener('click', (e) => {
        // console.log(e.target.innerHTML)
        if(!winner){
            if(e.target.innerHTML == '') {

                if(winner == false){
                    e.target.innerHTML = elements[current_player]
                }
                else{
                    e.target.innerHTML = null
                }

                if(validationLine(a1, a2, a3) || validationLine(b1, b2, b3) || validationLine(c1, c2, c3) || validationLine(a1, b1, c1) || validationLine(a2, b2, c2) || validationLine(a3, b3, c3) || validationLine(a1, b2, c3) ||  validationLine(a3, b2, c1)) {   
                    console.log('winner!')
                    winner = true
                }

                if(winner) {
                    let msg = document.querySelector('#msg')
                    msg.innerHTML = 'The winner is Player ' + (current_player+1) 
                    msg.style.display="block";
                    
                    let score = parseInt(document.querySelector('#player'+(current_player+1)+' .score').innerHTML)
                    score++
                    document.querySelector('#player'+(current_player+1)+' .score').innerHTML = score

        
                }

                // Switch of players
                if(winner==false) {
                    if(current_player == 0) {
                        current_player = 1
                    } else {
                        current_player = 0
                    }
                }
            }
        }else {
            alert ('Someone already played here')
        }
        
    })
})

function reset() {
    // let msg = document.querySelector('#msg')
    location.reload();
    document.getElementById('a1').value = '';
    document.getElementById("a2").value = '';
    document.getElementById("a3").value = '';
    document.getElementById("b1").value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("c1").value = '';
    document.getElementById("c2").value = '';
    document.getElementById("c3").value = '';
    // msg.style.display="none";
 
}
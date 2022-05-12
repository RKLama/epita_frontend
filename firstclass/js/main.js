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
const elements = ['X','O']

const validationLine = (el1, el2, el3) => {
    let valid = false
    console.log(el1.innerHTML)

    if (el1.innerHTML != '' && el2.innerHTML != '' && el3.innerHTML != '') {
        valid = true
    }

    return valid
}

const cells = document.querySelectorAll('.griditem')

cells.forEach(griditem => {
    // console.log(cell)
    griditem.addEventListener('click', (e) => {
        console.log(e.target.innerHTML)
        if(e.target.innerHTML == '') {
            e.target.innerHTML = elements[current_player]

            if(validationLine(a1, a2, a3)) {
                console.log('winner!')
            }

            if(current_player == 0) {
                current_player = 1
            } else {
                current_player = 0
            }
        }else {
            alert ('Someone already play here')
        }
        
    })
})
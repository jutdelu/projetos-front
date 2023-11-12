//contador inicial
var count = 0

// seleciona valor e btn
const value = document.getElementById('value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const style = e.currentTarget.classList
        if(style.contains('subtrai')){
            count--
        }
        else if(style.contains('soma')){
            count++
        }
        else(
            count = 0
        )

        if(count > 0) {
            value.style.color = "#00FF00"
        }

        else if(count < 0){
            value.style.color = "#FF0000"
        }
        
        else{
            value.style.color = "#333"
        }

        value.textContent = count
    }
)

})
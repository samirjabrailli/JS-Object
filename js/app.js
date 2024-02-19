const nameEl = document.querySelector("#name")
const ageEl = document.querySelector("#age")
const list = document.querySelector("#list")
let arr = []
let x = 0


function addPerson() {
        arr.push(
            {
                id: x,
                name : nameEl.value,
                age : ageEl.value
            }
        )

        render()
        x++

        
    }

    function render(){
        list.innerHTML = ""
        for (let i = 0; i < arr.length; i++) {
            list.innerHTML += `<li><div>${arr[i].name}</div><div>${arr[i].age}</div> <button onclick = "obyektsil(${arr[i].id})">Sil</button </li>`
            
        }

    }

    function obyektsil(id){

        for(let i = 0; i<arr.length; i++){

            if(id == arr[i].id){
            
                render()
            }

        }

    }


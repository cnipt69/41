const form = document.querySelector(".todo-form")
const list = document.querySelector(".todo-list")

let todos = []

form.onsubmit = (e) => {
    e.preventDefault()

    let input = form.querySelector("input")

    todos.push(
        {
            name: input.value,
            time: new Date().toLocaleTimeString([], { timeStyle: 'short' })
        }
    )

    console.log(todos);
    render()
}

function addCard(item, i) {
    const card = document.createElement("div")
    card.classList.add("todo-card")

    card.innerHTML = `
        <div class="todo-header">
            <span>${item.name}</span>
            <button class="edit" onclick="editCard(${i})">✏️</button>
            <button class="delete" onclick="removeCard(${i})">✖</button>
        </div>
        <span class="time">${item.time}</span>
    `

    list.append(card)
}

function render() {
    const htmlCards = list.querySelectorAll(".todo-card")
    if (todos.length === 0 && htmlCards.length > 0) {
        
        htmlCards.forEach((card) => {
            let name = card.querySelector(".todo-header span").innerText
            let time = card.querySelector(".time").innerText
            
            todos.push({
                name: name,
                time: time
            })
        })
    }

    list.innerHTML = ""
    todos.forEach((todo, i) => addCard(todo, i))
}

render()


function removeCard(i) {
    todos.splice(i, 1)
    render()
}

function editCard(i) {
    let newName = prompt("Измените: ", todos[i].name)
    
    if (newName !== null && newName.trim() !== "") {
        todos[i].name = newName.trim()
        render()
    }
}
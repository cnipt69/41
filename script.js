const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const grid = document.getElementById('todo-grid');

addBtn.onclick = () => {
    const text = input.value.trim();
    if (text === '') return;

    const cardHTML = `
        <div class="card">
            <div class="card-text">${text}</div>
            <div class="card-time">18:44</div>
            <button class="del-btn">x</button>
        </div>
    `;

    grid.innerHTML += cardHTML; 
    input.value = null;        
};

grid.onclick = (e) => {
    if (e.target.classList.contains('del-btn')) {
        e.target.parentElement.remove(); 
    }
};
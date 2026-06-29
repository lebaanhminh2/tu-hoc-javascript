console.log("Video 70");

const saveBtn = document.getElementById("btnSave");
const inputTodo = document.getElementById("name");

if (saveBtn) {
    saveBtn.addEventListener("click", () => {
        const myTodo = {
            id: Math.floor(Math.random() * 1000000),
            name: inputTodo.value,
        };

        // Luu array cu tu localStorage
        const currentTodoString = localStorage.getItem("todo");

        // Da ton tai key todo trong localStorage
        if (currentTodoString) {
            // Convert from string to object/array
            const currentTodo = JSON.parse(currentTodoString);

            // Push them todo moi vao array cu
            currentTodo.push(myTodo);

            // Luu day vua roi vao localStorage
            localStorage.setItem("todo", JSON.stringify(currentTodo));
        } else {
            // Chua ton tai key todo thi tao mot localStorage moi
            // Key: todo
            // Value: [myTodo]
            // myTodo la mot object, sau nay can luu nhieu object vao 1 array
            localStorage.setItem("todo", JSON.stringify([myTodo]));
        }

        window.location.href = "video70.html";
    });
}

const generateTodoTable = () => {
    // Lay danh sach todo dang luu trong localStorage
    const todoListString = localStorage.getItem("todo");

    // Lay phan tbody cua bang todoList de chen du lieu vao
    const tbody = document.querySelector("#todoList tbody");

    // Neu trang hien tai khong co bang todoList thi dung ham
    if (!tbody) {
        return;
    }

    if (todoListString) {
        // Convert from string to array
        const todoList = JSON.parse(todoListString);

        // Neu todoList ton tai va co phan tu thi render ra table
        if (todoList && todoList.length) {
            todoList.forEach((todo) => {
                tbody.innerHTML += `
                    <tr>
                        <td>${todo.id}</td>
                        <td>${todo.name}</td>
                        <td>
                            <button 
                                data-id="${todo.id}" 
                                class="btn-delete"
                            >
                            Xóa
                            </button>
                        </td>
                    </tr>
                `;
            });
        }
    }
};

generateTodoTable();

const deleteBtns = document.querySelectorAll(".btn-delete");
if (deleteBtns) {
    deleteBtns.forEach((btn, index) => {
        console.log(btn, index)
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            handleDeleteTodo(id)
        })

    })
}

const handleDeleteTodo = (id) => {
    const todoListString = localStorage.getItem("todo");
    if (todoListString) {
        const todoList = JSON.parse(todoListString);
        console.log(todoList, id)
        const newTodo = todoList.filter((todo, index) => todo.id + "" !== id);

        localStorage.setItem("todo", JSON.stringify(newTodo));
        window.location.reload();
    }
}


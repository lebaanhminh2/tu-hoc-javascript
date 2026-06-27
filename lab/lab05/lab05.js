console.log("lab 05");

const fetchData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();

    return data;
};

const renderUsers = async () => {
    const data = await fetchData();
    const tbody = document.querySelector("#users tbody");

    if (data && data.length) {
        data.forEach((user) => {
            tbody.innerHTML += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                </tr>
            `;
        });
    }
};

renderUsers();

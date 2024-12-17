document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const age = document.getElementById("age").value;
    const nationality = document.getElementById("nationality").value;
    const correo = document.getElementById("correo").value;

    if (age < 18) {
        alert("Debe ser mayor de 18 años para inscribirse.");
        return;
    }
    if (nationality !== "Peruano") {
        alert("Solo los peruanos pueden inscribirse en esta conferencia.");
        return;
    }

    const tableBody = document.getElementById("tableBody");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${fullName}</td>
        <td>${age}</td>
        <td>${nationality}</td>
        <td>${correo}</td>
    `;

    tableBody.appendChild(newRow);
    document.getElementById("confirmationTable").style.display = "block";
    document.getElementById("registrationForm").reset();
});

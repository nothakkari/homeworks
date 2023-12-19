document.getElementById("checkTimeButton").addEventListener("click", function() {
    const timeInput = document.getElementById("timeInput").value;
    const regex = /^([01]\d|2[0-3]):[0-5]\d$/;

    if (regex.test(timeInput)) {
        alert("Верный формат времени");
    } else {
        alert("Неверный формат времени");
    }
});
document.getElementById("checkPhoneNumberButton").addEventListener("click", function() {
    const phoneNumberInput = document.getElementById("phoneNumberInput").value;
    const regex = /^\(\+994\)\s?(50|51|55|70|77)\s?\d{1,2}(\s?\d{2}){3}$/;

    if (regex.test(phoneNumberInput)) {
        alert("Номер верен");
    } else {
        alert("Неверный номер");
    }
});
document.getElementById("passwordInput").addEventListener("input", function() {
    const password = this.value;

    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%&_])(?=.*\d)(?=.*[!?.,])[A-Za-z\d@#$%&_!?.,]{8,16}$/;

    const isPasswordValid = regex.test(password);

    console.log(isPasswordValid);
});
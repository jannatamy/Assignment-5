

document.getElementById("login-btn").addEventListener("click", function() {
    const numberInput = document.getElementById("input-nam");
    const userName = numberInput.value;
    console.log(userName);

    const inputPass = document.getElementById("input-pass");
    const pass = inputPass.value;
    console.log(pass)

    if(userName=="admin" && pass=="admin123"){
        alert("Login Success");
    }
    else{
        alert("Login Failed");
        return;
    }
});
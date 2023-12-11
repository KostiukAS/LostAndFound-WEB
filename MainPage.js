let mainForm = document.getElementById("Main-form");

mainForm.addEventListener("submit", (e) => {
    e.preventDefault();
});

function sendData() {
    console.log("Work");
    document.getElementById("tel-incorrect").style.display = "none";
    document.getElementById("form-sent").style.display = "none";

    let tel = document.getElementById("tel-input");
    let telArr = String(tel.value).split('');

    if(telArr.length == 0)
    {
        document.getElementById("tel-incorrect").style.display = "block";
        return;
    }

    for(let i = 0; i < telArr.length; i++)
    {
        console.log(telArr[i]);
        if(telArr[i] != '+' && telArr[i] != '-' && telArr[i] != '(' && telArr[i] != ')' && isNaN(parseInt(telArr[i])))
        {
            document.getElementById("tel-incorrect").style.display = "block";
            return;
        }
    }

    document.getElementById("form-sent").style.display = "block";

    document.getElementById("surname-input").value = "";
    document.getElementById("name-input").value = "";
    document.getElementById("pname-input").value = "";
    document.getElementById("tel-input").value = "";
    document.getElementById("adress-input").value = "";
    document.getElementById("findingName-input").value = "";
    document.getElementById("findingInfo-input").value = "";
};

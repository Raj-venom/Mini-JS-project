var password = document.querySelector('#input-box');
var numberAllowed = document.querySelector('#is-num');
var charAllowed = document.querySelector('#is-char');
var length = document.querySelector('#pass-range');
var len = document.querySelector('#len');

const passGenerator = () => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed.checked) {
        str += "01234567890123456789"
    };

    if (charAllowed.checked) {
        str += "!@#$%^&*-_+=[]{}~`!@#$%^&*-_+=[]{}~`"

    }
    for (let i = 1; i <= length.value; i++) {
        var randomVal = Math.floor(Math.random() * str.length);
        pass += str.charAt(randomVal)
    }
    password.value = pass
    len.innerHTML = `Length: ${length.value}`
}

const copy = () => {
    window.navigator.clipboard.writeText(password.value);

    // selected effect
    password.select();

    // Set the selection range from start to end
    password.setSelectionRange(0, password.value.length);
};

passGenerator()




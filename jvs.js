const password = document.querySelector('#password');
const confirm = document.querySelector('#confirm');
const notMatch = document.createElement('div');
const passContainer = document.querySelector('#passContainer');
notMatch.id = "notMatch"
notMatch.innerText = "* Password do not match";
notMatch.style.color = 'red';
notMatch.style.fontSize = '12px'

password.addEventListener('keyup', checkValues)
confirm.addEventListener('keyup', checkValues)

function checkValues() {
    if (confirm.value === password.value) {
        password.setCustomValidity('');
        confirm.setCustomValidity('');
        removeNotMacth();
    } else if (confirm.value) {
        password.setCustomValidity(' ');
        confirm.setCustomValidity(' ');
        passContainer.append(notMatch)
    }
}

function removeNotMacth() {
    test = document.querySelector('#notMatch');
    if (test)
        test.remove();
}
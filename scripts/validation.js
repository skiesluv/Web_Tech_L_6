const firstnameEl = document.querySelector('#firstname');
const surnameEl = document.querySelector('#surname');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const dateOfBirth = document.querySelector('#dateofbirth')
const form = document.querySelector('#signup');
const checkd = document.getElementById('checkBoxValid')
const btn = document.getElementById('singupbtn')
const texta = document.getElementById('textarea')
const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
const fileInput = document.getElementById('myFile');

// function allData() {
//     // let chd = document.querySelectorAll('input[type=checkbox]:checked');
//     // chd.each(function () {
//     //     chd.parentElement.textContent.trim();
//     // })
//     alert(`First name: ${firstnameEl.value} \nSurname: ${surnameEl.value} \nEmail: ${emailEl.value} \nPassword: ${passwordEl.value} \nDate of birth: ${dateOfBirth.value} \nLanguages you know: ${checkboxes.values} \nInterests: ${texta.value} \nYour file name: ${fileInput.value}`)
// }

const checkName = () => {

    let valid = false;

    const firstname = firstnameEl.value.trim();

    if (!isRequired(firstname)) {
        showError(firstnameEl, 'First name cannot be blank.');
    } else if (!isNameOrSurnameValid(firstname)) {
        showError(firstnameEl, `Incorrect first name.`)
    } else {
        showSuccess(firstnameEl);
        valid = true;
    }
    return valid;
};

const checkSurname = () => {

    let valid = false;

    const surname = surnameEl.value.trim();

    if (!isRequired(surname)) {
        showError(surnameEl, 'Surname cannot be blank.');
    } else if (!isNameOrSurnameValid(surname)) {
        showError(surnameEl, `Incorrect surname.`)
    } else {
        showSuccess(surnameEl);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;
    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 6 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const checkDate = () => {
    let valid = false;
    const date = dateOfBirth.value.trim();

    if (!isRequired(date)) {
        showError(dateOfBirth, 'Date of birth cannot be blank.');
    }
    else if (!isDateValid(date)) {
        showError(dateOfBirth, 'Date of birth is not valid.')
    }
    else {
        showSuccess(dateOfBirth);
        valid = true;
    }
    return valid;
}

const checkBoxChecked = () => {
    let valid = false;
    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    if (!checkBoxAtLeast3(checkboxes)) {
        showError(checkd, 'You must know at least 3 languages.')
    }
    else {
        showSuccess(checkd);
        valid = true;
    }
    return valid;
}

const checkFile = () => {
    let valid = false
    const file = fileInput.value;

    if (!isRequired(file)) {
        showError(fileInput, 'File cannot be blank');
    }
    else if (!fileValidation(fileInput)) {
        showError(fileInput, 'Extension of your file is wrong')
    }
    else {
        showSuccess(fileInput);
        valid = true;
    }
    return valid;
}

const checkConfirmPassword = () => {
    let valid = false;

    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'The password does not match');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};

function testName(name) {
    const myArray = name.split(" ");
    if (name.match(/\'/g)) {
        for (i = 0; i <= myArray.length - 1; i++){
            if (myArray[i].match(/\'/g)) {
                let x = myArray[i].match(/\'/g).length;
                let y = myArray[i].split('');
                if (x <= 1 && !y[0].match(/\'/g) && !y[y.length - 1].match(/\'/g)) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    }
    else {
        return true
    }
}

const checkBoxAtLeast3 = (checkboxes) => {
    if (checkboxes.length < 3) {
        return false;
    }
    else {
        return true;
    }
}

const isNameOrSurnameValid = (name) => {
    const re = /^([A-Za-z\']{3,50}|([A-Za-z\']+\s[A-Za-z\']+)|([A-Za-z\']+\s[A-Za-z\']+\s[A-Za-z\']+))$/;
    if (re.test(name) === true) {
        if (testName(name) === true) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

const fileValidation = (fileInput) => {         
    let filePath = fileInput.value;
        
    let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i; 
    if (!allowedExtensions.exec(filePath)) {
        fileInput.value = '';
        return false;
    } 
    else 
    {
        return true;
    }
}

function testEmail(email) {
    const myArray = email.split("@");
    if (myArray[0].match(/\./g)) {
        let x = myArray[0].match(/\./g).length;
        let y = myArray[0].split('');
        if (x <= 1 && !y[0].match(/\./g) && !y[y.length - 1].match(/\./g)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return true;
    }
}

const isEmailValid = (email) => {
    // const re = /^(([a-zA-Z0-9].?){2,})+@([a-zA-Z0-9-]{2,})+(?:\.[a-zA-Z0-9-]{2,4}){1,8}$/;
    const re = /^(([a-zA-Z0-9\.]){2,})+(@[a-zA-Z0-9]{2,5})+(?:\.[a-zA-Z0-9]{2,4}){1,8}$/;
    if (re.test(email) === true) {
        if (testEmail(email) === true) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");
    return re.test(password);
};

function checkExistingDate(year, month, day){
    let months31 = [1,3,5,7,8,10,12];
    let months30 = [4,6,9,11];
    let months28 = [2];

    let isLeap = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);

    let valid = (months31.indexOf(month) !== -1 && day <= 31) || (months30.indexOf(month) !== -1 && day <= 30) ||    (months28.indexOf(month) !== -1 && day <= 28) || (months28.indexOf(month) !== -1 && day <= 29 && isLeap);

    return valid;
}

const isDateValid = (date) => {
    const re = /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/;
    if (re.test(date)) {
        let dateArr = date.split('/');
        let year = parseInt(dateArr[2]);
        let month  = parseInt(dateArr[1]);
        let day = parseInt(dateArr[0]);
        if (checkExistingDate(year, month, day)) {
            return true;
        }
        else {
            return false;
        }
    } 
}

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    e.preventDefault();

    let
        isNameValid = checkName(),
        isSurnameValid = checkSurname(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword(),
        isDateOfBirthValid = checkDate(),
        isFileExtValid = checkFile(),
        isCheckBoxValid = checkBoxChecked();

    let isFormValid = isEmailValid &&
        isPasswordValid &&
        isNameValid &&
        isSurnameValid &&
        isConfirmPasswordValid &&
        isDateOfBirthValid &&
        isFileExtValid &&
        isCheckBoxValid;

    if (isFormValid) {
        // allData()
        return true;
    }
    else {
        return false;
    }
});

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'firstname':
            checkName();
            break;
        case 'surname':
            checkSurname();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
        case 'dateofbirth':
            checkDate();
            break;
        case 'myFile':
            checkFile();
            break;
        case 'checkd':
            checkBoxChecked();
    }
}));
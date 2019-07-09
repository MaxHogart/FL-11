let enteredEmail = prompt('Please enter your email', ''),
    minSymbols = 5,
    usersEmail = [{
            email: 'user@gmail.com',
            password: 'UserPass'
        },
        {
            email: 'admin@gmail.com',
            password: 'AdminPass'
        }
    ],
    validEmail = false,
    rightPassword,
    enteredPassword,
    changePassword;

for (let i = 0; i < usersEmail.length; i++) {
    if (enteredEmail === usersEmail[i].email) {
        validEmail = true;
        rightPassword = usersEmail[i].password;
    }
}
if (enteredEmail) {
    if (enteredEmail.length < minSymbols) {
        alert(`I don't know any emails having name length less than 6 symbols`);
    } else if (validEmail) {
        enteredPassword = prompt('Please enter your password', '');
        if (!enteredPassword) {
            alert('Canseled')
            } else if(enteredPassword === rightPassword ) {                
                changePassword = confirm('Do you want to change your password?');
            if (changePassword) {
                let oldPassword = prompt('Please enter your old password', '');
                if (oldPassword === rightPassword) {
                    let newPassword = prompt('Please enter your new password', '');
                    if (newPassword.length < minSymbols) {
                        alert('It’s too short password. Sorry.')
                    } else {
                        let secondNewPassword = prompt('Please enter your new password again', '');
                        if (secondNewPassword === newPassword) {
                            alert('You have successfully changed your password.');
                        } else {
                            alert('You wrote the wrong password.');
                        }
                    }
                } else if (oldPassword) {
                    alert('Wrong password');
                } else {
                    alert('Canceled');
                }
            } else {
                alert('You have failed the change.')
            }
        } else {
            alert('Wrong password')
        }
    } else if (enteredEmail.length > minSymbols) {
        alert('I don’t know you')
    }
} else {
    alert('Canceled');
}
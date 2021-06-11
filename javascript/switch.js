let myPassword, myAcc;
myAcc = prompt('Password: ', myPassword);


switch (myAcc) {
    case 'Helena':
        alert('Wrond Password.');
        break;
    case 'Helena67':
        alert('Wrong Password. Did you forget your password?');
        break;
    case '0607helena':
        alert('Attempt too much. Try again later.');
        break;
    case 'Helena0607':
        alert('Welcome to your account.');
        break;
    default:
        alert('Try Again');
        break;
}
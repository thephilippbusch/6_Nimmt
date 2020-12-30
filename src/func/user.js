const newUser = (email, username, password) => {
    const userdata = {
        "email": email,
        "username": username,
        "password": password
    };
    
    console.log(userdata.email + ", " + userdata.username + ", " + userdata.password);
}

const checkUser = (email, password) => {
    const logindata = {
        "email": email,
        "password": password
    }

    console.log(logindata.email + ", " + logindata.password);
}

export { newUser, checkUser };
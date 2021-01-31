const CONSTANTS = {
    APP_URL: 'http://127.0.0.1:5501/',
    API_URL: 'http://localhost:5000/api/',
    LOCAL_STORAGE_KEY: 'NODE_JWT_APP'
}
function isAuthorized() {
    const user = JSON.parse(localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY));
    if (!user) {
        location.href = `${CONSTANTS.APP_URL}login.html`;

    }
    else {
        $.ajax({
            type: 'POST',
            url: `${CONSTANTS.API_URL}accounts/authorized`,
            contentType: 'application/json',
            headers: {
                'Authorization': `Bearer ${user.token}`
            },
            success: () => {
                $('body').removeClass('d-none');
            },
            error: () => {
                console.log(error)
                if (error.status === 401) {
                    //  console.log("is authorized ki api mein error hai")
                 location.href = `${CONSTANTS.APP_URL}login.html`;
                } else {
                    alert('Something when wrong');
                }
            }
        })
    }
}
function logout() {
    localStorage.clear();
    location.href = `${CONSTANTS.APP_URL}login.html`;
}
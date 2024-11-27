const URL = "http://csc307-cjbaece4hebag3hj.westus3-01.azurewebsites.net/t"
//const URL = "https://localhost:8001"
function FetchPostUser(account) {
    const promise = fetch(
        `${URL}/adduser/`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(account),
        }
    )
    //console.log(`function postUser(account) account = ${JSON.stringify(account)}`);
    //console.log(`postUser: ${account}`)
    return promise
}

function FetchFindUserName(username) {
    const promise = fetch(
        `${URL}/findusername?username=${username}`
    )
    return promise
}
function FindAccount(username, password) {
    //console.log(username, password);
    const promise = fetch(
        `${URL}/findaccount?username=${username}&password=${password}`
    )
    return promise
}
export { FetchFindUserName, FetchPostUser, FindAccount }

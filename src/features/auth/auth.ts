interface AuthInterface {
    username: string;
    password: string;
}

export async function auth({username, password} : AuthInterface) : Promise<string> {

    const promis = new Promise<string> ((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "admin"){
                resolve("here_should_be_token");
            } else {
                reject(new Error(username === "admin" ? "Неверный пароль" : "Неверный логин"));
            }
        
        }, 2000);
    });
    
    return promis;
    
}

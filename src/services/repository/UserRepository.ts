class UserRepository {

    http: String = "http://51.38.128.202:100/app/login";

    async login(login: String, pass: String): Promise<User> {
        // @ts-ignore
        let user: User =
            await fetch('http://51.38.128.202:100/app/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nick: login,
                    password: pass,
                }),
            })
                .then((response) => response.json())
                .then((responseJson: User) => {
                    return responseJson;
                })
                .catch((error) => {
                    alert('Invalid user or password');
                    console.log(error)
                });

        return user;
    }
}

let repository = new UserRepository();

export default repository;

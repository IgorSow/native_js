class UserRepository {

    http: String = "http://51.38.128.202:100/app/login";

    async post(login: String, pass: String) {
        fetch('http://51.38.128.202:100/app/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nick: login,
                password: pass,
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                alert(JSON.stringify(responseJson))

            })
            .catch((error) => {
                console.error(error);
            });
    }
}

let repository = new UserRepository();

export default repository;

import {MealDto} from "../objects/MealDto";

    class MealRepository {

    http: String = "http://51.38.128.202:100/app/login";

    async getById(id: number): Promise<MealDto> {
        // @ts-ignore
        let meal: MealDto =
            await fetch('http://51.38.128.202:100/app/meals/' + id, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((responseJson: Array<MealDto>) => {
                    return responseJson.pop();
                })
                .catch((error) => {
                    alert('Invalid user or password');
                    console.log(error)
                });

        return meal;
    }
}

let repository = new MealRepository();

export default repository;

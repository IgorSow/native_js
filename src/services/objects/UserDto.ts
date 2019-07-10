class UserDto {
    email: string;
    favouritesMealsSetId: number[];
    idUser: number;
    nick: string;
    userType: UserType;


    constructor(email: string, favouritesMealsSetId: number[], idUser: number, nick: string, userType: UserType) {
        this.email = email;
        this.favouritesMealsSetId = favouritesMealsSetId;
        this.idUser = idUser;
        this.nick = nick;
        this.userType = userType;
    }
}

enum UserType {
    ADMIN = "ADMIN",
}

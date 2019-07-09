class User {
    email: string;
    favouritesMealsSetId: number[];
    idUser: number;
    nick: string;
    userType: UserType
}

enum UserType {
    ADMIN = "ADMIN"
}

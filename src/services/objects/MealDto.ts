// @ts-ignore
class MealDto {
    idMeal: number;
    language: Language;
    title: string;
    shortDescription: string;
    amountCalories: number;
    authorReceipt: string;
    idPhoto: number;
    isPublic: boolean;
    createdDate: Date;
    receiptDTO: ReceiptDTO;
    typeMeal: TypeMealDTO[];
    creatorMeal: UserDto;
    products: ProductUnitDTO[];
}
// @ts-ignore
enum Language {
    PL = "PL",
    EN = "EN"
}
// @ts-ignore
class ReceiptDTO {
    idReceipt: number;
    title: string;
    description: string;
    prepareTime: number;
    steps: StepDTO[];

}
// @ts-ignore
class TypeMealDTO {
    idTypeMeal: number;
    mealTime: MealTime;
}
// @ts-ignore
enum MealTime {
    BREAKFAST = "BREAKFAST",
    LUNCH = "LUNCH",
    DINNER = "DINNER",
    SNACK = "SNACK",
    SUPPER = "SUPPER",
    DESSERT = "DESSERT",
}
// @ts-ignore
class StepDTO {
    idStep: number;
    number: number;
    header: string;
}

class ProductUnitDTO {
    name: string;
    amount: number;
    unit: string;
    specialUnit: string;
    category: ProductCategory;
}

enum ProductCategory {

    MEAT ="MEAT",
    VEGETABLE="VEGETABLE",
    FRUIT="FRUIT",
    BAKING="BAKING",
    GRAINS="GRAINS",
    DAIRY="DAIRY",
    DRINK="DRINK",
    SPICE="SPICE",
    FISH="FISH",
    OTHER="OTHER",
    UNKNOWN="UNKNOWN"

}

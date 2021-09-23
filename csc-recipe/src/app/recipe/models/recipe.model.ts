export class Recipe {
    id: number = 0;
    image: String = "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg";
    title: String = "Recipe Name";
    favoriteButtons: String = "../assets/favorite-unchecked.png";
    favorite: boolean = false;
    category: String = "Catgegorical description";
    description: String = "Descriptive element. describing non existant recipe.";

    constructor(id: number){
        this.id = id;
    }
}

export class Recipe {
    id: number = 0;
    image: String = "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg";
    title: String = "Recipe Name";
    favoriteButtons: String = "../assets/favorite-unchecked.png";
    favorite: boolean = false;
    category: String = "Catgegorical description";
    description: String = "Descriptive element. describing non existant recipe.";
    ingrediants: String[] = ["ingrediant 1", "ingrediant 2", "ingrediant 3", "ingrediant 4", "ingrediant 5", "ingrediant 6", "ingrediant 7", "ingrediant 8"];
    instructions: String[] = ["instruction 1", "instruction 2", "instruction 3", "instruction 4"];
    constructor(id: number){
        this.id = id;
    }
}

import {App, TerraformOutput, TerraformStack} from "cdktf";
import {dataHashicupsIngredients} from "@cdktf/provider-hashicups";
import {HashicupsProvider} from "@cdktf/provider-hashicups/lib/provider";
import {Order} from "@cdktf/provider-hashicups/lib/order";
import {Construct} from "constructs";

export class MyStack extends TerraformStack {
    constructor(scope: Construct, name: string) {
        super(scope, name);

        new HashicupsProvider(this, "hashicups", {
            password: "test123",
            username: "education",
        });

        const hashicupsOrderEdu: Order = new Order(this, "edu", {
            items: [
                {
                    coffee: {id: 3},
                    quantity: 2,
                },
                {
                    coffee: {id: 2},
                    quantity: 2,
                },
            ],
        });

        const dataHashicupsIngredientsFirstCoffee =
            new dataHashicupsIngredients.DataHashicupsIngredients(
                this,
                "first_coffee",
                {
                    coffeeId: hashicupsOrderEdu.items.get(0).coffee.id
                }
            );

        new TerraformOutput(this, "edu_order", {
            value: hashicupsOrderEdu,
        });

        new TerraformOutput(this, "first_coffee_ingredients", {
            value: dataHashicupsIngredientsFirstCoffee,
        });

    }
}

const app = new App();
new MyStack(app, "iac");
app.synth();




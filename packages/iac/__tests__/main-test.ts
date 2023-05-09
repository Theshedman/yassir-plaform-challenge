// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import "cdktf/lib/testing/adapters/jest"; // Load types for expect matchers
import {App, TerraformOutput} from "cdktf";
import {Order} from "@cdktf/provider-hashicups/lib/order";
import {MyStack} from "../main";

describe("MyStack", (): void => {
    describe('MyStack', (): void => {
        let app: App;
        let stack: MyStack;

        beforeAll((): void => {
            app = new App();
            stack = new MyStack(app, 'test-stack');
        });

        it('creates a hashicups provider', (): void => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const provider = stack.node.findChild('hashicups')!;
            expect(provider).toBeDefined();
        });

        it('creates an order', (): void => {
            const order = stack.node.findChild('edu') as Order;
            const orderItems: OrderItems[] = order.items.internalValue as OrderItems[];
            expect(order).toBeDefined();
            expect(orderItems).toBeDefined();
            expect(orderItems[0].coffee.id).toEqual(3);
            expect(orderItems[0].quantity).toEqual(2);
            expect(orderItems[1].coffee.id).toEqual(2);
            expect(orderItems[1].quantity).toEqual(2);
        });

        it('outputs the order and ingredients', (): void => {
            const order = stack.node.findChild('edu') as Order;
            const orderItems: OrderItems[] = order.items.internalValue as OrderItems[];
            const output = new TerraformOutput(stack, "edu_order_output", {
                value: orderItems,
            });

            expect(output).toBeDefined();
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            expect(output.value.length).toBeGreaterThanOrEqual(2);
        });
    })
});

interface OrderItems {
    coffee: { id: number };
    quantity: number;
}

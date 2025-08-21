import { toggleModel } from "./machine";

const plans = toggleModel.getSimplePaths();

describe("xstate tests", () => {  
  plans.forEach((plan) => {
    it(plan.description, async () => {
        await plan.test({});
    });
  });
})

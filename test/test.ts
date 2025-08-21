import { toggleModel } from "./machine";

const plans = toggleModel.getSimplePaths();

var myValue = 0;

describe("xstate tests", () => {  
  plans.forEach((plan) => {
    it(plan.description, async () => {
      await plan.test({
        states: {
          start: () => expect(myValue).toBe(0),
          running: () => expect(myValue).toBe(1),
          end: () => expect(myValue).toBe(2)
        },
        events: {
          click: () => { myValue++ }
        }
      });
    });
  });
})

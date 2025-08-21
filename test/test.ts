import { demoModel } from "./machine";

const plans = demoModel.getSimplePaths();



describe("demo", () => {  
  plans.forEach((plan) => {
    it(plan.description, async () => {
      var myValue = 0;
      
      await plan.test({
        states: {
          start: () => expect(myValue).toBe(0),
          running: () => expect(myValue).toBe(1),
          end: () => expect(myValue).toBe(2)
        },
        events: {
          click: () => { myValue++ },
          exit: () => { myValue+=2 }
        }
      });
    });
  });
})

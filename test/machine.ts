import { createTestModel } from '@xstate/graph';
import { createMachine } from 'xstate';

var myValue = false;

export const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'start',
  states: {
    start: {
      on: {
        CLICK: 'end',
      },
      meta: {
        test: () => !myValue 
      }
    },
    end: {
      meta: {
        test: () => myValue
      }
    },
  },
});

export const toggleModel = createTestModel(toggleMachine);

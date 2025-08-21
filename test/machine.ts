import { createTestModel } from '@xstate/graph';
import { createMachine } from 'xstate';

export const toggleMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2UoBswDpbIEMAnZAYgGNMBLcgawG0AGAXUVAAdVYrkrUA7NiAAeiALQAmAKw4AbFIAsigIyNlU2dIA0IAJ6IAHAGYcEhQE5zBi4yMSA7LPNSAvi51oM2HEQCu-fip+KApqOiZWJBBObl4BIVEECU0cZXtzWQN7KR19BGNTCysbO0dnN3cQflQIOCFPLDAhGJ4+QSjEyUZGOXNlCWs0jKycvXEZKW61SYz7CSNGBXs3D3RGvEISZq5W+I7xdQle-sH0zOzcwxMzS2tzWwcnV0qG7z8AoKht2LaExGVlLIcIx5LJ7EYDAN+qM8gUbsV7qUnisQK9cGB+BBvrt2qBEhCgeYIcYJCD1Ap+kZLvllDhLLcSo9yhUgA */
  id: 'toggle',
  initial: 'start',
  states: {
    start: {
      on: {
        click: 'running',
      },
    },
    running: {
      on: {
        click: 'end'
      }
    },
    end: {type: "final"},
  },
});

export const toggleModel = createTestModel(toggleMachine);

import { createTestModel } from '@xstate/graph';
import { createMachine } from 'xstate';

export const demoMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QTAWwPYFkCGBjAFgJYB2YAdLAC7YBOlAxLgDaG4DWA2gAwC6ioAB3SxClQumL8QAD0QBGAMxcyANgCsKgExqANCACeiABxyyagL7m9KDDgIlyVWgzDTR3PkhBCRYiVNkERWV1LV0DRE0uTTJtS2s0LDwiUjIaAFdiYhIoRhZ2DykfUXFJL0CFBQB2MkVNE209QwQTM0srEGJ0FHgvGyT7UiLhEv9yxABaFSbJlXiQfrsUx2o6Yd9SgMQAFk0ZlqMybbkVU7PzlSr5xeSHNMzs4ih10bLQQM1NGsq1AE5q8LNIyaa6JJZ3MDECAvPxvGQ7SpkBqA4yHY4XDFXdpAA */
  id: 'demoMachine',
  initial: 'start',
  states: {
    start: {
      on: {
        click: 'running',
        exit: "end"
      },
    },

    running: {
      on: {
        click: 'end'
      }
    },

    end: {type: "final"}
  },
});

export const demoModel = createTestModel(demoMachine);

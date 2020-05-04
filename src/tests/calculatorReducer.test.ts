import calculatorReducer from "../calculatorReducer";
import { Operand, Action } from "../types/Calculator";

const initialBuffer = "";
const initialStack: Array<Operand> = [];

const intialState = { buffer: initialBuffer, stack: initialStack };

test("when a digit is pressed, it appends to the buffer", () => {
  const action: Action = { type: "digitPressed", payload: 1 };
  const result = calculatorReducer(intialState, action);
  const expectedState = { buffer: "1", stack: [] };

  expect(result).toStrictEqual(expectedState);
});

export {};

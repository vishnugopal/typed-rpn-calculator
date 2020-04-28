import { Stack, Result, Operand, Operator } from "./types/Calculator";

export interface State {
  stack: Stack;
  result: Result;
}

type Action = OperandPressAction | OperatorPressAction;

interface OperandPressAction {
  type: "operandPress";
  payload: {
    operand: Operand;
  };
}

interface OperatorPressAction {
  type: "operatorPress";
  payload: {
    operator: Operator;
  };
}

const calculatorReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "operandPress":
      const operand = parseInt(action.payload.operand);
      return { stack: [...state.stack, operand], result: operand };
    case "operatorPress":
      const stackCopy = [...state.stack];
      const operator = action.payload.operator;

      const operand1 = stackCopy.pop();
      const operand2 = stackCopy.pop();

      let result;
      if (operand1 && operand2) {
        result = operator === "+" ? operand1 + operand2 : operand1 - operand2;
      } else {
        result = 0;
      }
      return { stack: stackCopy, result };
  }
};

export default calculatorReducer;

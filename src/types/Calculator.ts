export type Buffer = string;
export type Operand = number;
export type Operator = "+" | "-";
export type Stack = Array<Operand>;

export interface State {
  buffer: Buffer;
  stack: Stack;
}

export interface DigitPressed {
  type: "digitPressed";
  payload: number;
}

export interface OperatorPressed {
  type: "operatorPressed";
  payload: Operator;
}

export interface EnterPressed {
  type: "enterPressed";
  payload: undefined;
}

export type Action = DigitPressed | OperatorPressed | EnterPressed;

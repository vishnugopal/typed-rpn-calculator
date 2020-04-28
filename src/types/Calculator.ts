export type Digit = Operand | Operator;
export type Operand = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
export type Operator = "+" | "-";

export type Stack = Array<number>;
export type Result = number;

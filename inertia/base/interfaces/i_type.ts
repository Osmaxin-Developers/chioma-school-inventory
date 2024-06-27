export interface Test {
  testing: string
}

export type AnyFunctionType = (...values: any[]) => any
export type AnyObjectType = Record<string | number, any>

export interface ServerValidationError<T extends {}> {
  property: keyof T
  constraints: string
}

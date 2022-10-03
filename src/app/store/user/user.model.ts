export interface IUser {
  id: number,
  name: string,
  age: number
}

export interface UsersStateModel {
  users: IUser[];
}

import {IUser} from "./user.model";

export namespace Users {
  export class AddUser {
    static readonly type = "ADD_USER";
    constructor(public payload: { user: IUser }) {}
  }

  export class EditUser {
    static readonly type = "EDIT_USER";
    constructor(public payload: { user: IUser }) {}
  }

  export class DeleteUser {
    static readonly type = "DELETE_USER";
    constructor(public payload: { userId: string }) {}
  }
}

export class UserModelComponent {

  public Username: string;
  public Password:string;

  public static NewUser(_Username:string, _Password:string):UserModelComponent {
    let _User:UserModelComponent = new UserModelComponent();
    _User.Username = _Username;
    _User.Password = _Password;
    return _User;
  }


  constructor() {
    console.log('Hello UserModelComponent Component');
    this.Username = null;
    this.Password = null;
  }

}

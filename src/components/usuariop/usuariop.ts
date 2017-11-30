export class UsuariopComponent {

  public Username: string;
  public Password:string;

  constructor(Username: string, Password:string ) {
    console.log('Hello UsuariopComponent Component');
    this.Username = Username;
    this.Password = Password;
   
  }

}

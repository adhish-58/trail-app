export class UserModel {
  username: string;
  password: string;
  isValidUsername() {
       // var re = regex to make sure no special characters.
       // return re.test(this.username);
       return(this.username);
  }
}
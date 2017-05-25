export class Register {
  constructor (
    public id: number = 0,
    public name: string = '',
    public surname: string = '',
    public town: string = '',
    public email: string = '',
    public password: string = '',
    public repeatPassword: string = ''
  ) {
  
  }
}

export class User {
  id: number;
  name: string;

  static fromHttp(user: User): User {
    const newUser = new User();
    newUser.name = user.name;
    newUser.id = user.id;
    return newUser;
  }

  getRole(): string {
    return 'standart';
  }
}

interface User{
    name: string;
    age: number;
}





export class MyDataBase{
    private static instance?: MyDataBase;
    private users: User[] = [];
    private constructor() {};

    public static getInstance(): MyDataBase {
        if (!MyDataBase.instance) {
            MyDataBase.instance = new MyDataBase();
        }
        return MyDataBase.instance;
    }
    addUser(user: User): void {
        this.users.push(user);
    }
    removeUser(index: number): void {
        this.users.splice(index, 1);
    }
    showUsers(): void {
        for (const user of this.users) {
            console.log(user);
        }
    }
}

const db1 = MyDataBase.getInstance();

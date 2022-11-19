import { MyDataBase } from "./db/my-data-base";

const db1 = MyDataBase.getInstance();
db1.addUser({name: 'John', age: 25});
db1.addUser({name: 'Bob', age: 30});
db1.showUsers();
db1.removeUser(1);
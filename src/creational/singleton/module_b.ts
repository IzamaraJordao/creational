import { MyDataBase } from "./db/my-data-base";
import './module_a';

const db1 = MyDataBase.getInstance();
db1.addUser({name: 'fulano', age: 25});
db1.addUser({name: 'Betania', age: 30});
db1.showUsers();
db1.removeUser(1);
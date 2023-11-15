import UserTable from "./components/UserTable";
import {getUsers} from "./lib/api";

export default async function Page() {

    const users = await getUsers();

    return <>
        <h1 className="text-3xl font-bold">User Table</h1>
        <UserTable users={users}/>
    </>
}
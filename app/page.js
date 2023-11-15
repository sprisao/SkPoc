import UserTable from "./components/UserTable";
import {USERS} from "./lib/generateDummyData";

export default async function Page() {


    return <>
        <h1 className="text-3xl font-bold">User Table</h1>
        <UserTable users={USERS}/>
    </>
}
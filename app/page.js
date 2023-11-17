'use client'
import UserTable from "./components/UserTable";
import {useState} from "react";
import {faker} from '@faker-js/faker';


export function createRandomUser() {
    return {
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        // avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate({min: 18, max: 65, mode: 'age'}), // age 옵션 사용
        registeredAt: faker.date.past(),
    };
}

export default function Page() {
    const [users, setUsers] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const [isGenerated, setIsGenerated] = useState(false);

    const generateUsers = () => {
        const newUsers = Array.from({length: 50000}, () => createRandomUser());
        setUsers(newUsers);
        setIsGenerated(true);
    };

    const handleShowTable = () => {
        setShowTable(true);
    };

    return (
        <div className="bg-amber-200 mainContainer">
            <h1 className="text-3xl font-bold">User Table</h1>
            <button
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 generate-users-button"
                onClick={generateUsers}
            >
                Generate Users
            </button>
            <button
                className={`ml-4 px-4 py-2 text-white rounded show-table-button ${isGenerated ? 'bg-green-500 hover:bg-green-600' : 'bg-green-200 cursor-not-allowed'}`}
                onClick={handleShowTable}
                disabled={!isGenerated}
            >
                Show Table
            </button>
            {showTable && <UserTable users={users}/>}
        </div>
    );
}

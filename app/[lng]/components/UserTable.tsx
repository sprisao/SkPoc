const UserTable = ({ users }) => {
    return (
        <div className="overflow-x-auto user-table">
            <table className="min-w-full bg-white">
                <thead>
                <tr>
                    <th className="border py-1">User ID</th>
                    <th className="border py-1">Username</th>
                    <th className="border py-1">Email</th>
                    {/*<th className="border py-1">Avatar</th>*/}
                    <th className="border py-1">Birthdate</th>
                    <th className="border py-1">Registered Date</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td className="border py-1">{user.userId}</td>
                        <td className="border py-1">{user.username}</td>
                        <td className="border py-1">{user.email}</td>
                        {/*<td className="border py-1">*/}
                        {/*    <img className="w-10 h-10" src={user.avatar} alt={`${user.username}'s avatar`} />*/}
                        {/*</td>*/}
                        <td className="border py-1">
                            {new Date(user.birthdate).toLocaleDateString()}
                        </td>
                        <td className="border py-1">
                            {new Date(user.registeredAt).toLocaleDateString()}
                        </td>                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;

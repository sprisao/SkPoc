const UserTable = ({ users }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                <tr>
                    <th className="border  py-1">Name</th>
                    <th className="border  py-1">Username</th>
                    <th className="border  py-1">Email</th>
                    <th className="border  py-1">Address</th>
                    <th className="border  py-1">Phone</th>
                    <th className="border  py-1">Website</th>
                    <th className="border  py-1">Company</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td className="border  py-1">{user.name}</td>
                        <td className="border  py-1">{user.username}</td>
                        <td className="border  py-1">{user.email}</td>
                        <td className="border  py-1">
                            {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
                        </td>
                        <td className="border  py-1">{user.phone}</td>
                        <td className="border  py-1">{user.website}</td>
                        <td className="border  py-1">{user.company.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;

import User from "../models/user.js";
import Address from "../models/address.js";
import Company from "../models/company.js";
export async function getUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const usersJson = await response.json();

    // JSON 데이터를 모델 인스턴스로 변환
    return usersJson.map(userJson => {

        const address = new Address(
            userJson.address.street,
            userJson.address.suite,
            userJson.address.city,
            userJson.address.zipcode,
            userJson.address.geo // Geo 클래스를 사용할 경우 여기에 추가
        );

        const company = new Company(
            userJson.company.name,
            userJson.company.catchPhrase,
            userJson.company.bs
        );

        return new User(
            userJson.id,
            userJson.name,
            userJson.username,
            userJson.email,
            address,
            userJson.phone,
            userJson.website,
            company
        );
    });
}
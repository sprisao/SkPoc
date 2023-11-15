export default class User {
    constructor(userId, username, email, avatar, password, birthdate, registeredDate) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.avatar = avatar;
        this.password = password;
        this.birthdate = birthdate;
        this.registeredDate = registeredDate;
    }

    getFullAddress() {
        return `${this.address.street}, ${this.address.suite}, ${this.address.city}, ${this.address.zipcode}`;
    }
}

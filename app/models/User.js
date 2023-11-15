export default class User {
    constructor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address; // Address 인스턴스
        this.phone = phone;
        this.website = website;
        this.company = company; // Company 인스턴스
    }

    getFullAddress() {
        return `${this.address.street}, ${this.address.suite}, ${this.address.city}, ${this.address.zipcode}`;
    }
}

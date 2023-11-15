export default class Address {
    constructor(street, suite, city, zipcode, geo) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo; // 이 부분은 추가적인 Geo 클래스로 관리할 수도 있습니다.
    }
}

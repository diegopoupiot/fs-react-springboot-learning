class Customer {
    private readonly firstName: string;
    private readonly lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let myCustomer = new Customer("John", "Doe");
console.log(myCustomer.getFullName()); // John Doe
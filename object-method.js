const normalPerson = {
    firstName : 'Adi',
    lastName : 'Roy',
    salary : 15000,
    getFullName : function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function (amount) {
        this.salary = this.salary - amount ; 
        return this.salary;
    }
}
console.log(normalPerson.chargeBill(10000));
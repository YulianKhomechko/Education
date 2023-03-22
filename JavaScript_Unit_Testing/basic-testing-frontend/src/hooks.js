// hooks are the functions that are executed automatically by the test runner at a certain point of time.
// You also can test classed, not only functions.

export class User {
    constructor(email) {
        this.email = email;
    }

    updateEmail(newEmail) {
        this.email = newEmail;
    }

    clearEmail() {
        this.email = '';
    }
}

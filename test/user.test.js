const expect = require('chai').expect;

const { users } = require('../routes/users');

let req = {
    body: {},
};

let res = {
    sendCalledWith: '',
    send: function(arg) { 
        this.sendCalledWith = arg;
    }
};

describe('Greetings Route', function() {
    describe('users() function', function() {
        it('Should Success Response ', function() {
            users(req, res);
            expect(res.sendCalledWith).to.contain('Success');
        });
    })
});
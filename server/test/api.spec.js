const chai = require("chai");
const chaiHttp = require("chai-http");
const API = 'http://localhost:3001';

chai.should();
chai.use(chaiHttp);


describe("/POST register", () => {
  it("it should return 400", done => {
    chai
      .request(API)
      .post(`/auth/register`)
      .send({ username: "Shums", password: "mysecret"})
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have
          .property("error")
          .eql("Username, password, and email required");
        done();
      });
  });

  it("it should return 200", done => {
    chai
      .request(API)
      .post(`/auth/register`)
      .send({ username: "emmi", password: "111111", email: "mymailto@mail.com"})
      .end((err, res) => {
        res.should.have.status(200)
        res.header.should.have
          .property("set-cookie")
        done();
      });
  });
});

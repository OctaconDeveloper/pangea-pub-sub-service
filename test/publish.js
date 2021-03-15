const chai = require("chai");
const httpRequest = require("chai-http");
const app = require("../app.js");

chai.should();

chai.use(httpRequest)

describe("Publishing Ednpoint", () => {

    it("can successfully publish a topic notification", (response) => {
        let topic = "random test"
        let requestBody = {
            "message": "New alert received"
        }
        chai.request(app)
            .post("/v1/publish/"+topic)
            .send(requestBody)
            .end((err, resp) =>{
                resp.should.have.status(200)
                resp.body.should.have.property('status')
                resp.body.should.have.property('code')
                resp.body.should.have.property('message')
                resp.body.should.have.property('data')
                resp.body.should.have.property('status').to.be.true
                resp.body.should.have.property('data').have.property('topic')
                response()
        })
    })
    
    it("publishing should fail if wrong request body parament is sent", (response) => {
        let topic = "random test"
        let requestBody 
        chai.request(app)
            .post("/v1/publish/"+topic)
            .send(requestBody)
            .end((err, resp) => {
                resp.should.have.status(422)
                resp.body.should.have.property('status')
                resp.body.should.have.property('code')
                resp.body.should.have.property('message')
                resp.body.should.have.property('data')
                resp.body.should.have.property('status').to.be.false
                resp.body.should.have.property('message').eq('validation error')
                resp.body.should.have.property('data').have.property('errors')
                response()
        })
    })


    it("publishing should fail if topic is not sent", (response) => {
        let requestBody = {
             "report": "Hello world "
        }
        chai.request(app)
            .post("/v1/publish/")
            .send(requestBody)
            .end((err, resp) =>{
                resp.should.have.status(404)
                response()
        })
    })

})
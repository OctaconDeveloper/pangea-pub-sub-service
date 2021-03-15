const chai = require("chai");
const httpRequest = require("chai-http");
const app = require("../app.js");

chai.should();

chai.use(httpRequest)

describe("Subscription Ednpoint", () => {
    it("can successfully subscribe to a topic notification", (response) => {
        let topic = "random test"
        let requestBody = {
            "url": "https://da7466d34723.ngrok.io/testwebhook"
        }
        chai.request(app)
            .post("/v1/subscribe/"+topic)
            .send(requestBody)
            .end((err, resp) =>{
                resp.should.have.status(201)
                resp.body.should.have.property('status')
                resp.body.should.have.property('code')
                resp.body.should.have.property('message')
                resp.body.should.have.property('data')
                resp.body.should.have.property('status').to.be.true
                response()
        })
    })
    
    it("subscription should fail if wrong request body parament is sent", (response) => {
        let topic = "random test"
        let requestBody = {
             "hook": "https://da7466d34723.ngrok.io/testwebhook"
        }
        chai.request(app)
            .post("/v1/subscribe/"+topic)
            .send(requestBody)
            .end((err, resp) =>{
                resp.should.have.status(422)
                resp.body.should.have.property('status')
                resp.body.should.have.property('code')
                resp.body.should.have.property('message')
                resp.body.should.have.property('data')
                resp.body.should.have.property('status').to.be.false
                resp.body.should.have.property('message').eq('validation error')
                response()
        })
    })


    it("subscription should fail if topic is not sent", (response) => {
        let topic = "random test"
        let requestBody = {
             "hook": "https://da7466d34723.ngrok.io/testwebhook"
        }
        chai.request(app)
            .post("/v1/subscribe/")
            .send(requestBody)
            .end((err, resp) =>{
                resp.should.have.status(404)
                response()
        })
    })

})
const request = require("supertest");
const Server = require("../models/server");

const app = new Server();

/**
 *  Testing get api JSON
 */
it("CHECK API GET EPISODIOS ALL", (done) => {
    request(app.routes())
        .get("/api")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done)
        .end(function(err, res) {
            if (err) throw err;
        });
});
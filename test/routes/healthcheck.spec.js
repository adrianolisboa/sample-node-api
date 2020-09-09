const supertest = require("supertest");
const app = require("../../app");

const request = supertest(app);

describe("Healthcheck", () => {
  it("returns 200 if server is healthy", async () => {
    const response = await request.get(`/healthcheck`, null);

    expect(response.status).toBe(200);
    expect(response.body.uptime).toBeGreaterThan(0);
  });
});

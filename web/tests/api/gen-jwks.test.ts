import { createMocks } from "node-mocks-http";
import handleGenJWKS from "src/pages/api/_gen-jwks";

// FIXME
describe("/api/v1/_gen-jwks", () => {
  test("can generate new JWK", async () => {});
  test("endpoint is only accessible with specific token (Hasura)", async () => {
    const { req, res } = createMocks({
      method: "POST",
    });

    await handleGenJWKS(req, res);

    expect(res._getStatusCode()).toBe(403);
    expect(res._getJSONData()).toEqual({
      code: "permission_denied",
      detail: "You do not have permission to perform this action.",
      attribute: null,
    });
  });
});

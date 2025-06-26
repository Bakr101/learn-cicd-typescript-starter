import { describe, it, expect } from "vitest";
import { getAPIKey } from "./auth";

describe("getAPIKey", () => {
    it("should return the API key from the headers", () => {
        const headers = { authorization: "ApiKey 1234567890" };
        const apiKey = getAPIKey(headers);
        expect(apiKey).toBe("1234567890");
    });

    it("should return null if the authorization header is not present", () => {
        const headers = {};
        const apiKey = getAPIKey(headers);
        expect(apiKey).toBeNull();
    });

    it("should return null if the authorization header is not in the correct format", () => {
        const headers = { authorization: "1234567890" };
        const apiKey = getAPIKey(headers);
        expect(apiKey).toBeNull();
    });

});
import { MyApp } from "../src/index"

beforeEach(() => {
    const t = new MyApp();
})

describe("first test", () => {
    it("is not failing", () => {
        expect(1).toBe(1);
    })
}) 
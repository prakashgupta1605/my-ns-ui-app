import { generate } from "src/ts/jet-composites/my-ns-ui-app/NumberGenerator";

describe("generate", () => {
	test("should return something not empty", async () => {
		// Then
		expect(generate()).toBeTruthy();
	});

	test("should return something with just two digits", async () => {
		// Then
		expect(generate().toString()).toMatch(/^\d*\.\d{2}$/);
	});
});

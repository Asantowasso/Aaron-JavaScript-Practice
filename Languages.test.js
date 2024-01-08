const Languages = require ('./Languages')


test("Returns about-us for english language", () => {
    expect(Languages("en-US")).toBe("/about-us");
});
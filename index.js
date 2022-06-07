const name = "Joe";
const height = 74;
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};
console.log(message);
describe("Name", () => {
    it('returns "Susan"', () => {
      expect(name).toEqual("Susan");
    });
  });
  describe("Message", () => {
    it("gives the name and height", () => {
      expect(message).toInclude(name);
      expect(message).toInclude(height);
    });
  });
  describe("Message", () => {
    it("gives the name and height", () => {
      expect(message).toInclude(name);
      expect(message).toInclude(height);
    });
  });
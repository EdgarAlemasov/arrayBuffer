import Character from "../characters";


test ("invalid name test 1", () => {
    expect(() => new Character("Q", "Magician")).toThrow("Invalid name")
})

test ("invalid name test 2", () => {
    expect(() => new Character("QuickRage777", "Magician")).toThrow("Invalid name")
})

test ("invalid class", () => {
    expect(() => new Character("QuickRage", "Human")).toThrow("Invalid class")
})

test("successful create character", () => {
    const char = new Character("QuickRage", "Daemon");
    const result = {
        name: "QuickRage",
        type: "Daemon",
        level: 1,
    }
    expect(char).toEqual(result)
})
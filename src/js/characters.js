export default class Character {
    constructor (name, type) {
        const characterTypes = [
            "Magician",
            "Daemon"
        ]
        if (typeof name !== "string" || name.length < 2 || name.length > 10) {
            throw new Error ("Invalid name");
        } else {
            this.name = name;
        }

        if (!characterTypes.includes(type)) {
            throw new Error ("Invalid class");
        } else {
            this.type = type
        }
        this.level = 1;
    }
}
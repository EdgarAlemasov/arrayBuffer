import getBuffer from "../getBuffer";
import ArrayBufferConverter from "../arrayBufferConverter";


test ("loading data to buffer", () => {
    const bufferConverter = new ArrayBufferConverter();
    const buffer = getBuffer();
    bufferConverter.load(buffer);
    expect(bufferConverter.buffer).toEqual(getBuffer());
})

test ("toString from buffer", () => {
    const bufferConverter = new ArrayBufferConverter();
    bufferConverter.load(getBuffer());
    const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'
    expect(bufferConverter.toString()).toBe(result);
})

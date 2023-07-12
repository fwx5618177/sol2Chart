import { Parse } from "src/parse/parse"

export const generator = (code: string) => {
    const parse = new Parse()

    return parse.parse(code)
}
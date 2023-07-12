import { parse } from '@solidity-parser/parser'

export class Parse {
    parse (code: string) {
        return parse(code)
    }
}
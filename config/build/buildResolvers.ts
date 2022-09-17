import {ResolveOptions} from "webpack";

export function buildResolvers(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // расширения тех файлов, которые мы не будем указывать при импорте
    }
}

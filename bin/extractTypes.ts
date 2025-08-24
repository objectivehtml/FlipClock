import { existsSync } from 'node:fs';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'path';
import { Project, SourceFile } from "ts-morph";

const sourceFile: SourceFile = new Project({
    tsConfigFilePath: './tsconfig.json'
}).addSourceFileAtPath('./dist/index.d.ts');

const baseDir = resolve('./docs/types');

const extensions: Record<string,string> = {
    'PropertyDeclaration': '.prop.ts',
    'PropertySignature': '.prop.ts',
    'ClassDeclaration': '.class.ts',
    'MemberDeclaration': '.member.ts',
    'MethodDeclaration': '.method.ts',
    'FunctionDeclaration': '.function.ts',
    'TypeAliasDeclaration': '.type.ts',
    'InterfaceDeclaration': '.interface.ts',
    'VariableDeclaration': '.var.ts'
};

const COMMENT_REGEX = /(export(\s+)?)?(declare(\s+?))?/;

const EXPORT_REGEX = /export?(\s+)?(declare)(\s+)?/;

function groupBy<T extends object[]>(array: T, key: string) {
    return array
        .reduce((hash, obj) => {
            // @ts-ignore
            if (obj[key] === undefined) return hash; 

            // @ts-ignore
            return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)});
        }, {});
}

export async function extractTypes() {
    if (existsSync(baseDir)) {
        await rm(baseDir, {
            recursive: true,
            force: true
        });
    }

    await mkdir(baseDir);
    

    for (const [key, decorations] of sourceFile.getExportedDeclarations()) {
        const declarations: Record<string, {filename: string, contents: string}[]> = {};

        for (const decoration of decorations) {
            const kindName = decoration.getKindName();

            if (kindName === 'VariableDeclaration') {
                continue;
            }

            if (!declarations[kindName]) {
                declarations[kindName] = [];
            }
          
            // if ('getProperties' in decoration) {
            //     for (const prop of decoration.getProperties()) {
            //         if (!declarations[prop.getKindName()]) {
            //             declarations[prop.getKindName()] = [];
            //         }
    
            //         declarations[prop.getKindName()]!.push({
            //             filename: `${key}.${prop.getName()}`,
            //             contents: prop
            //                 .getText()
            //                 .replace(COMMENT_REGEX, '')
            //         });
            //     }
            // }

            // if ('getMethods' in decoration) {
            //     for (const prop of decoration.getMethods()) {
            //         if (!declarations[prop.getKindName()]) {
            //             declarations[prop.getKindName()] = [];
            //         }
    
            //         declarations[prop.getKindName()]!.push({
            //             filename: `${key}.${prop.getName()}`,
            //             contents: prop
            //                 .getText()
            //                 .replace(COMMENT_REGEX, '')
            //         });
            //     }
            // }

            declarations[kindName].push({
                filename: key,
                contents: decoration
                    .getText()
                    .replace(COMMENT_REGEX, '')
                    .replace(EXPORT_REGEX, '')
                    .trim()
            });
        }

        for (const [kindName, files] of Object.entries(declarations)) {
            const groups = groupBy(files, 'filename');

            for (const [key, value] of Object.entries(groups)) {
                // @ts-ignore
                const contents = value.map(({ contents }) => contents).join('\n');
                const path = resolve(baseDir, `${key}${extensions[kindName] ?? '.ts'}`);

                await writeFile(path, contents);
            }
        }
    }
}

await extractTypes();
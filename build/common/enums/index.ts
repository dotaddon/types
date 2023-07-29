import vscriptsEnums from '@moddota/dota-data/files/vscripts/enums';
import _ from 'lodash';
import { emit, withDescription } from '../utils';
import { isGlobalEnumMember, normalizeEnumMemberName, normalizeEnumName } from './normalize';

export * from './normalize';

type Declaration =
  | vscriptsEnums.Constant
  | (Omit<vscriptsEnums.Enum, 'kind' | 'available'> & { kind?: 'enum' });

export function generateEnumDeclarations(
  enums: Declaration[],
  inline: boolean,
  normalize: boolean,
  compileMembersOnly?: boolean,
) {
  const declarations: string[] = [];

  for (const declaration of enums) {
    if (declaration.kind === 'constant') {
      declarations.push(
        withDescription(
          `declare const ${declaration.name}: ${declaration.value}`,
          declaration.description,
        ),
      );
      continue;
    }

    const [normalizedGlobals, normalizedMembers] = _.partition(declaration.members, (member) =>
      isGlobalEnumMember(member, declaration),
    );

    if (normalize) {
      for (const global of normalizedGlobals) {
        declarations.push(
          withDescription(`declare const ${global.name}: ${global.value}`, global.description),
        );
      }
    }

    const members = normalize ? normalizedMembers : declaration.members;
    if (members.length > 0) {
      const normalizedEnumName = normalizeEnumName(declaration.name);

      const memberDeclarations = members
        .map((member) => {
          const name = normalize ? normalizeEnumMemberName(member.name, declaration) : member.name;
          const key = /^\d/.test(name) ? JSON.stringify(name) : name;
          return withDescription(`${key} = ${member.value}`, member.description);
        })
        .join(',\n');

      const enumName = normalize ? normalizedEnumName : declaration.name;
      const enumDeclaration = withDescription(
        `declare ${inline ? 'const' : ''} enum ${enumName} {${memberDeclarations}}`,
        !compileMembersOnly && declaration.description === undefined
          ? undefined
          : `${compileMembersOnly ? '@compileMembersOnly' : ''}${
              declaration.description !== undefined ? `\n${declaration.description}` : ''
            }`,
      );

      if (declaration.name !== normalizedEnumName && normalizedMembers.length > 0) {
        const aliasKind = normalize ? '不规范的' : '规范的';
        const aliasName = normalize ? declaration.name : normalizedEnumName;
        const aliasType = normalize ? normalizedEnumName : declaration.name;
        const description = `@deprecated ${aliasKind}枚举名称。仅为库兼容性而定义。`;
        declarations.push(withDescription(`type ${aliasName} = ${aliasType}`, description));
      }

      declarations.push(enumDeclaration);
    }
  }

  return emit(declarations.join('\n\n'));
}

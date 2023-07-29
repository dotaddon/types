import api from '@moddota/dota-data/files/vscripts/api';
import * as dom from 'dts-dom';
import { emit, getFunction, getType, withDescription } from './utils';

const precedingDeclarations: Record<string, string> = {
  ListenToGameEvent: `
    declare interface GameEventProvidedProperties {
        game_event_listener: EventListenerID;
        game_event_name: string;
        splitscreenplayer: number;
    }
  `,

  CCustomGameEventManager: `
    /**
     * 用于验证自定义事件的类型。
     *
     * 这种类型可以通过界面合并进行扩充。
     */ 
    interface CustomGameEventDeclarations {}

    declare namespace CCustomGameEventManager {
        type InferEventType<T extends string | object, TUntyped> = T extends string
            ? T extends keyof CustomGameEventDeclarations
                ? CustomGameEventDeclarations[T]
                : TUntyped
            : T;
    }
  `,

  CCustomNetTableManager: `
    /**
     * 用于验证自定义网络表的类型。
     *
     * 这种类型可以通过界面合并进行扩充。
     */
    interface CustomNetTableDeclarations {}
  `,
};

const getMembers = (typeName:string, members:api.ClassMember[]) => [...members].flatMap<dom.ObjectTypeMember>(
      (member) => {
        const fullName = `${typeName}.${member.name}`;

        switch (member.kind) {
          case 'field':
            return withDescription(
              dom.create.property(member.name, getType(member.types, true)),
              member.description,
            );

          case 'function':
            return getFunction(
              (parameters, returnType) =>
                dom.create.method(
                  member.name,
                  parameters,
                  returnType,
                  member.abstract ? dom.DeclarationFlags.Optional : dom.DeclarationFlags.None,
                ),
              fullName,
              member,
              undefined,
              member.abstract,
            );
        }
      },
    );

    // let qqq = true;

export const generatedApi = emit(
  api.flatMap((declaration) => {
    const typeName = declaration.name;

    const declarations: (dom.TopLevelDeclaration | string)[] = [];
    if (typeName in precedingDeclarations) {
      declarations.push(precedingDeclarations[typeName]);
    }

    if (declaration.kind === 'function') {
      declarations.push(
        ...getFunction((p, r) => dom.create.function(typeName, p, r), typeName, declaration),
      );

      
    // if(qqq){
    //   qqq = false;
    //   console.log(
    //     typeName,'\n111\n',declaration,'\n222\n',
    //     declarations[declarations.length-1]
    //   )
    // }

      return declarations;
    }

    const constructorTypes = dom.create.intersection([]);
    if (typeName !== declaration.instance) {
      constructorTypes.members.push(dom.create.namedTypeReference(`DotaConstructor<${typeName}>`));
    }

    if (declaration.call != null) {
      constructorTypes.members.push(
        ...getFunction(dom.create.functionType, typeName, declaration.call),
      );
    }

    if (declaration.instance != null) {
      const typeNameReference = dom.create.namedTypeReference(typeName);
      if (typeName === declaration.instance) {
        constructorTypes.members.push(typeNameReference);
      } else {
        declarations.push(dom.create.const(declaration.instance, typeNameReference));
      }
    }

    declarations.push(
      withDescription(
        dom.create.const(typeName, constructorTypes),
        declaration.clientName === typeName ? '@both' : undefined,
      ),
    );

    if (declaration.clientName != null && declaration.clientName !== typeName) {
      declarations.push(
        withDescription(
          dom.create.const(
            declaration.clientName,
            dom.create.typeof(dom.create.namedTypeReference(typeName)),
          ),
          '@client',
        ),
      );
    }

    const mainDeclarationMembers = getMembers(typeName, declaration.members);

    mainDeclarationMembers.push(
      dom.create.property('__kind__', dom.type.stringLiteral('instance')),
    );

    const extendedType =
      declaration.extend != null ? dom.create.interface(declaration.extend) : undefined;

    let mainTypeDeclaration: dom.ModuleMember;
    const hasOverloadedOperators = declaration.members.some((m) => m.name === '__add');
    if (hasOverloadedOperators) {
      mainTypeDeclaration = dom.create.alias(
        typeName,
        dom.create.intersection([
          dom.create.namedTypeReference('__NumberLike'),
          ...(extendedType ? [extendedType] : []),
          dom.create.objectType(mainDeclarationMembers),
        ]),
      );
    } else {
      mainTypeDeclaration = dom.create.interface(typeName);
      mainTypeDeclaration.members = mainDeclarationMembers;
      if (extendedType) {
        mainTypeDeclaration.baseTypes = [extendedType];
      }
    }

    declarations.push(withDescription(mainTypeDeclaration, declaration.description));
    return declarations;
  }),
);

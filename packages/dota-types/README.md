# Dota Lua Types

TypeScript definitions for Dota 2 Lua API, designed to be used with
[TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua).
[![npm标签](https://img.shields.io/npm/v/@mobilc/dota-lua-types)](https://www.npmjs.com/package/@mobilc/dota-lua-types)
[![npm标签](https://img.shields.io/npm/v/@mobilc/panorama-types)](https://www.npmjs.com/package/@mobilc/panorama-types)

## Installation

> Check out our [addon template](https://gitee.com/kill-seven-at-once/ts-dota-rpg) for usage
> examples.

1. Get package from npm

```shell
pnpm add -D @mobilc/dota-types
# or
npm install -D @mobilc/dota-types
```

2. Modify your `tsconfig.json`

```json
{
  "compilerOptions": {
    "types": ["@mobilc/dota-types/vscripts"],
    "plugins": [{ "transform": "@mobilc/dota-types/transformer/vscripts" }]
  }
}
```

```json
{
  "compilerOptions": {
    "types": ["@mobilc/dota-types/panorama"],
    "plugins": [{ "transform": "@mobilc/dota-types/transformer/panorama" }]
  }
}
```


```json
{
  "compilerOptions": {
    "types": ["@mobilc/dota-types/share"]
  }
}
```
## Enums

This package includes 2 versions of enum types - raw and normalized. Raw types are included by
default, with `"types": ["@mobilc/dota-types/panorama"]`. They are defined using original engine names and have no structural
changes. They match actual values available at runtime,This makes the code using some enums compatible with Panorama however
lead to repetition and require you to use inconsistent standard names.

Normalized enum types can be included with `"types": ["@mobilc/dota-types/panorama/normalized"]` and require you
to use `@mobilc/dota-types/transformer/panorama` (for example using [ttypescript]). With these types, enums have
consistent names and have no repeated parts. For example, instead of
`EDOTA_ModifyGold_Reason.DOTA_ModifyGold_Unspecified` you have to write
`ModifyGoldReason.UNSPECIFIED`. instead of
`EDOTA_ModifyGold_Reason.DOTA_ModifyGold_Unspecified` you have to write
`ModifyGoldReason.UNSPECIFIED`.

Both type versions define aliases for alternative names, so libraries created with one version would
be compatible with a different one.

[ttypescript]: https://github.com/cevek/ttypescript

## Notes

- You can explore the same data in readable form on
  [Moddota API](https://moddota.com/api/) page.

- To extend standard classes you can use declaration merging:

  ```ts
  interface CDOTA_BaseNPC {
    log(message: string): void;
  }

  CDOTA_BaseNPC.log = function (message) {
    print(`${this.GetUnitName()} says: ${message}`);
  };

  HeroList.GetHero(0)!.log('Hello world');
  ```

- All Dota classes there are declared as interfaces. To extend them you can use
  [utilities](https://gist.github.com/ark120202/f9ccd1076887664e8e8cb7e7d78fd7d1)

  ```ts
  import { BaseAbility, BaseModifier, registerAbility, registerModifier } from './utils';

  @registerAbility('ability_test')
  export class Test extends BaseAbility {
    GetIntrinsicModifierName = () => TestModifier.name;
  }

  @registerModifier('ability_test_modifier')
  export class TestModifier extends BaseModifier {
    OnCreated() {
      print('Test modifier created');
    }
  }
  ```

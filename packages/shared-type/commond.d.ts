declare type vCmdClient =
    | 'dota_ping'
    | 'dota_hero_nearlethaldamage'
    | 'dota_hero_suicide'
    | `say ${string}`
    | `say_team ${string}`

declare type vCmdServer = 
    | 'script_reload'
    | 'restart'
    | 'quit'
    | 'refresh'
    | `dota_dev ${dota_dev}`

declare type dota_dev = 
    | 'killwards'
    | 'forcegamestart'
    | 'hero_teleport'
    | 'hero_respawn'
    | 'hero_refresh'
    | 'hero_maxlevel'
    | `hero_level ${number}`
    | `player_givegold ${number}`

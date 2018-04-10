// Options
declare interface MOCK20Options {
    MOCK20override?: boolean;
}
declare type MOCK20FindObjsOptions = FindObjectOptions & MOCK20Options;
declare type MOCK20SendChatOptions = ChatMessageHandlingOptions & MOCK20Options & { MOCK20playerid?: string, MOCK20tag?: string };

//Functions - API:Objects
declare interface Campaign {
    MOCK20reset(): void;
}

interface PlayerCreationProperties {
    _id?: string,
    _type?: 'player',
    _d20userid?: string,
    _displayname?: string;
    _online?: boolean,
    _lastpage?: string,
    _macrobar?: string,
    speakingas?: string,
    color?: string,
    showmacrobar?: boolean
}
interface PlayerMock extends Player {
    MOCK20gm: boolean;
    MOCK20chat(message: string, options?: MOCK20SendChatOptions): void;
}

declare function createObj(type: "text", properties: TextCreationProperties, options: MOCK20Options): Text | undefined;
declare function createObj(type: "graphic", properties: GraphicCreationProperties, options: MOCK20Options): Graphic | undefined;
declare function createObj(type: "character", properties: CharacterCreationProperties, options: MOCK20Options): Character | undefined;
declare function createObj(type: "attribute", properties: AttributeCreationProperties, options: MOCK20Options): Attribute | undefined;
declare function createObj(type: "ability", properties: AbilityCreationProperties, options: MOCK20Options): Ability | undefined;
declare function createObj(type: "handout", properties: HandoutCreationProperties, options: MOCK20Options): Handout | undefined;
declare function createObj(type: "player", properties: PlayerCreationProperties, options: MOCK20Options): PlayerMock | undefined;

declare function filterObjs(callback: (obj: Roll20Object) => boolean, options: MOCK20Options): Roll20Object[];
declare function findObjs(properties: { [property: string]: any }, options?: MOCK20FindObjsOptions): Roll20Object[]; // might conflict with Roll20.d.ts
declare function getAllObjs(options: MOCK20Options): Roll20Object[];

declare function getObj(type: "text", id: string, options: MOCK20Options): Text | undefined;
declare function getObj(type: "graphic", id: string, options: MOCK20Options): Graphic | undefined;
declare function getObj(type: "character", id: string, options: MOCK20Options): Character | undefined;
declare function getObj(type: "attribute", id: string, options: MOCK20Options): Attribute | undefined;
declare function getObj(type: "ability", id: string, options: MOCK20Options): Ability | undefined;
declare function getObj(type: "player", id: string, options: MOCK20Options): Player | undefined;

// Functions - API:Events
declare interface MOCK20OnResetOptions {
    MOCK20reset: boolean,
}
declare interface MOCK20OnRemoveOptions {
    MOCK20remove: boolean
}
declare function MOCK20endOfLastScript(): void;
declare function on(mockOptions: MOCK20OnResetOptions): void;
declare function on(mockOptions: MOCK20OnRemoveOptions, callback: (msg: ChatEventData) => void): void;
declare function on(event: string, callback: (msg: ChatEventData) => void): void;


// //Functions - API:Chat
declare function sendChat(speakingAs: string, message: string, callback?: (operations: ChatEventData[]) => void, options?: MOCK20SendChatOptions): void; // might conflict with Roll20.d.ts

// //Functions - API:Utility
// global.playJukeboxPlaylist = require('./Functions/API_Utility/Jukebox.js').playJukeboxPlaylist;
// global.stopJukeboxPlaylist = require('./Functions/API_Utility/Jukebox.js').stopJukeboxPlaylist;
// global.log = require('./Functions/API_Utility/Log.js');
// global.toFront = require('./Functions/API_Utility/ObjectOrdering.js').toFront;
// global.toBack = require('./Functions/API_Utility/ObjectOrdering.js').toBack;
// global.playerIsGM = require('./Functions/API_Utility/PlayerIsGM.js');
// global.randomInteger = require('./Functions/API_Utility/RandomInteger.js');
// global.sendPing = require('./Functions/API_Utility/SendPing.js');
// global.setDefaultTokenForCharacter
//  = require('./Functions/API_Utility/SetDefaultTokenForCharacter.js');
// global.spawnFx = require('./Functions/API_Utility/SpecialEffects.js').spawnFx;
// global.spawnFxBetweenPoints
//  = require('./Functions/API_Utility/SpecialEffects.js').spawnFxBetweenPoints;
// global.spawnFxWithDefinition
//  = require('./Functions/API_Utility/SpecialEffects.js').spawnFxWithDefinition;

// //Functions - Mock20 Setup
declare type moveToFolderItem = Character | Handout | Roll20ObjectBaseProperties; // TODO: add folder and playlist (and others?) instead of Roll20ObjectBaseProperties
declare function MOCK20moveToFolder(item: moveToFolderItem, folderid: string): void;
declare function MOCK20moveBeforeFolderItem(item: moveToFolderItem, targetid: string): void;
declare function MOCK20moveToPlaylist(item: moveToFolderItem, folderid: string): void;
declare function MOCK20moveBeforePlaylistItem(item: any, targetid: any): void;

// TODO: extract types from mock20 objects; MOCK20object and descendants
// MOCK20folder should extends MOCK20object
declare interface MOCK20folder {
    get(id: string): Array<moveToFolderItem>;
    addItem(item: moveToFolderItem): void;
    MOCK20update(): void;
}
declare function MOCK20sortFolder(folder: MOCK20folder): void;

//
// Same signature as Roll20 definition; See roll20.d.ts
//
// global.Campaign = require('./Functions/API_Objects/Campaign');
// global.getAttrByName = require('./Functions/API_Objects/GetAttrByName');
// global.state = require('./Functions/API_Objects/State');
// global.on = require('./Functions/API_Events/On');
// global._ = require('underscore');

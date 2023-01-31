declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        fizzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
        waves: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        mainMusic: string;
        spookyMusic: string;
        splashMusic: string;
        birds: string;
        drop: string;
        schoolBell: string;
        sparkle: string;
        pageflip: string;
        switch: string;
        flashlight: string;
        select: string;
        selectDialog: string;
        typing: string;
        femalegasp: string;
        shutter: string;
        aua: string;
        smallsigh: string;
        bigsigh: string;
    };
    let locations: {
        schoolOutsideDay: {
            name: string;
            background: string;
            foreground: string;
        };
        schoolOutsideTwilight: {
            name: string;
            background: string;
            foreground: string;
        };
        corridorDay: {
            name: string;
            background: string;
            foreground: string;
        };
        classroomDay: {
            name: string;
            background: string;
            foreground: string;
        };
        library: {
            name: string;
            background: string;
        };
    };
    let chapterCovers: {
        chapterSimple: {
            name: string;
            background: string;
            foreground: string;
        };
        chapter: {
            name: string;
            background: string;
            foreground: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        stranger: {
            name: string;
        };
        protagonist: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                happyEyesClosed: string;
                sad: string;
                neutral: string;
                scared: string;
                mean: string;
                surprised: string;
            };
        };
        kira: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                sad: string;
                neutral: string;
                scared: string;
                unsure: string;
                smiling: string;
            };
        };
        atlas: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                sad: string;
                neutral: string;
                scared: string;
                playful: string;
            };
        };
        lucia: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                sad: string;
                smiling: string;
                surprised: string;
                unsure: string;
                upset: string;
            };
        };
        solas: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                sad: string;
                happy: string;
                scared: string;
                angry: string;
            };
        };
    };
    function simulateCameraFlash(): Promise<void>;
    function showAquiredPages(): Promise<void>;
    function updateNotes(): void;
    function removeFallingLeaves(): void;
    function addFallingLeaves(): void;
    function createText(givenheadline: string, giventext1: string, giventext2: string, givenid: string): void;
    function animation(): ƒS.AnimationDefinition;
    function showSolasMeter(): void;
    function hideSolasMeter(): void;
    function showAtlasMeter(): void;
    function hideAtlasMeter(): void;
    function showLuciaMeter(): void;
    function hideLuciaMeter(): void;
    let dataForSave: {
        nameProtagonist: string;
        toggleSuspectsButton: boolean;
        solasPortrait: boolean;
        solasMotive: boolean;
        solasOpportunity: boolean;
        atlasPortrait: boolean;
        atlasMotive: boolean;
        atlasOpportunity: boolean;
        atlasDiary: boolean;
        luciaPortrait: boolean;
        luciaMotive: boolean;
        luciaOpportunity: boolean;
        atlasScore: number;
        luciaScore: number;
        solasScore: number;
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Template {
    let volume: number;
    let volumeBeforeMute: number;
    function incrementSound(): void;
    function decrementSound(): void;
    function toggleSound(): void;
    function showSuspects(): void;
    function showCredits(): void;
    function showShortcuts(): void;
    let menuInGame: {
        save: string;
        load: string;
        credits: string;
        shortcuts: string;
        toggleSound: string;
        turnUpVolume: string;
        turnDownVolume: string;
        toggleSuspects: string;
        toggleAquiredPages: string;
    };
    let gameMenu: ƒS.Menu;
    let menuOpen: boolean;
    function buttonFunctionalities(_option: string): Promise<void>;
    function hndKeyPress(_event: KeyboardEvent): Promise<void>;
}
declare namespace Template {
    function animationExampleScene(): ƒS.SceneReturn;
}
declare namespace Template {
    function beta(): ƒS.SceneReturn;
}
declare namespace Template {
    function coverChapterOne(): ƒS.SceneReturn;
}
declare namespace Template {
    function coverChapterTwo(): ƒS.SceneReturn;
}
declare namespace Template {
    function intro(): ƒS.SceneReturn;
}
declare namespace Template {
    function lightsOut(): ƒS.SceneReturn;
}
declare namespace Template {
    function motive(): ƒS.SceneReturn;
}

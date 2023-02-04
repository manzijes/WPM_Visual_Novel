declare namespace BehindTheScenes {
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
        ending: string;
        thinking: string;
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
        corridorDay2: {
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
        roof: {
            name: string;
            background: string;
        };
        roofTwilight: {
            name: string;
            background: string;
        };
        stairs: {
            name: string;
            background: string;
        };
    };
    let chapterCovers: {
        chapterOne: {
            name: string;
            background: string;
            foreground: string;
        };
        chapterTwo: {
            name: string;
            background: string;
            foreground: string;
        };
        chapter: {
            name: string;
            background: string;
            foreground: string;
        };
        epilogue: {
            name: string;
            background: string;
            foreground: string;
        };
    };
    let items: {
        key: {
            name: string;
            description: string;
            image: string;
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
                confident: string;
                serious: string;
                benevolent: string;
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
        girl: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                annoyed: string;
                blushing: string;
                smiling: string;
                unsure: string;
                upset: string;
                neutral: string;
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
                smiling: string;
                unhappy: string;
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
                happy: string;
                smiling2: string;
                unhappy: string;
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
                upset: string;
                thoughtful: string;
                confused: string;
                unhappy: string;
            };
        };
    };
    function simulateCameraFlash(): Promise<void>;
    function showAquiredPages(): Promise<void>;
    function findFavorite(): string;
    function updateNotes(): void;
    function removeFallingLeaves(): void;
    function addFallingLeaves(): void;
    function animation(): ƒS.AnimationDefinition;
    function showSolasMeter(): void;
    function hideSolasMeter(): void;
    function showAtlasMeter(): void;
    function hideAtlasMeter(): void;
    function showLuciaMeter(): void;
    function hideLuciaMeter(): void;
    let dataForSave: {
        nameGirl: string;
        toggleSuspectsButton: boolean;
        solasPortrait: boolean;
        solasMotive: boolean;
        solasHandwriting: boolean;
        confrontedSolas: boolean;
        atlasPortrait: boolean;
        atlasMotive: boolean;
        atlasOpportunity: boolean;
        aboutAlibi: boolean;
        atlasDiary: boolean;
        atlasNoDiary: boolean;
        luciaPortrait: boolean;
        luciaMotive: boolean;
        luciaOpportunity: boolean;
        atlasScore: number;
        luciaScore: number;
        solasScore: number;
        warningNote: boolean;
        foundKey: boolean;
        lookedForKey: boolean;
        choseAtlas: boolean;
        choseSolas: boolean;
        choseLucia: boolean;
        letCulpritGo: boolean;
    };
}
declare namespace BehindTheScenes {
    function Scene(): ƒS.SceneReturn;
}
declare namespace BehindTheScenes {
    let volume: number;
    let volumeBeforeMute: number;
    function incrementSound(): void;
    function decrementSound(): void;
    function toggleSound(): void;
    function showSuspects(): void;
    function showCredits(): Promise<void>;
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
declare namespace BehindTheScenes {
    function roofRightEpilogue(): ƒS.SceneReturn;
}
declare namespace BehindTheScenes {
    function roofWrongEpilogue(): ƒS.SceneReturn;
}
declare namespace BehindTheScenes {
    function beta(): ƒS.SceneReturn;
}
declare namespace BehindTheScenes {
    function confrontSolasAfterKira(): ƒS.SceneReturn;
}
declare namespace BehindTheScenes {
    function confrontSolasAfterLucia(): ƒS.SceneReturn;
}
declare namespace BehindTheScenes {
    function coverChapterOne(): ƒS.SceneReturn;
}
declare namespace BehindTheScenes {
    function coverChapterTwo(): ƒS.SceneReturn;
}
declare namespace BehindTheScenes {
    function girlOnCorridor(): ƒS.SceneReturn;
}
declare namespace BehindTheScenes {
    function intro(): ƒS.SceneReturn;
}
declare namespace BehindTheScenes {
    function kiraGivesHint(): ƒS.SceneReturn;
}
declare namespace BehindTheScenes {
    function lightsOut(): ƒS.SceneReturn;
}
declare namespace BehindTheScenes {
    function lookForKey(): ƒS.SceneReturn;
}
declare namespace BehindTheScenes {
    function luciaGivesHint(): ƒS.SceneReturn;
}
declare namespace BehindTheScenes {
    function motive(): ƒS.SceneReturn;
}
declare namespace BehindTheScenes {
    function roofRight(): ƒS.SceneReturn;
}
declare namespace BehindTheScenes {
    function roofWrong(): ƒS.SceneReturn;
}
declare namespace BehindTheScenes {
    function yourConclusion(): ƒS.SceneReturn;
}
declare namespace BehindTheScenes {
    function yourTitle(): ƒS.SceneReturn;
}

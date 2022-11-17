declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        mainMusic: string;
        birds: string;
        drop: string;
        schoolBell: string;
        sparkle: string;
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
    };
    function updateNotes(): void;
    function animation(): ƒS.AnimationDefinition;
    let dataForSave: {
        nameProtagonist: string;
        toggleSuspectsButton: boolean;
        solasPortrait: boolean;
        solasMotive: boolean;
        solasOpportunity: boolean;
        eliseoPortrait: boolean;
        eliseoMotive: boolean;
        eliseoOpportunity: boolean;
        luciaPortrait: boolean;
        luciaMotive: boolean;
        luciaOpportunity: boolean;
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
    };
    let gameMenu: ƒS.Menu;
    let menuOpen: boolean;
    let notesCreated: boolean;
    function buttonFunctionalities(_option: string): Promise<void>;
    function hndKeyPress(_event: KeyboardEvent): Promise<void>;
}
declare namespace Template {
    function animationExampleScene(): ƒS.SceneReturn;
}
declare namespace Template {
    function firstScene(): ƒS.SceneReturn;
}

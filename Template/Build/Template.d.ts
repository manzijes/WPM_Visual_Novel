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
        drop: string;
    };
    let locations: {
        gardenDoor: {
            name: string;
            background: string;
            foreground: string;
        };
        gardenPath: {
            name: string;
            background: string;
            foreground: string;
        };
        gardenSwing: {
            name: string;
            background: string;
            foreground: string;
        };
        gardenHouse: {
            name: string;
            background: string;
            foreground: string;
        };
        gardenBridge: {
            name: string;
            background: string;
            foreground: string;
        };
        gardenTable: {
            name: string;
            background: string;
            foreground: string;
        };
        gardenGreenhouse: {
            name: string;
            background: string;
            foreground: string;
        };
        schoolOutsideDay: {
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
            };
        };
    };
    let dataForSave: {
        nameProtagonist: string;
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Template {
    function firstScene(): ƒS.SceneReturn;
}
declare namespace Template {
    function secondScene(): ƒS.SceneReturn;
}

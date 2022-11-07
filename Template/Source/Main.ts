namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  export let transition = {
      puzzle: {
        duration: 1,
        alpha: "",
        edge: 1
      }
    };

  export let sound = {
    // music
    mainMusic: "Audio/Music/inspiration.mp3",
    // ambiance
    birds: "Audio/Ambiance/springBirds.wav",
    // SFX
    drop: "Audio/SFX/drop.mp3",
    schoolBell: "Audio/SFX/schoolBell.wav"
  };

  export let locations = {
    gardenDoor: {
      name: "GardenDoor",
      background: "Images/Backgrounds/Garden/garden1.png",
      foreground: ""
    },
    gardenPath: {
      name: "GardenPath",
      background: "Images/Backgrounds/Garden/garden2.png",
      foreground: ""
    },
    gardenSwing: {
      name: "GardenSwing",
      background: "Images/Backgrounds/Garden/garden3.png",
      foreground: ""
    },
    gardenHouse: {
      name: "GardenHouse",
      background: "Images/Backgrounds/Garden/garden4.png",
      foreground: ""
    },
    gardenBridge: {
      name: "GardenBridge",
      background: "Images/Backgrounds/Garden/garden5.png",
      foreground: ""
    },
    gardenTable: {
      name: "GardenTable",
      background: "Images/Backgrounds/Garden/garden6.png",
      foreground: ""
    },
    gardenGreenhouse: {
      name: "GardenGreenhouse",
      background: "Images/Backgrounds/Garden/garden7.png",
      foreground: ""
    },
    schoolOutsideDay: {
      name: "schoolOutsideDay",
      background: "Images/Backgrounds/school-outside-twilight.jpg",
      foreground: ""
    }
  };

  export let characters = {
    narrator: {
      name: "Narrator"
    },
    stranger: {
      name: "???"
    },
    protagonist: {
      name: "Du",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Images/Characters/Protagonist/protagonist-angry.png",
        happy: "Images/Characters/Protagonist/protagonist-happy.png",
        happyEyesClosed: "Images/Characters/Protagonist/protagonist-happy-2.png",
        sad: "Images/Characters/Protagonist/protagonist-sad.png",
        neutral: "Images/Characters/Protagonist/protagonist-neutral.png",
        scared: "Images/Characters/Protagonist/protagonist-scared.png",
        mean: "Images/Characters/Protagonist/protagonist-mean.png"
      }
    },
    kira: {
      name: "Kira",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Images/Characters/Kira/kira-angry.png",
        happy: "Images/Characters/Kira/kira-happy.png",
        sad: "Images/Characters/Kira/kira-sad.png",
        neutral: "Images/Characters/Kira/kira-neutral.png",
        scared: "Images/Characters/Kira/protagonist-scared.png"
      }
    }
  };

  export let dataForSave = {
    nameProtagonist: ""
    };

  window.addEventListener("load", start);
  function start(_event: Event): void {

    //Menü
    gameMenu = ƒS.Menu.create(menuInGame, buttonFunctionalities, "menuInGame"); //hier CSS Klasse angeben

    let scenes: ƒS.Scenes = [
      // { scene: Scene, name: "Scene" },
      { scene: firstScene, name: "firstScene"}
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
  
}

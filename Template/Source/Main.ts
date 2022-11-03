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
    // themes
    // SFX
    drop: "../Audio/SFX/drop.mp3"
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
      name: "Protagonist",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Images/Characters/Protagonist/protagonist-angry.png",
        happy: "Images/Characters/Protagonist/protagonist-happy.png",
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
        angry: "../Images/Characters/Kira/kira-angry.png",
        happy: "../Images/Characters/Kira/kira-happy.png",
        sad: "../Images/Characters/Kira/kira-sad.png",
        neutral: "../Images/Characters/Kira/kira-neutral.png",
        scared: "../Images/Characters/Kira/protagonist-scared.png"
      }
    }
  };

  export let dataForSave = {
    nameProtagonist: ""
    };

  window.addEventListener("load", start);
  function start(_event: Event): void {
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

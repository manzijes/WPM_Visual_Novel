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
    drop: "../Audio/drop.mp3"
  };

  export let locations = {
    classroomDay: {
      name: "classroom day",
      background: "",
      foreground: ""
    }
  };

  export let characters = {
    narrator: {
      name: ""
    },
    protagonist: {
      name: "Protagonist",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "../Images/Characters/Protagonist/protagonist-neutral.png",
        happy: "",
        upset: ""
      }
    },
    aisaka: {
      name: "Aisaka",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "../Images/Characters/",
        happy: "",
        upset: ""
      }
    }
  };

  export let dataForSave = {
    nameProtagonist: ""
    };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" },
      { scene: exampleScene, name: "example"}
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}
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
    schoolBell: "Audio/SFX/schoolBell.wav",
    sparkle: "Audio/SFX/sparkle.mp3"
  };

  export let locations = {
    schoolOutsideDay: {
      name: "schoolOutsideDay",
      background: "Images/Backgrounds/school-outside-day.jpg",
      foreground: ""
    },
    schoolOutsideTwilight: {
      name: "schoolOutsideTwilight",
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
        scared: "Images/Characters/Kira/kira-scared.png",
        unsure: "Images/Characters/Kira/kira-unsure.png",
        smiling: "Images/Characters/Kira/kira-smiling.png"
      }
    },
    lucia: {
      name: "Lucia",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "Images/Characters/Lucia/lucia-neutral.png",
        sad: "Images/Characters/Lucia/lucia-sad.png",
        smiling: "Images/Characters/Lucia/lucia-smiling.png",
        surprised: "Images/Characters/Lucia/lucia-surprised.png",
        unsure: "Images/Characters/Lucia/lucia-unsure.png",
        upset: "Images/Characters/Lucia/lucia-upset.png",
      }
    }
  };

  export let dataForSave = {
    nameProtagonist: "",

    // visibility of buttons in menu
    toggleSuspectsButton: false,

    // visibility of elements in notes window
    solasPortrait: false,
    solasMotive: false,
    solasOpportunity: false,

    eliseoPortrait: false,
    eliseoMotive: false,
    eliseoOpportunity: false,

    luciaPortrait: false,
    luciaMotive: false,
    luciaOpportunity: false,
    };

  export function updateNotes() {
    if(dataForSave.toggleSuspectsButton == true){
      let toggleSuspects = document.getElementById("toggleSuspects");
      toggleSuspects.style.visibility = "visible";
      toggleSuspects.style.opacity = "1";
    }
  }

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

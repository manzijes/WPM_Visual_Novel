namespace Template {

    //  MENU - Audio functions

    export let volume: number = 1.0;
    export let volumeBeforeMute: number = 1.0;

    export function incrementSound(): void {
        if (volume >= 100)
            return;
        volume += 0.2;
        ƒS.Sound.setMasterVolume(volume);
    }

    export function decrementSound(): void {
        if (volume <= 0)
            return;
        volume -= 0.2;
        ƒS.Sound.setMasterVolume(volume);
    }

    export function toggleSound(): void {
        let toggleSound = document.getElementById("toggleSound");
        toggleSound.classList.toggle("active");
        if (volume > 0) {
            volumeBeforeMute = volume;
            volume = 0;
            ƒS.Sound.setMasterVolume(volume);
        }
        else {
            ƒS.Sound.setMasterVolume(volumeBeforeMute);
            volume = volumeBeforeMute;
        }
    }

    export function showSuspects(): void {
        let toggleSuspects = document.getElementById("toggleSuspects");
        toggleSuspects.classList.toggle("active");

        var element = document.getElementById("suspects");
        element.classList.toggle("hidden");
    }

    export function showCredits(): void {
        ƒS.Text.setClass("credits hint");
        let credits =
            "<h1>Credits</h1>\
            <table>\
            <tr>\
                <td>Falling Leaves CSS</td>\
                <td>Aaron Griffin, https://codepen.io/uurrnn/pen/WNLVdN</td>\
            </tr>\
            </table>\
          ";
        ƒS.Text.print(credits);
    };

    export function showShortcuts(): void {
        ƒS.Text.setClass("shortcuts hint");
        let shortcuts =
            "<h1>Shortcuts</h1>\
        <table>\
          <tr>\
            <td>Menu (open/close)</td>\
            <td>M</td>\
          </tr>\
          <tr>\
            <td>Full-screen Windows</td>\
            <td>f11</td>\
          </tr>\
          <tr>\
            <td>Full-screen Mac</td>\
            <td>Ctrl - Cmd – F </td>\
          </tr>\
          <tr>\
            <td>Save</td>\
            <td>S</td>\
          </tr>\
          <tr>\
            <td>Load</td>\
            <td>L</td>\
          </tr>\
        </table>\
        ";
        ƒS.Text.print(shortcuts);
    };

    // MENU

    export let menuInGame = {
        save: "Save",
        load: "Load",
        // close: "Close",
        credits: "Credits",
        shortcuts: "Shortcuts",
        toggleSound: "Sound",
        turnUpVolume: "+",
        turnDownVolume: "-",
        toggleSuspects: "Notes",
        toggleAquiredPages: "Indizien"
    };

    export let gameMenu: ƒS.Menu;

    // true = offen; false = geschlossen
    export let menuOpen: boolean = true;

    export async function buttonFunctionalities(_option: string): Promise<void> {
        console.log(_option);
        switch (_option) {
            case menuInGame.save:
                await ƒS.Progress.save();
                break;
            case menuInGame.load:
                await ƒS.Progress.load();
                break;
            // case menuInGame.close:
            //     gameMenu.close();
            //     menuOpen = false;
            //     break;
            case menuInGame.credits:
                ƒS.Sound.play(sound.select, 2, false);
                showCredits();
                break;
            case menuInGame.shortcuts:
                ƒS.Sound.play(sound.select, 2, false);
                showShortcuts();
                break;
            case menuInGame.toggleSound:
                ƒS.Sound.play(sound.select, 2, false);
                toggleSound();
                break;
            case menuInGame.turnUpVolume:
                ƒS.Sound.play(sound.select, 2, false);
                incrementSound();
                break;
            case menuInGame.turnDownVolume:
                ƒS.Sound.play(sound.select, 2, false);
                decrementSound();
                break;
            case menuInGame.toggleSuspects:
                ƒS.Sound.play(sound.select, 2, false);
                showSuspects();
                break;
            case menuInGame.toggleAquiredPages:
                ƒS.Sound.play(sound.select, 2, false);
                showAquiredPages();
                break;


        }
    }

    // Shortcuts
    document.addEventListener("keydown", hndKeyPress);
    export async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
        switch (_event.code) {
            case ƒ.KEYBOARD_CODE.S:
                await ƒS.Progress.save();
                break;
            case ƒ.KEYBOARD_CODE.L:
                await ƒS.Progress.load();
                break;
            // case ƒ.KEYBOARD_CODE.F9:
            //     if (dataForSave.toggleSuspectsButton == true) {
            //         showSuspects();
            //     }
            //     break;
            // case ƒ.KEYBOARD_CODE.F8:
            //     if (dataForSave.toggleSuspectsButton == true) {
            //         showAquiredPages();
            //     }
            //     break;
            case ƒ.KEYBOARD_CODE.M:
                if (menuOpen) {
                    console.log("Schließen");
                    gameMenu.close();
                    menuOpen = false;
                }
                else {
                    console.log("Öffnen");
                    gameMenu.open();
                    menuOpen = true;
                }
                break;
        }
    }

}
namespace BehindTheScenes {
    export async function coverChapterTwo(): ƒS.SceneReturn {
        
        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true);
        updateNotes();

        await ƒS.Location.show(chapterCovers.chapter);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        let pages = "<h1>Kapitel 2: Hinweise</h1><h5>Der nächste Tag ist angebrochen und die Zeit drängt. Du hast bereits einen ersten Eindruck gewonnen, weiter so!</h5><h5>Dein nächster Schritt wird es sein, Hinweise zu sammeln, die dich zum richtigen Täter führen. Am Ende dieses Kapitels wirst du deine Entscheidung treffen.</h5>";
         let close = { done: "Weiter" };
         let choice: string;
         ƒS.Text.setClass("coverTitle");
         do {
             ƒS.Text.print(pages);
             choice = await ƒS.Menu.getInput(close, "pageclose");
         } while (choice != close.done);
         
         ƒS.Text.close();

        ƒS.Sound.play(sound.pageflip, 0.5, false);

        }
    
}
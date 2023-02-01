namespace Template {
    export async function coverChapterTwo(): ƒS.SceneReturn {
        
        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true); 
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true); 
        updateNotes();

        let narratorText = {
            Narrator: {
                T0001: "Klicke, um fortzufahren."
            }
        };

        await ƒS.Location.show(chapterCovers.chapterTwo);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        await ƒS.Speech.tell(null, narratorText.Narrator.T0001);

        ƒS.Sound.play(sound.pageflip, 0.5, false); 
        }
    
}
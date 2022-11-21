namespace Template {
    export async function coverChapterOne(): ƒS.SceneReturn {

        dataForSave.toggleSuspectsButton = true;
        updateNotes();

        let narratorText = {
            Narrator: {
                T0001: "Klicke weiter, um fortzufahren."
            }
        };

        ƒS.Sound.fade(sound.mainMusic, 1, 0.1, true); 
        await ƒS.Location.show(chapterCovers.chapterOne);
        await ƒS.update(2);

        await ƒS.Speech.tell(characters.narrator, narratorText.Narrator.T0001);
        await ƒS.update(0.5);
        ƒS.Sound.play(sound.pageflip, 0.5, false); 
    
    }
}
namespace BehindTheScenes {
    export async function coverChapterOne(): ƒS.SceneReturn {

        ƒS.Sound.fade(sound.splashMusic, 0, 0.0, true);
        ƒS.Sound.fade(sound.mainMusic, 0.5, 0.1, true);
        updateNotes();

        await ƒS.Location.show(chapterCovers.chapter);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);

        closeSuspects();

        let pages = "<h1>Kapitel 1: Motive</h1><h5>Der erste Schritt deiner Nachforschungen wird es sein, die Verdächtigen zu befragen und mögliche Motive für die Sabotage des Theaterstücks auszumachen. Sobald du eine wertvolle Information erhältst, wird sie automatisch zu deinen Notizen oder Indizien hinzugefügt.</h5><h5>Wenn du mit anderen interagierst, kann es passieren, dass du ihnen basierend auf deinen Antworten oder Entscheidungen mehr oder weniger sympathisch wirst. Aber keine Angst, Kira mag dich immer!</h5>";
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
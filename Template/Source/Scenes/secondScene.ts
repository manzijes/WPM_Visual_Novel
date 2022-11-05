namespace Template {

    export async function secondScene(): ƒS.SceneReturn {
        console.log("first scene");

        let protagonistText = {
            Protagonist: {
                T0001: "Ich werde das ganz systematisch angehen... Wer hat Zugang zum Theaterraum? Das sind meine Verdächtigen.",
                T0002: "Da wäre zunächst Kira. Kira kümmert sich um die Kostüme. Aber wieso sollte sie mich um Hilfe bitten, wenn sie selbst die Täterin ist?",
                T0003: "Dann gibt es da noch Eliseo."
            }
        };

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.schoolOutsideDay);
        await ƒS.update(2);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0001);

    }

}
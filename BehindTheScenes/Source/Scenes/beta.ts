namespace BehindTheScenes {
    export async function beta(): ƒS.SceneReturn {

        let kiraText = {
            Kira: {
                T0001: "Ich wollte mich noch einmal bei dir bedanken. Heute Abend findet die Premiere statt. Alle sind schon ganz aufgeregt."
            }
        };
        
        await ƒS.Location.show(locations.schoolOutsideDay);
        await ƒS.update(transition.fizzle.duration, transition.fizzle.alpha, transition.fizzle.edge);
        
        await ƒS.Character.show(characters.kira, characters.kira.pose.neutral, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0001);
        await ƒS.update(0.5);

        // ITEM
        await ƒS.Character.animate(items.ticket, items.ticket.pose.center, itemAnimation());
        await ƒS.Character.hide(items.ticket);
        await ƒS.update(1);
}
}
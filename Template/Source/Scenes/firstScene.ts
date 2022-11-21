namespace Template {
    export async function firstScene(): ƒS.SceneReturn {

        function revealNotes() {
            dataForSave.toggleSuspectsButton = true;
        }

        let strangerText = {
            Stranger: {
                T0001: "Entschuldigung!",
                T0002: "Es tut mir leid, falls ich dich störe, aber ich brauche deine Hilfe. Du bist Schulsprecherin, richtig?",
                T0003: "Ich weiß nicht, wie ich es erklären soll, aber... Ich glaube, jemand sabotiert den Theaterclub.",
            }
        };
        
        let narratorText = {
            Narrator: {
                T0001: "Die Glocke zur Pause schlägt. Endlich! Du schlenderst nach draußen und erfreust dich an der Nachmittagssonne.",
                T0002: "Du drehst dich um und erblickst ein Mädchen, das dir bekannt vorkommt. Sie geht nicht in deine Klasse, also woher...?",
                T0003: "Du schaust zu, wie Kira im Schulgebäude verschwindet."
            }
        };

        let kiraText = {
            Kira: {
                T0001: "Ja, das stimmt.",
                T0001_2: "Wir stecken gerade mitten in den Proben für die nächste Aufführung. Aber seit ein paar Tagen läuft alles schief.",
                T0002: "Zum Beispiel letztens. Da verschwanden alle Skripte aus unserem Clubraum. Oder gestern, da fanden wir plötzlich eines der Kostüme im Müll. Es war total zerschnitten! Jemand hat es auf uns abgesehen, denkst du nicht?",
                T0003: "Ich hätte mich eigentlich an den ersten Schulsprecher gewandt, aber er ist selbst ein Mitglied. Es ist besser, wenn sich ein Außenstehender damit beschäftigt.",
                T0003_2: "Ich weiß zufällig, dass du nicht auf den Kopf gefallen bist. Immer, wenn ich dich sehe, steckt deine Nase in einem Buch... Und auf der Ziellinie zur Jahrgangsbesten bist du auch. Also, was sagst du?",
                T0004: "Ehm... Es hatten soweit ich weiß nur drei Schüler freien Zugang zum Theaterraum und damit Gelegenheit zu der Sabotage...",
                T0004_2: "Zunächst Solas. Er ist der Autor des Stücks.",
                T0004_3: "Dann ist da Atlas, der Schulsprecher. Er spielt die männliche Hauptrolle.",
                T0004_4: "Und zuletzt gibt es noch Lucia. Sie kümmert sich um die Technik.",
                T0005: "Vielen Dank! Dann sehe ich dich dort."
            }
        }
        
        let protagonistText = {
            Protagonist: {
                T0001: "Das beste am Schultag ist die Pause... Kein Lehrer scheucht dich über den Sportplatz oder zwingt dich, an der Tafel Matheaufgaben zu lösen.",
                T0002: "Ich kann mich entspannen und lesen, die Stimmen der anderen verschmelzen zu einem Rauschen im Hintergrund. Himmlisch!",
                T0003: "Nanu? Spricht da jemand mit mir?",
                T0004: "Stellvertretende Schulsprecherin, wenn man es genau nimmt. Was gibt’s denn?",
                T0005: "Natürlich. Jetzt weiß ich, woher ich dich kenne. Du bist Kira, die Leiterin des Theaterclubs.",
                T0006: "Wie meinst du das?",
                T0007: "Das klingt in der Tat seltsam. Aber wieso kommst du damit zu mir?",
                T0008: "Weißt du, der Schülerrat ist eigentlich keine Detektei... Egal. Natürlich helfe ich dir, das gehört zu meinen Pflichten dazu. Du siehst selber ganz helle aus, hast du bereits Verdächtige?",
                T0009: "In Ordnung. Ich begleite dich zu der Probe heute und nehme die drei mal unter die Lupe.",
                T0010: "Komisch. Was für einen Grund sollte jemand haben, eine Theateraufführung zu sabotieren? Naja, das finde ich bald heraus... Am besten, ich mache mir Notizen wie ein richtiger Ermittler.",
                T0011: "Perfekt! Wenn ich gut organisiert bin, dann ist die Sache im Handumdrehen gegessen."
            }
        };

        ƒS.Speech.hide();

        ƒS.Sound.play(sound.schoolBell, 0.5, false); 
        ƒS.Sound.fade(sound.mainMusic, 1, 0.1, true); 

        await ƒS.Location.show(locations.schoolOutsideTwilight);
        await ƒS.update(2);

        await ƒS.Speech.tell(characters.narrator, narratorText.Narrator.T0001);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        ƒS.Sound.play(sound.birds, 0.2, true); 
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0001);

        await ƒS.Character.hide(characters.protagonist);
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happyEyesClosed, ƒS.positionPercent(25, 97));
        await ƒS.update(0.25);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0002);

        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.stranger, strangerText.Stranger.T0001);

        await ƒS.Character.hide(characters.protagonist);
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.surprised, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0003);

        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.kira, characters.kira.pose.neutral, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.narrator, narratorText.Narrator.T0002);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.stranger, strangerText.Stranger.T0002);

        await ƒS.Character.hide(characters.kira);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0004);

        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.kira, characters.kira.pose.neutral, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.stranger, strangerText.Stranger.T0003);

        await ƒS.Character.hide(characters.kira);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0005);

        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.kira, characters.kira.pose.smiling, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0001);
        await ƒS.update(0.5);
        await ƒS.Character.hide(characters.kira);
        await ƒS.Character.show(characters.kira, characters.kira.pose.neutral, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0001_2);

        await ƒS.Character.hide(characters.kira);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.surprised, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0006);

        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.kira, characters.kira.pose.unsure, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0002);

        await ƒS.Character.hide(characters.kira);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0007);

        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.kira, characters.kira.pose.neutral, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0003);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0003_2);

        await ƒS.Character.hide(characters.kira);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0008);

        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.kira, characters.kira.pose.neutral, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0004);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0004_2);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0004_3);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0004_4);

        await ƒS.Character.hide(characters.kira);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0009);

        await ƒS.Character.hide(characters.protagonist);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.kira, characters.kira.pose.neutral, ƒS.positionPercent(75, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.kira, kiraText.Kira.T0005);

        await ƒS.Character.hide(characters.kira);
        await ƒS.update(0.5);
  
        await ƒS.Speech.tell(characters.narrator, narratorText.Narrator.T0003);
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.neutral, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0010);

        revealNotes();
        updateNotes();
        ƒS.Sound.play(sound.sparkle, 0.5, false); 

        await ƒS.update(2.5);
        await ƒS.Character.hide(characters.protagonist);
        await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.happyEyesClosed, ƒS.positionPercent(25, 97));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.protagonist, protagonistText.Protagonist.T0011);

        await ƒS.Character.hide(characters.protagonist);
        ƒS.Speech.hide();
        await ƒS.update(0);

        
        // Praktikum Session zu Dialog Options 

        // let dialogoptions = {
        //     iSayYes: "Ich sage ja. Daher wird pickedMe true werden.",
        //     iSayOk: "Okay",
        //     iSayNo: "No",
        //     iSayMaybe: "Maybe"
        // };

        // let dialogoptionsElement = await ƒS.Menu.getInput(dialogoptions, "dialogoptions");

        // let pickedYes: boolean;
        // let pickedOkay: boolean;
        // let pickedNo: boolean;
        // let pickedMaybe: boolean;

        // switch (dialogoptionsElement) {
        //     case dialogoptions.iSayYes:
        //         pickedYes = true;
        //         console.log(pickedYes);
        //         await ƒS.Speech.tell(characters.protagonist, "Ja");
        //         break;
        //     case dialogoptions.iSayNo:
        //         pickedNo = true;
        //         console.log(pickedNo);
        //         await ƒS.Speech.tell(characters.protagonist, "Nein");
        //         break;
        //     case dialogoptions.iSayOk:
        //         pickedOkay = true;
        //         console.log(pickedOkay);
        //         await ƒS.Speech.tell(characters.protagonist, "Okay");
        //         break;
        //     case dialogoptions.iSayMaybe:
        //         pickedMaybe = true;
        //         console.log(pickedMaybe);
        //         await ƒS.Speech.tell(characters.protagonist, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,");
        //         break;
        //     }


    }
}
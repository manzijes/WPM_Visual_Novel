namespace Template {
    export async function animationExampleScene(): ƒS.SceneReturn {

        await ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.happy, animation());
        await ƒS.update();

    }
}
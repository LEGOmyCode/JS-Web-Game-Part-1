function newImage(source, positionLeft, positionBottom){
    let name = document.createElement('img');
    name.src = source;
    name.style.position = 'fixed';
    name.style.left = positionLeft;
    name.style.bottom = positionBottom;
    document.body.append(name);
    return name;

}

function newItem(source, positionLeft, positionBottom){
    let item = document.createElement('img')
    item.src = source
    item.style.position = 'fixed'
    item.style.left = positionLeft
    item.style.bottom = positionBottom
    document.body.append(item)
    item.addEventListener('dblclick', function(){
    item.remove()
})
}

/*let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)
//I copyed the complete lines of code above and edited out the greenCharacter and replaced with pinetree. I guess i can't do hyphens in naming.
let pinetree = document.createElement('img')
pinetree.src = 'assets/pine-tree.png'
pinetree.style.position = 'fixed'
pinetree.style.left = '450px'
pinetree.style.bottom = '200px'
document.body.append(pinetree)
*/

newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');
newItem('assets/sword.png', '500px', '405px');
newItem('assets/sheild.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');





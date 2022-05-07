function newImage(source){
    let name = document.createElement('img')
    name.src = source
    name.style.position = 'fixed'
    name.style.left = '100px'
    name.style.bottom = '100px'
    document.body.append(name)
    return name

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

newImage('assets/green-character.gif');
newImage('assets/pine-tree.png');
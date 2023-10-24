// get a DOM reference to the main image
let heroImage = document.getElementById("hero-image");
// get a DOM ref to the collection of mennu items
let links = document.getElementsByClassName("menu-item");
// set the initial selection index
console.log(links)
let selectedIndex = 0;
// load the initial image into heroImage
heroImage.src = links [selectedIndex].dataset.image;
// listen to the transition end
heroImage.ontransitionend = onTransitionEnd;
// loop through all of the menu items
for(let i = 0; i < links.length; i++) {
    // assign the click handler for each 
    links[i].onclick = handleClick;
}
// click handler
function handleClick(event){
    // get the index of the clicked item
   let newIndex = returnItemIndex(links, event.currentTarget);
//    if the index is diferrent from the exisiting selection
   if(newIndex != selectedIndex){
    // update the index selection
    selectedIndex = newIndex;
    // fade out the heroImage (rewuires CSS transition)
    heroImage.style.opacity = 0;
   }
    console.log("click")

}
// handle end of transition
function onTransitionEnd(){
    // update the heroImage with the newly selected image
    // dataset.image is how we acess the custom HTML attribute 'data-image'
    heroImage.src = links[selectedIndex].dataset.image;
    // revert the opacity of the heroImge to make it visible 
    heroImage.style.opacity = 1;
}
// find the index of an item in a given collection
function returnItemIndex(collection, item){
    // loop through the collection
    for(let i = 0; i < collection.length; i++){
    // if the current item == the item we are looking for, a match was found!
        if(collection[i]==item){
            // pass back the index of the found item
            return i;
        }
            // the loop will only run until the index is found
    }
    // if the item was not found, the next line will execute
    console.error("cannot find item in collection");
}
// Step 1: click button
// Step 2: retrieve h4 tag that has like count
// Step 3: increment like number count by 1
// Step 4: store new count into h4 tag



function like(btn) {
    var span = btn.parentNode.querySelector("span"); // look in the parent node (div) and use queryselector to find span
    var count = parseInt(span.innerText); // give us our number
    count++; // add 1 to the number 
    span.innerText = count; // store the new number in variable count
}
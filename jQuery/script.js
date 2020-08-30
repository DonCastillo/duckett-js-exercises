$(function(){

    /**
     *      .html()         - get/set html markup or content into a selection 
     *      .text()         - get/set text node into a selection
     *      .replaceWith()  - replace matched elements into a new element
     *      .remove()       - remove matched elements
     */
    let el = $('#list #three');
    el.html(`<em> ${el.text()} </em>`);

    $('.items').replaceWith('<li class="items">--</li>');
    $('.items:last-of-type').remove();
    
    /**
     *      .before()       - insert an element before the matched elements
     *      .after()        - insert an element after the matched elements
     *      .prepend()      - insert an element after the opening bracket of the matched element
     *      .append()       - insert an element before the closing bracket of the matched element
     */
    let oneTwoThree = $('li#one, li#two, li#three');
    $('li').before('<li class="items before-node">BEFORE NODE</li>');
    $('.before-node').css({ 'background-color': 'lightblue', 'font-style': 'italic'})
    oneTwoThree.after('<li class="items after-node">AFTER NODE</li>');
    $('.after-node').css({ 'background-color': 'pink', 'font-weight': 'bold' });
    
    $.each(oneTwoThree, function (indexInArray, valueOfElement) { 
        valueOfElement.prepend( `${indexInArray + 1}). ` );
        valueOfElement.append( ` .(${indexInArray + 1}` );
    });

});
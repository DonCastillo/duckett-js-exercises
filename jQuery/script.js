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

    let newItems = '';
    let itemWords = ['six', 'seven', 'eight', 'nine', 'ten'];
    for( const numWord of itemWords ){
        //console.log(numWord);
        newItems += `<li class="items" id="${numWord}">${ numWord[0].toUpperCase() + numWord.substr(1) }</li>`
    }
    $('#list').append(newItems);

    /**
     *      .clone()        - creates a copy of the matched element
     *      .detach()       - removes element and keeps a copy of them in the memory
     *      .empty()        - removes child nodes and descendants from any in the matched set
     *      .unwrap()       - removes parents of matched set, leaving matched elements
     *      .add()          - add new content to the items in the existing selection and places the resulting content in a new jQuery object
     */

    el = $('#six');
    clonedEl = el.clone();
    clonedEl.remove();
    el.detach();
    $('#list').append(el);

    let seven = $('#seven');
    seven.append('<div style="background-color:yellow">Inside seven</div>');
    seven.append('<div style="background-color:orange">Another Inside seven</div>');
    seven.empty();

    let eight = $('#eight');
    eight.append('<div id="inside-eight" style="background-color:violet; margin:20px; padding:20px;">Inside Eight</div>');
    eight.find('#inside-eight').append('<div id="inside-inside-eight" style="background-color:turquoise; margin:20px; padding:20px;">Inside Inside Eight</div>');

    $('#inside-inside-eight').unwrap();
    //console.log($('#nine').add('<h1>Nine Inside</h1>'));

    /**
     *      .attr()         - get/set a specified attribute and its value
     *      .removeAttr()   - removes an attribute
     *      .addClass()     - add class
     *      .hasClass()     - does the element has this class? true/false
     *      .removeClass()  - remove class
     *      .css()          - set css style to a specific element
     */

     let nine = $('#nine');
     console.log(nine.attr('id'));  // displays id
     nine.attr('data-name', 'nine word');
     nine.removeAttr('id');
     nine.addClass('anotherclass');
     console.log(nine.hasClass('anotherclass')); // displays true
     nine.removeClass('anotherclass');
     console.log(nine.hasClass('anotherclass')); // displays false
     nine.css({
        'font-size': '30px',
        'font-weight': 'bolder',
        'text-align': 'center',
        'letter-spacing': '5rem'
    });

});
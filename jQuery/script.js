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
    $('#nine').add('<h1>Nine Inside</h1>');

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

    /**
     *      .find()         - all elements within current selection that match selector
     *      .closest()      - nearest ancestor (not just parent) that matches selector
     *      .parent()       - direct parent of current selection
     *      .parents()      - all parents of current selection (including direct parent, grandparents, great grandparents)
     *      .children()     - all children of current selection
     *      .siblings()     - all siblings of current selection
     *      .next()         - next sibling
     *      .nextAll()      - all subsequent siblings
     *      .prev()         - previous sibling
     *      .prevAll()      - all previous siblings
     */
    $('#content').find('#bottom').find('ul li.before-node').remove();
    $('li').closest('#content').css({'background-color': 'whitesmoke', 'padding': '25px'});
    $('#bottom').parent().css({'border': '1px solid black', 'margin-bottom': '40px'});
    console.log($('li').parents());
        /** displays:
         *      ul#planets
         *      div#bottom
         *      div#content
         *      ul#list
         *      div.container
         *      body
         *      html
         */
    console.log($('#list, #planets').children());   // displays combined children
    $('#top').siblings().css({'background-color': 'lightgrey'});
    let nextJupiter = $('#jupiter').next();
    let prevJupiter = $('#jupiter').prev();
    nextJupiter.css({'color': 'red'}); 
    prevJupiter.css({'color': 'blue'});
    nextJupiter.nextAll().prepend('&nbsp;&nbsp;&nbsp;&nbsp;');
    prevJupiter.prevAll().prepend('&nbsp;&nbsp;&nbsp;&nbsp;');


    /**
     *      .filter()           - finds elements in the matched set that in turn match a second selector
     *      .not() or :not()    - finds elements that do not match the selector
     *      .has() or :has()    - finds elements from the matched set that have a descendant that matches the selector
     *      .is()               - checks whether current selection matches a condition (returns a boolean)
     *      :contains()         - selects all elements that contain the text specified (parameter is case sensitive)
     */
    el = $('.items');
    el.css({'text-decoration': 'underline'});
    el.filter('.before-node').append('**');
    el.not('.before-node').not('#seven, #eight, #nine, #ten, #six, [data-name="nine word"]').append('<span>&nbsp;&nbsp;Not a Before Node</span>');
    // can add multiple elements in the selector separated by comma 
    $('.items:not(.after-node #seven, #eight, #nine, #ten, #six)').prepend('<span>//</span>');
    $('#list li').has('span').append('  (with nested )');
    console.log($('#list li').is('#list li'));  // returns true
    console.log($('#list').is('#planets')); // returns false
    $('#list li:contains("Three")').css({'text-align': 'right'});

    /**
     *      .eq()       - the element that matches the index number
     *      :lt()       - elements with an index less than the number specified
     *      :gt()       - elements with an index greater than the number specified
     */
    
    let thirdPlanet = $('#planets li').eq(3);
    thirdPlanet.text( thirdPlanet.text().toUpperCase() );

    let lessThanThird = $('#planets li:lt(3)');
    lessThanThird.each(function() { 
         $(this).text( $(this).text().toLowerCase() );
         $(this).css({'font-size': '20px', 'font-weight': 'bolder'});
    });

    let moreThanThird = $('#planets li:gt(3)');
    moreThanThird.each(function(){
        $(this).append(' $$$');
    });



});
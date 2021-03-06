console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];



// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {
  console.log("Trying to make middle earth.");
  const $newsection = $('<section></section>');
  $('body').append($newsection);
  for (i = 0; i < lands.length; i++) {
    const $arty = $('<article></article>', {id: 'lands-' + i});
    const $h1 = $('<h1></h1>');
    $h1.text(lands[i]);
    $newsection.append($arty);
    $arty.append($h1);
  }
};
// ============
// Chapter 2
// ============
const makeHobbits = () => {

  console.log('Make hobbits');
  const $newul = $('<ul></ul>');
  $('#lands-0').append($newul);
  for (i = 0; i < hobbits.length; i++){
    const $hobbit = $('<li>' + hobbits[i] + '</li>');
    $hobbit.addClass('hobbit');
    $newul.append($hobbit);
  }
};

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  const $newdiv = $('<div></div>', {id: 'the-ring'});
  $('.hobbit').append($newdiv);
};

// ============
// Chapter 4
// ============
const makeBaddies = () => {
  const $newul = $('<ul></ul>');
  $('#lands-2').append($newul);
  for (i = 0; i < baddies.length; i++){
    const $villain = $('<li>' + baddies[i] + '</li>');
    $villain.addClass('baddy');
    $newul.append($villain);
  } 
};

// ============
// Chapter 5
// ============
const makeBuddies = () => {
  const $newaside = $('<aside></aside>');
  $('section').append($newaside);
  const $newul = $('<ul></ul>');
  $newaside.append($newul);
  for (i = 0; i < buddies.length; i++){
    const $fellow = $('<li>' + buddies[i] + '</li>');
    $fellow.addClass('buddy');
    $newul.append($fellow);
  } 

};

// ============
// Chapter 6
// ============
const leaveTheShire = () => {
  $('#lands-1').append($('.hobbit'));
};

// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  $('.buddy').text(function () {
    return $(this).text().replace("Strider", "Aragorn"); 
});
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  const $newdiv = $('<div></div>', {id: 'the-fellowship'});
  const $h1 = $('<h1></h1>');
  $h1.text('The Fellowship');
  $newdiv.append($h1);
  $('section').append($newdiv);
  $newdiv.append($('.hobbit'));
  $newdiv.append($('.buddy'));

  // 1. create a new div with an id 'the-fellowship'

  // 2. add an h1 with the text 'The Fellowship' to this new div

  // 3. append the fellowship to middle-earth

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
    $('.buddy').text(function () {
    return $(this).text().replace("Grey", "White"); 
});
};


// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  alert('The Horn of Gondor has been blown!');
  $("li:contains('Boromir')").css('text-decoration', 'line-through');
  $("li:contains('Uruk-hai')").remove();
};

  // 1. create a pop-up alert that the horn of gondor has been blown

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  $('#lands-2').append($("li:contains('Frodo')"));
  $('#lands-2').append($("li:contains('Samwise')"));
  const $newdiv = $('<div></div>', {id: 'mount-doom'});
  $('#lands-2').append($($newdiv));
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {
  const $newdiv = $('<div></div>', {id: 'gollum'});
  $('#lands-2').append($($newdiv));
  $newdiv.append('#the-ring');
  $('#mount-doom').append($newdiv);

  // 1. Create a div with an id of 'gollum' and add it to Mordor

  // 2. Move the ring from Frodo and give it to Gollum

  // 3. Move Gollum into Mount Doom

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
  $('#gollum').remove();
  $('.baddy').remove();
  $('#lands-0').append($('.hobbit'));

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);

});

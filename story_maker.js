function makeStory() {
    // get form values (2 points)
    var band_kid1 = document.getElementById('band_kid1').value;
    var ed_verb1 = document.getElementById('ed_verb1').value;
    var adjective1 = document.getElementById('adjective1').value;
    var number1 = document.getElementById('number1').value;
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
    var verb1 = document.getElementById('verb1').value;
    var name3 = document.getElementById('name3').value;
    var name4 = document.getElementById('name4').value;
    var ing_verb1 = document.getElementById('ing_verb1').value;
    var adjective2 = document.getElementById('adjective2').value;
    var noun1 = document.getElementById('noun1').value;
    var staff1 = document.getElementById('staff1').value;
    var verb2 = document.getElementById('verb2').value;
    var staff2 = document.getElementById('staff2').value;
    var verb3 = document.getElementById('verb3').value;



    // Set title of story. Use at least one form value in the title. (2 points)
    var title = band_kid1 + "'s Band Camp Experiance!";


    // Build story. you can add as many paragraphs as you like. (3 points)
    var paragraph1 = "One day at band camp, we " + ed_verb1 + " for 4 hours straight. It was " + adjective1 + ". The whole staff joined in after " + number1 + " minutes. Even " + name1 + " was there. It all started because " + name2 + " thought it would be a good idea to " + verb1 + ". Soon " + name3 + " and " + name4 + " were on the " + adjective2 + " " + noun1 + ". No one expected " + staff1 + " to " + verb2 + " or for " + staff2 + " to " + verb3 + ".";



    // Display story by putting title & paragraphs into appropriate divs. (3 points)
  document.getElementById("bigtitle").style.fontFamily = "Impact,Charcoal,sans-serif";
  document.getElementById('title').innerHTML = title;
  document.getElementById('paragraph1').innerHTML = paragraph1;
  document.getElementById('picture').innerHTML = "<img src='trumpet.jpg'/>";

}

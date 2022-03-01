$(document).ready(function () {
    var friends = ['Torpus', 'Prominius', 'Salvo', 'Gaius', 'Gawain'];
    var places = ['Pleasure Barge', 'Hanging Garden', 'Bird Nest', 'Blockbuster Video', 'Olive Grove', 'Customs House', 'Killing Fields', 'Outback Stakehaus', 'Gogol Bordello', 'Barn of Forgotten Memories']
    var weapons = ['Heavy Equipment', 'Unwilling Participant', 'Deadly Massage Technique', 'Power of Positive Thinking', 'Floral Blade', 'Power of Suggestion', 'Vase of Snakes', 'Look that Can Kill', 'Criminal Instrument', 'Ironically Innocuous Item', 'Ripping Machine', 'Nefarious Hound', 'Regular Style Gun', 'Power of Music', 'A Distraction', 'Kindness', 'Heart Attack Gun, Which is Real', 'Expired Fish Oil', 'Unidentified Substance from a Dark Green Vial with a Skull and Crossbones', 'High-End Water Gun']


    for (var i = 1; i <= 100; i++) {
        var Accuse = $('<h3>Accusation ' + i + '<h3>');
        $(Accuse).appendTo($('#accusations'));
        $(Accuse).click(Alert(i));
    }



    function Alert(i) {
        var friend = friends[i % 5];
        var place = places[i % 10];
        var weapon = weapons[i % 20];
        function provideAlert() {
            alert('I accuse ' + friend + ' of murder in the ' + place + ' which he performed with the ' + weapon + '!');
        }
        return provideAlert;
    }
}); 
game = {
    maulHP: 100
};

var showMaulHP = document.getElementById("maulhealth");
var showVaderHP = document.getElementById("vaderhealth");

// Darth Vader Health
var darthVaderHP = 130;
// Darth Maul Health
var darthMaulHP = 100;

// Maul Counter
var counter = 25;

// Vader's Attack
var vaderAttack = 30;

    // Attack Button Action
    $("body").on("click", ".button-container button", function () {

        var attackValue = ($(this).attr("counter"));
        attackValue = parseInt(attackValue);

        // Shows Health depleting
        showMaulHP.innerHTML = darthMaulHP;
        showVaderHP.innerHTML = darthVaderHP;

        // Attack Message
        alert("You did " + vaderAttack + " damage!");
        console.log(darthMaulHP);
        console.log(darthVaderHP);

        // Increase Attack
        vaderAttack;
        // decrease HP
        darthMaulHP -= vaderAttack;
        
        darthVaderHP -= counter;

        // Winning and Losing
        if (darthMaulHP <= 0) {
            alert("You Won!");
        } 
    

    });


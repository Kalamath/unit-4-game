var showMaulHP = document.getElementById("maulhealth");
        var showVaderHP = document.getElementById("vaderhealth");
        var showStatus = document.getElementById("selChar");

        // Darth Vader Health
        var darthVaderHP = 130;
        // Vader's Attack
        var vaderAttack = 15;
        // Vader Counter
        var vaderCounter = 20;

        // Darth Maul Health
        var darthMaulHP = 100;
        // Maul Counter
        var maulCounter = 25;

        // Progress Bar
        var villianPercent = darthMaulHP * 100 / darthMaulHP;
        $(".progress-bar").width(darthMaulHP + "%").text(Math.round(darthMaulHP) + "%");

        // Attack Button Action
        $("body").on("click", ".button-container button", function () {

            var attackValue = ($(this).attr("maulCounter"));
            attackValue = parseInt(attackValue);

            var darthMaul = $(".other-character");

            
            // Attack Message
            showStatus.innerHTML = "You did " + vaderAttack + " damage!";
            console.log(darthMaulHP);
            console.log(darthVaderHP);
            
            // Increase Attack
            vaderAttack += vaderCounter;
            // decrease HP
            darthMaulHP -= vaderAttack;
            // Hits Vader with a counter
            darthVaderHP -= maulCounter;
            
            // Shows Health depleting
            showMaulHP.innerHTML = darthMaulHP;
            showVaderHP.innerHTML = darthVaderHP;

            // Winning and Losing
            if (darthMaulHP >= 0) {
                console.log("Attack Again");
            } else {
                showStatus.innerHTML = "YOU WIN";
                darthMaul.animate({ opacity: "0.00" });
            }


        });
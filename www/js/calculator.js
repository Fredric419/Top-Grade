function ralert(msg) {  // Show Alert on Mobile Device
  navigator.notification.alert(
      msg,  // message
      alert_dismiss,      // callback
      '',                 // title
      ''                  // buttonName
  );
}

function alert_dismiss() {
}

function is_mobile() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(ua) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4))
}

function calc_final(cg, tg, fp) { // Calculate Final Grade Before Final
  // cg : Current Grade
  // tg : Desired grade
  // fp : Percentage Final Exam is Worth
    if (isNaN(cg)||cg == null) {
        ralert("Your current grade doesn't look right. Please put in a number for your current grade.");
        return
    }
    if (isNaN(tg) || tg == null) {
        ralert("Your target goal grade doesn't look right. Please put in a number for your target grade.");
        return
    }
    if (isNaN(fp) || fp == null) {
        ralert("Your final percentage doesn't look right. Please put in a number for your final percentage.");
        return
    }
    if (fp < 0) {
        ralert("Your final percentage doesn't look right. It can't be less than zero.");
        return
    }
    if (fp == 0) {
        ralert("Your final percentage doesn't look right. It can't be zero.");
        return
    }
    if (fp > 100) {
        ralert("Your final percentage doesn't look right. It can't be more than 100%.");
        return
    }

    var temp = (100 * tg - (100 - fp) * cg) / fp;
    var end = generate_end(temp, cg);
    return "You " + (temp <= .7 ? "only" : "will") + " need to score at least " + Math.round(temp * 100) / 100 + "% on your final to get a " + tg + "% overall. " + end;
}

function calc_overall(cg, fg, fp) {   // Calculate Final Grade After Final
  // cg : Current Grade
  // tg : Desired grade
  // fp : Percentage Final Exam is Worth
    if (isNaN(cg) || cg == null) {
        ralert("Your current grade doesn't look right. Please put in a number for your current grade.");
        return
    }
    if (isNaN(fg) || fg == null) {
        ralert("Your final exam grade grade doesn't look right. Please put in a number for your final exam grade.");
        return
    }
    if (isNaN(fp) || fp == null) {
        ralert("Your final percentage doesn't look right. Please put in a number for your final percentage.");
        return
    }
    if (fp < 0) {
        ralert("Your final percentage doesn't look right. It can't be less than zero.");
        return
    }
    if (fp == 0) {
        ralert("Your final percentage doesn't look right. It can't be zero.");
        return
    }
    if (fp > 100) {
        ralert("Your final percentage doesn't look right. It can't be more than 100%.");
        return
    }
    var temp = (fp * fg + (100 - fp) * cg) / 100;
    var end = generate_end_end(temp, cg);
    return ("Your overall course grade is " + Math.round(temp * 100) / 100 + "%. " + end)
}

function calc_test(cg, tg, tw, tn, ta, fr) { // Calculate Final Counting as Test
  // cg : Current Grade
  // tg : Desired grade
  // tw : Test Weight
  // tn : Number of Tests Taken
  // ta : Test Average
  // fr : Number of Tests the Final Exam Equals
    if (isNaN(cg) || cg == null) {
        ralert("Your current grade doesn't look right. Please put in a number for your current grade.");
        return
    }
    if (isNaN(tg) || tg == null) {
        ralert("Your target goal grade doesn't look right. Please put in a number for your target grade.");
        return
    }
    if (isNaN(tw) || tw == null) {
        ralert("Your test percentage doesn't look right. Please put in a number for your test percentage.");
        return
    }
    if (tw < 0) {
        ralert("Your test percentage doesn't look right. It can't be less than zero.");
        return
    }
    if (tw == 0) {
        ralert("Your test percentage doesn't look right. It can't be zero.");
        return
    }
    if (tw > 100) {
        ralert("Your test percentage doesn't look right. It can't be more than 100%.");
        return
    }
    if (isNaN(tn) || tn == null) {
        ralert("Your number of tests doesn't look right. Please put in a number for your number of tests.");
        return
    }
    if (tn < 0) {
        ralert("Your number of tests doesn't look right. It can't be less than zero.");
        return
    }
    if (isNaN(ta) || ta == null) {
        ralert("Your test average doesn't look right. Please put in a number for your test average.");
        return
    }
    if (isNaN(fr) || fr == null) {
        ralert("The number of tests that your final is worth doesn't look right. Please put in a number for your final/test ratio.");
        return
    }
    if (fr < 0) {
        ralert("The number of tests that your final is worth doesn't look right. It can't be less than zero.");
        return
    }
    if (fr == 0) {
        ralert("The number of tests that your final is worth doesn't look right. It can't be zero.");
        return
    }
    if (tw == 100) {
        var nt = 0
    } else {
        var nt = 100 * (cg - ta * (tw / 100)) / (100 - tw)
    }
    var temp = (tg - nt * (100 - tw) / 100) / (tw / 100) * (tn / fr + 1) - tn / fr * ta;
    var end = generate_end(temp, cg);

    return "You " + (temp <= .7 ? "only" : "will") + " need to score at least " + Math.round(temp * 100) / 100 + "% on your final test to get a " + tg + "% overall. " + end
}

function calc_points(tp, fp) { // Calculate Class Points System
  // tp : Total Points
  // fp : Final Exam Points
    if (isNaN(tp) || tp == null) {
        ralert("Your number of total points doesn't look right. Please put in a number for your number of total points.");
        return
    }
    if (tp < 0) {
        ralert("Your number of total points doesn't look right. It can't be less than zero!");
        return
    }
    if (isNaN(fp) || fp == null) {
        ralert("Your number of points your final is worth doesn't look right. Please put in a number for your number of points your final is worth.");
        return
    }
    if (fp < 0) {
        ralert("Your number of points your final is worth doesn't look right. It can't be less than zero!");
        return
    }
    return "Your final is worth " + Math.round(fp / tp * 1e4) / 100 + "% of your grade." + (fp > tp ? " That doesn't look right, but I'll trust what you said." : "")
}

function calc_parts(cg, tg, fp, fn, pt) { // Calculate 2+ parts to my final
  // cg : Current Grade
  // tg : Desired grade
  // fp : Percentage Final Exam is Worth
  // fn : Number of Parts on the Final
  // pt : Taken Final Parts
    if (isNaN(cg) || cg == null) {
        ralert("Your current grade doesn't look right. Please put in a number for your current grade.");
        return
    }
    if (isNaN(tg) || tg == null) {
        ralert("Your target goal grade doesn't look right. Please put in a number for your target grade.");
        return
    }
    if (isNaN(fp) || fp == null) {
        ralert("Your final percentage doesn't look right. Please put in a number for your final percentage.");
        return
    }
    if (fp < 0) {
        ralert("Your final percentage doesn't look right. It can't be less than zero.");
        return
    }
    if (fp == 0) {
        ralert("Your final percentage doesn't look right. It can't be zero.");
        return
    }
    if (fp > 100) {
        ralert("Your final percentage doesn't look right. It can't be more than 100%.");
        return
    }
    if (isNaN(fn) || fn == null) {
        ralert("Your number of final exam parts doesn't look right. Please put in a number for your number of final exam parts.");
        return
    }
    if (fn < 0) {
        ralert("Your number of final exam parts doesn't look right. It can't be less than zero.");
        return
    }
    if (fn == 0) {
        ralert("Your number of final exam parts doesn't look right. It can't be zero.");
        return
    }
    if (fn > 8) {
        ralert("Your number of final exam parts doesn't look right. It can't be more than 8.");
        return
    }
    if (isNaN(pt) || pt == null) {
        ralert("Your number of final exam parts taken doesn't look right. Please put in a number for your number of final exam parts taken.");
        return
    }
    if (pt < 0) {
        ralert("Your number of final exam parts taken doesn't look right. It can't be less than zero.");
        return
    }
    if (pt == 0) {
        ralert("Your number of final exam parts taken doesn't look right. It can't be zero. (Hint: You can just use the normal calculator in this case.)");
        return
    }
    if (pt > 8) {
        ralert("Your number of final exam parts taken doesn't look right. It can't be more than 8.");
        return
    }
    var worth_taken = 0;
    var worth_untaken = 0;
    var score_sofar = 0;
    for (var i = 0; i < fn; i++) {
        var input = parseFloat(document.getElementById("finalpartsid_" + i).value);
        if (isNaN(input) || input == null) {
            ralert("The number of points that the " + i + formalize_number(i) + " part of your final is worth doesn't look right. Please put in a number for each part.");
            return
        }
        if (input < 0) {
            ralert("The number of points that the " + i + formalize_number(i) + " part of your final is worth doesn't look right. It can't be less than zero.");
            return
        }
        if (input == 0) {
            ralert("The number of points that the " + i + formalize_number(i) + " part of your final is worth doesn't look right. It can't be zero.");
            return
        }
        if (i < pt) {
            worth_taken += input
        } else {
            worth_untaken += input
        }
    }
    for (var i = 0; i < pt; i++) {
        var input = parseFloat(document.getElementById("takenpartsid_" + i).value);
        if (isNaN(input) || input == null) {
            ralert("The score that you got on the " + i + formalize_number(i) + " part of your final doesn't look right. Please put in a number for each part.");
            return
        }
        score_sofar += input
    }
    if (pt > fn) {
        ralert("You cannot have taken more parts of your final than there are parts. You said that you took " + pt + " parts, but there are only " + fn + " parts total!");
        return
    }
    if (pt == fn) {
        ralert("You can't use this calculator if you have already taken all the parts of your final");
        return
    }
    var temp = (100 * tg - (100 - fp) * cg) / fp;
    var ffp = 100 * worth_untaken / (worth_untaken + worth_taken);
    var fcg = 100 * score_sofar / worth_taken;
    var tmp = (100 * temp - (100 - ffp) * fcg) / ffp;
    var end = generate_end(temp, cg);
    return "You " + (temp <= .7 ? "only" : "will") + " need to score at least " + Math.round(tmp * 100) / 100 + "% on the remaining parts of your final to get a " + tg + "% overall. " + end
}

function calc_dropped(cg, tg, tp, tn, ta, td, tf, fp) {
  // cg : Current Grade
  // tg : Desired grade
  // tp : Test Weight
  // tn : Number of Tests Taken
  // ta : Test Average
  // td : Number of Lowest Tests Scores Dropped
  // tf : Final Test Weight
  // fp : Number of Test(s) Final Exam is Worth
    if (isNaN(cg) || cg == null) {
        ralert("Your current grade doesn't look right. Please put in a number for your current grade.");
        return
    }
    if (isNaN(tg) || tg == null) {
        ralert("Your target goal grade doesn't look right. Please put in a number for your target grade.");
        return
    }
    if (isNaN(tp) || tp == null) {
        ralert("Your test percentage doesn't look right. Please put in a number for your test percentage.");
        return
    }
    if (tp < 0) {
        ralert("Your test percentage doesn't look right. It can't be less than zero.");
        return
    }
    if (tp == 0) {
        ralert("Your test percentage doesn't look right. It can't be zero.");
        return
    }
    if (tp > 100) {
        ralert("Your test percentage doesn't look right. It can't be more than 100%.");
        return
    }
    if (isNaN(tn) || tn == null) {
        ralert("Your number of tests doesn't look right. Please put in a number for your number of tests.");
        return
    }
    if (tn < 0) {
        ralert("Your number of tests doesn't look right. It can't be less than zero.");
        return
    }
    if (isNaN(ta) || ta == null) {
        ralert("Your test average doesn't look right. Please put in a number for your test average.");
        return
    }
    if (isNaN(td) || td == null) {
        ralert("Your number of tests dropped doesn't look right. Please put in a number for the number of tests dropped.");
        return
    }
    if (td < 0) {
        ralert("Your number of tests dropped doesn't look right. It can't be less than zero.");
        return
    }
    if (td > tn) {
        ralert("Your number of tests dropped doesn't look right. It can't be more than the total number of tests you've taken.");
        return
    }
    if (isNaN(tf) || tf == null) {
        ralert("Your number of tests that your final is worth doesn't look right. Please put in a number for the number of tests your final is worth (it can be 0).");
        return
    }
    if (tf < 0) {
        ralert("Your number of tests that your final is worth doesn't look right. It can't be less than zero.");
        return
    }
    if (isNaN(fp) || fp == null) {
        ralert("Your final percentage doesn't look right. Please put in a number for your final percentage.");
        return
    }
    if (fp < 0) {
        ralert("Your final percentage doesn't look right. It can't be less than zero.");
        return
    }
    if (fp > 100) {
        ralert("Your final percentage doesn't look right. It can't be more than 100%.");
        return
    }
    if (tp + fp > 100) {
        ralert("Your test category and final exam category add up to more than 100%. Please check that those numbers are correct.");
        return
    }
    if (tf == 0 && fp == 0) {
        ralert("Your final doesn't count for anything, if it's worth 0 tests and 0% of your grade. Please check that those numbers are correct.");
        return
    }
    var test_equivalence = tn * ta;
    for (var i = 0; i < td; i++) {
        var input = parseFloat(document.getElementById("droptestid_" + i).value);
        if (isNaN(input) || input == null) {
            if (i == 1) {
                ralert("The score that you got on the lowest test doesn't look right. Please put in an actual score.")
            } else {
                ralert("The score that you got on the " + i + formalize_number(i) + " lowest test doesn't look right. Please put in an actual score.")
            }
            return
        }
        test_equivalence -= input
    }
    var nontest, nondropped;
    if (fp + tp < 100) {
        nontest = cg / 100 * (1 - fp / 100) - ta / 100 * tp / 100
    } else {
        nontest = 0
    }
    if (tn - td > 0) {
        nondropped = test_equivalence / 100 * tp / 100 / (tn - td + tf)
    } else {
        nondropped = 0
    }
    var temp = 100 * (tg / 100 - nondropped - nontest) / (fp / 100 + tp / 100 * tf / (tn - td + tf));
    var end = generate_end(temp, cg);
    return "You will need to score at least " + Math.round(temp * 100) / 100 + "% on your final test to get a " + tg + "% overall. " + end
}

function generate_end_end(temp, trend) {
    if (temp > 100) {
        return "Congratulations! Now don't take such an easy class next time."
    } else if (trend > 84) {
        if (temp > 95) {
            return "Nice job. I'm sure you worked hard for that one."
        } else if (temp > 92.5) {
            return "Nice job. You made it!"
        } else if (temp > 89.5) {
            return "Whew, how close was that?"
        } else if (temp > 88) {
            return "That was really close."
        } else {
            return "Better luck next time!"
        }
    } else if (trend > 74) {
        if (temp > 82.5) {
            return "Nice job. You made it!"
        } else if (temp > 79.5) {
            return "Whew, how close was that?"
        } else if (temp > 78) {
            return "Well, you gave it your best shot."
        } else {
            return "Better luck next time!"
        }
    } else if (trend > 64) {
        if (temp > 72.5) {
            return "Nice job. You made it!"
        } else if (temp > 69.5) {
            return "Whew, how close was that?"
        } else if (temp > 68) {
            return "Well, you gave it your best shot."
        } else {
            return "Better luck next time!"
        }
    } else {
        if (temp > 60) {
            return "Maybe you could do better next time."
        } else if (temp > 50) {
            return "Hey, at least it's more than half."
        } else {
            return "Oh, you.."
        }
    }
}

function pick_random(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function generate_end(temp, trend) {
    if (temp > 100) {
        return pick_random(["Let's hope there's extra credit!", "Sorry!"])
    } else if (temp > 95) {
        return pick_random(["You can do it!", "Good luck!", "I believe in you!"])
    } else if (temp > 90) {
        return pick_random(["You can do it!", "You should study a whole lot.", "Get started studying!", "Good luck!"])
    } else {
        if (trend > 84) {
            if (temp > 85) {
                return "I think you'll do just fine."
            } else if (temp > 80) {
                return "You will do fine."
            } else if (temp > 70) {
                return "Hey, it could be worse."
            }
        } else if (trend > 74) {
            if (temp > 85) {
                return "You should start studying."
            } else if (temp > 80) {
                return "Hey, it could be worse."
            } else if (temp > 70) {
                return "Good luck!"
            }
        } else if (trend > 64) {
            if (temp > 75) {
                return "You should start studying."
            } else if (temp > 70) {
                return "Hey, it could be worse."
            } else if (temp > 60) {
                return "Good luck!"
            }
        } else if (trend > 54) {
            if (temp > 65) {
                return "You should start studying."
            } else if (temp > 60) {
                return "Hey, it could be worse."
            } else if (temp > 50) {
                return "Good luck!"
            }
        } else if (trend > 44) {
            if (temp > 55) {
                return "You should start studying."
            } else if (temp > 50) {
                return "Hey, it could be worse."
            } else if (temp > 40) {
                return "Good luck!"
            }
        } else {
            return "Good luck!"
        }
        return pick_random(["You don't even need to bother studying.", "Have fun (doing other things)!", "Maybe you can just draw a flower on the test or something.", "Nice job!"])
    }
}

function formalize_number(n) {
    n = parseInt(n);
    if (n % 10 == 1) {
        return "st"
    } else if (n % 10 == 2) {
        return "nd"
    } else if (n % 10 == 3) {
        return "rd"
    } else {
        return "th"
    }
}

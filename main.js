let name1 = prompt("Ismingizni kiriting").toLowerCase();
let letter = prompt("Bironta harif kiriting").toLowerCase();
let test = name1.includes(letter)
if (test) {
    alert("Ismingizni kiritgan " + letter + " harif ismingizda mavjud...");

} else {
    alert("Ismingizni kiritgan " + letter + " harf mavjuud emas...");

}




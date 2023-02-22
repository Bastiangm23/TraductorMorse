const alfabeto = {"A": ".-",
            "B": "-...",
            "C": "-.-.",
            "D": "-..",
            "E": ".",
            "F": "..-.",
            "G": "--.",
            "H": "....",
            "I": "..",
            "J": ".---",
            "K": "-.-",
            "L": ".-..",
            "M": "--",
            "N": "-.",
            "O": "---",
            "P": ".--.",
            "Q": "--.-",
            "R": ".-.",
            "S": "...",
            "T": "-",
            "U": "..-",
            "V": "...-",
            "W": ".--",
            "X": "-..-",
            "Y": "-.--",
            "Z": "--..",
            "Á": ".--.-",
            "É": "..-..",
            "Ñ": "--.--",
            "Ó": "---.",
            "0": "-----",
            "1": ".----",
            "2": "..---",
            "3": "...--",
            "4": "....-",
            "5": ".....",
            "6": "-....",
            "7": "--...",
            "8": "---..",
            "9": "----.",
            ".": ".-.-.-",
            ",": "--..--",
            "?": "..--..",
            "'": ".----.",
            "!": "-.-.--",
            "/": "-..-.",
            "(": "-.--.",
            ")": "-.--.-",
            "&": ".-...",
            ":": "---...",
            ";": "-.-.-.",
            "=": "-...-",
            "+": ".-.-.",
            "-": "-....-",
            "_": "..--.-",
            '"': ".-..-.",
            "$": "...-..-",
            "@": ".--.-.",
            "¿": "..-.-",
            "¡": "--...-",
            " ": "/"}

const texto_sin_traducir = document.querySelector("#texto_sin_traducir")
const texto_traducido = document.querySelector("#texto_traducido")

function traducir(){
    console.log("Entrando a la funcion 'traducir'")
    let contador = 0;
    let texto = "";

    for (let index = 0; index < (texto_sin_traducir.value).length; index++) {
        console.log((texto_sin_traducir.value).charAt(contador));
        console.log(alfabeto[((texto_sin_traducir.value).charAt(contador)).toUpperCase()]);
        texto = texto + alfabeto[((texto_sin_traducir.value).charAt(contador)).toUpperCase()]
        contador++; 
    }

    texto_traducido.value = texto;
    

}


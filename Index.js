while (true) {

        let anyNumber = Math.round(Math.random() * 1000);
        console.log("Мы загадали ",anyNumber);

        let clientNumber = prompt("Отгадайте число от 0 до 1000");

       console.log("Клиент ответил ",clientNumber);
        if (isNaN(clientNumber)){
                alert("Вы ввели не число")
        }
        else if (clientNumber === null) {
               break;
        }
           
        else if (clientNumber == anyNumber) {
            alert("Ура вы угадали!!!!!")
        } 
        else if (clientNumber > anyNumber) {
            alert("Увы....загаданное число было меньше")
        } 
        else if (clientNumber < anyNumber) {
            alert("Увы....загаданное число было больше")
        } 
    }
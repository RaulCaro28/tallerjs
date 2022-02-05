//ejercicio 3
let pizza=prompt("seleccione el tamaño de la pizza:\n personal \n mediana \n familiar");

if(pizza=="personal"){

    let sabor=prompt("que sabor?:\n pollo champiñón \n hawaiana \n carnes");
  
    switch(sabor){

        case "pollo champiñón":
            let ingredientes=prompt("la prefieres?:\n con queso \n sin queso "); 
            if(ingredientes=="con queso") {
                let ingredientes2=prompt("con?: \n salsa \n  borde de bocadillo ")
                switch(ingredientes2){
                    case "salsa":
                        alert("su selección fue pizza " + pizza + " " + sabor + " " + ingredientes + " " + ingredientes2);
                        break;
                    case "borde de bocadillo":
                        alert("su selección fue pizza " + pizza + " " + sabor + " " + ingredientes + " " + ingredientes2);
                        break; 
            
                    }
            } 

            if (ingredientes=="sin queso") {
            let ingredientes2=prompt("con?: \n salsa \n borde de bocadillo ")
            switch(ingredientes2){
                case "salsa":
                    alert("su selección fue pizza " + pizza + " " + sabor + " " + ingredientes + " " + ingredientes2);
                    break;
                case "borde de bocadillo":
                    alert(`su selección fue pizza ${pizza} ${sabor} ${ingredientes} ${ingredientes2}`);
                    break; 
        
                    }
            }
        
            break;

            
     

        case "carnes":
            pizza=prompt("que sabor?:\n vegetariana \n carne y pollo ");   
            break;

    }
}

if(pizza=="mediana") {

    console.log("prueba1")

}

if(pizza=="familiar") {
    console.log("prueba2")
}


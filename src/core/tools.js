const isNumber = number => {
    let dato = formatAmount(number);
    let valoresAceptados = /^[0-9]+$/;
    if (dato.indexOf(".") === -1 ){
        if (dato.match(valoresAceptados)){
            return true;
        }else{
            return false;
        }
    }else{
        let particion = dato.split(".");
        if (particion[0].match(valoresAceptados) || particion[0]==""){
            if (particion[1].match(valoresAceptados)){
                return true;
            }else {
                return false;
            }
        }else{
            return false;
        }
    }
}

const formatAmount = (amount) => {
    let formatAmount = amount.replace(/[$.]/g, "");
    let newAmount = formatAmount.replace(/[$,]/g, ".");
    return parseFloat(newAmount) != NaN ? parseFloat(newAmount) : '';
};

module.exports = { formatAmount, isNumber };
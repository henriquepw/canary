const humidity1 = ["Determinar a interrupção de qualquer atividade ao ar livre",
"Determinar a suspensão de atividades que exijam aglomerações de pessoas em recintos fechados",
"Durante as tardes, manter com umidade os ambientes internos, principalmente ambientes onde há crianças e idosos",
"Usar soro fisiológico para as narinas e colírio para os olhos, para evitar  ressecamento desse órgãos",
"Beba bastante água para se manter hidratado"];

const humidity2 = ["Tenha cuidado ao praticar exercícios físicos e trabalhos ao ar livre;",
"Evitar aglomerações em ambientes fechados;",
"Busque usar soro fisiológico para as narinas e colírio para os olhos, para evitar o ressecamento desses órgãos.",];

const humidity3 = ["Evite praticar exercícios físicos ao ar livre;",
"Umidifique o ambiente através de vaporizadores, toalhas molhadas, recipientes com água;",
"Sempre que possível permaneça em locais protegidos do sol, em áreas vegetadas, etc;",
"Consuma água à vontade."];

const humidity4 = ["Nível de umidade ideal para o organismo do ser humano;",
"Pratique exercícios físicos ao ar livre a vontade;"];

const humidity5= ["Utilizar desumidificadores de ar em sua casa;",
"Pisos de cerâmica e janelas tendem a ficar molhados com a alta umidade, portanto, cuidado para não sofrer um acidente;",
"Fungos se proliferam mais facilmente com a alta umidade;",
"O risco de alergias e infecções respiratórias aumenta, use máscaras ou um pano na frente da boca para respirar;",
"Evite praticar exercícios físicos, com a alta umidade o corpo não consegue dissipar o calor através do suor, podendo fazer com que você comece a passar mal;"];

function humidity(humidity){
    let messages = [];
    if(humidity < 12){
        messages.push(humidity1);
    }else if(humidity < 20){
        messages.push(humidity2);
    }else if(humidity < 40){
        messages.push(humidity3);
    }else if(humidity < 80){
        messages.push(humidity4);
    }else 
        messages.push(humidity5);
    return messages ;
}

function temperature(temperature){
    return ["temperature"];
}

function co(co){
    return ["co"];
}

function co2(co2){
    return ["co2"];
}

function nh3(nh3){
    return ["nh3"];
}
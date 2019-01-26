import { colors } from "./common";

const facePropsSmile = {
    name: "smile-o",
    size: 125,
    color: colors.smile_o
};
const facePropsMeh = {
    name: "meh-o",
    size: 125,
    color: colors.meh_o
};
const facePropsFrown = {
    name: "frown-o",
    size: 125,
    color: colors.frown_o
};


const humidity1 = ["Determinar a interrupção de qualquer atividade ao ar livre\n\n",
"Determinar a suspensão de atividades que exijam aglomerações de pessoas em recintos fechados\n\n",
"Durante as tardes, manter com umidade os ambientes internos, principalmente ambientes onde há crianças e idosos\n\n",
"Usar soro fisiológico para as narinas e colírio para os olhos, para evitar  ressecamento desse órgãos\n\n",
"Beba bastante água para se manter hidratado\n\n"];

const humidity2 = ["Tenha cuidado ao praticar exercícios físicos e trabalhos ao ar livre;\n\n",
"Evitar aglomerações em ambientes fechados;\n\n",
"Busque usar soro fisiológico para as narinas e colírio para os olhos, para evitar o ressecamento desses órgãos.\n\n",];

const humidity3 = ["Evite praticar exercícios físicos ao ar livre;\n\n",
"Umidifique o ambiente através de vaporizadores, toalhas molhadas, recipientes com água;\n\n",
"Sempre que possível permaneça em locais protegidos do sol, em áreas vegetadas, etc;\n\n",
"Consuma água à vontade.\n\n"];

const humidity4 = ["Nível de umidade ideal para o organismo do ser humano;\n\n",
"Pratique exercícios físicos ao ar livre a vontade;\n\n"];

const humidity5= ["Utilizar desumidificadores de ar em sua casa;\n\n",
"Pisos de cerâmica e janelas tendem a ficar molhados com a alta umidade, portanto, cuidado para não sofrer um acidente;\n\n",
"Fungos se proliferam mais facilmente com a alta umidade;\n\n",
"O risco de alergias e infecções respiratórias aumenta, use máscaras ou um pano na frente da boca para respirar;\n\n",
"Evite praticar exercícios físicos, com a alta umidade o corpo não consegue dissipar o calor através do suor, podendo fazer com que você comece a passar mal;\n\n"];

function humidity(humidity){
    let messages = [];
    if(humidity < 12){
        messages = {face: facePropsFrown, messages: humidity1};
    }else if(humidity < 20){
        messages = {face: facePropsFrown, messages: humidity2};
    }else if(humidity < 40){
        messages = {face: facePropsMeh, messages: humidity3};
    }else if(humidity < 80){
        messages = {face: facePropsSmile, messages: humidity4};
    }else 
        messages = {face: facePropsMeh, messages: humidity5};
    return messages ;
}

function temperature(temperature){
    return {face: facePropsSmile, messages: ["temperature"]};
}

function co(co){
    return {face: facePropsSmile, messages: ["co"]};
}

function co2(co2){
    return {face: facePropsSmile, messages: ["co2"]};
}

function nh3(nh3){
    return {face: facePropsSmile, messages: ["nh3"]};
}

export { 
    humidity, 
    temperature, 
    co, 
    co2, 
    nh3};
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

const humidity5 = ["Utilizar desumidificadores de ar em sua casa;\n\n",
    "Pisos de cerâmica e janelas tendem a ficar molhados com a alta umidade, portanto, cuidado para não sofrer um acidente;\n\n",
    "Fungos se proliferam mais facilmente com a alta umidade;\n\n",
    "O risco de alergias e infecções respiratórias aumenta, use máscaras ou um pano na frente da boca para respirar;\n\n",
    "Evite praticar exercícios físicos, com a alta umidade o corpo não consegue dissipar o calor através do suor, podendo fazer com que você comece a passar mal;\n\n"];

const carb1 = ["Evite a inalação desse gás, visto que ele pode causar dores de cabeça, confusão e náusea;\n\n",
    "Após alguns minutos pode causar taquicardia, respiração acelerada, vertigens, sonolência e visão borrosa;\n\n",
    "Em exposição intensa pode causar desmaio, convulsão e e até a morte;\n\n",
    "A exposição continua a baixos niveis desse gás pode conduzir a depressão nervosa, confusão e perda de memória.\n\n"];

const carb2 = ["O canário não detectou monóxido de carbono no ambiente.\n\n"];

const amonia = ["O amoníaco é um gás perigoso e extremamente prejudicial a saúde, de maneira alguma permaneça em ambientes onde esse gás está presente;\n\n",
    "A inalação desse gás pode causar aumento da pressão sanguínea, irritação da pele, e vias respiratórias, tosse, e dor pulmonar além de queimaduras da mucosa nasal, faringe e laringe;\n\n",
    "Ao ser ingerido causa dificuldades respiratórias, queimadura da mucosa nasal, faringe e laringe, edema pulmonar;\n\n",
    "Em contato direto com a pele, esse gás ocasiona dor, vesiculação e em quantidades mais altas necrose dos tecidos e queimaduras profundas;\n\n",
    "Em contato com os olhos causa irritação ocular, com concentrações maiores desse gás pode causar onjuntivite, erosão da córnea, e cegueira temporária ou permanente;\n\n",
    "Sua ingestão causa náuseas, vómitos e inchaço nos lábios, boca e laringe.\n\n"]

const amonia2 = ["O canário não detectou amoníaco no ambiente.\n\n"];

const diCar = ["A inalação continua desse gás causa o aparecimento de doenças respiratórias e cardiovasculares principalmente em idosos e crianças;\n\n",
    "Alguns dos sintomas são maior incidência de asma e bronquite, aumento das crises de asma e desconforto torácico, limitação funcional;\n\n",
    "Além dos efeitos no ser humano, a alta concentração desse gás na atmosfera causa desequilibrio ambiental;\n\n",
    "Algumas das consequências desse gás no ambiente são o aumento da temperatura, degradação de ecossistemas e paisagens, derretimento das calotas polares, etc.\n\n"];

const diCar2 = ["O canário não detectou dióxido de carbono no ambiente.\n\n"];


const temperature1 = ["Saia de casa apenas em casos de extrema necessidade;\n\n",
    "Caso seja necessario ir para o ambiente externo cubra todas as partes do seu corpo para que nada fique exposto ao vento frio;\n\n",
    "Em temperaturas tão baixas a exposição do corpo desprotegido ao ambiente pode levar ao congelamento das celulas epiteliais, podendo levar a morte em pouco tempo;\n\n"];

const temperature2 = ["Com a temperatura menor que zero busque manter-se agasalhado e em ambientes internos e aquecidos;\n\n",
    "Não entre em contato com a água fria para que não sofra de hipotermia;\n\n",
    "Liquidos começam a congelar nessas temperaturas, tenha cuidados com seus olhos e com os liquidos que ingere.\n\n"];

const temperature3 = ["Nossa habilidade manual começa perder eficiência;\n\n",
    "A sensibilidade ao toque é comprometida;\n\n",
    "Mantenha-se agasalhado em ambientes externos;\n\n",
    "Evite praticar exercicios físicos visto que a exposição ao ar frio pode causar alergias, sinusite e aumentar a incidência de doenças respiratórias.\n\n"];

const temperature4 = ["Temperatura ideal para o ser humano.\n\n"];

const temperature5 = ["Possível fadiga em casos de exposição prolongada e atividade física.\n\n"];

const temperature6 = ["Pode causar câimbras, esgotamento e insolação para exposições prolongadas e atividade física;\n\n",
    "Evite praticar atividades físicas em locais abertos por longos períodos de tempo;\n\n",
    "Procure constantemente ingerir líquidos para manter-se hidratado.\n\n"];

const temperature7 = ["Câimbras, insolação, e esgotamento prováveis;\n\n",
    "Possibilidade de dano cerebral (AVC) para exposições prolongadas principalmente em idosos e crianças;\n\n",
    "Evite praticar qualquer tipo de atividade física;\n\n",
    "Mantenha-se em ambientes cobertos e arejados;\n\n",
    "A ingestão de líquidos é indispensável.\n\n"];

const temperature8 = ["Insolação e Acidente Vascular Cerebral (AVC) iminente;\n\n",
    "Evite sair de casa e não pratique nenhum tipo de atividade física;\n\n",
    "Procure manter-se sempre hidratado.\n\n"];

function humidity(humidity) {
    let messages = [];
    if (humidity < 12) {
        messages = { face: facePropsFrown, messages: humidity1 };
    } else if (humidity < 20) {
        messages = { face: facePropsFrown, messages: humidity2 };
    } else if (humidity < 40) {
        messages = { face: facePropsMeh, messages: humidity3 };
    } else if (humidity < 80) {
        messages = { face: facePropsSmile, messages: humidity4 };
    } else
        messages = { face: facePropsMeh, messages: humidity5 };
    return messages;
}

function temperature(temperature) {
    let messages = [];
    if (temperature < -10) {
        messages = { face: facePropsMeh, messages: temperature1 };
    } else if (temperature < 0) {
        messages = { face: facePropsMeh, messages: temperature2 };
    } else if (temperature < 12) {
        messages = { face: facePropsMeh, messages: temperature3 };
    } else if (temperature < 27) {
        messages = { face: facePropsMeh, messages: temperature4 };
    } else if (temperature < 33) {
        messages = { face: facePropsMeh, messages: temperature5 };
    } else if (temperature < 42) {
        messages = { face: facePropsMeh, messages: temperature6 };
    } else if (temperature < 55) {
        messages = { face: facePropsMeh, messages: temperature7 };
    } else {
        messages = { face: facePropsMeh, messages: temperature8 };
    }
    return messages;
}

function co(co) {
    let messages = [];
    if (co == true) {
        messages = { face: facePropsFrown, messages: carb1 };
    } else {
        messages = { face: facePropsFrown, messages: carb2 };
    }
    return messages;
}

function co2(co2) {
    let messages = [];
    if (co2 == true) {
        messages = { face: facePropsFrown, messages: diCar };
    } else {
        messages = { face: facePropsFrown, messages: diCar2 };
    }
    return { face: facePropsSmile, messages: ["co2"] };
}

function nh3(nh3) {
    let messages = [];
    if (nh3 == true) {
        messages = { face: facePropsFrown, messages: amonia };
    } else {
        messages = { face: facePropsFrown, messages: amonia2 }
    }
    return messages;
}

export {
    humidity,
    temperature,
    co,
    co2,
    nh3
};
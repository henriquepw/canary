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

const humidity1 = [
  "Determinar a interrupção de qualquer atividade ao ar livre\n\n",
  "Determinar a suspensão de atividades que exijam aglomerações de pessoas em recintos fechados\n\n",
  "Durante as tardes, manter com umidade os ambientes internos, principalmente ambientes onde há crianças e idosos\n\n",
  "Usar soro fisiológico para as narinas e colírio para os olhos, para evitar  ressecamento desse órgãos\n\n",
  "Beba bastante água para se manter hidratado\n\n"
];

const humidity2 = [
  "Tenha cuidado ao praticar exercícios físicos e trabalhos ao ar livre;\n\n",
  "Evitar aglomerações em ambientes fechados;\n\n",
  "Busque usar soro fisiológico para as narinas e colírio para os olhos, para evitar o ressecamento desses órgãos.\n\n"
];

const humidity3 = [
  "Evite praticar exercícios físicos ao ar livre;\n\n",
  "Umidifique o ambiente através de vaporizadores, toalhas molhadas, recipientes com água;\n\n",
  "Sempre que possível permaneça em locais protegidos do sol, em áreas vegetadas, etc;\n\n",
  "Consuma água à vontade.\n\n"
];

const humidity4 = [
  "Nível de umidade ideal para o organismo do ser humano;\n\n",
  "Pratique exercícios físicos ao ar livre a vontade;\n\n"
];

const humidity5 = [
  "Utilizar desumidificadores de ar em sua casa;\n\n",
  "Pisos de cerâmica e janelas tendem a ficar molhados com a alta umidade, portanto, cuidado para não sofrer um acidente;\n\n",
  "Fungos se proliferam mais facilmente com a alta umidade;\n\n",
  "O risco de alergias e infecções respiratórias aumenta, use máscaras ou um pano na frente da boca para respirar;\n\n",
  "Evite praticar exercícios físicos, com a alta umidade o corpo não consegue dissipar o calor através do suor, podendo fazer com que você comece a passar mal;\n\n"
];

const carb1 = [
  "Não foram encontradas quantidades significativas de monóxido de carbono no ar;\n\n"
];

const carb2 = [
  "A inalação dessa quantidade de gás, pode causar dores de cabeça, confusão e náusea;\n\n",
  "Os sintomas pioram a conforme o tempo exposto ao gás; \n\n"
];

const carb3 = [
  "A inalação desse gás pode causar taquicardia, respiração acelerada, vertigens, visão borrosa e sonolência;\n\n"
];

const carb4 = [
  "Cuidado nessa quantidade a inalação do gás pode causar desmaio e convulsão prolongado a exposição ao gás;\n\n",
  "Eventualmente causa intoxicação grave no sistema nervoso central e no coração, possivelmente fatal;\n\n"
];

const amonia1 = ["Quantidade de amônia tolerável ao ser humano;\n\n"];

const amonia2 = ["Causa irritação nos olhos e nas mucosas;\n\n"];

const amonia3 = [
  "Causa queimação nas vias respiratórias, taquicardia e convulsões;\n\n"
];

const amonia4 = [
  "Pode causar lesões graves na córnea e na retina, levando a cegueira temporaria ou permanente de acordo com o tempo de exposição;\n\n",
  "Quando inalado, causa corrosão das vias respiratórias e lesões graves no pulmão, podendo levar a morte;\n\n"
];

const amonia5 = [
  "Essa concentração de amônia no ambiente é fatal caso inalada;\n\n"
];

const diCar1 = [
  "Concentrações de dióxido de carbono normais em ambientes externos;\n\n",
  "Não trás males a saúde humana;\n\n"
];

const diCar2 = [
  "Concentrações de dióxido de carbono normais em ambientes fechados mas com boa ventilação;\n\n",
  "Não trás males a saúde humana;\n\n"
];

const diCar3 = [
  "A inalação continua desse gás pode causar sonolência;\n\n",
  "É possível sentir o ambiente mais abafado;\n\n"
];

const diCar4 = [
  "Essa concentração de dióxido de carbono no ambiente pode causar o aparecimento de dores de cabeça, sonolência, baixa concentração, aumento da frequência cardíaca e náuseas;\n\n"
];

const diCar5 = [
  "Essa concentração de dióxido de carbono no ambiente pode causar desconforto torácico, limitação funcional e falta de ar"
];

const diCar6 = [
  "Concentração altamente prejudicial ao ser humano relacionada à privação de oxigênio."
];

const temperature1 = [
  "Saia de casa apenas em casos de extrema necessidade;\n\n",
  "Caso seja necessario ir para o ambiente externo cubra todas as partes do seu corpo para que nada fique exposto ao vento frio;\n\n",
  "Em temperaturas tão baixas a exposição do corpo desprotegido ao ambiente pode levar ao congelamento das celulas epiteliais, podendo levar a morte em pouco tempo;\n\n"
];

const temperature2 = [
  "Com a temperatura menor que zero busque manter-se agasalhado e em ambientes internos e aquecidos;\n\n",
  "Não entre em contato com a água fria para que não sofra de hipotermia;\n\n",
  "Liquidos começam a congelar nessas temperaturas, tenha cuidados com seus olhos e com os liquidos que ingere.\n\n"
];

const temperature3 = [
  "Nossa habilidade manual começa perder eficiência;\n\n",
  "A sensibilidade ao toque é comprometida;\n\n",
  "Mantenha-se agasalhado em ambientes externos;\n\n",
  "Evite praticar exercicios físicos visto que a exposição ao ar frio pode causar alergias, sinusite e aumentar a incidência de doenças respiratórias.\n\n"
];

const temperature4 = [
  "Temperatura ideal para o ser humano.\n\n",
  "A exposição prolongada a temperaturas mais baixas pode lhe causar dores nasais, espirros e tosse"
];

const temperature5 = [
  "Possível fadiga em casos de exposição prolongada e atividade física.\n\n"
];

const temperature6 = [
  "Câimbras, insolação, e esgotamento prováveis;\n\n",
  "Possibilidade de dano cerebral (AVC) para exposições prolongadas principalmente em idosos e crianças;\n\n",
  "Evite praticar qualquer tipo de atividade física;\n\n",
  "Mantenha-se em ambientes cobertos e arejados;\n\n",
  "A ingestão de líquidos é indispensável.\n\n"
];

function getHumidity(humidity) {
  let messages = [];

  if (humidity < 12) {
    messages = { face: facePropsFrown, messages: humidity1 };
  } else if (humidity < 20) {
    messages = { face: facePropsFrown, messages: humidity2 };
  } else if (humidity < 40) {
    messages = { face: facePropsMeh, messages: humidity3 };
  } else if (humidity < 80) {
    messages = { face: facePropsSmile, messages: humidity4 };
  } else {
    messages = { face: facePropsMeh, messages: humidity5 };
  }

  /*
    return
        humidity < 12 ?
            { face: facePropsFrown, messages: humidity1 }
        : humidity < 20 ?
            { face: facePropsFrown, messages: humidity2 }
        : humidity < 40 ?
            { face: facePropsMeh, messages: humidity3 }
        : humidity < 80 ?
            { face: facePropsSmile, messages: humidity4 }
        : { face: facePropsMeh, messages: humidity5 };
    */

  return messages;
}

function getTemperature(temperature) {
  let messages = [];

  if (temperature < -10) {
    messages = { face: facePropsFrown, messages: temperature1 };
  } else if (temperature < 0) {
    messages = { face: facePropsFrown, messages: temperature2 };
  } else if (temperature < 12) {
    messages = { face: facePropsMeh, messages: temperature3 };
  } else if (temperature < 26) {
    messages = { face: facePropsSmile, messages: temperature4 };
  } else if (temperature < 33) {
    messages = { face: facePropsMeh, messages: temperature5 };
  } else if (temperature < 42) {
    messages = { face: facePropsMeh, messages: temperature6 };
  }

  /*
    return
        temperature < -10 ?
            { face: facePropsFrown, messages: temperature1 }
        : temperature < 0 ?
            { face: facePropsFrown, messages: temperature2 }
        : temperature < 12 ?
            { face: facePropsMeh, messages: temperature3 }
        : temperature < 21 ?
            { face: facePropsMeh, messages: temperature4 }
        : temperature < 27 ?
            { face: facePropsSmile, messages: temperature5 }
        : temperature < 33 ?
            { face: facePropsMeh, messages: temperature6 }
        : temperature < 42 ?
            { face: facePropsMeh, messages: temperature7 }
        : temperature < 55 ?
            { face: facePropsFrown, messages: temperature8 }
        : { face: facePropsFrown, messages: temperature9 }
    */

  return messages;
}

function getCO(co) {
  let messages = [];

  if (co < 100) {
    messages = { face: facePropsSmile, messages: carb1 };
  } else if (co < 1000) {
    messages = { face: facePropsMeh, messages: carb2 };
  } else if (co < 2000) {
    messages = { face: facePropsFrown, messages: carb3 };
  } else {
    messages = { face: facePropsFrown, messages: carb4 };
  }

  /*
    return co
        ? { face: facePropsFrown, messages: carb1 }
        : { face: facePropsSmile, messages: carb2 }
    */

  return messages;
}

function getCO2(co2) {
  let messages = [];

  if (co2 < 400) {
    messages = { face: facePropsSmile, messages: diCar1 };
  } else if (co2 < 1000) {
    messages = { face: facePropsSmile, messages: diCar2 };
  } else if (co2 < 2000) {
    messages = { face: facePropsMeh, messages: diCar3 };
  } else if (co2 < 5000) {
    messages = { face: facePropsFrown, messages: diCar4 };
  } else if (co2 < 40000) {
    messages = { face: facePropsFrown, messages: diCar5 };
  } else {
    messages = { face: facePropsFrown, messages: diCar6 };
  }

  /*
    return co2
        ? { face: facePropsFrown, messages: diCar }
        : { face: facePropsSmile, messages: diCar2 }
    */

  return messages;
}

function getNH3(nh3) {
  let messages = [];

  if (nh3 < 35) {
    messages = { face: facePropsSmile, messages: amonia1 };
  } else if (nh3 < 200) {
    messages = { face: facePropsMeh, messages: amonia2 };
  } else if (nh3 < 1500) {
    messages = { face: facePropsFrown, messages: amonia3 };
  } else if (nh3 < 2500) {
    messages = { face: facePropsFrown, messages: amonia4 };
  } else {
    messages = { face: facePropsFrown, messages: amonia5 };
  }

  /*
    return nh3
        ? { face: facePropsFrown, messages: amonia }
        : { face: facePropsSmile, messages: amonia2 }
    */

  return messages;
}

export { getHumidity, getTemperature, getCO, getCO2, getNH3 };

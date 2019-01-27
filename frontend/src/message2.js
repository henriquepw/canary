const carb1 = ["Evite a inalação desse gás, visto que ele pode causar dores de cabeça, confusão e náusea;",
    "Após alguns minutos pode causar taquicardia, respiração acelerada, vertigens, sonolência e visão borrosa;",
    "Em exposição intensa pode causar desmaio, convulsão e e até a morte;",
    "A exposição continua a baixos niveis desse gás pode conduzir a depressão nervosa, confusão e perda de memória"];

const carb2 = ["O canário não detectou monóxido de carbono no ambiente."];

const amonia = ["O amoníaco é um gás perigoso e extremamente prejudicial a saúde, de maneira alguma permaneça em ambientes onde esse gás está presente",
    "A inalação desse gás pode causar aumento da pressão sanguínea, irritação da pele, e vias respiratórias, tosse, e dor pulmonar além de queimaduras da mucosa nasal, faringe e laringe;",
    "Ao ser ingerido causa dificuldades respiratórias, queimadura da mucosa nasal, faringe e laringe, edema pulmonar;",
    "Em contato direto com a pele, esse gás ocasiona dor, vesiculação e em quantidades mais altas necrose dos tecidos e queimaduras profundas;",
    "Em contato com os olhos causa irritação ocular, com concentrações maiores desse gás pode causar onjuntivite, erosão da córnea, e cegueira temporária ou permanente;",
    "Sua ingestão causa náuseas, vómitos e inchaço nos lábios, boca e laringe."]

const amonia2 = ["O canário não detectou amoníaco no ambiente."];

const diCar = ["A inalação continua desse gás causa o aparecimento de doenças respiratórias e cardiovasculares principalmente em idosos e crianças;",
    "Alguns dos sintomas são maior incidência de asma e bronquite, aumento das crises de asma e desconforto torácico, limitação funcional;",
    "Além dos efeitos no ser humano, a alta concentração desse gás na atmosfera causa desequilibrio ambiental;",
    "Algumas das consequências desse gás no ambiente são o aumento da temperatura, degradação de ecossistemas e paisagens, derretimento das calotas polares, etc."];

const diCar2 = ["O canário não detectou dióxido de carbono no ambiente."];


const temperature1 = ["Saia de casa apenas em casos de extrema necessidade",
    "Caso seja necessario ir para o ambiente externo cubra todas as partes do seu corpo para que nada fique exposto ao vento frio",
    "Em temperaturas tão baixas a exposição do corpo desprotegido ao ambiente pode levar ao congelamento das celulas epiteliais, podendo levar a morte em pouco tempo"];

const temperature2 = ["Com a temperatura menor que zero busque manter-se agasalhado e em ambientes internos e aquecidos;",
    "Não entre em contato com a água fria para que não sofra de hipotermia;",
    "Liquidos começam a congelar nessas temperaturas, tenha cuidados com seus olhos e com os liquidos que ingere."];

const temperature3 = ["Nossa habilidade manual começa perder eficiência;",
    "A sensibilidade ao toque é comprometida;",
    "Mantenha-se agasalhado em ambientes externos;",
    "Evite praticar exercicios físicos visto que a exposição ao ar frio pode causar alergias, sinusite e aumentar a incidência de doenças respiratórias."];

const temperature4 = ["Temperatura ideal para o ser humano"];

const temperature5 = ["Possível fadiga em casos de exposição prolongada e atividade física"];

const temperature6 = ["Pode causar câimbras, esgotamento e insolação para exposições prolongadas e atividade física;",
    "Evite praticar atividades físicas em locais abertos por longos períodos de tempo;",
    "Procure constantemente ingerir líquidos para manter-se hidratado."];

const temperature7 = ["Câimbras, insolação, e esgotamento prováveis;",
    "Possibilidade de dano cerebral (AVC) para exposições prolongadas principalmente em idosos e crianças;",
    "Evite praticar qualquer tipo de atividade física;",
    "Mantenha-se em ambientes cobertos e arejados",
    "A ingestão de líquidos é indispensável"];

const temperature8 = ["Insolação e Acidente Vascular Cerebral (AVC) iminente",
    "Evite sair de casa e não pratique nenhum tipo de atividade física",
    "Procure manter-se sempre hidratado"];

function humidity(humidity) {
    let messages = [];
    if (humidity < 12) {
        messages.push(humidity1);
    } else if (humidity < 20) {
        messages.push(humidity2);
    } else if (humidity < 40) {
        messages.push(humidity3);
    } else if (humidity < 80) {
        messages.push(humidity4);
    } else
        messages.push(humidity5);
    return messages;
}

function temperature(temperature) {
    let messages = [];
    if (temperature < -10) {
        messages.push(temperature1);
    } else if (temperature < 0) {
        messages.push(temperature2);
    } else if (temperature < 12) {
        messages.push(temperature3);
    } else if (temperature < 27) {
        messages.push(temperature4);
    } else if (temperature < 33) {
        messages.push(temperature5);
    } else if (temperature < 42) {
        messages.push(temperature6);
    } else if (temperature < 55) {
        messages.push(temperature7);
    } else {
        messages.push(temperature8);
    }
    return messages;
}

function co(co) {
    let messages = [];
    if (co == true) {
        messages.push(carb1);
    } else {
        messages.push(carb2);
    }
    return messages;
}

function co2(co2) {
    let messages = [];
    if (co2 == true) {
        messages.push(diCar);
    } else {
        messages.push(diCar2);
    }
    return messages;
}

function nh3(nh3) {
    let messages = [];
    if (nh3 == true) {
        messages.push(amonia);
    } else {
        messages.push(amonia2);
    }
    return messages;
}
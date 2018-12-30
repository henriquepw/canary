CREATE TABLE persona(
    id SERIAL,
    nome TEXT,
    email TEXT,
    password VARCHAR(32),
    PRIMARY KEY(id),
    UNIQUE(email)
);

CREATE TABLE canary(
    id SERIAL,
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION,
    security_token INTEGER,
    nh3 REAL,
    co2 REAL,
    co  REAL,
    temperature REAL,
    humity REAL,
    owner_id INTEGER REFERENCES persona(id),
    PRIMARY KEY(id)
);

CREATE TABLE persona_canary(
    persona_id INTEGER,
    canary_id INTEGER,
    PRIMARY KEY(persona_id, canary_id),
    FOREIGN KEY(persona_id) REFERENCES persona(id),
    FOREIGN KEY(canary_id) REFERENCES canary(id)
);

CREATE TABLE daily_reading(
    id SERIAL,
    nh3 REAL,
    co2 REAL,
    co  REAL,
    temperature REAL,
    humity REAL,
    created_at DATE,
    canary_id INTEGER,
    readings INTEGER,
    PRIMARY KEY(id),
    UNIQUE(canary_id, created_at),
    FOREIGN KEY(canary_id) REFERENCES canary(id)
);
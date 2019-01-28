CREATE TABLE tb_user (
    id SERIAL,
    name VARCHAR(128),
    email VARCHAR(128),
    password VARCHAR(128),
    PRIMARY KEY(id),
    UNIQUE(email)
);

CREATE TABLE tb_canary (
    id SERIAL,
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION,
    security_token INTEGER,
    nh3 REAL,
    co2 REAL,
    co REAL,
    temperature REAL,
    humity REAL,
    owner_id INTEGER,
    FOREIGN KEY(owner_id) REFERENCES tb_user(id) ON DELETE CASCADE,
    PRIMARY KEY(id)
);

CREATE TABLE tb_user_canary (
    user_id INTEGER,
    canary_id INTEGER,
    PRIMARY KEY(user_id, canary_id),
    FOREIGN KEY(user_id) REFERENCES tb_user(id) ON DELETE CASCADE,
    FOREIGN KEY(canary_id) REFERENCES tb_canary(id) ON DELETE CASCADE
);

CREATE TABLE tb_daily_reading (
    id SERIAL,
    nh3 REAL,
    co2 REAL,
    co REAL,
    temperature REAL,
    humity REAL,
    created_at DATE,
    canary_id INTEGER,
    readings INTEGER,
    PRIMARY KEY(id),
    UNIQUE(canary_id, created_at),
    FOREIGN KEY(canary_id) REFERENCES tb_canary(id) ON DELETE CASCADE
);

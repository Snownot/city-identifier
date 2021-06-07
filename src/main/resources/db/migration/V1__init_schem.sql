CREATE TABLE auth_user
(
    id           uuid         NOT NULL,
    user_name    varchar(255) not null,
    created_data date         not null,
    updated_data date         not null,
    PRIMARY KEY (id)
);

INSERT INTO auth_user(id,
                      user_name,
                      created_data,
                      updated_data)
VALUES (
        gen_random_uuid(),
        'Anatoly',
        '2021-04-27',
        '2021-04-27');
INSERT INTO auth_user(id,
                      user_name,
                      created_data,
                      updated_data)
VALUES (
           gen_random_uuid(),
           'Denis',
           '2021-04-27',
           '2021-04-27');






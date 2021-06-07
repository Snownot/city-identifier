# city-identifier

** configuration**
1. Основные конфигурации в application.yml
    - база данных postgresql
    - Секретка для jwt (HS256)
    - миграция создает двух юзеров, их токены хардкодом хранятся на фронте
    - city-identifier.front\public\injectEnvFromKubernetes можно активировать токен
2. Запуск
    - в директории с pom.xml в консоли ввести mvn package
    - в директории target в консоли ввести java -jar city-identifier-1.0.jar
    - для запуска React TS ввести в каталоге city-identifier.front npm start
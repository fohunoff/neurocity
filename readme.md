**Note:** Каждое задание выполнено в папке, соответствующей номеру задания.

1. Реализуйте простой слайдер для touch устройств(события мыши могут не обрабатываться).
    > `Комментарий:` самый простой способ - сделать это на чистом css :)
    > Если отключить просто js, а у элемента '.slider' добавить свойство overflow-x: auto; , то получится нативный слайдер, как минимум, для хрома.

2. Нарисуйте на canvas основные геометрические фигуры (окружность, треугольник, квадрат, прямоугольник), расположите на холсте размером 800*600 по 4-м углам. (добавьте js анимацию фигурам - опционально/будет плюсом)

3. Реализуйте два модуля (console.log( "HeWo')):
  * используя AMD
  * используя CommonJS
  * используя глобальный объект (нативный модуль)

4. Реализуйте паттерн «фабрика» (User) в нотификации ES6.

5. Реализуйте получение JSON данных с помощью XMLHttpRequst (JSON любой, вывод данных консоль/DOM, сервер локальный, fetch будет плюсом)
    > `Комментарий:` код XMLHttpRequst таскаю из проекта в проект. Не исключением стало это тестовое :)

6. Реализуйте получение JSON данных с помощью web sockets (JSON любой, вывод данных консоль/DOM, сервер локальный)
    > `Комментарий:` до этого не приходилось работать с WS, поэтому код взят у Кантора и немного допилен под задание.

7. Сверстать 2 блока (1-Главный, 2-Дочерний). Разместить блок 2 внутри блока 1 строго посередине несколькими способами.
  * с помощью JS.
  * с помощью CSS.
  * так чтобы весь код был только в 1-й HTML страницы.

8. Создать элемент на странице. При клике на который будут открываться 3 любых элемента на странице в течение 1-ой секунды. И при повторном клике 3 элемента будут закрываться. Как они будут открываться закрываться -- на ваше усмотрение (+ дебаунс)

9. С помощью цикла вывести случайное число (от 10 до 100 ) разноцветных квадратиков. На HTML страницу (исполнять код желательно на JS)
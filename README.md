# Компонент с пагинацией

В приложении реализовано:
 - пагинация, максимум 50 элементов на страницу с пользовательской навигацией между страницами;
 - переход между страницами пагинации при помощи технологии react router с изменением url;
 - загрузка и отображение данных через API;
 - сортировка по столбцам: при нажатии на название столбца строки таблицы сортируются по возрастанию, при повторном клике - по убыванию;
 - фильтрация: компонент предоставляет текстовое поле, в которое пользователь может ввести текст и строки таблицы, данные которых не содержат подстроку, введённую пользователем, скрываются. Перефильтрация осуществляется на каждое изменение значения поля.

## Demo
http://AlinaShatalova.github.io/react-pagination
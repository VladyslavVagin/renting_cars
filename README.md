# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Тестове завдання
Створити застосунок для компанії, що надає послуги надання в Україні автомобілів в оренду. Застосунок складається з 3х сторінок:

домашня сторінка з загальним описом послуг, що надає компанія. Стилізація та оформлення на ваш розсуд.
сторінка, що містить каталог автівок різної комплектації, які користувач може фільтрувати за маркою, ціною за годину оренди авто та кількістю кілометрів, яку подолав автомобіль під час його експлуатації (пробіг).
сторінка з оголошеннями, які були додані користувачем в улюблені Зовнішній вигляд програми повинен складатися з навігації(оформлення на ваш розсуд) та області перегляду.
Технічне завдання
Відповідно до макету реалізувати картку оголошення про здачу авто в оренду.
На першій сторінці каталогу має рендеритися 12 оголошень, а їх решта - по кліку на кнопку Load more.
У разі кліку по кнопці у вигляді “серця” на картці оголошення воно має додаватися до списку улюблених, а колір кнопки змінюватися.
При оновленні сторінки має фіксуватись кінцевий результат дій користувача. Тобто, якщо додати оголошення в улюблені та оновити сторінку - то кнопка все одно залишається в стані “улюбленого оголошення” із відповідним кольором.
У разі повторного кліку по кнопці у вигляді “серця” оголошення повинно бути видалене зі списку улюблених, а колір кнопки змінитись до початкового стану.
У разі кліку по кнопці Learn more має відкриватись модальне вікно з детальною інформацією про авто та умови його оренди.
Модальне вікно повинно закриватись по кліку на кнопку у вигляді “хрестика”, по кліку на backdrop або натисканню на клавішу Esc.
В коді пробіг авто має бути прописаний одним значенням (наприклад, 4500). В UI - виведено через кому (4,500).
Кнопку Rental car слід реалізувати як посилання, що надаватиме можливість користувачу зʼєднатись з компанією за номером телефону +380730000000.
Додай фільтрацію. dropdown із марками автомобіля makes.json - показати оголошення з автівками відповідної марки
Створи маршрутизацію, використовуючи React Router. У застосунку повинні бути такі маршрути: “/” - домашня сторінка з загальним описом послуг, що надає компанія “/catalog” - сторінка, що містить каталог автівок різної комплектації “/favorites” - сторінка з оголошеннями, які були додані користувачем в улюблені Якщо користувач зайшов за маршрутом, якого не існує, його необхідно перенаправляти на домашню сторінку.

Для роботи зі списком оголошень створи свій персональний бекенд для розробки за допомогою UI-сервісу https://mockapi.io/. Створи ресурс adverts. Використай конструктор ресурсу та опиши об'єкт оголошення, як описано нижче.

Advert

Створіть advert в Mockapi з наступними полями: id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage (див. скріншот нижче). Забороняється додавати нові поля! Для наповнення колекції можна взяти adverts.json. Якщо даних не вистачає, або вони не повні - будь ласка, додайте їх самостійно.
1
Зображення авто можете підібрати самостійно.
В базі має бути від 32 оголошень з різними значеннями (на ваш розсуд). Реалізована пагінація, де одна сторінка пагінації повинна вміщати 12 оголошень.Пагінація має бути реалізована на стороні Mockapi
Додай фільтрацію:
dropdown із марками автомобіля makes.json - показати оголошення з автівками відповідної марки

Додаткове завдання
dropdown із цінами за годину оренди авто (крок 10$) - показати оголошення з автівками, ціна за оренду яких належить до діапазону цін, обраних користувачем
група inputів для визначення діапазону пробігу, в межах якого користувач шукатиме оголошення
Критерії виконання
Верстка фіксована в рх, семантична та валідна.
Обов’язкове використання Redux
Для запитів використовується бібліотека Axios
Пагінація реалізована на бекенді
Немає помилок в консолі браузера.
Інтерактивність працює відповідно до технічного завдання.
Код відформатовано та не містить невикористовуваного коду
В репозиторії має бути описаний README.md.
Проєкт задеплоїний на github pages або netlify.com.

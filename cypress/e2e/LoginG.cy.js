describe('Авторизация строчными буквами', function () {                                // название набора тестов
  
   it('Строчные буквы в логине', function () { // название теста
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    
    cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели строчные буквы в логине
    cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
    cy.get('#loginButton').click();  // Нажал войти
  
    cy.get('#messageHeader').contains('Такого логина или пароля нет');  // Проверяю, что после авт. вижу текст
    cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он видит для пользователя
   });
});

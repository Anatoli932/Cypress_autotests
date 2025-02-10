import * as data from "../helpers/default_data.json"
import * as mane_page from "../locators/main_page.json"
import * as result_page from "../locators/result_page.json"
import * as recovery_password_page from "../locators/recovery_password_page.json"

describe('Проверка авторизации', function () { beforeEach('Начало теста', function () {
   cy.visit('/'); // Зашли на сайт
   cy.get(mane_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль
     });
     
   afterEach('Конец теста', function () {
      cy.get(result_page.close).should('be.visible'); // Есть крестик и он видит для пользователя
        });


    it('Верный пароль и верный логин', function () {
         cy.get(mane_page.email).type(data.login); // Ввели верный логин
         cy.get(mane_page.password).type(data.password); // Ввели верный пароль
         cy.get(mane_page.login_button).click(); // Нажал войти
         
         
         cy.get(result_page.title).contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текст
         cy.get(result_page.title).should('be.visible'); // Текст виден пользователю
         
      })

      it('Верный логин и неверный пароль', function () {
        cy.get(mane_page.email).type(data.login); // Ввели верный логин
        cy.get(mane_page.password).type('iLoveqastudio7'); // Ввели неверный пароль
        cy.get(mane_page.login_button).click(); // Нажал войти
        
        cy.get(result_page.title).contains('Такого логина или пароля нет'); // Проверяю, что после авт. вижу текст
        cy.get(result_page.title).should('be.visible'); // Текст виден пользователю
       
     })
    
     it('Проверка, что в логине есть @', function () {
        cy.get(mane_page.email).type('germandolnikov.ru'); // Ввел логин без @
        cy.get(mane_page.password).type(data.password); // Ввели верный пароль
        cy.get(mane_page.login_button).click(); // Нажал войти
        
        cy.get(result_page.title).contains('Нужно исправить проблему валидации'); // Проверяю, что после авт. вижу текст
        cy.get(result_page.title).should('be.visible'); // Текст виден пользователю
        
     })
    
     it('Проверка восстановления пароля', function () {
        cy.get(mane_page.fogot_pass_btn).click(); // Нажал восстановить пароль

        cy.get(recovery_password_page.email).type(data.login); // Ввел почту для восстановления 
        cy.get(recovery_password_page.send_button).click(); // Нажал отправить код

        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail'); // Проверяю на совпад. текст
        cy.get(result_page.title).should('be.visible'); // Текст виден пользователю
        
     })
   


    })





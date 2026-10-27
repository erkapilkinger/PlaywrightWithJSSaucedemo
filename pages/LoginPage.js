

class LoginPage {
    constructor(page){
        this.page = page;
        this.BaseURL = process.env.BASE_URL;

        //locators
        this.usernameInput = this.page.getByPlaceholder('Username');
        this.passwordInput = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', { name: 'login' });
    }

    async open(){
        console.log('opening base url :' + this.BaseURL);
        await this.page.goto(this.BaseURL);
    }
    async login(username, password){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

module.exports = {LoginPage};
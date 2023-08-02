export class AppConstants {

    /* Local onde está a nossa API Rest */
    public static get baseServidor(): string {return "http://localhost:8080/"}

    /* Captura o context path da API Rest, ou seja, nossa url de login */
    public static get baseLogin(): string {return this.baseServidor + "projetospringrestapi/login"}

    /* Captura o context path da API Rest, ou seja, nossa url de usuario que seria para acessar os nosso métodos HTTP (end-points). */
    public static get baseUrl(): string {return this.baseServidor + "projetospringrestapi/usuario/"}

}

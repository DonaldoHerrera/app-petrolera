export class Api {
    private host:string = "http://192.168.0.8:3333";
    private url_login = "/api/v1/auth/login";
    private url_register = "/api/v1/auth/register";
    private url_categories:string="/api/v1/categories/";
    private url_users_online = "/api/v1/users-actives";
    private url_logout = "/api/v1/auth/logout/";
    private url_category_subjects = "/api/v1/categories/";
    private url_homeworks = "/api/v1/homeworks/";
    private url_homeworks_homeworldetail = "/api/v1/homeworks/"
    private url_subjects = "/api/v1/subjects/"
    private url_files = '/api/v1/files/'

    

   

    constructor(){}
    public getUrlCategory(){return this.host+this.url_categories;}
    public getUtlCategoryId(category_id){return this.host+this.url_categories+category_id;}
    public getUrlLogin(){return this.host+this.url_login;}
    public getUrlRegister(){return this.host+this.url_register;}
    public getUrlUsersOnline(){return this.host+this.url_users_online;}
    public getUrlLogout(user_id){return this.host+this.url_logout+user_id;}
    public getUrlCategorySubjects(category_id){return this.host+this.url_category_subjects+category_id;}
    public getUrlHomeworks(){return this.host+this.url_homeworks;}
    public getUrlHomeworksDetail(homework_id){return this.host+this.url_homeworks_homeworldetail+homework_id;}
    public getUrlSubject(subject_id){return this.host+this.url_subjects+subject_id;}
    public getUrlSubjects(){return this.host+this.url_subjects;}
    public getUrlFiles(){return this.host+this.url_files;}
}
class User {
    protected nome: string;
    protected dataNascimento: string;
    protected email: string;
    protected senha: string;
  
    constructor(nome: string, dataNascimento: string, email: string, senha: string) {
      this.nome = nome;
      this.dataNascimento = dataNascimento;
      this.email = email;
      this.senha = senha;
    }
  
    public getNome(): string {
      return this.nome;
    }
  
    public getEmail(): string {
      return this.email;
    }

    public login(email: string, senha: string): boolean {
      return this.email === email && this.senha === senha;
    }
  }
  
  class Admin extends User {
    private isAdmin: boolean;
  
    constructor(nome: string, dataNascimento: string, email: string, senha: string) {
      super(nome, dataNascimento, email, senha);
      this.isAdmin = true;
    }
  
    public isAdminUser(): boolean {
      return this.isAdmin;
    }
  }
  

  const user1 = new User("Gilberto da Silva", "01/01/1990", "gilbeerto@example.com", "123456");
  const admin1 = new Admin("Admin", "01/01/1980", "admin@example.com", "admin123");
  
  console.log(user1.getNome()); 
  console.log(admin1.getNome());
  
  console.log(user1.login("gilbeerto@example.com", "123456")); 
  console.log(admin1.login("admin@example.com", "admin123")); 
  
  console.log(admin1.isAdminUser());
  
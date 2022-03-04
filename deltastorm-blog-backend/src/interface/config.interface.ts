//? Database type
type dataBaseI = {
    localhost: string;
};

//? Security type
type securityI = {
    passwordSalt: string;
    idSalt: string;
};

//? Config interface
export interface ConfigI {
    PORT: number;
    dataBase: dataBaseI;
    security: securityI;
}
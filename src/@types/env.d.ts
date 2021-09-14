declare namespace NodeJS {
  export interface ProcessEnv {
    REDIS_HOST: string;
    REDIS_PORT: number;
    REDIS_PASS: string;
    MAIL_HOST: string;
    MAIL_PORT: number;
    MAIL_USER: string;
    MAIL_PASS: string;
  }
}

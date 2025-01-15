module.exports ={
   type: "mysql",
   host: process.env.DB_HOST,
   port: 3306,
   username: process.env.username,
   password: process.env.password,
   database: process.env.MYSQL_DATABASE,
   synchronize: true,
   logging: false,
   migrationsRun: true,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
};

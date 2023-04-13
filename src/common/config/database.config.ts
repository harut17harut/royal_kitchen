const DatabaseConfig = () => ({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5445,
  database: process.env.DB_NAME || '',
  username: process.env.DB_USER || '',
  password: process.env.DB_PASS || '',
  synchronize: false,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/**/*.js'],
  migrationsRun: true,
  cli: {
    entitiesDir: 'src',
    migrationsDir: '/migrations',
  },
});

export default DatabaseConfig;

import { DataSource, DataSourceOptions } from "typeorm";

export const options: DataSourceOptions = {
    type: 'sqlite',
    database: 'db/data/data.db',
    entities: ['dist/**/**/*.entity{.js, .ts}'],
    migrations: ['dist/db/migrations/*.js'],
    synchronize: false
}

const source = new DataSource(options);

export default source;
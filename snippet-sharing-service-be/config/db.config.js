import pg from 'pg'
export const pool = new pg.Pool(
    {
        connectionString: process.env.DB_DATABASE_URL
    }
)

// export const pool = new pg.Pool({
//   user: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
//   host: process.env.PGHOST,
//   port: process.env.PGPORT,
//   database: process.env.PGDATABASE,
// });

pool.on('connect', () => console.log('DB connected'))
import pg from 'pg'
const connectionString = 'postgres://snippet_sharing_database_user:6Q5F9uA4lCbDt55X8W32hsAHE3gH1wQb@dpg-ck6n5308elhc73baln9g-a/snippet_sharing_database'
export const pool = new pg.Pool(
    {
        connectionString
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
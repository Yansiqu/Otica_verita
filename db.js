const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '16112001jesus', 
  database: 'oticas_verita',
  connectionLimit: 5
});

async function getProdutos() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM produtos");
    return rows;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); 
  }
}

module.exports = { getProdutos };

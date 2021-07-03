const {Pool} = require('pg');
const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: 'pg123',
    database: 'ejemplo',
    port: '5432'
})

const getUsuarios = async (req,res) =>{
    const response = await pool.query('SELECT * FROM users');
    res.status(200).json(response.rows);
}

const getUsersById = async (req,res) =>{
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [req.params.id]);
    res.status(200).json(response.rows);
}

const createUser = async (req,res) =>{
    const {name,email} = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name,email])
    res.status(200).json({
        message: "User created successfully", 
        body:{
            user: {name,email}
        }
    });
}

const deleteUser = async (req,res) =>{
    const response = await pool.query('DELETE FROM users WHERE id = $1', [req.params.id]);
    res.status(200).json(response.rows);
}

const updateUser = async (req,res) =>{
    const id = req.params.id;
    const {name,email} = req.body;
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name,email,id])
    res.status(200).json({
        message: "User updated successfully", 
        body:{
            user: {id,name,email}
        }
    });
}

module.exports = {
    getUsuarios,
    createUser,
    getUsersById,
    deleteUser,
    updateUser
};
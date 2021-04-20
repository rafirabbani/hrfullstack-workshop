const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    db_name : "batch-9",
    db_username : "postgres",
    db_password: "1234"
  }
  
  export default config
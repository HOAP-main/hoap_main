CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    accountName VARCHAR(255) NOT NULL,  
    enrollment VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    focalPerson VARCHAR(255),
    password VARCHAR(255) NOT NULL,  
    pkrIban VARCHAR(255),
    pkrAccountTitle VARCHAR(255),
    pkrBankName VARCHAR(255),
    pkrBranchName VARCHAR(255),
    pkrSwiftCode VARCHAR(255),
    fcyIban VARCHAR(255),
    fcyAccountTitle VARCHAR(255),
    fcyBankName VARCHAR(255),
    fcyBranchName VARCHAR(255),
    fcySwiftCode VARCHAR(255),
    e_hajj_iban VARCHAR(255),
    user_type ENUM('Monazam', 'HGO') NOT NULL, 
    monazam_id INT, 
    FOREIGN KEY (monazam_id) REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

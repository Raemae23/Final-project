const db = require('../db');  

//............................................ addItem
const createInventory = (name, part_type, item_type, brand, quantity, price, picture_url) => {
    return db.execute(
        'INSERT INTO inventory (name, part_type, item_type, brand, quantity, price, picture_url) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, part_type, item_type, brand, quantity, price, picture_url]
    );
};

//............................................ getallItems
const getAllInventory = () => {
    return db.execute('SELECT * FROM inventory');
};

//............................................ getitemsbyID
const getInventoryItemById = (id) => {
    return db.execute('SELECT * FROM inventory WHERE id = ?', [id]);
};

//............................................ updateItem
const updateInventory = (id, name, part_type, item_type, brand, quantity, price, picture_url) => {
    return db.execute(
        'UPDATE inventory SET name = ?, part_type = ?, item_type = ?, brand = ?, quantity = ?, price = ?, picture_url = ? WHERE id = ?',
        [name, part_type, item_type, brand, quantity, price, picture_url, id]
    );
};

//............................................ deleteItem
const deleteInventory = (id) => {
    return db.execute('DELETE FROM inventory WHERE id = ?', [id]);
};

module.exports = {
    createInventory,
    getAllInventory,
    getInventoryItemById,
    updateInventory,
    deleteInventory
};

import { getConnection } from "./../database/database";


const getBooks = async (req,res)=> {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM books");
        res.json(result);
    }catch (error){
        res.status (500);
        res.send(error.message);
    }
};

const getBook = async (req,res)=> {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM books WHERE id = ?; id ");
        res.json(result);
    }catch (error){
        res.status (500);
        res.send(error.message);
    }
};

const addBook = async (req,res)=> {
    try {
        const {title,total_pages,author, nationality, language,cover_url,editorial} = req.body;

        if (title === undefined||total_pages === undefined,author === undefined|| nationality === undefined || language === undefined|| cover_url === undefined || editorial === undefined) {
        res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        const book = {title,total_pages,author, nationality, language,cover_url,editorial};
        const connection = await getConnection();
        await connection.query("INSERT INTO books SET ?", book);
        res.json({ message: "Book added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateBook = async (req, res) =>{
    try{
        const {id} = req.params;
        const {title,total_pages,author, nationality, language,cover_url,editorial} = req.body;
        if (id === undefined || title === undefined || total_pages === undefined || author === undefined || language === undefined || nationality === undefined || cover_url === undefined || editorial === undefined) {
            res.status (400).json({ message: "Bad Request. Please fill all field"});
        }
        const book = {title,total_pages,author, nationality, language,cover_url,editorial};
        const connection = await getConnection();
        const result = await connection.query ("UPDATE book SET ? WHERE id = ?", book, id);
        res.json(result);
    } catch (error){
        res.status (500);
        res.sed(error.message)
    }
};

const deleteBook = async (req, res) =>{
    try{
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query ("DELETE FROM book WHERE id = ?", id);
        res.json (result);
    } catch (error){
        console.log (error);
        res.status (400);
        res,send(error.message)
    }
};




export const methods = {
    getBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook
};
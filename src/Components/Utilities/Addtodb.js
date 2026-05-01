const getStoredBooks = () => {
    const storedBooksString = localStorage.getItem('books');
    if (storedBooksString) {
        return JSON.parse(storedBooksString);
    }
    return [];
};

const addtoDb = (id) => {
    // 1. Ensure the ID is a number (or consistent type)
    const bookId = parseInt(id);
    
    const storedData = getStoredBooks();
    
    // 2. Strict check for existence
    if (storedData.includes(bookId)) {
        // Use a more professional notification than alert if possible later
        alert('This book is already in your list!');
    } else {
        // 3. Update and Save
        const updatedData = [...storedData, bookId];
        localStorage.setItem('books', JSON.stringify(updatedData));
        
        // Optional: Success feedback
        alert('Book added successfully!');
    }
};

export { addtoDb, getStoredBooks };
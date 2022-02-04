export interface Book{
    bookId:number;
    bookName:String;
    bookAuthor:String;
    bookGenre:String;
    isbn:String;
    availableQuantity:number;

}

export interface User{
    userId:number
    userName:String
    phoneNumber:number
}

export interface BookDetails{

    bookName:String
    availableQuantity:number
    userName:String
    returnDate:Date
}
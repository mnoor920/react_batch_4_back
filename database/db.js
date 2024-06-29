import mongoose from "mongoose";


// mongodb+srv://mnoor92082:oLaTPST7pCvFeRmB@code-error.ufwfba2.mongodb.net/?retryWrites=true&w=majority&appName=code-error


const Connection = async () => {
    const URL = "mongodb+srv://mnoor92082:oLaTPST7pCvFeRmB@code-error.ufwfba2.mongodb.net/?retryWrites=true&w=majority&appName=code-error"
    // const URL = "mongodb+srv://mnoor92082:7YUo4uzG@code-error.ufwfba2.mongodb.net/?retryWrites=true&w=majority"
    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Error Occur", error)
    }
}



export default Connection
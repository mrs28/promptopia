import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// console.log({
//     clientId: process.env.GOOGLE_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// })
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
   
    async session({session}){

    },
    async signIn({profile}){
        try{
            //this is a lambda f(x) that opens up only when it gets called. Everytime it´s called it spin up the server and make a connection with the data base
            //serverless -> Lambda -> dynamodb
        }catch(error){}

    }


});

export {handler as GET, handler as POST };
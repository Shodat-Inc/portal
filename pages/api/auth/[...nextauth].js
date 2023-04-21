import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {

    secret: "5d8750b2dbd34e6ea9e600262a6fb8e1d7359272",

    providers: [
        GithubProvider({
            clientId: 'cd27d9a6891a486ace0e',
            clientSecret: '5d8750b2dbd34e6ea9e600262a6fb8e1d7359272'
        }),


        // CredentialsProvider({
        //     name: "Credentials",

        //     credentials: {
        //         username: { label: "username", type: "text" },
        //         password: { label: "password", type: "password" },
        //     },
        //     async authorize(credentials, req) {
        //         // console.log("credentials",credentials)

        //         // const res = await fetch("http://localhost:3000/api/users", {
        //         const res = await fetch("https://dummyjson.com/auth/login", {
        //             method: "POST",
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //             body: JSON.stringify({
        //                 username: credentials?.username,
        //                 password: credentials?.password,
        //             }),
        //         });
        //         const user = await res.json();
        //         console.log("USERS", user)

        //         if (user) {
        //             return user;
        //         } else {
        //             return null;
        //         }
        //     },
        // }),


        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "Enter email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter Password",
                },
            },

            async authorize(credentials, req) {
                const { email, password } = credentials
                const res = await fetch("http://localhost:3000/api/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                });
                const user = await res.json();
                if (res.ok && user) {
                    return user;
                } else return null;
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            session.user = token;
            return session;
        },
    },
    pages: {
        signIn: '/',
    }

}

export default NextAuth(authOptions);
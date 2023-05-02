import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import {server} from '../../../config/index';

export const authOptions = {

    secret: "5d8750b2dbd34e6ea9e600262a6fb8e1d7359272",

    providers: [
        GithubProvider({
            clientId: 'cd27d9a6891a486ace0e',
            clientSecret: '5d8750b2dbd34e6ea9e600262a6fb8e1d7359272'
        }),


        CredentialsProvider({
            name: "Credentials",
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
                console.log("server", server)
                const { email, password } = credentials
                const res = await fetch(`${server}/api/users`, {
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
import { NamedStrings, StringSheet } from "./@AppStringModel";

export const AuthString = StringSheet.create({
    LoginHeaderTitle: {
        en: "Login",
    },
    RegisterHeaderTitle: {
        en: "Create an account"
    },
    DontHaveAnAccount: {
        en: "Don't have an account?"
    },
    AlreadyHaveAnAccount: {
        en: "Already have an account?"
    },
    SignInWithGoogle: {
        en: "Sign in with Google"
    },
    SignUp: {
        en: "Sign up"
    },
    Login: {
        en: "Log in"
    },
    GoogleButtonAriaLabel: {
        en: "Sign in with Google"
    }
} as NamedStrings<any>);
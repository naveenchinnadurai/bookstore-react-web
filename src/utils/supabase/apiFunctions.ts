import { LoginFormValues, signupFormValues, User } from "../types";
import supabase from "./supabaseClient";

export const signup = async (userData: signupFormValues) => {

    try {
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email: userData.email,
            password: userData.password,
        });

        if (authError) {
            return { status: false, error: authError.message }
        }

        const userId = authData?.user?.id;

        const { data, error } = await supabase
            .from('users')
            .insert([
                {
                    id: userId,
                    name: userData.fullName,
                    email: userData.email,
                    mobile: userData.mobileNumber,
                    joined_on: new Date(),
                },
            ]).select();

        if (error) {
            return { status: false, error: error.message };
        } else {
            const userInfo: User | any = data;
            return { status: true, user: userInfo };
        }
    } catch (error) {
        return { status: false, error: "Something went wrong, Try again or later!" };
    }
}

export const login = async ({ email, password }: LoginFormValues) => {
    try {
        const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (authError) {
            return { status: false, error: authError?.message }
        }

        const userId = authData.user?.id;

        const { data, error } = await supabase.from('users').select().eq('id', userId);

        if (error) {
            return { status: false, error: error.message }
        }

        return { status: true, user: data[0] || null, session: authData.session };

    } catch (error: any) {
        return { status: false, error: "Something went wrong, Try again or later!" };
    }
};

export const logout = async () => {
    try {
        const { error } = await supabase.auth.signOut();

        if (error) {
            return { status: false, error: error?.message }
        }

        return { status: true }


    } catch (error: any) {
        return { status: false, error: "Something went wrong!" };
    }
}

import { signupFormValues, User } from "../types";
import { hashPassword } from "../hashing";
import supabase from "./supabaseClient";

export const signup = async (userData: signupFormValues) => {

    try {
        const { data, error } = await supabase
            .from('users')
            .insert([
                {
                    name: userData.fullName,
                    email: userData.email,
                    mobile: userData.mobileNumber,
                    joined_on: new Date(),
                    password: await hashPassword(userData.password),
                },
            ]).select();

        if (error) {
            console.log('Error saving data:', error);
            return { status: false };
        } else {
            const userInfo: User | any = data;
            console.log('Data saved successfully');
            return { status: true, user: userInfo };
        }
    } catch (error) {
        console.log(error);
    }
}
import { Button } from "./button";

interface AppbarProps {
    user?:{
        name?: string | null
    },
    onSignin: any,
    onSignout: any,
}

export const Appbar=({user, onSignin, onSignout}: AppbarProps )=>{

    const initialLetter = user?.name ? user.name.charAt(0).toUpperCase() : "";

    return(
        <div className="flex justify-between border-b px-4">
            <div className="text-lg flex flex-col justify-center">
                My Paytm
            </div>

            <div className="flex flex-col justify-center pt-2 gap-3">
                <div className={`rounded-full text-center bg-blue-800 w-8 h-8 ${user? "visible" : "hidden"}`}>
                    {initialLetter}
                </div>
                <Button onClick={user ? onSignout : onSignin}>{user ? "Logout": "Login"}</Button>

            </div>

        </div>
    );
}
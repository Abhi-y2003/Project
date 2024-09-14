"use client"

import { SessionProvider } from "next-auth/react"
import { RecoilRoot } from "recoil"

// it is a global state management file that wraps the whole next app

export const Provider = ({children}: {children: React.ReactNode})=>{
    return <RecoilRoot>
        <SessionProvider>
        {children}
        </SessionProvider>
    </RecoilRoot>

}
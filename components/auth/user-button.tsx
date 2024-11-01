"use client";

import { Avatar } from "@radix-ui/react-avatar";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaUser } from "react-icons/fa";
import { useCurrentUser } from "@/hooks/use-current-user";
import { DropdownMenuContent } from "../ui/dropdown-menu";
import { LogoutButton } from "./logout-button";
import { ExitIcon } from "@radix-ui/react-icons";

export const UserButton = () => {
        const user = useCurrentUser();
            return (
               <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src=""/>
                        <AvatarFallback className="bg-blue-500">
                            <FaUser className="text-white"/>
                        </AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40" align="end">
                    <LogoutButton>
                        <ExitIcon className="h-4 w-4 mr-2"/>
                        Logout
                    </LogoutButton>
                </DropdownMenuContent>
               </DropdownMenu>
            )
}

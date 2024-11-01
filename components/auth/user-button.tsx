"use client";

import { Avatar } from "@radix-ui/react-avatar";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaUser } from "react-icons/fa";

export const UserButton = () => {

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
               </DropdownMenu>
            )
}

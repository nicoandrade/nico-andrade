"use client";

import { useTheme } from "next-themes";
import { useCallback } from "react";
import { Moon } from "@/components/icons/moon";
import { Sun } from "@/components/icons/sun";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
    const { setTheme } = useTheme();
    const setLightTheme = useCallback(() => setTheme("light"), [setTheme]);
    const setDarkTheme = useCallback(() => setTheme("dark"), [setTheme]);
    const setSystemTheme = useCallback(() => setTheme("system"), [setTheme]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="icon-sm" variant="ghost">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={setLightTheme}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={setDarkTheme}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={setSystemTheme}>System</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

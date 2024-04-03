"use client";

import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useSession } from "next-auth/react";
import { Skeleton } from "./ui/skeleton";
import React from "react";
import * as actions from "@/actions";

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;

  if (session.status === "loading") {
    authContent = <Skeleton className="w-8 h-8 rounded-full" />;
  } else if (session.data?.user) {
    authContent = (
      <Popover>
        <PopoverTrigger>
          <Avatar className="m-3">
            <AvatarImage src={session.data.user.image || ""} />
          </Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex justify-center p-2">
            <form action={actions.signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <div className="mr-2">
          <form action={actions.signIn}>
            <Button type="submit" variant="outline">
              Sign In
            </Button>
          </form>
        </div>
        <div>
          <form action={actions.signIn}>
            <Button type="submit">Sign Up</Button>
          </form>
        </div>
      </>
    );
  }

  return authContent;
}

"use client";

import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useSession } from "next-auth/react";
import React from "react";
import * as actions from "@/actions";

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;

  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src={session.data.user.image || ""} />
          </Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
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

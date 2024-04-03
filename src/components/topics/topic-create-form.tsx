"use client";

import { useFormState } from "react-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import FormButton from "../common/form-button";
import * as actions from "@/actions";

export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {},
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Topic</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[475px]">
        <DialogHeader>
          <DialogTitle>Create a Topic</DialogTitle>
        </DialogHeader>
        <form action={action}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" autoFocus placeholder="Name" />
              <span className="text-red-500">
                {formState.errors.name?.join(", ")}
              </span>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe your topic"
              />
              <span className="text-red-500">
                {formState.errors.description?.join(", ")}
              </span>
            </div>
            <div className="text-red-500">
              {formState.errors._form?.join(", ")}
            </div>
          </div>
          <DialogFooter>
            <FormButton>Submit</FormButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

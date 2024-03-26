import { Button } from "@/components/ui/button";
import * as actions from "@/actions";


export default function Home() {
  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Click me!!!</Button>
      </form>
    </div>
  );
}

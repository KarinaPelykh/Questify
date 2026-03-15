import { Button } from "@/shared/ui";
import { Form, Input, ItemForm, Label } from "@/shared/ui/Form";

export const SigninForm = () => {
  return (
    <Form className=" flex flex-col gap-2.5 max-w-[320px]">
      <ItemForm className="flex flex-col">
        <Label>Email</Label>
        <Input placeholder="Email" />
      </ItemForm>
      <ItemForm className="flex flex-col">
        <Label>Password</Label>
        <Input placeholder="Password" />
      </ItemForm>
      <Button className="rounded-full text-white bg-orange! size-13 ml-auto shadow-orange">
        go!
      </Button>
    </Form>
  );
};

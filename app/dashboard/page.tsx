import { Card } from "@/components/card/Card";
import { FormCard } from "@/components/form/Form";
import { Header } from "@/components/header/Header";
import "../../shared/ui/select/select.css";
import { Button, Icon } from "@/shared/ui";
export default function Dashboard() {
  return (
    <>
      <Header />
      <section className=" w-full max-h-full min-h-screen bg-light-white py-7 ">
        <div className="container flex gap-4 flex-col tablet-l:flex-row tablet-l:flex-wrap">
          <FormCard />
          <Card />
          <Button
            type="button"
            variant="secondary"
            className="fixed bottom-10 right-7"
          >
            <Icon iconName="plus" className="size-4!" />
          </Button>
        </div>
      </section>
    </>
  );
}

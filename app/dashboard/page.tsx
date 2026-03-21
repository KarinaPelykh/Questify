import { Card } from "@/components/card/Card";
import { FormCard } from "@/components/form/Form";
import { Header } from "@/components/header/Header";

export default function Dashboard() {
  return (
    <>
      <Header />
      <section className="container h-screen bg-light-white py-7 tablet-l:flex tablet-l:gap-4 tablet-l:flex-wrap">
        <FormCard />
        <Card />
      </section>
    </>
  );
}

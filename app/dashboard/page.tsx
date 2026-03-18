import { Card } from "@/components/card/Card";
import { Header } from "@/components/header/Header";

export default function Dashboard() {
  return (
    <>
      <Header />
      <section className="container bg-light-white py-7">
        <Card />
      </section>
    </>
  );
}

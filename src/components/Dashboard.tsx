import { AddItemForm } from "./fifo/AddItemForm";
import { ButtonsActions } from "./fifo/ButtonsActions";
import { ItemsPreview } from "./fifo/ItemsPreview";

const Dashboard = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-8 h-full gap-6">
      <AddItemForm />
      <ItemsPreview />
      <ButtonsActions />
    </section>
  );
};

export default Dashboard;

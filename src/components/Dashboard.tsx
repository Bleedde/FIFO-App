import { AddItemForm } from "./fifo/AddItemForm";
import { ButtonsActions } from "./fifo/ButtonsActions";
import { ItemsPreview } from "./fifo/ItemsPreview";

const Dashboard = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-10 py-8">
      <AddItemForm />
      <ItemsPreview />
      <ButtonsActions />
    </section>
  );
};

export default Dashboard;

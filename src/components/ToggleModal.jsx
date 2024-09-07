import { useModal } from "../hooks/useModal";

export default function ToggleModal() {
  const { setYesModal, setNoModal, modal } = useModal();
  return (
    <div>
      <h1>modal: {modal}</h1>
      <button onClick={setYesModal}>Yes Modal</button>
      <button onClick={setNoModal}>No Modal</button>
    </div>
  );
}

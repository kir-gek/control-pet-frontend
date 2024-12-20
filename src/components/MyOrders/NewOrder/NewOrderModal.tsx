import s from "./NewOrderModal.module.css";

interface ComponentProps {
  active: boolean;
  setActive: (target: boolean) => void;
  children?: React.ReactElement;
}

export const NewOrderModal = ({ active, setActive, children } : ComponentProps) => {
  return (
    <div className={active? s.modalActive : s.modal } onClick={()=> setActive(false)}>
      <div className={s.modalContent} onClick={(e) =>e.stopPropagation() }>
        {children}
      </div>
    </div>
  );
};

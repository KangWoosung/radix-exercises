/*  2024-04-01 01:10:25

Very nice example of abstraction of modals. 


Usage:
1. Place a modal-trigger code set:

    /*** [open, setOpen] makes the modal rerender so that the form is reset after saving
    <Modal open={open} onOpenChange={setOpen}>
        <Modal.Button className="rounded p-2 hover:bg-gray-200">
        <Pencil1Icon />
        </Modal.Button>

    /*** Modal opens here through portal
        <Modal.Content title="Edit contact">
        <ContactForm contact={contact} afterSave={() => setOpen(false)} />
        </Modal.Content>
    </Modal>

2. Show a modal with default layout and children:
    /*** function ModalContent() will be the contents of this modal:
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content >
        <div className="flex items-center justify-between">
          <Dialog.Title >{title}</Dialog.Title>
          <Dialog.Close >
            <Cross1Icon />
          </Dialog.Close>
        </div>
        {children}
      </Dialog.Content>
    </Dialog.Portal>

3. So, all you need to care about is;
    a. place the modal-trigger set of code. 
    b. Modal will be managed by its own abstracted way.

4. Besides, css animation code is needed.


*/

import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
import "./modal.css";

export default function Modal({
  open,
  onOpenChange,
  children,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
}

function ModalContent({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]" />
      <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 text-gray-900 shadow data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms]">
        <div className="flex items-center justify-between">
          <Dialog.Title className="text-xl">{title}</Dialog.Title>
          <Dialog.Close className="text-gray-400 hover:text-gray-500">
            <Cross1Icon />
          </Dialog.Close>
        </div>

        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

Modal.Button = Dialog.Trigger;
Modal.Close = Dialog.Close;
Modal.Content = ModalContent;

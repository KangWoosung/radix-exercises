// Implementation example of a custom dialog using the low-level Dialog primitive
// Refer to https://www.radix-ui.com/primitives/docs/components/dialog
import * as Dialog from "@radix-ui/react-dialog";
import { Theme } from "@radix-ui/themes";

export default function MyCustomDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Open</Dialog.Trigger>
      <Dialog.Portal>
        <Theme accentColor="blue" appearance="light">
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title />
            <Dialog.Description />
            <Dialog.Close />
          </Dialog.Content>
        </Theme>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

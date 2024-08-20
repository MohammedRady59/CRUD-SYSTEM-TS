import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ReactNode } from "react";

interface IProps {
  handleOpen: () => void;
  openForm: boolean;
  children: ReactNode;
}
export default function Modal({ handleOpen, openForm, children }: IProps) {
  return (
    <>
      <Dialog
        open={openForm}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={handleOpen}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-[#00000099]">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-black"
              >
                Add A NEW PRODUCT
              </DialogTitle>

              <div className="mt-4">{children}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

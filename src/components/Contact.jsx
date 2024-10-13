import React, { useState } from "react";
import Modal from "./Modal";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1>
        Contact us at
        <a
          href="https://youtube.com/@procodrr"
          target="_blank"
          className="text-blue-500"
        >
          Youtube
        </a>
      </h1>
      <div>
        <button onClick={() => setIsOpen(true)}>Open Popup</button>
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          header={<p className="text-xl text-red-500 font-bold ">Hiiiii</p>}
          footer={
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-slate-400 px-3 py-2 rounded"
              >
                OK
              </button>
            </div>
          }
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            necessitatibus modi esse accusamus at eveniet ab praesentium ea
            quasi, eius, recusandae error soluta quas minima dolorum dolores
            corrupti, quaerat voluptas?
          </p>
        </Modal>
      </div>
    </>
  );
}

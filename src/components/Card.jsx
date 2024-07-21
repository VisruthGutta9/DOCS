import React from "react";
import { FaFileAlt, FaRegFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.4 }}
        dragElastic={1}
        dragTransition={{ bounceDamping: 10, bounceStiffness: 200 }}
        className="relative w-60 h-72 rounded-[30px] flex-shrink-0 bg-zinc-900/60 text-white p-10 overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0">
          <div className="flex items-center justify-between mb-1 px-8 py-3">
            <h5>{data.filesize}</h5>
            <span className="W-10 H-10 bg-sky-900 rounded-full flex items-center justify-center text-white p-1 font-black">
              {data.close ? <IoCloseSharp /> : <IoMdDownload size="0.8em" />}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4 ${
                data.tag.tagColor === "blue" ? "bg-blue-800" : "bg-green-600"
              } flex justify-center items-center`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;

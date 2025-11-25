import React from "react";
import { motion } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

const ThankYouModal = ({
  isOpen,
  onClose,
  onCloseComplete
}) => {
  const handleClose = () => {
    onClose();

    if (onCloseComplete) {
      onCloseComplete();
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center">
          <motion.div
            className="mx-auto mb-6 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="w-10 h-10 text-green-600" />
          </motion.div>

          <motion.h2
            className="text-3xl font-bold text-dark-gray mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Thank You!
          </motion.h2>

          <motion.p
            className="text-medium-gray mb-8 text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </motion.p>

          <motion.button
            onClick={handleClose}
            className="w-full bg-primary hover:bg-hover text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Continue Exploring
          </motion.button>
        </div>

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ThankYouModal;

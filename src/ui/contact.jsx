import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import ThankYouModal from "./ThankYouModal";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be at most 100 characters"),

  countryCode: z.string().min(1, "Please select a country code"),
  contactNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits")
    .regex(/^[0-9]+$/, "Phone number can only contain digits"),

  email: z.string().email("Invalid email address"),

  message: z.string().max(10000, "Message must be at most 10000 characters").optional(),
});

const countryCodes = [
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+1", country: "US", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+61", country: "AU", flag: "🇦🇺" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
  { code: "+39", country: "IT", flag: "🇮🇹" },
  { code: "+81", country: "JP", flag: "🇯🇵" },
  { code: "+86", country: "CN", flag: "🇨🇳" },
  { code: "+82", country: "KR", flag: "🇰🇷" },
  { code: "+7", country: "RU", flag: "🇷🇺" },
  { code: "+55", country: "BR", flag: "🇧🇷" },
  { code: "+52", country: "MX", flag: "🇲🇽" },
  { code: "+34", country: "ES", flag: "🇪🇸" },
  { code: "+31", country: "NL", flag: "🇳🇱" },
  { code: "+46", country: "SE", flag: "🇸🇪" },
  { code: "+47", country: "NO", flag: "🇳🇴" },
  { code: "+65", country: "SG", flag: "🇸🇬" },
  { code: "+852", country: "HK", flag: "🇭🇰" },
  { code: "+971", country: "AE", flag: "🇦🇪" },
];

const Contact = () => {
  const [message, setMessaage] = useState({
    type: "",
    text: "",
  });
  const [loading, setLoading] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // "In order to submit via AJAX, you need to set a custom key or reCAPTCHA must be disabled in this form's settings page."

  const submitHandler = async (data) => {
    try {
      setLoading(true);

      // Submit to Formspree endpoint
      const response = await axios.post(
        import.meta.env.VITE_MAIL_ENDPOINT,
        {
          fullName: data.fullName,
          countryCode: data.countryCode,
          contactNumber: data.contactNumber,
          email: data.email,
          message: data.message || ""
        }
      );

      // Prepare URL parameters for mail server
      const params = new URLSearchParams({
        fullName: data.fullName,
        countryCode: data.countryCode,
        contactNumber: data.contactNumber,
        email: data.email,
        message: data.message || ""
      });

      // Make GET request to the API endpoint
      const response2 = await axios.get(
        `https://mail.abhisheknavgan.xyz/api/submit?${params.toString()}`
      );

      // Track conversion only on successful submission
      if (typeof window !== 'undefined' && window.gtag_report_conversion) {
        window.gtag_report_conversion();
      }

      setShowThankYouModal(true);
      reset();
    } catch (e) {
      setMessaage({
        type: "error",
        text: "Something went wrong while submitting the form",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-start text-start gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-6 md:p-8 rounded-2xl w-full border shadow-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-gray mb-6 sm:mb-8 text-center lg:text-left">
              Start Your Project
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
              <div className="flex flex-col items-start">
                <label className="hidden sm:block text-sm font-medium text-dark-gray mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register("fullName")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Full Name *"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-start text-sm mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start">
                <label className="hidden sm:block text-sm font-medium text-dark-gray mb-2">
                  Contact Number *
                </label>
                <div className="flex gap-3 w-full">
                  <div className="relative flex-shrink-0">
                    <select
                      {...register("countryCode")}
                      className="appearance-none bg-white px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors text-sm min-w-[120px]"
                      defaultValue={countryCodes[0].code}
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.flag} {country.code}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                  <input
                    type="text"
                    {...register("contactNumber")}
                    className="flex-1 min-w-0 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Contact Number *"
                  />
                </div>
                {(errors.countryCode || errors.contactNumber) && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.countryCode?.message || errors.contactNumber?.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start">
                <label className="hidden sm:block text-sm font-medium text-dark-gray mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Email Address *"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start">
                <label className="hidden sm:block text-sm font-medium text-dark-gray mb-2">
                  Message (Optional)
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Message (Optional)"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                disabled={loading}
                type="submit"
                className="w-full disabled:bg-gray-500 disabled:cursor-not-allowed bg-primary hover:bg-hover text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>

              {message.type === "error" && (
                <div className="text-center rounded-md py-4 bg-red-500 text-white text-sm mt-1">
                  {message.text}
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-4 sm:space-y-8 w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-3 sm:gap-6">
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  primary: "somvanshitechnologies@gmail.com",
                  secondary: "ceo@somvanshitechnologies.com",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  primary: "+91 96375 07575",
                  secondary: "+91 70406 68899",
                  color: "from-green-500 to-green-600",
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  primary: "Pune, India",
                  secondary: "India's Silicon Valley",
                  color: "from-primary to-hover",
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  primary: "24/7 Support Available",
                  secondary: "IST (UTC+5:30)",
                  color: "from-purple-500 to-purple-600",
                },
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  className="group bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${contact.color} opacity-10 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-125 transition-transform duration-500`} />

                  <div className="relative z-10 flex items-start gap-3 sm:gap-4">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${contact.color} rounded-lg shadow-lg flex-shrink-0`}>
                      <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-dark-gray mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                        {contact.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-dark-gray font-medium mb-0.5 sm:mb-1 break-words">
                        {contact.primary}
                      </p>
                      <p className="text-xs sm:text-sm text-medium-gray">
                        {contact.secondary}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <ThankYouModal
        isOpen={showThankYouModal}
        onClose={() => setShowThankYouModal(false)}
        onCloseComplete={() => {
          setMessaage({ type: "", text: "" });
        }}
      />
    </motion.div>
  );
};

export default Contact;

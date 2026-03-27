import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center bg-black text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 blur-3xl" />

      <div className="relative z-10 max-w-4xl px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          We Build AI Systems <br /> That Replace Entire Teams
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-gray-300"
        >
          Automate operations. Capture leads. Scale 24/7.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex justify-center gap-4"
        >
          <button className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition">
            See Live Demo
          </button>

          <button className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition">
            Get Free AI Audit
          </button>
        </motion.div>

      </div>
    </section>
  );
}

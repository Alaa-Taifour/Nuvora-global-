import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold leading-tight"
        >
          We Build AI Systems <br /> That Replace Entire Mentality
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-gray-300"
        >
          Automate operations. Capture leads. Scale your business 24/7 with intelligent systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col md:flex-row justify-center gap-4"
        >
          <a
            href="#demo"
            className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
          >
            See Live Demo
          </a>

          <Link
            to="/audit"
            className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
          >
            Get Free AI Audit
          </Link>
        </motion.div>
      </div>

      {/* 3D SCENE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="relative z-10 mt-12 w-full max-w-5xl h-[400px] md:h-[500px]"
      >
        <iframe
          src="https://my.spline.design/neuralnetworkblue-8f2d9c2e0f5c4a1e9b7d0c6b8a1e2f3d/"
          frameBorder="0"
          className="w-full h-full rounded-2xl"
        ></iframe>
      </motion.div>

    </section>
  );
}

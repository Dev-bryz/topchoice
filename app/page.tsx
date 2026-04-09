import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white font-sans">
      
      {/* HERO */}
      <main className="flex flex-1 items-center justify-center px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            
           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight sm:leading-tight md:leading-tight tracking-tight">
  Reliable Cargo & Logistics{" "}
  <span className="block sm:inline bg-gradient-to-r from-[#ff0f7b] to-[#f89b29] bg-clip-text text-transparent">
    You Can Trust
  </span>
</h1>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-lg">
              Fast, secure, and efficient freight forwarding solutions tailored
              for your business. From warehouse to delivery — we move with precision.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
              <button className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-90 transition">
                Get Started
              </button>
              <button className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition">
                Learn More
              </button>
            </div> */}

            {/* TRUST BADGES */}
            <div className="flex gap-6 mt-6 justify-center md:justify-start text-sm text-zinc-500">
              <span>✔ Secure Handling</span>
              <span>✔ Next-day Delivery</span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[350px] md:h-[450px]">
            <Image
              src="/assets/truck.jpg" // replace with your asset
              alt="Logistics"
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </main>

      {/* SERVICES */}
      <section className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900">
  <div className="max-w-6xl mx-auto text-center">

    {/* IMAGE */}
    <div className="relative w-full h-[250px] sm:h-[350px] mb-12">
      <Image
        src="/binondo.jpeg" // add your image in /public
        alt="Binondo Manila to Lucena City Route"
        fill
        className="object-cover rounded-2xl shadow-md"
        priority
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-black/30 rounded-2xl flex items-center justify-center">
        <p className="text-white font-semibold text-lg sm:text-xl">
          Binondo, Manila → Lucena City, Quezon
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mb-4">
      Our Services
    </h2>

    <p className="text-zinc-600 dark:text-zinc-400 mb-12">
      Reliable cargo solutions from Manila to Lucena City, Quezon.
    </p>

    <div className="grid sm:grid-cols-2 gap-8">

      {[
        {
          title: "Consolidated LTL (Less Than Truckload)",
          desc: "Cost-efficient shipping by combining multiple shipments into one truck. Ideal for smaller loads while maintaining reliability and timely delivery.",
        },
        {
          title: "Truck for Hire",
          desc: "Dedicated truck service for your cargo. Perfect for full-load deliveries requiring speed, privacy, and direct transport.",
        },
      ].map((service) => (
        <div
          key={service.title}
          className="p-8 rounded-2xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition text-left"
        >
          <h3 className="font-semibold text-xl mb-3">
            {service.title}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
            {service.desc}
          </p>

          <div className="text-xs font-medium inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#ff930f] to-[#fff95b] text-black">
            Manila → Lucena City, Quezon
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

      {/* CTA */}
     <section className="py-20 px-6 text-center">
  <h2 className="text-3xl font-bold mb-4">
    Move Your Cargo with Confidence — Powered by TopChoice
  </h2>
   <Link href="/contact" className="px-8 py-3 rounded-full bg-gradient-to-r from-[#ff930f] to-[#fff95b] text-black font-semibold shadow-md hover:opacity-90 transition">
            Contact Us
    </Link>
</section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-zinc-500 border-t border-zinc-200 dark:border-zinc-800">
        © {new Date().getFullYear()} TopChoice Forwarders. All rights reserved.
      </footer>
    </div>
  );
}
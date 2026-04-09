import { Phone, MapPin } from "lucide-react";
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white px-6 py-16">
      
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">
            Contact Us
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Reach the right team for faster coordination and delivery.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="grid sm:grid-cols-3 gap-6">

          {/* MANILA */}
          <div className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center">
            <MapPin className="mx-auto mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">Manila Office</h3>

            <a
              href="tel:+639463333333"
              className="block text-lg font-medium hover:opacity-80"
            >
              +63 946 333 3333
            </a>

            <a
              href="https://share.google/kxx8p7rWBSPfffTYn"
              target="_blank"
              className="block text-sm text-zinc-500 mt-3 hover:text-black dark:hover:text-white"
            >
              View on Google Maps
            </a>
          </div>

          {/* LUCENA */}
          <div className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center">
            <MapPin className="mx-auto mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">Lucena Office</h3>

            <a
              href="tel:+639089000000"
              className="block text-lg font-medium hover:opacity-80"
            >
              +63 908 900 0000
            </a>

            <a
              href="https://share.google/SQ3FN2dShspNKQtE8"
              target="_blank"
              className="block text-sm text-zinc-500 mt-3 hover:text-black dark:hover:text-white"
            >
              View on Google Maps
            </a>
          </div>

          {/* GENERAL */}
          <div className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center">
            <Phone className="mx-auto mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">General Hotline</h3>

            <a
              href="tel:+639463333333"
              className="block text-lg font-medium hover:opacity-80"
            >
              +63 946 333 3333
            </a>

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/profile.php?id=100090594334310" // replace with your actual page
              target="_blank"
              className="flex items-center justify-center gap-2 text-sm text-zinc-500 mt-3 hover:text-black dark:hover:text-white"
            >
              Visit our Facebook Page
            </a>
          </div>

        </div>

        {/* ROUTE INFO */}
        <div className="text-center mt-12 text-sm text-zinc-500">
          Manila ↔ Lucena City, Quezon • Daily trips • Fast & secure delivery
        </div>

      </div>
    </div>
  );
}
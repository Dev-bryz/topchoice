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

<div className="mt-4 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.9823380535095!2d120.96683927510615!3d14.600081985886181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca123a6b970b%3A0x913d6344bcaa5e81!2sDzon%20Forwarders!5e0!3m2!1sen!2sph!4v1775713641377!5m2!1sen!2sph"
    className="w-full h-[200px] border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
  ></iframe>
</div>
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
  href="https://www.google.com/maps/place/TopChoice+Forwarders+(Lucena)+DZON+Trucking"
  target="_blank"
  className="block text-sm text-zinc-500 mt-3 hover:text-black dark:hover:text-white"
>
  View on Google Maps
</a>

<div className="mt-4 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.4321347118284!2d121.60706184318055!3d13.932856151719477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd4b78d3890721%3A0x50f0ae8b64d7db44!2sTopChoice%20Forwarders%20(Lucena)%20DZON%20Trucking!5e0!3m2!1sen!2sph!4v1775713825584!5m2!1sen!2sph"
    className="w-full h-[200px] sm:h-[250px] border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
  ></iframe>
</div>
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
              href="https://facebook.com/topchoiceforwarders" // replace with your actual page
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
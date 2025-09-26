export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-4">
      <section className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 text-gray-100">
        <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="mb-4 text-gray-300">
          We collect only the information needed to respond to student enquiries and to deliver our free guidance services. 
          Personal details submitted through our forms are never sold, and are shared only with university partners when you ask us to make an introduction on your behalf.
        </p>
        <p className="mb-4 text-gray-300">
          If you would like to update or remove the information you have provided, email us at <a className="text-cyan-400" href="mailto:info@globalrise.in">info@globalrise.in</a> and we will process your request within two business days.
        </p>
        <p className="text-gray-300">
          Because every stage of our support is offered at no cost to students, we will never ask for payment details on this website.
        </p>
      </section>
    </main>
  );
}

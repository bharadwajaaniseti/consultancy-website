import React from "react";

export default function CareersPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">Careers</h1>
      <div className="mb-8 p-6 bg-white rounded-lg shadow">
        <div className="text-2xl mb-2">🌍 Join Our Team at Global Rise – India 🌍</div>
        <p className="text-gray-700 mb-2">📍 <b>Location:</b> India (Remote)</p>
        <p className="text-gray-700 mb-2">🕒 <b>Work Schedule:</b> 5 days a week + Half-day team meeting on Saturdays</p>
        <p className="mb-4">At Global Rise, we support students and job seekers in their career and education journeys. As part of our growing India branch, we’re hiring enthusiastic individuals to contribute to:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>✨ Resume & career support</li>
          <li>✨ Content and social media marketing</li>
          <li>✨ Student outreach and engagement</li>
        </ul>
        <p className="mb-4">You’ll also get the chance to collaborate with our UK parent company, gaining international work exposure.</p>
        <h2 className="text-xl font-semibold mb-2">✅ Who Can Apply</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Freshers & graduates welcome (training provided)</li>
          <li>Strong communication skills</li>
          <li>Interest in career consulting or marketing</li>
          <li>Basic computer knowledge</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">🎁 What We Offer</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Flexible remote working</li>
          <li>International client exposure</li>
          <li>Competitive pay + incentives</li>
          <li>Growth opportunities in a fast-growing global brand</li>
        </ul>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Apply Now</button>
      </div>
    </main>
  );
}

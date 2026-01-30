import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { securitySolutions } from "./Securitysolutions"; // Export your array from Securitysolutions.jsx

function SecurityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const solution = securitySolutions.find((s) => s.id === id);

  if (!solution) {
    return <div>Solution not found.</div>;
  }

  const IconComponent = solution.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300"
        >
          <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
          Back to Solutions
        </button>
        <div className="bg-white rounded-3xl p-8 mb-8 border border-gray-200">
          <div className="flex items-center mb-6">
            <div className="p-4 bg-white/60 rounded-2xl mr-6">
              <IconComponent className="w-12 h-12 text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {solution.title}
              </h1>
              <span className="px-4 py-2 rounded-full text-sm font-medium text-blue-400 bg-white/60 capitalize">
                {solution.category}
              </span>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            {solution.details?.description}
          </p>
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">Features</h2>
            <ul className="list-disc pl-6">
              {solution.details?.features?.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <h2 className="text-xl font-bold mt-4 mb-2">Benefits</h2>
            <ul className="list-disc pl-6">
              {solution.details?.benefits?.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityDetail;

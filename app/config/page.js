"use client";
import { useEffect, useState } from "react";
import { fetchConfig } from "../api/route";

export default function Config() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function loadConfig() {
      try {
        if (mounted) setLoading(true);
        const data = await fetchConfig();
        if (mounted) setConfig(data);
      } catch (err) {
        console.error(err);
        if (mounted) setError(err.message || "Failed to fetch");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadConfig();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <p className="p-8 text-gray-700">Loading config...</p>;
  if (error) {
    return <p className="p-8 font-medium text-red-600">Error: {error}</p>;
  }
  if (!config) return <p className="p-8 text-gray-700">No config found</p>;

  const { drone_id, drone_name, light, country } = config;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Drone Config
        </h1>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <table className="border-collapse w-full">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-semibold bg-gray-50 w-1/3">Drone ID</td>
                <td className="p-3">{drone_id}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-semibold bg-gray-50">Drone Name</td>
                <td className="p-3">{drone_name}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-semibold bg-gray-50">Light</td>
                <td className="p-3">{light}</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold bg-gray-50">Country</td>
                <td className="p-3">{country}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

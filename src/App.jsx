import Login from "./Login";
import { useState } from "react";

import tnLogo from "./assets/tn-logo.png";
import ramnadLogo from "./assets/ramnad-logo.png";
import dmeLogo from "./assets/dme-logo.png";

import { db } from "./firebase";

import {
  collection,
  addDoc
} from "firebase/firestore";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts";
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [department, setDepartment] = useState("");
  const [moduleName, setModuleName] = useState("");
  const [observed, setObserved] = useState("");
  const [total, setTotal] = useState("");

  const [auditRecords, setAuditRecords] = useState([]);

  const saveAudit = async () => {

    if (!department || !moduleName || !observed || !total) {
      alert("Please fill all fields");
      return;
    }

    const compliance = (
      (Number(observed) / Number(total)) * 100
    ).toFixed(1);

    let status = "";

    if (compliance >= 90) {
      status = "Excellent";
    } else if (compliance >= 75) {
      status = "Good";
    } else if (compliance >= 50) {
      status = "Needs Improvement";
    } else {
      status = "Critical";
    }

    const newAudit = {
      department,
      moduleName,
      observed,
      total,
      compliance,
      status,
    };

    try {

      await addDoc(
        collection(db, "audits"),
        {
          ...newAudit,
          createdAt: new Date(),
        }
      );

      setAuditRecords([...auditRecords, newAudit]);

      alert("Audit Saved To Firebase");

      setDepartment("");
      setModuleName("");
      setObserved("");
      setTotal("");

    } catch (error) {

      console.error(error);

      alert("Firebase save failed");
    }
  };
const chartData = [
  {
    name: "Hand Hygiene",
    compliance: 82,
  },
  {
    name: "BMW",
    compliance: 88,
  },
  {
    name: "PPE",
    compliance: 71,
  },
  {
    name: "OT Sterility",
    compliance: 93,
  },
  {
    name: "Environmental",
    compliance: 76,
  },
  {
    name: "Isolation",
    compliance: 68,
  },
];

const pieData = [
  { name: "Compliant", value: 82 },
  { name: "Non-Compliant", value: 18 },
];
const haiData = [
  {
    area: "ICU",
    clabsi: 2.1,
    cauti: 1.4,
    vap: 3.2,
  },
  {
    area: "NICU",
    clabsi: 1.2,
    cauti: 0.8,
    vap: 1.1,
  },
  {
    area: "PICU",
    clabsi: 1.8,
    cauti: 1.0,
    vap: 2.4,
  },
  {
    area: "Dialysis",
    clabsi: 2.6,
    cauti: 0.5,
    vap: 0,
  },
];

const mdrData = [
  {
    organism: "MRSA",
    resistance: 48,
  },
  {
    organism: "CRE",
    resistance: 71,
  },
  {
    organism: "VRE",
    resistance: 39,
  },
  {
    organism: "Acinetobacter",
    resistance: 84,
  },
];

const outbreakAlerts = [
  "Possible MDR Acinetobacter cluster in ICU",
  "Increased VAP trend detected in ICU",
  "Hand hygiene dropped below threshold in NICU",
  "Possible CRE transmission alert in surgical ward",
];
const departmentScores = [
  {
    department: "ICU",
    score: 62,
    risk: "High",
  },
  {
    department: "NICU",
    score: 78,
    risk: "Moderate",
  },
  {
    department: "OT",
    score: 91,
    risk: "Low",
  },
  {
    department: "Dialysis",
    score: 69,
    risk: "High",
  },
  {
    department: "Emergency",
    score: 72,
    risk: "Moderate",
  },
];

const antibioticUsage = [
  {
    antibiotic: "Meropenem",
    usage: 88,
  },
  {
    antibiotic: "Colistin",
    usage: 71,
  },
  {
    antibiotic: "Vancomycin",
    usage: 64,
  },
  {
    antibiotic: "Piperacillin-Tazobactam",
    usage: 92,
  },
];

const capaRecommendations = [
  "Conduct urgent ICU hand hygiene retraining",
  "Increase environmental cleaning frequency in ICU",
  "Review carbapenem prescription policy",
  "Strengthen VAP prevention bundle compliance",
  "Increase MDRO screening in high-risk wards",
];
const heatmapData = [
  {
    ward: "ICU",
    risk: "Critical",
    color: "bg-red-600",
  },
  {
    ward: "NICU",
    risk: "Moderate",
    color: "bg-yellow-500",
  },
  {
    ward: "OT",
    risk: "Low",
    color: "bg-green-600",
  },
  {
    ward: "Emergency",
    risk: "High",
    color: "bg-orange-500",
  },
  {
    ward: "Dialysis",
    risk: "High",
    color: "bg-red-500",
  },
  {
    ward: "PICU",
    risk: "Moderate",
    color: "bg-yellow-400",
  },
];

const realtimeAlerts = [
  "ICU compliance dropped below 70%",
  "Potential outbreak signal detected in Dialysis Unit",
  "MRSA cluster increasing in surgical ward",
  "Environmental cleaning overdue in Emergency Ward",
];

const aiPredictions = [
  {
    title: "Predicted VAP Increase",
    probability: "82%",
  },
  {
    title: "Potential CRE Spread",
    probability: "71%",
  },
  {
    title: "Hand Hygiene Decline",
    probability: "65%",
  },
];

const executiveMetrics = [
  {
    metric: "Hospital Safety Score",
    value: "84%",
  },
  {
    metric: "AI Prediction Accuracy",
    value: "92%",
  },
  {
    metric: "NABL Readiness",
    value: "89%",
  },
  {
    metric: "WHO IPC Compliance",
    value: "86%",
  },
];
const COLORS = [
  "#2563eb",
  "#dc2626",
];
  const infectionModules = [
    {
      title: "Hand Hygiene Compliance",
      compliance: 82,
      status: "Good",
    },
    {
      title: "Biomedical Waste Management",
      compliance: 88,
      status: "Good",
    },
    {
      title: "PPE Compliance",
      compliance: 71,
      status: "Needs Improvement",
    },
    {
      title: "OT Sterility Monitoring",
      compliance: 93,
      status: "Excellent",
    },
    {
      title: "Environmental Cleaning",
      compliance: 76,
      status: "Good",
    },
    {
      title: "Isolation Precautions",
      compliance: 68,
      status: "Needs Improvement",
    },
  ];
if (!isLoggedIn) {
  return <Login setIsLoggedIn={setIsLoggedIn} />;
}
  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-7xl mx-auto">

        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-3xl shadow-xl p-8 mb-8">

  <div className="flex items-center justify-between">

    <img
      src={ramnadLogo}
      alt="Ramnad Medical College Logo"
      className="w-28 h-28 object-contain bg-white rounded-full"
    />

    <div className="text-center flex-1 px-6">

      <img
        src={tnLogo}
        alt="Tamil Nadu Government Logo"
        className="w-28 h-28 object-contain mx-auto mb-4 bg-white rounded-full"
      />

      <h2 className="text-3xl font-bold tracking-wide mb-2">
        DEPARTMENT OF MICROBIOLOGY
      </h2>

      <h3 className="text-2xl font-semibold mb-4">
        Government Medical College & Hospital, Ramanathapuram, Tamil Nadu, India
      </h3>

      <h1 className="text-5xl font-bold mb-3">
        Hospital Infection Control Programme Dashboard
      </h1>

      <p className="text-xl opacity-90">
        CDC • WHO • NABL • NABH Guided Smart Surveillance Platform
      </p>

    </div>

    <img
      src={dmeLogo}
      alt="DME Logo"
      className="w-28 h-28 object-contain bg-white rounded-full"
    />

  </div>

</div>
<div className="grid md:grid-cols-4 gap-6 mb-8">

  <div className="bg-white rounded-3xl shadow-lg p-6">
    <h2 className="text-lg text-slate-500 mb-2">
      Overall Compliance
    </h2>

    <div className="text-5xl font-bold text-blue-700">
      82%
    </div>
  </div>
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-lg text-slate-500 mb-2">
              High Risk Areas
            </h2>

            <div className="text-5xl font-bold text-red-600">
              3
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-lg text-slate-500 mb-2">
              Active HAI Alerts
            </h2>

            <div className="text-5xl font-bold text-yellow-600">
              5
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-lg text-slate-500 mb-2">
              AI Risk Prediction
            </h2>

            <div className="text-4xl font-bold text-purple-700">
              Moderate
            </div>
          </div>

                </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6">
            Add Infection Control Audit
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

            <input
              type="text"
              placeholder="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="border p-4 rounded-2xl"
            />

            <input
              type="text"
              placeholder="Module Name"
              value={moduleName}
              onChange={(e) => setModuleName(e.target.value)}
              className="border p-4 rounded-2xl"
            />

            <input
              type="number"
              placeholder="Observed Correct Practices"
              value={observed}
              onChange={(e) => setObserved(e.target.value)}
              className="border p-4 rounded-2xl"
            />

            <input
              type="number"
              placeholder="Total Observations"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              className="border p-4 rounded-2xl"
            />

          </div>

          <button
            onClick={saveAudit}
            className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-2xl text-lg"
          >
            Save Audit
          </button>

        </div>
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">

          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Comprehensive Hospital Infection Control Programme
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

                        {[
              "Hand Hygiene Monitoring",
              "WHO 5 Moments Compliance",
              "PPE Compliance Audit",
              "Biomedical Waste Segregation",
              "Sharp Injury Surveillance",
              "Needle Stick Injury Registry",
              "Post Exposure Prophylaxis",
              "Isolation Precaution Monitoring",
              "Operation Theatre Sterility",
              "CSSD Sterilization Monitoring",
              "Environmental Cleaning Audit",
              "ICU Infection Surveillance",
              "NICU Infection Surveillance",
              "Dialysis Unit Surveillance",
              "Surgical Site Infection Monitoring",
              "Ventilator Associated Pneumonia",
              "Catheter Associated UTI",
              "Central Line Bloodstream Infection",
              "MDRO Surveillance",
              "MRSA Surveillance",
              "CRE Surveillance",
              "Antibiotic Stewardship",
              "Antibiogram Monitoring",
              "Water Quality Monitoring",
              "Air Quality Monitoring",
              "Laundry Infection Control",
              "Kitchen Hygiene Audit",
              "Laboratory Biosafety Audit",
              "NABL Compliance Monitoring",
              "NABH Infection Indicators",
              "CDC Bundle Compliance",
              "WHO IPC Core Components",
              "HICC Meeting Compliance",
              "AI Outbreak Prediction"
            ].map((item, index) => (

              <div
                key={index}
                className="bg-slate-100 rounded-2xl p-4 border border-slate-200 hover:bg-blue-50 transition"
              >

                <div className="text-lg font-semibold text-slate-800">
                  {item}
                </div>

              </div>

            ))}

          </div>

        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Compliance Analytics
            </h2>

            <ResponsiveContainer width="100%" height={350}>

              <BarChart data={chartData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="compliance"
                  fill="#2563eb"
                  radius={[10, 10, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Compliance Distribution
            </h2>

            <ResponsiveContainer width="100%" height={350}>

              <PieChart>

                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  dataKey="value"
                  label
                >

                  {pieData.map((entry, index) => (

                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />

                  ))}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">

          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Infection Trend Analysis
          </h2>

          <ResponsiveContainer width="100%" height={350}>

            <LineChart data={chartData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="compliance"
                stroke="#7c3aed"
                strokeWidth={4}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>
                <div className="grid md:grid-cols-2 gap-8 mb-8">

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              HAI Surveillance Dashboard
            </h2>

            <ResponsiveContainer width="100%" height={350}>

              <BarChart data={haiData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="area" />

                <YAxis />

                <Tooltip />

                <Bar dataKey="clabsi" fill="#dc2626" />
                <Bar dataKey="cauti" fill="#2563eb" />
                <Bar dataKey="vap" fill="#7c3aed" />

              </BarChart>

            </ResponsiveContainer>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              MDR Organism Resistance
            </h2>

            <ResponsiveContainer width="100%" height={350}>

              <BarChart data={mdrData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="organism" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="resistance"
                  fill="#dc2626"
                  radius={[10, 10, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">

          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            AI Outbreak Prediction Alerts
          </h2>

          <div className="space-y-4">

            {outbreakAlerts.map((alert, index) => (

              <div
                key={index}
                className="bg-red-50 border border-red-200 text-red-700 rounded-2xl p-5 text-lg"
              >

                ⚠️ {alert}

              </div>

            ))}

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">

          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Critical Surveillance Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "ICU Surveillance",
              "NICU Surveillance",
              "PICU Surveillance",
              "Dialysis Surveillance",
              "Operation Theatre",
              "Labour Room",
              "CSSD Monitoring",
              "Isolation Ward",
              "Emergency Department",
              "Blood Bank",
              "Microbiology Lab",
              "Biomedical Waste Area"
            ].map((area, index) => (

              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 text-center shadow-sm"
              >

                <div className="text-xl font-bold text-slate-800">
                  {area}
                </div>

              </div>

            ))}

          </div>

        </div>
                <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white rounded-3xl shadow-2xl p-8 mb-8">

          <h2 className="text-4xl font-bold mb-8">
            AI Infection Control Command Center
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">

              <h3 className="text-lg opacity-80 mb-2">
                Hospital Risk Score
              </h3>

              <div className="text-5xl font-bold text-red-400">
                74
              </div>

            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">

              <h3 className="text-lg opacity-80 mb-2">
                Active Outbreak Signals
              </h3>

              <div className="text-5xl font-bold text-yellow-300">
                4
              </div>

            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">

              <h3 className="text-lg opacity-80 mb-2">
                MDR Threat Index
              </h3>

              <div className="text-5xl font-bold text-red-500">
                High
              </div>

            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">

              <h3 className="text-lg opacity-80 mb-2">
                Compliance Forecast
              </h3>

              <div className="text-5xl font-bold text-green-400">
                Stable
              </div>

            </div>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Department Risk Ranking
            </h2>

            <div className="space-y-4">

              {departmentScores.map((dept, index) => (

                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl p-5"
                >

                  <div className="flex justify-between items-center">

                    <div>

                      <div className="text-2xl font-bold text-slate-800">
                        {dept.department}
                      </div>

                      <div className="text-lg text-slate-500">
                        Risk: {dept.risk}
                      </div>

                    </div>

                    <div className="text-4xl font-bold text-blue-700">
                      {dept.score}%
                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Antibiotic Stewardship Analytics
            </h2>

            <ResponsiveContainer width="100%" height={350}>

              <BarChart data={antibioticUsage}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="antibiotic" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="usage"
                  fill="#7c3aed"
                  radius={[10, 10, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">

          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            AI CAPA Recommendation Engine
          </h2>

          <div className="space-y-4">

            {capaRecommendations.map((item, index) => (

              <div
                key={index}
                className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-lg text-blue-900"
              >

                ✅ {item}

              </div>

            ))}

          </div>

        </div>
                <div className="bg-gradient-to-r from-red-950 to-black text-white rounded-3xl shadow-2xl p-8 mb-8">

          <h2 className="text-4xl font-bold mb-8">
            National AI Surveillance Grid
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {executiveMetrics.map((item, index) => (

              <div
                key={index}
                className="bg-white/10 rounded-2xl p-6 backdrop-blur"
              >

                <div className="text-lg opacity-80 mb-2">
                  {item.metric}
                </div>

                <div className="text-5xl font-bold text-cyan-300">
                  {item.value}
                </div>

              </div>

            ))}

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">

          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Hospital Infection Risk Heatmap
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

            {heatmapData.map((item, index) => (

              <div
                key={index}
                className={`${item.color} text-white rounded-3xl p-8 text-center shadow-lg`}
              >

                <div className="text-2xl font-bold mb-3">
                  {item.ward}
                </div>

                <div className="text-lg">
                  {item.risk}
                </div>

              </div>

            ))}

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Real-Time Smart Alerts
            </h2>

            <div className="space-y-4">

              {realtimeAlerts.map((alert, index) => (

                <div
                  key={index}
                  className="bg-red-50 border border-red-200 rounded-2xl p-5 text-red-700 text-lg"
                >

                  🚨 {alert}

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              AI Prediction Engine
            </h2>

            <div className="space-y-4">

              {aiPredictions.map((prediction, index) => (

                <div
                  key={index}
                  className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5"
                >

                  <div className="text-xl font-bold text-slate-800 mb-2">
                    {prediction.title}
                  </div>

                  <div className="text-4xl font-bold text-indigo-700">
                    {prediction.probability}
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        <div className="bg-gradient-to-r from-blue-950 to-indigo-950 text-white rounded-3xl shadow-2xl p-8 mb-8">

          <h2 className="text-4xl font-bold mb-8">
            Future Ready Smart Hospital Platform
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Live Firebase Monitoring",
              "Multi Hospital Integration",
              "WhatsApp Alert System",
              "QR Code Ward Audits",
              "Mobile APK",
              "AI Voice Assistant",
              "Machine Learning Prediction",
              "IoT Sensor Integration",
              "Smart ICU Surveillance",
              "Automated CAPA",
              "Cloud Analytics",
              "National IPC Grid"
            ].map((feature, index) => (

              <div
                key={index}
                className="bg-white/10 backdrop-blur rounded-2xl p-5 text-center"
              >

                <div className="text-lg font-semibold">
                  {feature}
                </div>

              </div>

            ))}

          </div>

        </div>
                <div className="bg-gradient-to-r from-black to-slate-900 text-white rounded-3xl shadow-2xl p-8 mb-8">

          <h2 className="text-5xl font-bold mb-8">
            Enterprise Smart Hospital Ecosystem
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

            {[
              {
                title: "Login System",
                desc: "Secure authentication for all healthcare workers",
              },
              {
                title: "Multi User Access",
                desc: "ICN, Microbiologist, Admin, Nursing roles",
              },
              {
                title: "PDF Export",
                desc: "NABL/NABH compliant reporting engine",
              },
              {
                title: "Android APK",
                desc: "Mobile infection control application",
              },
              {
                title: "Live Firebase Sync",
                desc: "Real-time cloud synchronization",
              },
              {
                title: "Real-Time Alerts",
                desc: "Instant outbreak & compliance notifications",
              },
              {
                title: "AI Chatbot",
                desc: "Smart infection prevention assistant",
              },
              {
                title: "Machine Learning Models",
                desc: "Predictive infection forecasting engine",
              },
              {
                title: "State-Wide Integration",
                desc: "Inter-hospital surveillance connectivity",
              },
              {
                title: "Government Reporting",
                desc: "Automated state and national reporting",
              },
            ].map((feature, index) => (

              <div
                key={index}
                className="bg-white/10 backdrop-blur rounded-3xl p-6 border border-white/10 hover:scale-105 transition"
              >

                <div className="text-2xl font-bold text-cyan-300 mb-4">
                  {feature.title}
                </div>

                <div className="text-lg text-slate-200">
                  {feature.desc}
                </div>

              </div>

            ))}

          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          <div className="bg-green-100 border border-green-300 rounded-3xl p-8">

            <div className="text-2xl font-bold text-green-800 mb-2">
              Firebase Status
            </div>

            <div className="text-5xl font-bold text-green-700">
              LIVE
            </div>

          </div>

          <div className="bg-blue-100 border border-blue-300 rounded-3xl p-8">

            <div className="text-2xl font-bold text-blue-800 mb-2">
              AI Engine
            </div>

            <div className="text-5xl font-bold text-blue-700">
              ACTIVE
            </div>

          </div>

          <div className="bg-purple-100 border border-purple-300 rounded-3xl p-8">

            <div className="text-2xl font-bold text-purple-800 mb-2">
              Surveillance Grid
            </div>

            <div className="text-5xl font-bold text-purple-700">
              ONLINE
            </div>

          </div>

          <div className="bg-red-100 border border-red-300 rounded-3xl p-8">

            <div className="text-2xl font-bold text-red-800 mb-2">
              Alert System
            </div>

            <div className="text-5xl font-bold text-red-700">
              READY
            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">

          <h2 className="text-4xl font-bold text-slate-800 mb-8">
            Smart User Access Control
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

            {[
              "Administrator",
              "Microbiologist",
              "Infection Control Nurse",
              "Nursing Superintendent",
              "Hospital Director",
            ].map((role, index) => (

              <div
                key={index}
                className="bg-slate-100 rounded-2xl p-6 text-center border border-slate-200"
              >

                <div className="text-xl font-bold text-slate-800">
                  {role}
                </div>

              </div>

            ))}

          </div>

        </div>

        <div className="bg-gradient-to-r from-indigo-950 to-black text-white rounded-3xl shadow-2xl p-8 mb-8">

          <h2 className="text-4xl font-bold mb-8">
            Government Surveillance Integration
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur">

              <div className="text-2xl font-bold mb-4">
                State Surveillance Node
              </div>

              <div className="text-lg opacity-90">
                Tamil Nadu AI Infection Surveillance Integration
              </div>

            </div>

            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur">

              <div className="text-2xl font-bold mb-4">
                National Reporting Engine
              </div>

              <div className="text-lg opacity-90">
                Automated outbreak reporting system
              </div>

            </div>

            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur">

              <div className="text-2xl font-bold mb-4">
                AI Health Intelligence
              </div>

              <div className="text-lg opacity-90">
                Predictive infection intelligence network
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
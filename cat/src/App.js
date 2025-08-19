import React from "react";

const teamMembers = [
  { name: "Selvi", role: "Designer", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Kumaran", role: "Tester", image: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Tester", role: "Design", image: "https://randomuser.me/api/portraits/men/46.jpg" },
  { name: "Anu", role: "Team Lead", image: "https://randomuser.me/api/portraits/women/47.jpg" }
];

export default function TeamPage() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", textAlign: "center" }}>
      <h2>👨‍💻 Our Team Page</h2>

      {/* Static Card */}
      <div style={{ display: "inline-block", margin: "20px" }}>
        <img
          src="https://randomuser.me/api/portraits/men/40.jpg"
          alt="Arun"
          style={{ borderRadius: "50%", width: "100px", height: "100px" }}
        />
        <h3>Arun</h3>
        <p>Developer</p>
      </div>

      <h3 style={{ marginTop: "40px" }}>Team Members (Dynamic using map)</h3>

      {/* Dynamic Cards */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            style={{
              width: "150px",
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              textAlign: "center",
              backgroundColor: "#f9f9f9"
            }}
          >
            <img
              src={member.image}
              alt={member.name}
              style={{ borderRadius: "50%", width: "80px", height: "80px" }}
            />
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

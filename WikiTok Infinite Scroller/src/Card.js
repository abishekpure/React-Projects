import React from "react";

const Card = ({ item }) => {
  const gradients = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  ];
  const background = gradients[item.id % gradients.length];

  // Extended list of authors
  const authors = [
    "Emma Johnson",
    "Liam Smith",
    "Olivia Brown",
    "Noah Wilson",
    "Sophia Miller",
    "Ethan Davis",
    "Ava Martinez",
    "Mason Garcia",
    "Isabella Rodriguez",
    "James Lee",
    "Mia Thompson",
    "Alexander White",
    "Charlotte Harris",
    "Benjamin Clark",
    "Amelia Lewis",
    "Daniel Young",
    "Harper Walker",
    "Matthew Hall",
    "Ella Allen",
    "Henry King",
    "Aria Scott",
    "Lucas Green",
    "Chloe Adams",
    "Sebastian Nelson",
    "Grace Baker",
    "Jack Rivera",
    "Victoria Perez",
    "Leo Carter",
    "Zoe Mitchell",
    "David Turner",
    "Layla Collins",
    "Owen Morgan",
    "Lily Torres",
    "Elijah Nguyen",
    "Hannah Flores",
    "Gabriel Reed",
    "Scarlett Cooper",
    "Samuel Ward",
    "Aurora Brooks",
  ];

  // Deterministic author selection
  const author = authors[item.id % authors.length];

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        scrollSnapAlign: "start",
        background,
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      {/* Inner card container */}
      <div
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(6px)",
          padding: "2.5rem",
          borderRadius: "20px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
          maxWidth: "750px",
          width: "100%",
          color: "#0a0a12ff",
          textAlign: "center",
          animation: "fadeUp 0.8s ease",
        }}
      >
        <h1
          style={{
            fontSize: "2.6rem",
            fontWeight: "700",
            marginBottom: "1.2rem",
            lineHeight: "1.3",
          }}
        >
          {item.title}
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8rem",
            opacity: 0.95,
            marginBottom: "2rem",
          }}
        >
          {item.body}
        </p>

        {/* Display author name */}
        <small
          style={{
            fontSize: "0.95rem",
            opacity: 0.85,
            letterSpacing: "0.4px",
            display: "block",
            marginTop: "1rem",
            fontStyle: "italic",
          }}
        >
          ✍️ Written by {author}
        </small>
      </div>

      {/* Simple CSS animation */}
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Card;

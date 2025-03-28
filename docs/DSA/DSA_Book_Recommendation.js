import React from "react";

const books = [
  {
    title: "Algorithms in C++, Parts 1-4",
    author: "Robert Sedgewick",
    description:
      "This book provides a comprehensive introduction to algorithms and data structures in C++. It covers fundamentals, sorting, searching, and essential algorithmic techniques with practical C++ implementations.",
    features: [
      "Fundamentals of algorithm analysis",
      "Various sorting and searching techniques with real-world applications",
      "Efficient data structures like linked lists, trees, and graphs",
      "Well-structured C++ code for each algorithm",
    ],
    amazonLink: "https://amzn.to/43v6A99",
  },
  {
    title: "Data Structure and Algorithm in C++",
    author: "Adam Drozdek",
    description:
      "This book focuses on core data structures and algorithms with in-depth theoretical and practical coverage. It explores stacks, queues, linked lists, trees, graphs, hashing, and recursion.",
    features: [
      "Clear explanations of fundamental and advanced data structures",
      "Hands-on C++ implementations with examples",
      "Algorithm efficiency analysis and performance considerations",
      "Practical problems and exercises for self-learning",
    ],
    amazonLink: "https://amzn.to/43tJUpS",
  },
  {
    title: "Object-Oriented Programming with C++ (8th Edition)",
    author: "E. Balagurusamy",
    description:
      "This book serves as an introductory guide to Object-Oriented Programming (OOP) in C++, covering encapsulation, inheritance, polymorphism, and exception handling.",
    features: [
      "Detailed coverage of OOP principles with real-world applications",
      "Step-by-step C++ programs explaining class design, inheritance, and polymorphism",
      "Practical exercises for better understanding",
      "Useful for students, developers, and interview preparation",
    ],
    amazonLink: "https://amzn.to/4l29Uix",
  },
];

export default function DSA_Book_Recommendation() {
  return (
    <div style={{ padding: "10px" }}>
      {/* 🔹 Amazon Affiliate Tip */}
      <div style={{ background: "#fffae6", padding: "10px", borderRadius: "5px", marginBottom: "10px" }}>
        <strong>📢 Amazon Affiliate Tip:</strong>  
        If you purchase through these links, we may earn a small commission at no extra cost to you.  
        <br />
        <a href="https://amzn.to/4l4BWd2" target="_blank" rel="noopener noreferrer">
          👉 Browse More Books on Amazon
        </a>
      </div>

      <h2>📚 Recommended Books</h2>
      {books.map((book, index) => (
        <details key={index} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}>
          <summary style={{ cursor: "pointer", fontWeight: "bold", fontSize: "18px" }}>📘 {book.title} – {book.author}</summary>
          <p><strong>Author:</strong> {book.author}</p>
          <p>{book.description}</p>
          <h4>🔹 What to Expect:</h4>
          <ul>
            {book.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <a href={book.amazonLink} target="_blank" rel="noopener noreferrer">
            👉 Buy Now on Amazon
          </a>
        </details>
      ))}
    </div>
  );
}

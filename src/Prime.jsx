import React, { useState } from "react";

function PrimeNumbers() {
  const [n, setN] = useState(""); // Input value for n
  const [primes, setPrimes] = useState([]); // List of prime numbers

  // Function to check if a number is prime
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // Function to calculate the first n prime numbers
  const generatePrimes = (n) => {
    const primes = [];
    let number = 2;
    while (primes.length < n) {
      if (isPrime(number)) primes.push(number);
      number++;
    }
    return primes;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (n > 0) {
      const result = generatePrimes(parseInt(n, 10));
      setPrimes(result);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
      <h1>Prime Numbers Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter n"
          value={n}
          onChange={(e) => setN(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            margin: "10px",
            width: "200px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            color: "white",
            backgroundColor: "#007BFF",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Generate
        </button>
      </form>
      <div style={{ marginTop: "20px" }}>
        {primes.length > 0 && (
          <div>
            <h2>First {n} Prime Numbers:</h2>
            <p>{primes.join(", ")}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PrimeNumbers;

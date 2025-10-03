import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const loadingRef = useRef(false);

  const { ref, inView } = useInView({ threshold: 0.5 });

  // Reusable fetch function
  const fetchPosts = async () => {
    if (loadingRef.current) return;
    loadingRef.current = true;

    try {
      const res = await axios.get(
        `https://dummyjson.com/posts?limit=5&skip=${(page - 1) * 5}`
      );
      setItems((prev) => [...prev, ...res.data.posts]);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.error("Failed to fetch posts", err);
    } finally {
      loadingRef.current = false;
    }
  };

  // Initial fetch (define inline to avoid dependency warning)
  useEffect(() => {
    (async () => {
      if (loadingRef.current) return;
      loadingRef.current = true;
      try {
        const res = await axios.get(
          `https://dummyjson.com/posts?limit=5&skip=0`
        );
        setItems(res.data.posts);
        setPage(2); // since first batch already loaded
      } catch (err) {
        console.error("Failed to fetch posts", err);
      } finally {
        loadingRef.current = false;
      }
    })();
  }, []);

  // Infinite scroll trigger
  useEffect(() => {
    if (inView) fetchPosts();
  }, [inView]); // no warning now ✅

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      {/* Fixed Header */}
      <header
  style={{
    position: "fixed",
    top: 0,
    width: "100%",
    height: "60px",
    backgroundColor: "#7f7979ff",
    color: "violet",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3.5rem",
    zIndex: 10,
    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
    gap: "0.5rem",
    fontFamily: "'Libre Bodoni', serif", // <-- Bodoni applied here
  }}
>
  <span>WikiTok</span> -{" "}
  <span style={{ color: "#550000" }}>Infinite Scroller</span>
</header>


      {/* Scrollable Cards */}
      <div
        style={{
          scrollSnapType: "y mandatory",
          overflowY: "scroll",
          height: "100vh",
          scrollBehavior: "smooth",
          paddingTop: "60px", // avoid overlapping header
        }}
      >
        {items.map((item, index) => {
          if (index === items.length - 1) {
            return (
              <div ref={ref} key={item.id}>
                <Card item={item} />
              </div>
            );
          }
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import "./blog.css";

const DEFAULT_POSTS = [
  {
    id: 1,
    title: "Building AI Projects That Solve Real Problems",
    text: "Working on RecoverX, an AI-powered revenue recovery agent, showed me how AI can go beyond experiments and solve practical business problems. Building systems that evaluate data, apply intelligent decisions, and produce measurable results has made AI one of my strongest areas of interest.",
  },

  {
    id: 2,
    title: "What I Learned From Building a Stock Trading App",
    text: "Building my stock trading platform helped me understand how frontend interfaces, APIs, authentication, databases, and backend services come together in a real application. Working with React, Express, MongoDB, and real-time market data also taught me the importance of clean and reusable components.",
  },

  {
    id: 3,
    title: "From College Ideas to Real Projects",
    text: "Projects like CampusFlow taught me that even simple college problems can become useful software solutions. Designing student and admin modules, implementing authentication, and connecting a React frontend with Node.js, Express, and MongoDB gave me valuable experience in full-stack development.",
  },

  {
    id: 4,
    title: "My Journey as a Computer Science Student",
    text: "As a final-year Computer Science student, I am continuously improving my skills in Java, Python, web development, databases, DSA, and software development. My goal is to keep learning by building projects, solving problems, and gaining real-world development experience.",
  },
];

export default function Blog() {
  const [posts, setPosts] = useState([]);

  /* =========================
     LOAD SAVED VOTES
  ========================= */

  useEffect(() => {
    const savedVotes = JSON.parse(
      localStorage.getItem("naveen_blog_votes") || "{}"
    );

    const votedByUser = JSON.parse(
      localStorage.getItem("naveen_blog_voted") || "{}"
    );

    const postsWithVotes = DEFAULT_POSTS.map((post) => ({
      ...post,
      agree: savedVotes[post.id]?.agree || 0,
      disagree: savedVotes[post.id]?.disagree || 0,
      userVote: votedByUser[post.id] || null,
    }));

    setPosts(postsWithVotes);
  }, []);

  /* =========================
     LIKE / DISLIKE
  ========================= */

  const vote = (id, type) => {
    const votedByUser = JSON.parse(
      localStorage.getItem("naveen_blog_voted") || "{}"
    );

    const currentVote = votedByUser[id] || null;

    const updatedPosts = posts.map((post) => {
      if (post.id !== id) {
        return post;
      }

      let agree = post.agree;
      let disagree = post.disagree;
      let userVote = currentVote;

      // =========================
      // CLICK SAME BUTTON
      // LIKE -> UNLIKE
      // DISLIKE -> UNDISLIKE
      // =========================

      if (currentVote === type) {
        if (type === "agree") {
          agree = Math.max(0, agree - 1);
        }

        if (type === "disagree") {
          disagree = Math.max(0, disagree - 1);
        }

        userVote = null;
      }

      // =========================
      // SWITCH VOTE
      // LIKE -> DISLIKE
      // DISLIKE -> LIKE
      // =========================

      else {
        // Remove previous vote
        if (currentVote === "agree") {
          agree = Math.max(0, agree - 1);
        }

        if (currentVote === "disagree") {
          disagree = Math.max(0, disagree - 1);
        }

        // Add new vote
        if (type === "agree") {
          agree += 1;
        }

        if (type === "disagree") {
          disagree += 1;
        }

        userVote = type;
      }

      return {
        ...post,
        agree,
        disagree,
        userVote,
      };
    });

    setPosts(updatedPosts);

    /* =========================
       SAVE COUNTS
    ========================= */

    const votes = Object.fromEntries(
      updatedPosts.map((post) => [
        post.id,
        {
          agree: post.agree,
          disagree: post.disagree,
        },
      ])
    );

    localStorage.setItem(
      "naveen_blog_votes",
      JSON.stringify(votes)
    );

    /* =========================
       SAVE USER VOTE
    ========================= */

    const updatedUserVotes = {
      ...votedByUser,
    };

    const updatedPost = updatedPosts.find(
      (post) => post.id === id
    );

    if (updatedPost.userVote === null) {
      delete updatedUserVotes[id];
    } else {
      updatedUserVotes[id] = updatedPost.userVote;
    }

    localStorage.setItem(
      "naveen_blog_voted",
      JSON.stringify(updatedUserVotes)
    );
  };

  return (
    <motion.section
      id="blog"
      className="blog-section"
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      {/* =========================
          TITLE
      ========================= */}

      <motion.h2
        className="blog-title"
        initial={{
          y: -15,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        📝 My Blog
      </motion.h2>

      <p className="blog-sub">
        Thoughts, experiences, and lessons from my journey in
        technology and software development.
      </p>

      {/* =========================
          BLOG GRID
      ========================= */}

      <div className="blog-grid">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            className="blog-post"
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            whileHover={{
              scale: 1.02,
              y: -5,
              boxShadow:
                "0 0 20px rgba(0, 183, 255, 0.18)",
            }}
          >
            {/* =========================
                BLOG TITLE
            ========================= */}

            <h3 className="post-title">
              {post.title}
            </h3>

            {/* =========================
                BLOG CONTENT
            ========================= */}

            <p className="post-text">
              {post.text}
            </p>

            {/* =========================
                VOTING
            ========================= */}

            <div className="vote-container">
              {/* LIKE */}

              <motion.button
                onClick={() =>
                  vote(post.id, "agree")
                }
                whileTap={{
                  scale: 0.85,
                }}
                whileHover={{
                  scale: 1.12,
                }}
                className={`vote-btn-circle agree ${
                  post.userVote === "agree"
                    ? "active"
                    : ""
                }`}
                aria-label="Like"
              >
                <ThumbsUp size={20} />

                <motion.span
                  key={post.agree}
                  initial={{
                    opacity: 0,
                    y: -4,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="vote-count"
                >
                  {post.agree}
                </motion.span>
              </motion.button>

              {/* DISLIKE */}

              <motion.button
                onClick={() =>
                  vote(post.id, "disagree")
                }
                whileTap={{
                  scale: 0.85,
                }}
                whileHover={{
                  scale: 1.12,
                }}
                className={`vote-btn-circle disagree ${
                  post.userVote === "disagree"
                    ? "active"
                    : ""
                }`}
                aria-label="Dislike"
              >
                <ThumbsDown size={20} />

                <motion.span
                  key={post.disagree}
                  initial={{
                    opacity: 0,
                    y: -4,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="vote-count"
                >
                  {post.disagree}
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "../CSS/Gallery.css";

const IMAGES = {
  /* =========================
     PERSONAL
  ========================= */

  personal: [
    {
      id: 1,
      caption: "A few moments from my journey 📸",
      photos: ["/gallery/personal.png"],
    },
    {
      id: 2,
      caption:
        "Peaceful mountain views 🌄 Nature, silence, and a little escape from the screen.",
      photos: ["/gallery/mountain.png"],
    },
    {
      id: 3,
      caption: "Chasing waterfalls and finding peace in nature 🌿💧",
      photos: ["/gallery/water.png"],
    },
  ],

  /* =========================
     PROJECTS
  ========================= */

  projects: [
    {
      id: 1,
      caption: "🤖 RecoverX – AI Revenue Recovery Agent",
      photos: ["/gallery/project2.png"],
    },
    {
      id: 2,
      caption: "📈 SB Stocks – Stock Trading Platform",
      photos: ["/gallery/project1.png"],
    },
    {
      id: 3,
      caption: "🎓 CampusFlow – Student Complaint Management",
      photos: ["/gallery/project4.png"],
    },
    {
      id: 4,
      caption: "🤝 Student Union for Nation (SUN)",
      photos: ["/gallery/project3.png"],
    },
  ],

  /* =========================
     ACHIEVEMENTS
  ========================= */

  achievements: [
    {
      id: 1,
      caption: "🛡️ AI Anantapur Police Hackathon 2026",
      photos: ["/gallery/achievement4.png"],
    },

    {
      id: 2,
      caption:
        "🎉 Google Student Ambassador Program 2026 – Freshers' Party Night Edition",
      photos: ["/gallery/achievement5.png"],
    },

    {
      id: 3,
      caption: "🏆 Merit Scholarship for Academic Excellence",
      photos: ["/gallery/achievement1.png"],
    },

    {
      id: 4,
      caption: "🎖️ Certificate of Appreciation – Edzeeta",
      photos: ["/gallery/achievement2.png"],
    },

    {
      id: 5,
      caption: "🚀 Campus Ambassador – Skill Vedanth",
      photos: ["/gallery/achievement3.png"],
    },
  ],
};

/* =========================
   PAGE ANIMATION
========================= */

const pageVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

/* =========================
   CHILD ANIMATION
========================= */

const childVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

/* =========================
   TAB ANIMATION
========================= */

const tabContentVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,
    y: -30,
    scale: 0.98,
    transition: {
      duration: 0.4,
    },
  },
};

export default function Gallery() {
  const [tab, setTab] = useState("personal");

  const [zoom, setZoom] = useState({
    img: null,
    post: null,
    index: 0,
  });

  /* =========================
     OPEN IMAGE
  ========================= */

  const openZoom = (post, index) => {
    setZoom({
      img: post.photos[index],
      post,
      index,
    });
  };

  /* =========================
     CLOSE IMAGE
  ========================= */

  const closeZoom = () => {
    setZoom({
      img: null,
      post: null,
      index: 0,
    });
  };

  /* =========================
     NEXT IMAGE
  ========================= */

  const nextImage = () => {
    if (!zoom.post) return;

    const nextIndex =
      (zoom.index + 1) % zoom.post.photos.length;

    setZoom({
      ...zoom,
      img: zoom.post.photos[nextIndex],
      index: nextIndex,
    });
  };

  /* =========================
     PREVIOUS IMAGE
  ========================= */

  const prevImage = () => {
    if (!zoom.post) return;

    const prevIndex =
      (zoom.index - 1 + zoom.post.photos.length) %
      zoom.post.photos.length;

    setZoom({
      ...zoom,
      img: zoom.post.photos[prevIndex],
      index: prevIndex,
    });
  };

  return (
    <motion.section
      className="gallery-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      id="gallery"
    >
      {/* =========================
          TITLE
      ========================= */}

      <motion.h2
        className="gallery-title"
        variants={childVariants}
      >
        Gallery
      </motion.h2>

      {/* =========================
          TABS
      ========================= */}

      <motion.div
        className="tab-buttons"
        variants={childVariants}
      >
        {["personal", "projects", "achievements"].map(
          (type) => (
            <motion.button
              key={type}
              className={`tab ${
                tab === type ? "active" : ""
              }`}
              onClick={() => setTab(type)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {type.charAt(0).toUpperCase() +
                type.slice(1)}
            </motion.button>
          )
        )}
      </motion.div>

      {/* =========================
          GALLERY POSTS
      ========================= */}

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          className="post-feed"
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {IMAGES[tab].length > 0 ? (
            IMAGES[tab].map((post) => (
              <motion.div
                key={post.id}
                className="post-card"
                variants={childVariants}
                whileHover={{ y: -4 }}
              >
                <p className="caption">
                  {post.caption}
                </p>

                <div
                  className={`photo-grid ${
                    post.photos.length > 1
                      ? "multi"
                      : "single"
                  }`}
                >
                  {post.photos.map((src, i) => (
                    <motion.div
                      key={`${post.id}-${i}`}
                      className="photo-item"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                      }}
                      onClick={() =>
                        openZoom(post, i)
                      }
                    >
                      <img
                        src={src}
                        alt={`${post.caption} - photo ${
                          i + 1
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="post-card"
              variants={childVariants}
            >
              <p className="caption">
                Achievements will be added here soon 🏆
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* =========================
          ZOOM OVERLAY
      ========================= */}

      <AnimatePresence>
        {zoom.img && (
          <motion.div
            className="zoom-overlay"
            initial={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(6px)",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              key={zoom.img}
              src={zoom.img}
              alt="Zoomed gallery"
              className="zoom-img"
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
            />

            {zoom.post?.photos.length > 1 && (
              <>
                <button
                  className="nav-btn left"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={32} />
                </button>

                <button
                  className="nav-btn right"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            <button
              className="close-btn"
              onClick={closeZoom}
              aria-label="Close image"
            >
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
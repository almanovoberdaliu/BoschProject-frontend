import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./App.css";
import "./main.css";
import facebookIcon from "./facebook.png";
import whatsappIcon from "./whatsapp.png";
import gmailIcon from "./gmail.png";
import send from './send.png';
import darkModeButton from './night-mode.png';

const VideoCard = ({ video, onLike, onAddComment, onDeleteComment, onView, onShare, darkMode, language }) =>
{
    const [comment, setComment] = useState("");
    const [isShareModalOpen, setShareModalOpen] = useState(false);

    const handleCommentSubmit = (e) =>
    {
        e.preventDefault();
        if (comment.trim())
        {
            onAddComment(comment);
            setComment("");
        }
    };

    const toggleShareModal = () =>
    {
        setShareModalOpen(!isShareModalOpen);
    };

    // Translations for language selection
    const translations = {
        english: {
            views: "Views",
            shares: "Shares",
            postComment: "Post",
            addCommentPlaceholder: "Add a comment...",
            shareTitle: "Share this video:",
            close: "Close",
            delete: "Delete",
        },
        thai: {
            views: "มุมมอง",
            shares: "แชร์",
            postComment: "โพสต์",
            addCommentPlaceholder: "เพิ่มความคิดเห็น...",
            shareTitle: "แชร์วิดีโอนี้:",
            close: "ปิด",
            delete: "ลบ",
        }
    };

    const lang = translations[language] || translations.english;

    return (
        <div className={`video-card ${darkMode ? "dark-mode" : ""}`}>
            <ReactPlayer
                url={video.src}
                controls
                className="video-player"
                onStart={onView}
            />
            <div className={`views ${darkMode ? "dark-mode" : ""}`}>{lang.views}: {video.views}</div>
            <div className="video-actions">
                <div className="like-section">
                    <button onClick={onLike} className="like-button">❤️</button>
                    <span>{video.likes}</span>
                </div>
                <div className="share-section">
                    <button onClick={() => { onShare(); toggleShareModal(); }} className="share-button">
                        <img src={send} alt="Send" className="send-icon" />
                    </button>
                    <span>{lang.shares}: {video.shares}</span>
                </div>
            </div>
            {isShareModalOpen && (
                <>
                    <div className="modal-overlay" onClick={toggleShareModal}></div>
                    <div className={`share-modal ${darkMode ? "dark-mode" : ""}`}>
                        <h3>{lang.shareTitle}</h3>
                        <div className="share-options">
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(video.src)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="share-link"
                            >
                                <img src={facebookIcon} alt="Facebook" className="share-icon" />
                            </a>
                            <a
                                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(video.src)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="share-link"
                            >
                                <img src={whatsappIcon} alt="WhatsApp" className="share-icon" />
                            </a>
                            <a
                                href={`mailto:?subject=Check out this video&body=${encodeURIComponent(video.src)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="share-link"
                            >
                                <img src={gmailIcon} alt="Gmail" className="share-icon" />
                            </a>
                        </div>
                        <button onClick={toggleShareModal} className="close-modal-button">{lang.close}</button>
                    </div>
                </>
            )}
            <div className="comments-section">
                {video.comments.map((c, index) => (
                    <div key={index} className="comment">
                        <p>{c}</p>
                        <button onClick={() => onDeleteComment(index)} className="delete-button">
                            {lang.delete}
                        </button>
                    </div>
                ))}
            </div>
            <form onSubmit={handleCommentSubmit} className="comment-form">
                <input
                    type="text"
                    placeholder={lang.addCommentPlaceholder}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button type="submit">{lang.postComment}</button>
            </form>
        </div>
    );
};

const BoschReels = () =>
{
    const [videos, setVideos] = useState([
        { src: "https://youtu.be/O5maizMi7IU?si=CsKsEuXZ6-Fmg5RR", likes: 0, views: 0, shares: 0, comments: [] },
        { src: "https://youtu.be/AjGXXtKic_s?si=_e2rw0QIT2Lxjuia", likes: 0, views: 0, shares: 0, comments: [] },
        { src: "https://youtu.be/LWWU0MqZPTM?si=WOBzdkIDd2X8Hpba", likes: 0, views: 0, shares: 0, comments: [] },
        { src: "https://youtu.be/aClro7nrpnE?si=ApEglQ52M4_vpUn7", likes: 0, views: 0, shares: 0, comments: [] },
        { src: "https://youtu.be/C2Vaq5Popuw?si=mUyT-03zWPEfuVeq", likes: 0, views: 0, shares: 0, comments: [] },
    ]);

    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState("english"); // Default language

    const handleLike = (index) =>
    {
        const updatedVideos = [...videos];
        updatedVideos[index].likes += 1;
        setVideos(updatedVideos);
    };

    const handleAddComment = (index, newComment) =>
    {
        const updatedVideos = [...videos];
        updatedVideos[index].comments.push(newComment);
        setVideos(updatedVideos);
    };

    const handleDeleteComment = (videoIndex, commentIndex) =>
    {
        const updatedVideos = [...videos];
        updatedVideos[videoIndex].comments.splice(commentIndex, 1);
        setVideos(updatedVideos);
    };

    const handleView = (index) =>
    {
        const updatedVideos = [...videos];
        updatedVideos[index].views += 1;
        setVideos(updatedVideos);
    };

    const handleShare = (index) =>
    {
        const updatedVideos = [...videos];
        updatedVideos[index].shares += 1;
        setVideos(updatedVideos);
    };

    const toggleDarkMode = () =>
    {
        setDarkMode(!darkMode);
    };

    const handleLanguageChange = (e) =>
    {
        setLanguage(e.target.value);
    };

    return (
        <div className={`app ${darkMode ? "dark-mode" : ""}`}>
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
                <img src={darkModeButton} className="dark-mode-btn" />
            </button>

            {/* Language Selector */}
            <div className="language-selector">
                <select onChange={handleLanguageChange} value={language}>
                    <option value="english">English</option>
                    <option value="thai">ไทย</option>
                </select>
            </div>

            {videos.map((video, index) => (
                <VideoCard
                    key={index}
                    video={video}
                    onLike={() => handleLike(index)}
                    onAddComment={(newComment) => handleAddComment(index, newComment)}
                    onDeleteComment={(commentIndex) => handleDeleteComment(index, commentIndex)}
                    onView={() => handleView(index)}
                    onShare={() => handleShare(index)}
                    darkMode={darkMode}
                    language={language} // Pass language prop to VideoCard
                />
            ))}
        </div>
    );
};

export default BoschReels;


// utils/contextManager.js
const NEWS_LETTER_JID = "120363418485111392@newsletter";
const BOT_NAME = "ULTRAXAS XMD";
const thumbnails = [
                "https://res.cloudinary.com/dptzpfgtm/image/upload/v1753723388/whatsapp_uploads/wqyliw4kzvrulh0bmg10.jpg",
                "https://res.cloudinary.com/dptzpfgtm/image/upload/v1753723388/whatsapp_uploads/wqyliw4kzvrulh0bmg10.jpg"
            ];

            // Select a random thumbnail
            const DEFAULT_THUMBNAIL = thumbnails[Math.floor(Math.random() * thumbnails.length)];

const createContext2 = (userJid, options = {}) => ({
    contextInfo: {
        mentionedJid: [userJid],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: NEWS_LETTER_JID,
            newsletterName: BOT_NAME,
            serverMessageId: Math.floor(100000 + Math.random() * 900000)
        },
        externalAdReply: {
            title: options.title || BOT_NAME,
            body: options.body || "Premium WhatsApp Bot Solution",
            thumbnailUrl: options.thumbnail || DEFAULT_THUMBNAIL,
            mediaType: 1,
            showAdAttribution: true,
            renderLargerThumbnail: true 
        }
    }
});

module.exports = {
    createContext2
};

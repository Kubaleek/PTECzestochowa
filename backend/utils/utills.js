import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer'
import dotenv from 'dotenv';
dotenv.config()
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
})

const transporter = nodemailer.createTransport({
    service: 'gmail', // Można zmienić na inny serwis np. 'yahoo', 'hotmail' itd.
    auth: {
        user: "testowypte@o2.pl", // Zamień na swój e-mail
        pass: "TEST@!#$@412dsa" // Zamień na hasło do swojego e-maila
    }
});export function convertSlugToTitle(slug) {
    // Replace hyphens with spaces
    // Normalize characters to remove diacritics
    // Capitalize the first letter of each word
    const title = slug
        .replace(/-/g, ' ') // Replace hyphens with spaces
        .normalize('NFD') // Normalize characters to separate base characters and diacritics
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
        .replace(/\b\w/g, char => char.toUpperCase()) // Capitalize the first letter of each word
        .replace(/\bPte\b/g, 'PTE'); // Ensure 'PTE' is in uppercase

    // Capitalize the first letter of the whole title
    return title.charAt(0).toUpperCase() + title.slice(1);
}


export const securityService = {
    limiter,
    transporter
}

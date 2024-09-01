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
});

export function convertSlugToTitle(slug) {
    // Zamień wszelkie myślniki na spacje
    const title = slug
        .replace(/-/g, ' ') // Zamień wszystkie myślniki na spacje
        .normalize('NFD') // Normalizuj znaki diakrytyczne
        .replace(/[\u0300-\u036f]/g, '') // Usuń znaki diakrytyczne
        .replace(/\b\w/g, char => char.toUpperCase()) // Kapitalizuj pierwszy znak każdego słowa
        .trim(); // Usuń zbędne spacje

    return title;
}

export const securityService = {
    limiter,
    transporter
}

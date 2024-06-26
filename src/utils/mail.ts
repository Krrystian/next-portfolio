"use server";
import nodemailer from "nodemailer";
export async function sendMail({to,name,subject,body}:{to:string, name:string, subject:string, body:string}) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });
    try{
        const testResult = await transporter.verify();
        console.log( testResult);
    } catch (error){
        console.log(error);
    }

    const sendResult = await transporter.sendMail({
        from: process.env.EMAIL,
        to,
        subject,
        html: body
    });
    console.log(sendResult);
}
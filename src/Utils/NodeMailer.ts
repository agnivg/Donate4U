import * as nodeMailer from 'nodemailer';
import * as emailSender from 'nodemailer-email-sender';

export class NodeMailer {
    // private static initializeTransport() {
    //     return nodeMailer.createTransport({
    //         service: 'gmail',
    //         auth: {
    //             user:'charity4utoday@gmail.com',
    //             pass:'charity@123'
    //         }
    //     });
    // }

    // static sendEmail(data: { to: string[] , subject: string, html: string}): Promise<any> {
    //     return NodeMailer.initializeTransport().sendMail({
    //         from: 'charity4utoday@gmail.com',
    //         to: data.to,
    //         subject: data.subject,
    //         html: data.html
    //     });
    // }

    static sendEmail(data: { to: string[] , subject: string, html: string}): Promise<any> {
        return emailSender({
            mailService:'gmail',
            senderUser:'charity4utoday',
            senderEmail: 'charity4utoday@gmail.com',
            senderPassword:'thiacgmrjfqwgtky',
            receiverEmail: data.to,
            subject: data.subject,
            html: data.html
        });
    }
}

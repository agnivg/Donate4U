import * as nodeMailer from 'nodemailer';
import * as SendGrid from 'nodemailer-sendgrid-transport';

export class NodeMailer {
    private static initializeTransport() {
        return nodeMailer.createTransport(SendGrid({
            service: 'SendGrid',
            auth: {
                api_key: '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'
            }
        }));
    }

    static sendEmail(data: { to: string[] , subject: string, html: string}): Promise<any> {
        return NodeMailer.initializeTransport().sendMail({
            from: 'charity4utoday@gmail.com',
            to: data.to,
            subject: data.subject,
            html: data.html
        });
    }
}

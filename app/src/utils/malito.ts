export const sendEmail = ({ to = '', subject = '', body = '', cc = '', bcc = '' }) => {
    let mailtoLink = `mailto:${to}`;
    const params = [];
    
    if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
    if (body) params.push(`body=${encodeURIComponent(body)}`);
    if (cc) params.push(`cc=${encodeURIComponent(cc)}`);
    if (bcc) params.push(`bcc=${encodeURIComponent(bcc)}`);
    
    if (params.length > 0) {
        mailtoLink += '?' + params.join('&');
    }
    
    window.open(mailtoLink);
};
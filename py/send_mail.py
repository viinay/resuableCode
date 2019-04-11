import smtplib
import mimetypes
from email.mime.multipart import MIMEMultipart
from email import encoders
from email.message import Message
from email.mime.audio import MIMEAudio
from email.mime.base import MIMEBase
from email.mime.image import MIMEImage
from email.mime.text import MIMEText

def get_msg(maildetails):
    msg = MIMEMultipart()
    # msg["From"] = 
    msg["To"] = maildetails['to']
    msg["Subject"] = maildetails['subject']
    msg.preamble = maildetails['preamble']
    fileToSend = maildetails['file']

    ctype, encoding = mimetypes.guess_type(fileToSend)
    if ctype is None or encoding is not None:
        ctype = "application/octet-stream"

    maintype, subtype = ctype.split("/", 1)

    if maintype == "text":
        fp = open(fileToSend)
        # Note: we should handle calculating the charset
        attachment = MIMEText(fp.read(), _subtype=subtype)
        fp.close()
    elif maintype == "image":
        fp = open(fileToSend, "rb")
        attachment = MIMEImage(fp.read(), _subtype=subtype)
        fp.close()
    elif maintype == "audio":
        fp = open(fileToSend, "rb")
        attachment = MIMEAudio(fp.read(), _subtype=subtype)
        fp.close()
    else:
        fp = open(fileToSend, "rb")
        attachment = MIMEBase(maintype, subtype)
        attachment.set_payload(fp.read())
        fp.close()
        encoders.encode_base64(attachment)
    attachment.add_header("Content-Disposition", "attachment", filename=fileToSend)
    msg.attach(attachment)
    return msg.as_string()



def sendmail(auth,maildetails):
    server = smtplib.SMTP("smtp.gmail.com:587")
    server.starttls()
    server.login(auth['username'],auth['password'])
    server.sendmail(auth['username'], maildetails['to'],get_msg(maildetails))
    server.quit()

# auth = {'username':'viinay.mengu@gmail.com','password':'planvinay457'}
# maildetails = {
#     'to':'viinay.mengu@gmail.com',
#     'subject':'test csv',
#     'preamble':'test preamble',
#     'file':'./test.csv'
# }
# sendmail(auth,maildetails)

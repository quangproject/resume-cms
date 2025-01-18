import payload from "payload";
import { CollectionAfterChangeHook } from "payload/types";

const afterChangeHook: CollectionAfterChangeHook = async ({
  doc, // full document data
  req, // full express request
  previousDoc, // document data before updating the collection
  operation // name of the operation ie. 'create', 'update'
}) => {
  if (operation === "create") {
    const user = await payload.find({
      collection: "users",
      where: { id: doc.person }
    });

    const message = {
      from: process.env.FROM_ADDRESS,
      to: user.docs[0].email,
      subject: doc.subject,
      html: `From ${doc.fullName} (${doc.email}) <br><br> ${doc.message}
      `
    };

    payload.sendEmail(message);
  }
  return doc;
};

export default afterChangeHook;

import React from "react";
import text from "../text/text.json";

interface Contact {
  href: string;
  text: string[];
}

interface ContactsData {
  title: string;
  staff: Contact[];
  workHoursTitle: string;
  workHours: string[];
}

const Contacts: React.FC = () => {
  const contacts: ContactsData = text.contactsPage;

  return (
    <main className="wrapper max-w-[530px] my-10">
      <ul className="list-disc">
        <h1 className="text-2xl font-bold text-center mb-6">{contacts.title}</h1>
        {contacts.staff.map(({ href, text }, idx) => (
          <li key={idx} className="ml-4 mb-4">
            {text[0]}
            <a href={href} className="font-bold whitespace-nowrap">
              {text[1]}
            </a>
            {<span className="whitespace-nowrap">{text[2]}</span>}
          </li>
        ))}
      </ul>
      <ul className="list-disc">
        <h1 className="text-2xl font-bold text-center mb-6">{contacts.workHoursTitle}</h1>
        {contacts.workHours.map((text, idx) => (
          <li key={idx} className="ml-4 mb-4">
            {text}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Contacts;
